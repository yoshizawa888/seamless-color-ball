(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Tc(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=pt(n)?Gm(n):Tc(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(pt(i))return i;if(st(i))return i}}const Um=/;(?![^(]*\))/g,Bm=/:([^]+)/,km=/\/\*.*?\*\//gs;function Gm(i){const e={};return i.replace(km,"").split(Um).forEach(t=>{if(t){const n=t.split(Bm);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ec(i){let e="";if(pt(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=Ec(i[t]);n&&(e+=n+" ")}else if(st(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=wc(Vm);function Jh(i){return!!i||i===""}const et={},jr=[],Rn=()=>{},Wm=()=>!1,qm=/^on[^a-z]/,pa=i=>qm.test(i),Cc=i=>i.startsWith("onUpdate:"),Tt=Object.assign,Ac=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Xm=Object.prototype.hasOwnProperty,We=(i,e)=>Xm.call(i,e),Ie=Array.isArray,Us=i=>ma(i)==="[object Map]",jm=i=>ma(i)==="[object Set]",Fe=i=>typeof i=="function",pt=i=>typeof i=="string",Pc=i=>typeof i=="symbol",st=i=>i!==null&&typeof i=="object",Qh=i=>st(i)&&Fe(i.then)&&Fe(i.catch),Ym=Object.prototype.toString,ma=i=>Ym.call(i),$m=i=>ma(i).slice(8,-1),Km=i=>ma(i)==="[object Object]",Rc=i=>pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Vo=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Zm=/-(\w)/g,Vn=ga(i=>i.replace(Zm,(e,t)=>t?t.toUpperCase():"")),Jm=/\B([A-Z])/g,xs=ga(i=>i.replace(Jm,"-$1").toLowerCase()),_a=ga(i=>i.charAt(0).toUpperCase()+i.slice(1)),za=ga(i=>i?`on${_a(i)}`:""),Xs=(i,e)=>!Object.is(i,e),Ua=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Jo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Qm=i=>{const e=parseFloat(i);return isNaN(e)?i:e},eg=i=>{const e=pt(i)?Number(i):NaN;return isNaN(e)?i:e};let bu;const tg=()=>bu||(bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let wn;class ng{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=wn;try{return wn=this,e()}finally{wn=t}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ig(i,e=wn){e&&e.active&&e.effects.push(i)}function rg(){return wn}const Lc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},ed=i=>(i.w&Pi)>0,td=i=>(i.n&Pi)>0,sg=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Pi},og=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];ed(r)&&!td(r)?r.delete(i):e[t++]=r,r.w&=~Pi,r.n&=~Pi}e.length=t}},Ul=new WeakMap;let Is=0,Pi=1;const Bl=30;let En;const lr=Symbol(""),kl=Symbol("");class Dc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ig(this,n)}run(){if(!this.active)return this.fn();let e=En,t=wi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=En,En=this,wi=!0,Pi=1<<++Is,Is<=Bl?sg(this):Mu(this),this.fn()}finally{Is<=Bl&&og(this),Pi=1<<--Is,En=this.parent,wi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){En===this?this.deferStop=!0:this.active&&(Mu(this),this.onStop&&this.onStop(),this.active=!1)}}function Mu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let wi=!0;const nd=[];function vs(){nd.push(wi),wi=!1}function ys(){const i=nd.pop();wi=i===void 0?!0:i}function Wt(i,e,t){if(wi&&En){let n=Ul.get(i);n||Ul.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Lc()),id(r)}}function id(i,e){let t=!1;Is<=Bl?td(i)||(i.n|=Pi,t=!ed(i)):t=!i.has(En),t&&(i.add(En),En.deps.push(i))}function ai(i,e,t,n,r,s){const o=Ul.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?Rc(t)&&a.push(o.get("length")):(a.push(o.get(lr)),Us(i)&&a.push(o.get(kl)));break;case"delete":Ie(i)||(a.push(o.get(lr)),Us(i)&&a.push(o.get(kl)));break;case"set":Us(i)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&Gl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Gl(Lc(l))}}function Gl(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&Su(n);for(const n of t)n.computed||Su(n)}function Su(i,e){(i!==En||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const ag=wc("__proto__,__v_isRef,__isVue"),rd=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Pc)),lg=Ic(),cg=Ic(!1,!0),ug=Ic(!0),wu=fg();function fg(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Xe(this);for(let s=0,o=this.length;s<o;s++)Wt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Xe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){vs();const n=Xe(this)[e].apply(this,t);return ys(),n}}),i}function hg(i){const e=Xe(this);return Wt(e,"has",i),e.hasOwnProperty(i)}function Ic(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Ag:cd:e?ld:ad).get(n))return n;const o=Ie(n);if(!i){if(o&&We(wu,r))return Reflect.get(wu,r,s);if(r==="hasOwnProperty")return hg}const a=Reflect.get(n,r,s);return(Pc(r)?rd.has(r):ag(r))||(i||Wt(n,"get",r),e)?a:Rt(a)?o&&Rc(r)?a:a.value:st(a)?i?ud(a):lo(a):a}}const dg=sd(),pg=sd(!0);function sd(i=!1){return function(t,n,r,s){let o=t[n];if(is(o)&&Rt(o)&&!Rt(r))return!1;if(!i&&(!Qo(r)&&!is(r)&&(o=Xe(o),r=Xe(r)),!Ie(t)&&Rt(o)&&!Rt(r)))return o.value=r,!0;const a=Ie(t)&&Rc(n)?Number(n)<t.length:We(t,n),l=Reflect.set(t,n,r,s);return t===Xe(s)&&(a?Xs(r,o)&&ai(t,"set",n,r):ai(t,"add",n,r)),l}}function mg(i,e){const t=We(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&ai(i,"delete",e,void 0),n}function gg(i,e){const t=Reflect.has(i,e);return(!Pc(e)||!rd.has(e))&&Wt(i,"has",e),t}function _g(i){return Wt(i,"iterate",Ie(i)?"length":lr),Reflect.ownKeys(i)}const od={get:lg,set:dg,deleteProperty:mg,has:gg,ownKeys:_g},xg={get:ug,set(i,e){return!0},deleteProperty(i,e){return!0}},vg=Tt({},od,{get:cg,set:pg}),Oc=i=>i,xa=i=>Reflect.getPrototypeOf(i);function mo(i,e,t=!1,n=!1){i=i.__v_raw;const r=Xe(i),s=Xe(e);t||(e!==s&&Wt(r,"get",e),Wt(r,"get",s));const{has:o}=xa(r),a=n?Oc:t?zc:js;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function go(i,e=!1){const t=this.__v_raw,n=Xe(t),r=Xe(i);return e||(i!==r&&Wt(n,"has",i),Wt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function _o(i,e=!1){return i=i.__v_raw,!e&&Wt(Xe(i),"iterate",lr),Reflect.get(i,"size",i)}function Tu(i){i=Xe(i);const e=Xe(this);return xa(e).has.call(e,i)||(e.add(i),ai(e,"add",i,i)),this}function Eu(i,e){e=Xe(e);const t=Xe(this),{has:n,get:r}=xa(t);let s=n.call(t,i);s||(i=Xe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Xs(e,o)&&ai(t,"set",i,e):ai(t,"add",i,e),this}function Cu(i){const e=Xe(this),{has:t,get:n}=xa(e);let r=t.call(e,i);r||(i=Xe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&ai(e,"delete",i,void 0),s}function Au(){const i=Xe(this),e=i.size!==0,t=i.clear();return e&&ai(i,"clear",void 0,void 0),t}function xo(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Xe(o),l=e?Oc:i?zc:js;return!i&&Wt(a,"iterate",lr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function vo(i,e,t){return function(...n){const r=this.__v_raw,s=Xe(r),o=Us(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Oc:e?zc:js;return!e&&Wt(s,"iterate",l?kl:lr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function fi(i){return function(...e){return i==="delete"?!1:this}}function yg(){const i={get(s){return mo(this,s)},get size(){return _o(this)},has:go,add:Tu,set:Eu,delete:Cu,clear:Au,forEach:xo(!1,!1)},e={get(s){return mo(this,s,!1,!0)},get size(){return _o(this)},has:go,add:Tu,set:Eu,delete:Cu,clear:Au,forEach:xo(!1,!0)},t={get(s){return mo(this,s,!0)},get size(){return _o(this,!0)},has(s){return go.call(this,s,!0)},add:fi("add"),set:fi("set"),delete:fi("delete"),clear:fi("clear"),forEach:xo(!0,!1)},n={get(s){return mo(this,s,!0,!0)},get size(){return _o(this,!0)},has(s){return go.call(this,s,!0)},add:fi("add"),set:fi("set"),delete:fi("delete"),clear:fi("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=vo(s,!1,!1),t[s]=vo(s,!0,!1),e[s]=vo(s,!1,!0),n[s]=vo(s,!0,!0)}),[i,t,e,n]}const[bg,Mg,Sg,wg]=yg();function Fc(i,e){const t=e?i?wg:Sg:i?Mg:bg;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(We(t,r)&&r in n?t:n,r,s)}const Tg={get:Fc(!1,!1)},Eg={get:Fc(!1,!0)},Cg={get:Fc(!0,!1)},ad=new WeakMap,ld=new WeakMap,cd=new WeakMap,Ag=new WeakMap;function Pg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rg(i){return i.__v_skip||!Object.isExtensible(i)?0:Pg($m(i))}function lo(i){return is(i)?i:Nc(i,!1,od,Tg,ad)}function Lg(i){return Nc(i,!1,vg,Eg,ld)}function ud(i){return Nc(i,!0,xg,Cg,cd)}function Nc(i,e,t,n,r){if(!st(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Rg(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Yr(i){return is(i)?Yr(i.__v_raw):!!(i&&i.__v_isReactive)}function is(i){return!!(i&&i.__v_isReadonly)}function Qo(i){return!!(i&&i.__v_isShallow)}function fd(i){return Yr(i)||is(i)}function Xe(i){const e=i&&i.__v_raw;return e?Xe(e):i}function hd(i){return Jo(i,"__v_skip",!0),i}const js=i=>st(i)?lo(i):i,zc=i=>st(i)?ud(i):i;function dd(i){wi&&En&&(i=Xe(i),id(i.dep||(i.dep=Lc())))}function pd(i,e){i=Xe(i);const t=i.dep;t&&Gl(t)}function Rt(i){return!!(i&&i.__v_isRef===!0)}function md(i){return gd(i,!1)}function Dg(i){return gd(i,!0)}function gd(i,e){return Rt(i)?i:new Ig(i,e)}class Ig{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Xe(e),this._value=t?e:js(e)}get value(){return dd(this),this._value}set value(e){const t=this.__v_isShallow||Qo(e)||is(e);e=t?e:Xe(e),Xs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:js(e),pd(this))}}function $r(i){return Rt(i)?i.value:i}const Og={get:(i,e,t)=>$r(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function _d(i){return Yr(i)?i:new Proxy(i,Og)}var xd;class Fg{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[xd]=!1,this._dirty=!0,this.effect=new Dc(e,()=>{this._dirty||(this._dirty=!0,pd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Xe(this);return dd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xd="__v_isReadonly";function Ng(i,e,t=!1){let n,r;const s=Fe(i);return s?(n=i,r=Rn):(n=i.get,r=i.set),new Fg(n,r,s||!r,t)}function Ti(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){va(s,e,t)}return r}function xn(i,e,t,n){if(Fe(i)){const s=Ti(i,e,t,n);return s&&Qh(s)&&s.catch(o=>{va(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(xn(i[s],e,t,n));return r}function va(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ti(l,null,10,[i,o,a]);return}}zg(i,t,r,n)}function zg(i,e,t,n=!0){console.error(i)}let Ys=!1,Vl=!1;const At=[];let zn=0;const Kr=[];let Jn=null,tr=0;const vd=Promise.resolve();let Uc=null;function yd(i){const e=Uc||vd;return i?e.then(this?i.bind(this):i):e}function Ug(i){let e=zn+1,t=At.length;for(;e<t;){const n=e+t>>>1;$s(At[n])<i?e=n+1:t=n}return e}function Bc(i){(!At.length||!At.includes(i,Ys&&i.allowRecurse?zn+1:zn))&&(i.id==null?At.push(i):At.splice(Ug(i.id),0,i),bd())}function bd(){!Ys&&!Vl&&(Vl=!0,Uc=vd.then(Sd))}function Bg(i){const e=At.indexOf(i);e>zn&&At.splice(e,1)}function kg(i){Ie(i)?Kr.push(...i):(!Jn||!Jn.includes(i,i.allowRecurse?tr+1:tr))&&Kr.push(i),bd()}function Pu(i,e=Ys?zn+1:0){for(;e<At.length;e++){const t=At[e];t&&t.pre&&(At.splice(e,1),e--,t())}}function Md(i){if(Kr.length){const e=[...new Set(Kr)];if(Kr.length=0,Jn){Jn.push(...e);return}for(Jn=e,Jn.sort((t,n)=>$s(t)-$s(n)),tr=0;tr<Jn.length;tr++)Jn[tr]();Jn=null,tr=0}}const $s=i=>i.id==null?1/0:i.id,Gg=(i,e)=>{const t=$s(i)-$s(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Sd(i){Vl=!1,Ys=!0,At.sort(Gg);const e=Rn;try{for(zn=0;zn<At.length;zn++){const t=At[zn];t&&t.active!==!1&&Ti(t,null,14)}}finally{zn=0,At.length=0,Md(),Ys=!1,Uc=null,(At.length||Kr.length)&&Sd()}}function Vg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||et;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||et;f&&(r=t.map(p=>pt(p)?p.trim():p)),h&&(r=t.map(Qm))}let a,l=n[a=za(e)]||n[a=za(Vn(e))];!l&&s&&(l=n[a=za(xs(e))]),l&&xn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,xn(c,i,6,r)}}function wd(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Fe(i)){const l=c=>{const u=wd(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(st(i)&&n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Tt(o,s),st(i)&&n.set(i,o),o)}function ya(i,e){return!i||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(i,e[0].toLowerCase()+e.slice(1))||We(i,xs(e))||We(i,e))}let pn=null,Td=null;function ea(i){const e=pn;return pn=i,Td=i&&i.type.__scopeId||null,e}function kr(i,e=pn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&ku(-1);const s=ea(e);let o;try{o=i(...r)}finally{ea(s),n._d&&ku(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ba(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const b=ea(i);try{if(t.shapeFlag&4){const y=r||n;m=Fn(u.call(y,y,h,s,p,f,g)),_=l}else{const y=e;m=Fn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:Hg(l)}}catch(y){ks.length=0,va(y,i,1),m=Mt(si)}let x=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:S}=x;y.length&&S&7&&(o&&y.some(Cc)&&(_=Wg(_,o)),x=Ri(x,_))}return t.dirs&&(x=Ri(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,ea(b),m}const Hg=i=>{let e;for(const t in i)(t==="class"||t==="style"||pa(t))&&((e||(e={}))[t]=i[t]);return e},Wg=(i,e)=>{const t={};for(const n in i)(!Cc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function qg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ru(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!ya(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ru(n,o,c):!0:!!o;return!1}function Ru(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!ya(t,s))return!0}return!1}function Xg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const jg=i=>i.__isSuspense;function Yg(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):kg(i)}function Zr(i,e){if(at){let t=at.provides;const n=at.parent&&at.parent.provides;n===t&&(t=at.provides=Object.create(n)),t[i]=e}}function vn(i,e,t=!1){const n=at||pn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Fe(e)?e.call(n.proxy):e}}const yo={};function Ho(i,e,t){return Ed(i,e,t)}function Ed(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=et){const a=rg()===(at==null?void 0:at.scope)?at:null;let l,c=!1,u=!1;if(Rt(i)?(l=()=>i.value,c=Qo(i)):Yr(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(x=>Yr(x)||Qo(x)),l=()=>i.map(x=>{if(Rt(x))return x.value;if(Yr(x))return Hr(x);if(Fe(x))return Ti(x,a,2)})):Fe(i)?e?l=()=>Ti(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),xn(i,a,3,[f])}:l=Rn,e&&n){const x=l;l=()=>Hr(x())}let h,f=x=>{h=_.onStop=()=>{Ti(x,a,4)}},p;if(Zs)if(f=Rn,e?t&&xn(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const x=B_();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Rn;let g=u?new Array(i.length).fill(yo):yo;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((y,S)=>Xs(y,g[S])):Xs(x,g)))&&(h&&h(),xn(e,a,3,[x,g===yo?void 0:u&&g[0]===yo?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let m;r==="sync"?m=d:r==="post"?m=()=>Ut(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>Bc(d));const _=new Dc(l,m);e?t?d():g=_.run():r==="post"?Ut(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&Ac(a.scope.effects,_)};return p&&p.push(b),b}function $g(i,e,t){const n=this.proxy,r=pt(i)?i.includes(".")?Cd(n,i):()=>n[i]:i.bind(n,n);let s;Fe(e)?s=e:(s=e.handler,t=e);const o=at;rs(this);const a=Ed(r,s.bind(n),t);return o?rs(o):cr(),a}function Cd(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Hr(i,e){if(!st(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Rt(i))Hr(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)Hr(i[t],e);else if(jm(i)||Us(i))i.forEach(t=>{Hr(t,e)});else if(Km(i))for(const t in i)Hr(i[t],e);return i}function Kg(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kc(()=>{i.isMounted=!0}),Od(()=>{i.isUnmounting=!0}),i}const an=[Function,Array],Zg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:an,onEnter:an,onAfterEnter:an,onEnterCancelled:an,onBeforeLeave:an,onLeave:an,onAfterLeave:an,onLeaveCancelled:an,onBeforeAppear:an,onAppear:an,onAfterAppear:an,onAppearCancelled:an},setup(i,{slots:e}){const t=L_(),n=Kg();let r;return()=>{const s=e.default&&Rd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==si){o=d;break}}const a=Xe(i),{mode:l}=a;if(n.isLeaving)return ka(o);const c=Lu(o);if(!c)return ka(o);const u=Hl(c,a,n,t);Wl(c,u);const h=t.subTree,f=h&&Lu(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();r===void 0?r=d:d!==r&&(r=d,p=!0)}if(f&&f.type!==si&&(!nr(c,f)||p)){const d=Hl(f,a,n,t);if(Wl(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},ka(o);l==="in-out"&&c.type!==si&&(d.delayLeave=(m,_,b)=>{const x=Pd(n,f);x[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},Ad=Zg;function Pd(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Hl(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:b}=e,x=String(i.key),y=Pd(t,i),S=(v,w)=>{v&&xn(v,n,9,w)},A=(v,w)=>{const D=w[1];S(v,w),Ie(v)?v.every(W=>W.length<=1)&&D():v.length<=1&&D()},L={mode:s,persisted:o,beforeEnter(v){let w=a;if(!t.isMounted)if(r)w=d||a;else return;v._leaveCb&&v._leaveCb(!0);const D=y[x];D&&nr(i,D)&&D.el._leaveCb&&D.el._leaveCb(),S(w,[v])},enter(v){let w=l,D=c,W=u;if(!t.isMounted)if(r)w=m||l,D=_||c,W=b||u;else return;let z=!1;const N=v._enterCb=O=>{z||(z=!0,O?S(W,[v]):S(D,[v]),L.delayedLeave&&L.delayedLeave(),v._enterCb=void 0)};w?A(w,[v,N]):N()},leave(v,w){const D=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();S(h,[v]);let W=!1;const z=v._leaveCb=N=>{W||(W=!0,w(),N?S(g,[v]):S(p,[v]),v._leaveCb=void 0,y[D]===i&&delete y[D])};y[D]=i,f?A(f,[v,z]):z()},clone(v){return Hl(v,e,t,n)}};return L}function ka(i){if(ba(i))return i=Ri(i),i.children=null,i}function Lu(i){return ba(i)?i.children?i.children[0]:void 0:i}function Wl(i,e){i.shapeFlag&6&&i.component?Wl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Rd(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Tn?(o.patchFlag&128&&r++,n=n.concat(Rd(o.children,e,a))):(e||o.type!==si)&&n.push(a!=null?Ri(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function co(i){return Fe(i)?{setup:i,name:i.name}:i}const Wo=i=>!!i.type.__asyncLoader,ba=i=>i.type.__isKeepAlive;function Ld(i,e){Id(i,"a",e)}function Dd(i,e){Id(i,"da",e)}function Id(i,e,t=at){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ma(e,n,t),t){let r=t.parent;for(;r&&r.parent;)ba(r.parent.vnode)&&Jg(n,e,t,r),r=r.parent}}function Jg(i,e,t,n){const r=Ma(e,i,n,!0);Gc(()=>{Ac(n[e],r)},t)}function Ma(i,e,t=at,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;vs(),rs(t);const a=xn(e,t,i,o);return cr(),ys(),a});return n?r.unshift(s):r.push(s),s}}const ui=i=>(e,t=at)=>(!Zs||i==="sp")&&Ma(i,(...n)=>e(...n),t),Qg=ui("bm"),kc=ui("m"),e_=ui("bu"),t_=ui("u"),Od=ui("bum"),Gc=ui("um"),n_=ui("sp"),i_=ui("rtg"),r_=ui("rtc");function s_(i,e=at){Ma("ec",i,e)}function Gi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(vs(),xn(l,t,8,[i.el,a,i,e]),ys())}}const Vc="components";function Du(i,e){return Nd(Vc,i,!0,e)||i}const Fd=Symbol();function o_(i){return pt(i)?Nd(Vc,i,!1)||i:i||Fd}function Nd(i,e,t=!0,n=!1){const r=pn||at;if(r){const s=r.type;if(i===Vc){const a=N_(s,!1);if(a&&(a===e||a===Vn(e)||a===_a(Vn(e))))return s}const o=Iu(r[i]||s[i],e)||Iu(r.appContext[i],e);return!o&&n?s:o}}function Iu(i,e){return i&&(i[e]||i[Vn(e)]||i[_a(Vn(e))])}const ql=i=>i?$d(i)?Xc(i)||i.proxy:ql(i.parent):null,Bs=Tt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ql(i.parent),$root:i=>ql(i.root),$emit:i=>i.emit,$options:i=>Hc(i),$forceUpdate:i=>i.f||(i.f=()=>Bc(i.update)),$nextTick:i=>i.n||(i.n=yd.bind(i.proxy)),$watch:i=>$g.bind(i)}),Ga=(i,e)=>i!==et&&!i.__isScriptSetup&&We(i,e),a_={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ga(n,e))return o[e]=1,n[e];if(r!==et&&We(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&We(c,e))return o[e]=3,s[e];if(t!==et&&We(t,e))return o[e]=4,t[e];Xl&&(o[e]=0)}}const u=Bs[e];let h,f;if(u)return e==="$attrs"&&Wt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==et&&We(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,We(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Ga(r,e)?(r[e]=t,!0):n!==et&&We(n,e)?(n[e]=t,!0):We(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==et&&We(i,o)||Ga(e,o)||(a=s[0])&&We(a,o)||We(n,o)||We(Bs,o)||We(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:We(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Xl=!0;function l_(i){const e=Hc(i),t=i.proxy,n=i.ctx;Xl=!1,e.beforeCreate&&Ou(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:x,unmounted:y,render:S,renderTracked:A,renderTriggered:L,errorCaptured:v,serverPrefetch:w,expose:D,inheritAttrs:W,components:z,directives:N,filters:O}=e;if(c&&c_(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const K in o){const H=o[K];Fe(H)&&(n[K]=H.bind(t))}if(r){const K=r.call(t,t);st(K)&&(i.data=lo(K))}if(Xl=!0,s)for(const K in s){const H=s[K],ce=Fe(H)?H.bind(t,t):Fe(H.get)?H.get.bind(t,t):Rn,oe=!Fe(H)&&Fe(H.set)?H.set.bind(t):Rn,Se=dn({get:ce,set:oe});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>Se.value,set:G=>Se.value=G})}if(a)for(const K in a)zd(a[K],n,t,K);if(l){const K=Fe(l)?l.call(t):l;Reflect.ownKeys(K).forEach(H=>{Zr(H,K[H])})}u&&Ou(u,i,"c");function $(K,H){Ie(H)?H.forEach(ce=>K(ce.bind(t))):H&&K(H.bind(t))}if($(Qg,h),$(kc,f),$(e_,p),$(t_,g),$(Ld,d),$(Dd,m),$(s_,v),$(r_,A),$(i_,L),$(Od,b),$(Gc,y),$(n_,w),Ie(D))if(D.length){const K=i.exposed||(i.exposed={});D.forEach(H=>{Object.defineProperty(K,H,{get:()=>t[H],set:ce=>t[H]=ce})})}else i.exposed||(i.exposed={});S&&i.render===Rn&&(i.render=S),W!=null&&(i.inheritAttrs=W),z&&(i.components=z),N&&(i.directives=N)}function c_(i,e,t=Rn,n=!1){Ie(i)&&(i=jl(i));for(const r in i){const s=i[r];let o;st(s)?"default"in s?o=vn(s.from||r,s.default,!0):o=vn(s.from||r):o=vn(s),Rt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ou(i,e,t){xn(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function zd(i,e,t,n){const r=n.includes(".")?Cd(t,n):()=>t[n];if(pt(i)){const s=e[i];Fe(s)&&Ho(r,s)}else if(Fe(i))Ho(r,i.bind(t));else if(st(i))if(Ie(i))i.forEach(s=>zd(s,e,t,n));else{const s=Fe(i.handler)?i.handler.bind(t):e[i.handler];Fe(s)&&Ho(r,s,i)}}function Hc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ta(l,c,o,!0)),ta(l,e,o)),st(e)&&s.set(e,l),l}function ta(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ta(i,s,t,!0),r&&r.forEach(o=>ta(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=u_[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const u_={data:Fu,props:Ki,emits:Ki,methods:Ki,computed:Ki,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Ki,directives:Ki,watch:h_,provide:Fu,inject:f_};function Fu(i,e){return e?i?function(){return Tt(Fe(i)?i.call(this,this):i,Fe(e)?e.call(this,this):e)}:e:i}function f_(i,e){return Ki(jl(i),jl(e))}function jl(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ft(i,e){return i?[...new Set([].concat(i,e))]:e}function Ki(i,e){return i?Tt(Tt(Object.create(null),i),e):e}function h_(i,e){if(!i)return e;if(!e)return i;const t=Tt(Object.create(null),i);for(const n in e)t[n]=Ft(i[n],e[n]);return t}function d_(i,e,t,n=!1){const r={},s={};Jo(s,wa,1),i.propsDefaults=Object.create(null),Ud(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Lg(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function p_(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Xe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ya(i.emitsOptions,f))continue;const p=e[f];if(l)if(We(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Vn(f);r[g]=Yl(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Ud(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!We(e,h)&&((u=xs(h))===h||!We(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Yl(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!We(e,h))&&(delete s[h],c=!0)}c&&ai(i,"set","$attrs")}function Ud(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vo(l))continue;const c=e[l];let u;r&&We(r,u=Vn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ya(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Xe(t),c=a||et;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Yl(r,l,h,c[h],i,!We(c,h))}}return o}function Yl(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=We(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(rs(r),n=c[t]=l.call(null,e),cr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===xs(t))&&(n=!0))}return n}function Bd(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Fe(i)){const u=h=>{l=!0;const[f,p]=Bd(h,e,!0);Tt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return st(i)&&n.set(i,jr),jr;if(Ie(s))for(let u=0;u<s.length;u++){const h=Vn(s[u]);Nu(h)&&(o[h]=et)}else if(s)for(const u in s){const h=Vn(u);if(Nu(h)){const f=s[u],p=o[h]=Ie(f)||Fe(f)?{type:f}:Object.assign({},f);if(p){const g=Bu(Boolean,p.type),d=Bu(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||We(p,"default"))&&a.push(h)}}}const c=[o,a];return st(i)&&n.set(i,c),c}function Nu(i){return i[0]!=="$"}function zu(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Uu(i,e){return zu(i)===zu(e)}function Bu(i,e){return Ie(e)?e.findIndex(t=>Uu(t,i)):Fe(e)&&Uu(e,i)?0:-1}const kd=i=>i[0]==="_"||i==="$stable",Wc=i=>Ie(i)?i.map(Fn):[Fn(i)],m_=(i,e,t)=>{if(e._n)return e;const n=kr((...r)=>Wc(e(...r)),t);return n._c=!1,n},Gd=(i,e,t)=>{const n=i._ctx;for(const r in i){if(kd(r))continue;const s=i[r];if(Fe(s))e[r]=m_(r,s,n);else if(s!=null){const o=Wc(s);e[r]=()=>o}}},Vd=(i,e)=>{const t=Wc(e);i.slots.default=()=>t},g_=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Xe(e),Jo(e,"_",t)):Gd(e,i.slots={})}else i.slots={},e&&Vd(i,e);Jo(i.slots,wa,1)},__=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=et;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Tt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Gd(e,r)),o=e}else e&&(Vd(i,e),o={default:1});if(s)for(const a in r)!kd(a)&&!(a in o)&&delete r[a]};function Hd(){return{app:null,config:{isNativeTag:Wm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x_=0;function v_(i,e){return function(n,r=null){Fe(n)||(n=Object.assign({},n)),r!=null&&!st(r)&&(r=null);const s=Hd(),o=new Set;let a=!1;const l=s.app={_uid:x_++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:k_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(l,...u)):Fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Mt(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Xc(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function $l(i,e,t,n,r=!1){if(Ie(i)){i.forEach((f,p)=>$l(f,e&&(Ie(e)?e[p]:e),t,n,r));return}if(Wo(n)&&!r)return;const s=n.shapeFlag&4?Xc(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,We(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),Fe(l))Ti(l,a,12,[o,u]);else{const f=pt(l),p=Rt(l);if(f||p){const g=()=>{if(i.f){const d=f?We(h,l)?h[l]:u[l]:l.value;r?Ie(d)&&Ac(d,s):Ie(d)?d.includes(s)||d.push(s):f?(u[l]=[s],We(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,We(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}const Ut=Yg;function y_(i){return b_(i)}function b_(i,e){const t=tg();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Rn,insertStaticContent:g}=i,d=(E,P,q,J=null,Q=null,fe=null,pe=!1,re=null,_e=!!P.dynamicChildren)=>{if(E===P)return;E&&!nr(E,P)&&(J=ie(E),G(E,Q,fe,!0),E=null),P.patchFlag===-2&&(_e=!1,P.dynamicChildren=null);const{type:le,ref:T,shapeFlag:M}=P;switch(le){case Sa:m(E,P,q,J);break;case si:_(E,P,q,J);break;case Va:E==null&&b(P,q,J,pe);break;case Tn:z(E,P,q,J,Q,fe,pe,re,_e);break;default:M&1?S(E,P,q,J,Q,fe,pe,re,_e):M&6?N(E,P,q,J,Q,fe,pe,re,_e):(M&64||M&128)&&le.process(E,P,q,J,Q,fe,pe,re,_e,ge)}T!=null&&Q&&$l(T,E&&E.ref,fe,P||E,!P)},m=(E,P,q,J)=>{if(E==null)n(P.el=a(P.children),q,J);else{const Q=P.el=E.el;P.children!==E.children&&c(Q,P.children)}},_=(E,P,q,J)=>{E==null?n(P.el=l(P.children||""),q,J):P.el=E.el},b=(E,P,q,J)=>{[E.el,E.anchor]=g(E.children,P,q,J,E.el,E.anchor)},x=({el:E,anchor:P},q,J)=>{let Q;for(;E&&E!==P;)Q=f(E),n(E,q,J),E=Q;n(P,q,J)},y=({el:E,anchor:P})=>{let q;for(;E&&E!==P;)q=f(E),r(E),E=q;r(P)},S=(E,P,q,J,Q,fe,pe,re,_e)=>{pe=pe||P.type==="svg",E==null?A(P,q,J,Q,fe,pe,re,_e):w(E,P,Q,fe,pe,re,_e)},A=(E,P,q,J,Q,fe,pe,re)=>{let _e,le;const{type:T,props:M,shapeFlag:B,transition:Z,dirs:ne}=E;if(_e=E.el=o(E.type,fe,M&&M.is,M),B&8?u(_e,E.children):B&16&&v(E.children,_e,null,J,Q,fe&&T!=="foreignObject",pe,re),ne&&Gi(E,null,J,"created"),L(_e,E,E.scopeId,pe,J),M){for(const ye in M)ye!=="value"&&!Vo(ye)&&s(_e,ye,null,M[ye],fe,E.children,J,Q,I);"value"in M&&s(_e,"value",null,M.value),(le=M.onVnodeBeforeMount)&&In(le,J,E)}ne&&Gi(E,null,J,"beforeMount");const he=(!Q||Q&&!Q.pendingBranch)&&Z&&!Z.persisted;he&&Z.beforeEnter(_e),n(_e,P,q),((le=M&&M.onVnodeMounted)||he||ne)&&Ut(()=>{le&&In(le,J,E),he&&Z.enter(_e),ne&&Gi(E,null,J,"mounted")},Q)},L=(E,P,q,J,Q)=>{if(q&&p(E,q),J)for(let fe=0;fe<J.length;fe++)p(E,J[fe]);if(Q){let fe=Q.subTree;if(P===fe){const pe=Q.vnode;L(E,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},v=(E,P,q,J,Q,fe,pe,re,_e=0)=>{for(let le=_e;le<E.length;le++){const T=E[le]=re?vi(E[le]):Fn(E[le]);d(null,T,P,q,J,Q,fe,pe,re)}},w=(E,P,q,J,Q,fe,pe)=>{const re=P.el=E.el;let{patchFlag:_e,dynamicChildren:le,dirs:T}=P;_e|=E.patchFlag&16;const M=E.props||et,B=P.props||et;let Z;q&&Vi(q,!1),(Z=B.onVnodeBeforeUpdate)&&In(Z,q,P,E),T&&Gi(P,E,q,"beforeUpdate"),q&&Vi(q,!0);const ne=Q&&P.type!=="foreignObject";if(le?D(E.dynamicChildren,le,re,q,J,ne,fe):pe||H(E,P,re,null,q,J,ne,fe,!1),_e>0){if(_e&16)W(re,P,M,B,q,J,Q);else if(_e&2&&M.class!==B.class&&s(re,"class",null,B.class,Q),_e&4&&s(re,"style",M.style,B.style,Q),_e&8){const he=P.dynamicProps;for(let ye=0;ye<he.length;ye++){const R=he[ye],k=M[R],be=B[R];(be!==k||R==="value")&&s(re,R,k,be,Q,E.children,q,J,I)}}_e&1&&E.children!==P.children&&u(re,P.children)}else!pe&&le==null&&W(re,P,M,B,q,J,Q);((Z=B.onVnodeUpdated)||T)&&Ut(()=>{Z&&In(Z,q,P,E),T&&Gi(P,E,q,"updated")},J)},D=(E,P,q,J,Q,fe,pe)=>{for(let re=0;re<P.length;re++){const _e=E[re],le=P[re],T=_e.el&&(_e.type===Tn||!nr(_e,le)||_e.shapeFlag&70)?h(_e.el):q;d(_e,le,T,null,J,Q,fe,pe,!0)}},W=(E,P,q,J,Q,fe,pe)=>{if(q!==J){if(q!==et)for(const re in q)!Vo(re)&&!(re in J)&&s(E,re,q[re],null,pe,P.children,Q,fe,I);for(const re in J){if(Vo(re))continue;const _e=J[re],le=q[re];_e!==le&&re!=="value"&&s(E,re,le,_e,pe,P.children,Q,fe,I)}"value"in J&&s(E,"value",q.value,J.value)}},z=(E,P,q,J,Q,fe,pe,re,_e)=>{const le=P.el=E?E.el:a(""),T=P.anchor=E?E.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:Z}=P;Z&&(re=re?re.concat(Z):Z),E==null?(n(le,q,J),n(T,q,J),v(P.children,q,T,Q,fe,pe,re,_e)):M>0&&M&64&&B&&E.dynamicChildren?(D(E.dynamicChildren,B,q,Q,fe,pe,re),(P.key!=null||Q&&P===Q.subTree)&&Wd(E,P,!0)):H(E,P,q,T,Q,fe,pe,re,_e)},N=(E,P,q,J,Q,fe,pe,re,_e)=>{P.slotScopeIds=re,E==null?P.shapeFlag&512?Q.ctx.activate(P,q,J,pe,_e):O(P,q,J,Q,fe,pe,_e):j(E,P,_e)},O=(E,P,q,J,Q,fe,pe)=>{const re=E.component=R_(E,J,Q);if(ba(E)&&(re.ctx.renderer=ge),D_(re),re.asyncDep){if(Q&&Q.registerDep(re,$),!E.el){const _e=re.subTree=Mt(si);_(null,_e,P,q)}return}$(re,E,P,q,Q,fe,pe)},j=(E,P,q)=>{const J=P.component=E.component;if(qg(E,P,q))if(J.asyncDep&&!J.asyncResolved){K(J,P,q);return}else J.next=P,Bg(J.update),J.update();else P.el=E.el,J.vnode=P},$=(E,P,q,J,Q,fe,pe)=>{const re=()=>{if(E.isMounted){let{next:T,bu:M,u:B,parent:Z,vnode:ne}=E,he=T,ye;Vi(E,!1),T?(T.el=ne.el,K(E,T,pe)):T=ne,M&&Ua(M),(ye=T.props&&T.props.onVnodeBeforeUpdate)&&In(ye,Z,T,ne),Vi(E,!0);const R=Ba(E),k=E.subTree;E.subTree=R,d(k,R,h(k.el),ie(k),E,Q,fe),T.el=R.el,he===null&&Xg(E,R.el),B&&Ut(B,Q),(ye=T.props&&T.props.onVnodeUpdated)&&Ut(()=>In(ye,Z,T,ne),Q)}else{let T;const{el:M,props:B}=P,{bm:Z,m:ne,parent:he}=E,ye=Wo(P);if(Vi(E,!1),Z&&Ua(Z),!ye&&(T=B&&B.onVnodeBeforeMount)&&In(T,he,P),Vi(E,!0),M&&Te){const R=()=>{E.subTree=Ba(E),Te(M,E.subTree,E,Q,null)};ye?P.type.__asyncLoader().then(()=>!E.isUnmounted&&R()):R()}else{const R=E.subTree=Ba(E);d(null,R,q,J,E,Q,fe),P.el=R.el}if(ne&&Ut(ne,Q),!ye&&(T=B&&B.onVnodeMounted)){const R=P;Ut(()=>In(T,he,R),Q)}(P.shapeFlag&256||he&&Wo(he.vnode)&&he.vnode.shapeFlag&256)&&E.a&&Ut(E.a,Q),E.isMounted=!0,P=q=J=null}},_e=E.effect=new Dc(re,()=>Bc(le),E.scope),le=E.update=()=>_e.run();le.id=E.uid,Vi(E,!0),le()},K=(E,P,q)=>{P.component=E;const J=E.vnode.props;E.vnode=P,E.next=null,p_(E,P.props,J,q),__(E,P.children,q),vs(),Pu(),ys()},H=(E,P,q,J,Q,fe,pe,re,_e=!1)=>{const le=E&&E.children,T=E?E.shapeFlag:0,M=P.children,{patchFlag:B,shapeFlag:Z}=P;if(B>0){if(B&128){oe(le,M,q,J,Q,fe,pe,re,_e);return}else if(B&256){ce(le,M,q,J,Q,fe,pe,re,_e);return}}Z&8?(T&16&&I(le,Q,fe),M!==le&&u(q,M)):T&16?Z&16?oe(le,M,q,J,Q,fe,pe,re,_e):I(le,Q,fe,!0):(T&8&&u(q,""),Z&16&&v(M,q,J,Q,fe,pe,re,_e))},ce=(E,P,q,J,Q,fe,pe,re,_e)=>{E=E||jr,P=P||jr;const le=E.length,T=P.length,M=Math.min(le,T);let B;for(B=0;B<M;B++){const Z=P[B]=_e?vi(P[B]):Fn(P[B]);d(E[B],Z,q,null,Q,fe,pe,re,_e)}le>T?I(E,Q,fe,!0,!1,M):v(P,q,J,Q,fe,pe,re,_e,M)},oe=(E,P,q,J,Q,fe,pe,re,_e)=>{let le=0;const T=P.length;let M=E.length-1,B=T-1;for(;le<=M&&le<=B;){const Z=E[le],ne=P[le]=_e?vi(P[le]):Fn(P[le]);if(nr(Z,ne))d(Z,ne,q,null,Q,fe,pe,re,_e);else break;le++}for(;le<=M&&le<=B;){const Z=E[M],ne=P[B]=_e?vi(P[B]):Fn(P[B]);if(nr(Z,ne))d(Z,ne,q,null,Q,fe,pe,re,_e);else break;M--,B--}if(le>M){if(le<=B){const Z=B+1,ne=Z<T?P[Z].el:J;for(;le<=B;)d(null,P[le]=_e?vi(P[le]):Fn(P[le]),q,ne,Q,fe,pe,re,_e),le++}}else if(le>B)for(;le<=M;)G(E[le],Q,fe,!0),le++;else{const Z=le,ne=le,he=new Map;for(le=ne;le<=B;le++){const we=P[le]=_e?vi(P[le]):Fn(P[le]);we.key!=null&&he.set(we.key,le)}let ye,R=0;const k=B-ne+1;let be=!1,Ee=0;const Me=new Array(k);for(le=0;le<k;le++)Me[le]=0;for(le=Z;le<=M;le++){const we=E[le];if(R>=k){G(we,Q,fe,!0);continue}let Le;if(we.key!=null)Le=he.get(we.key);else for(ye=ne;ye<=B;ye++)if(Me[ye-ne]===0&&nr(we,P[ye])){Le=ye;break}Le===void 0?G(we,Q,fe,!0):(Me[Le-ne]=le+1,Le>=Ee?Ee=Le:be=!0,d(we,P[Le],q,null,Q,fe,pe,re,_e),R++)}const Ae=be?M_(Me):jr;for(ye=Ae.length-1,le=k-1;le>=0;le--){const we=ne+le,Le=P[we],ze=we+1<T?P[we+1].el:J;Me[le]===0?d(null,Le,q,ze,Q,fe,pe,re,_e):be&&(ye<0||le!==Ae[ye]?Se(Le,q,ze,2):ye--)}}},Se=(E,P,q,J,Q=null)=>{const{el:fe,type:pe,transition:re,children:_e,shapeFlag:le}=E;if(le&6){Se(E.component.subTree,P,q,J);return}if(le&128){E.suspense.move(P,q,J);return}if(le&64){pe.move(E,P,q,ge);return}if(pe===Tn){n(fe,P,q);for(let M=0;M<_e.length;M++)Se(_e[M],P,q,J);n(E.anchor,P,q);return}if(pe===Va){x(E,P,q);return}if(J!==2&&le&1&&re)if(J===0)re.beforeEnter(fe),n(fe,P,q),Ut(()=>re.enter(fe),Q);else{const{leave:M,delayLeave:B,afterLeave:Z}=re,ne=()=>n(fe,P,q),he=()=>{M(fe,()=>{ne(),Z&&Z()})};B?B(fe,ne,he):he()}else n(fe,P,q)},G=(E,P,q,J=!1,Q=!1)=>{const{type:fe,props:pe,ref:re,children:_e,dynamicChildren:le,shapeFlag:T,patchFlag:M,dirs:B}=E;if(re!=null&&$l(re,null,q,E,!0),T&256){P.ctx.deactivate(E);return}const Z=T&1&&B,ne=!Wo(E);let he;if(ne&&(he=pe&&pe.onVnodeBeforeUnmount)&&In(he,P,E),T&6)F(E.component,q,J);else{if(T&128){E.suspense.unmount(q,J);return}Z&&Gi(E,null,P,"beforeUnmount"),T&64?E.type.remove(E,P,q,Q,ge,J):le&&(fe!==Tn||M>0&&M&64)?I(le,P,q,!1,!0):(fe===Tn&&M&384||!Q&&T&16)&&I(_e,P,q),J&&ue(E)}(ne&&(he=pe&&pe.onVnodeUnmounted)||Z)&&Ut(()=>{he&&In(he,P,E),Z&&Gi(E,null,P,"unmounted")},q)},ue=E=>{const{type:P,el:q,anchor:J,transition:Q}=E;if(P===Tn){de(q,J);return}if(P===Va){y(E);return}const fe=()=>{r(q),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(E.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:re}=Q,_e=()=>pe(q,fe);re?re(E.el,fe,_e):_e()}else fe()},de=(E,P)=>{let q;for(;E!==P;)q=f(E),r(E),E=q;r(P)},F=(E,P,q)=>{const{bum:J,scope:Q,update:fe,subTree:pe,um:re}=E;J&&Ua(J),Q.stop(),fe&&(fe.active=!1,G(pe,E,P,q)),re&&Ut(re,P),Ut(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},I=(E,P,q,J=!1,Q=!1,fe=0)=>{for(let pe=fe;pe<E.length;pe++)G(E[pe],P,q,J,Q)},ie=E=>E.shapeFlag&6?ie(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),ae=(E,P,q)=>{E==null?P._vnode&&G(P._vnode,null,null,!0):d(P._vnode||null,E,P,null,null,null,q),Pu(),Md(),P._vnode=E},ge={p:d,um:G,m:Se,r:ue,mt:O,mc:v,pc:H,pbc:D,n:ie,o:i};let me,Te;return e&&([me,Te]=e(ge)),{render:ae,hydrate:me,createApp:v_(ae,me)}}function Vi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Wd(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=vi(r[s]),a.el=o.el),t||Wd(o,a)),a.type===Sa&&(a.el=o.el)}}function M_(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const S_=i=>i.__isTeleport,Tn=Symbol(void 0),Sa=Symbol(void 0),si=Symbol(void 0),Va=Symbol(void 0),ks=[];let Pn=null;function na(i=!1){ks.push(Pn=i?null:[])}function w_(){ks.pop(),Pn=ks[ks.length-1]||null}let Ks=1;function ku(i){Ks+=i}function qd(i){return i.dynamicChildren=Ks>0?Pn||jr:null,w_(),Ks>0&&Pn&&Pn.push(i),i}function Xd(i,e,t,n,r,s){return qd(ia(i,e,t,n,r,s,!0))}function jd(i,e,t,n,r){return qd(Mt(i,e,t,n,r,!0))}function Kl(i){return i?i.__v_isVNode===!0:!1}function nr(i,e){return i.type===e.type&&i.key===e.key}const wa="__vInternal",Yd=({key:i})=>i??null,qo=({ref:i,ref_key:e,ref_for:t})=>i!=null?pt(i)||Rt(i)||Fe(i)?{i:pn,r:i,k:e,f:!!t}:i:null;function ia(i,e=null,t=null,n=0,r=null,s=i===Tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Yd(e),ref:e&&qo(e),scopeId:Td,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pn};return a?(qc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),Ks>0&&!o&&Pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pn.push(l),l}const Mt=T_;function T_(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Fd)&&(i=si),Kl(i)){const a=Ri(i,e,!0);return t&&qc(a,t),Ks>0&&!s&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(i)]=a:Pn.push(a)),a.patchFlag|=-2,a}if(z_(i)&&(i=i.__vccOpts),e){e=E_(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=Ec(a)),st(l)&&(fd(l)&&!Ie(l)&&(l=Tt({},l)),e.style=Tc(l))}const o=pt(i)?1:jg(i)?128:S_(i)?64:st(i)?4:Fe(i)?2:0;return ia(i,e,t,n,r,o,s,!0)}function E_(i){return i?fd(i)||wa in i?Tt({},i):i:null}function Ri(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?C_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Yd(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(qo(e)):[r,qo(e)]:qo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Tn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ri(i.ssContent),ssFallback:i.ssFallback&&Ri(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Xo(i=" ",e=0){return Mt(Sa,null,i,e)}function Fn(i){return i==null||typeof i=="boolean"?Mt(si):Ie(i)?Mt(Tn,null,i.slice()):typeof i=="object"?vi(i):Mt(Sa,null,String(i))}function vi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ri(i)}function qc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),qc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(wa in e)?e._ctx=pn:r===3&&pn&&(pn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),n&64?(t=16,e=[Xo(e)]):t=8);i.children=e,i.shapeFlag|=t}function C_(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Ec([e.class,n.class]));else if(r==="style")e.style=Tc([e.style,n.style]);else if(pa(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function In(i,e,t,n=null){xn(i,e,7,[t,n])}const A_=Hd();let P_=0;function R_(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||A_,s={uid:P_++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ng(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(n,r),emitsOptions:wd(n,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:n.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Vg.bind(null,s),i.ce&&i.ce(s),s}let at=null;const L_=()=>at||pn,rs=i=>{at=i,i.scope.on()},cr=()=>{at&&at.scope.off(),at=null};function $d(i){return i.vnode.shapeFlag&4}let Zs=!1;function D_(i,e=!1){Zs=e;const{props:t,children:n}=i.vnode,r=$d(i);d_(i,t,r,e),g_(i,n);const s=r?I_(i,e):void 0;return Zs=!1,s}function I_(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=hd(new Proxy(i.ctx,a_));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?F_(i):null;rs(i),vs();const s=Ti(n,i,0,[i.props,r]);if(ys(),cr(),Qh(s)){if(s.then(cr,cr),e)return s.then(o=>{Gu(i,o,e)}).catch(o=>{va(o,i,0)});i.asyncDep=s}else Gu(i,s,e)}else Kd(i,e)}function Gu(i,e,t){Fe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:st(e)&&(i.setupState=_d(e)),Kd(i,t)}let Vu;function Kd(i,e,t){const n=i.type;if(!i.render){if(!e&&Vu&&!n.render){const r=n.template||Hc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Tt(Tt({isCustomElement:s,delimiters:a},o),l);n.render=Vu(r,c)}}i.render=n.render||Rn}rs(i),vs(),l_(i),ys(),cr()}function O_(i){return new Proxy(i.attrs,{get(e,t){return Wt(i,"get","$attrs"),e[t]}})}function F_(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=O_(i))},slots:i.slots,emit:i.emit,expose:e}}function Xc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(_d(hd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bs)return Bs[t](i)},has(e,t){return t in e||t in Bs}}))}function N_(i,e=!0){return Fe(i)?i.displayName||i.name:i.name||e&&i.__name}function z_(i){return Fe(i)&&"__vccOpts"in i}const dn=(i,e)=>Ng(i,e,Zs);function jc(i,e,t){const n=arguments.length;return n===2?st(e)&&!Ie(e)?Kl(e)?Mt(i,null,[e]):Mt(i,e):Mt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Kl(t)&&(t=[t]),Mt(i,e,t))}const U_=Symbol(""),B_=()=>vn(U_),k_="3.2.47",G_="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,Hu=ir&&ir.createElement("template"),V_={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?ir.createElementNS(G_,i):ir.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>ir.createTextNode(i),createComment:i=>ir.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ir.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hu.innerHTML=n?`<svg>${i}</svg>`:i;const a=Hu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function H_(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function W_(i,e,t){const n=i.style,r=pt(t);if(t&&!r){if(e&&!pt(e))for(const s in e)t[s]==null&&Zl(n,s,"");for(const s in t)Zl(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Wu=/\s*!important$/;function Zl(i,e,t){if(Ie(t))t.forEach(n=>Zl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=q_(i,e);Wu.test(t)?i.setProperty(xs(n),t.replace(Wu,""),"important"):i[n]=t}}const qu=["Webkit","Moz","ms"],Ha={};function q_(i,e){const t=Ha[e];if(t)return t;let n=Vn(e);if(n!=="filter"&&n in i)return Ha[e]=n;n=_a(n);for(let r=0;r<qu.length;r++){const s=qu[r]+n;if(s in i)return Ha[e]=s}return e}const Xu="http://www.w3.org/1999/xlink";function X_(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Xu,e.slice(6,e.length)):i.setAttributeNS(Xu,e,t);else{const s=Hm(e);t==null||s&&!Jh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function j_(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Jh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function Y_(i,e,t,n){i.addEventListener(e,t,n)}function $_(i,e,t,n){i.removeEventListener(e,t,n)}function K_(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Z_(e);if(n){const c=s[e]=e0(n,r);Y_(i,a,c,l)}else o&&($_(i,a,o,l),s[e]=void 0)}}const ju=/(?:Once|Passive|Capture)$/;function Z_(i){let e;if(ju.test(i)){e={};let n;for(;n=i.match(ju);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):xs(i.slice(2)),e]}let Wa=0;const J_=Promise.resolve(),Q_=()=>Wa||(J_.then(()=>Wa=0),Wa=Date.now());function e0(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;xn(t0(n,t.value),e,5,[n])};return t.value=i,t.attached=Q_(),t}function t0(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Yu=/^on[a-z]/,n0=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?H_(i,n,r):e==="style"?W_(i,t,n):pa(e)?Cc(e)||K_(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i0(i,e,n,r))?j_(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),X_(i,e,n,r))};function i0(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Yu.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Yu.test(e)&&pt(t)?!1:e in i}const hi="transition",Ss="animation",Yc=(i,{slots:e})=>jc(Ad,r0(i),e);Yc.displayName="Transition";const Zd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yc.props=Tt({},Ad.props,Zd);const Hi=(i,e=[])=>{Ie(i)?i.forEach(t=>t(...e)):i&&i(...e)},$u=i=>i?Ie(i)?i.some(e=>e.length>1):i.length>1:!1;function r0(i){const e={};for(const z in i)z in Zd||(e[z]=i[z]);if(i.css===!1)return e;const{name:t="v",type:n,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=i,g=s0(r),d=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:x,onLeave:y,onLeaveCancelled:S,onBeforeAppear:A=_,onAppear:L=b,onAppearCancelled:v=x}=e,w=(z,N,O)=>{Wi(z,N?u:a),Wi(z,N?c:o),O&&O()},D=(z,N)=>{z._isLeaving=!1,Wi(z,h),Wi(z,p),Wi(z,f),N&&N()},W=z=>(N,O)=>{const j=z?L:b,$=()=>w(N,z,O);Hi(j,[N,$]),Ku(()=>{Wi(N,z?l:s),di(N,z?u:a),$u(j)||Zu(N,n,d,$)})};return Tt(e,{onBeforeEnter(z){Hi(_,[z]),di(z,s),di(z,o)},onBeforeAppear(z){Hi(A,[z]),di(z,l),di(z,c)},onEnter:W(!1),onAppear:W(!0),onLeave(z,N){z._isLeaving=!0;const O=()=>D(z,N);di(z,h),l0(),di(z,f),Ku(()=>{z._isLeaving&&(Wi(z,h),di(z,p),$u(y)||Zu(z,n,m,O))}),Hi(y,[z,O])},onEnterCancelled(z){w(z,!1),Hi(x,[z])},onAppearCancelled(z){w(z,!0),Hi(v,[z])},onLeaveCancelled(z){D(z),Hi(S,[z])}})}function s0(i){if(i==null)return null;if(st(i))return[qa(i.enter),qa(i.leave)];{const e=qa(i);return[e,e]}}function qa(i){return eg(i)}function di(i,e){e.split(/\s+/).forEach(t=>t&&i.classList.add(t)),(i._vtc||(i._vtc=new Set)).add(e)}function Wi(i,e){e.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const{_vtc:t}=i;t&&(t.delete(e),t.size||(i._vtc=void 0))}function Ku(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let o0=0;function Zu(i,e,t,n){const r=i._endId=++o0,s=()=>{r===i._endId&&n()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=a0(i,e);if(!o)return n();const c=o+"end";let u=0;const h=()=>{i.removeEventListener(c,f),s()},f=p=>{p.target===i&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),i.addEventListener(c,f)}function a0(i,e){const t=window.getComputedStyle(i),n=g=>(t[g]||"").split(", "),r=n(`${hi}Delay`),s=n(`${hi}Duration`),o=Ju(r,s),a=n(`${Ss}Delay`),l=n(`${Ss}Duration`),c=Ju(a,l);let u=null,h=0,f=0;e===hi?o>0&&(u=hi,h=o,f=s.length):e===Ss?c>0&&(u=Ss,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?hi:Ss:null,f=u?u===hi?s.length:l.length:0);const p=u===hi&&/\b(transform|all)(,|$)/.test(n(`${hi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Ju(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max(...e.map((t,n)=>Qu(t)+Qu(i[n])))}function Qu(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function l0(){return document.body.offsetHeight}const c0=Tt({patchProp:n0},V_);let ef;function u0(){return ef||(ef=y_(c0))}const f0=(...i)=>{const e=u0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=h0(n);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function h0(i){return pt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="149",Mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d0=0,tf=1,p0=2,Jd=1,m0=2,Os=3,Li=0,Qt=1,ni=2,Ei=0,Jr=1,nf=2,rf=3,sf=4,g0=5,Gr=100,_0=101,x0=102,of=103,af=104,v0=200,y0=201,b0=202,M0=203,Qd=204,ep=205,S0=206,w0=207,T0=208,E0=209,C0=210,A0=0,P0=1,R0=2,Jl=3,L0=4,D0=5,I0=6,O0=7,tp=0,F0=1,N0=2,oi=0,z0=1,U0=2,B0=3,k0=4,G0=5,np=300,ss=301,os=302,Ql=303,ec=304,Ta=306,tc=1e3,Cn=1001,nc=1002,zt=1003,lf=1004,Xa=1005,fn=1006,V0=1007,Js=1008,mr=1009,H0=1010,W0=1011,ip=1012,q0=1013,sr=1014,or=1015,Qs=1016,X0=1017,j0=1018,Qr=1020,Y0=1021,An=1023,$0=1024,K0=1025,ur=1026,as=1027,Z0=1028,J0=1029,Q0=1030,ex=1031,tx=1033,ja=33776,Ya=33777,$a=33778,Ka=33779,cf=35840,uf=35841,ff=35842,hf=35843,nx=36196,df=37492,pf=37496,mf=37808,gf=37809,_f=37810,xf=37811,vf=37812,yf=37813,bf=37814,Mf=37815,Sf=37816,wf=37817,Tf=37818,Ef=37819,Cf=37820,Af=37821,Za=36492,ix=36283,Pf=36284,Rf=36285,Lf=36286,gr=3e3,Je=3001,rx=3200,sx=3201,ox=0,ax=1,On="srgb",eo="srgb-linear",Ja=7680,lx=519,Df=35044,If="300 es",ic=1035;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Of=180/Math.PI;function uo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function cx(i,e){return(i%e+e)%e}function el(i,e,t){return(1-t)*i+t*e}function Ff(i){return(i&i-1)===0&&i!==0}function rc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bo(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=r[0],m=r[3],_=r[6],b=r[1],x=r[4],y=r[7],S=r[2],A=r[5],L=r[8];return s[0]=o*d+a*b+l*S,s[3]=o*m+a*x+l*A,s[6]=o*_+a*y+l*L,s[1]=c*d+u*b+h*S,s[4]=c*m+u*x+h*A,s[7]=c*_+u*y+h*L,s[2]=f*d+p*b+g*S,s[5]=f*m+p*x+g*A,s[8]=f*_+p*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Jt;function rp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const nl={[On]:{[eo]:fr},[eo]:{[On]:jo}},Ot={legacyMode:!0,get workingColorSpace(){return eo},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(nl[e]&&nl[e][t]!==void 0){const n=nl[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},bn={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function So(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ot.workingColorSpace){if(e=cx(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=il(o,s,e+1/3),this.g=il(o,s,e),this.b=il(o,s,e-1/3)}return Ot.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ot.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ot.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ot.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ot.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=On){const n=sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ot.fromWorkingColorSpace(So(this,ht),e),Bt(ht.r*255,0,255)<<16^Bt(ht.g*255,0,255)<<8^Bt(ht.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(So(this,ht),t);const n=ht.r,r=ht.g,s=ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(So(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=On){return Ot.fromWorkingColorSpace(So(this,ht),e),e!==On?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(bn),bn.h+=e,bn.s+=t,bn.l+=n,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Mo);const n=el(bn.h,Mo.h,t),r=el(bn.s,Mo.s,t),s=el(bn.l,Mo.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}tt.NAMES=sp;let wr;class op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=ra("canvas")),wr.width=e.width,wr.height=e.height;const n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ap{constructor(e=null){this.isSource=!0,this.uuid=uo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rl(r[o].image)):s.push(rl(r[o]))}else s=rl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?op.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ux=0;class en extends yr{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Cn,r=Cn,s=fn,o=Js,a=An,l=mr,c=en.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=uo(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tc:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tc:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=np;en.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,S=(_+1)/2,A=(u+f)/4,L=(h+d)/4,v=(g+m)/4;return x>y&&x>S?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=L/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=v/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=L/s,r=v/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends yr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new en(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ap(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lp extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fx extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-a;const _=l*f+c*p+u*g+h*d,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),A=Math.atan2(S,_*b);m=Math.sin(m*A)/S,a=Math.sin(a*A)/S}const y=a*b;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+d*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new Y,Nf=new xr;class fo{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)qi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else n.boundingBox===null&&n.computeBoundingBox(),ol.copy(n.boundingBox),ol.applyMatrix4(e.matrixWorld),this.union(ol);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),wo.subVectors(this.max,ws),Tr.subVectors(e.a,ws),Er.subVectors(e.b,ws),Cr.subVectors(e.c,ws),pi.subVectors(Er,Tr),mi.subVectors(Cr,Er),Xi.subVectors(Tr,Cr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Xi.z,Xi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Xi.z,0,-Xi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Xi.y,Xi.x,0];return!al(t,Tr,Er,Cr,wo)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Tr,Er,Cr,wo))?!1:(To.crossVectors(pi,mi),t=[To.x,To.y,To.z],al(t,Tr,Er,Cr,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qi=new Y,ol=new fo,Tr=new Y,Er=new Y,Cr=new Y,pi=new Y,mi=new Y,Xi=new Y,ws=new Y,wo=new Y,To=new Y,ji=new Y;function al(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ji.fromArray(i,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hx=new fo,Ts=new Y,ll=new Y;class Kc{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ts,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(ll)),this.expandByPoint(Ts.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new Y,cl=new Y,Eo=new Y,gi=new Y,ul=new Y,Co=new Y,fl=new Y;class dx{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.direction).multiplyScalar(t).add(this.origin),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cl.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(cl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=gi.dot(this.direction),l=-gi.dot(Eo),c=gi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Eo).multiplyScalar(f).add(cl),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),r=jn.dot(jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,s){ul.subVectors(t,e),Co.subVectors(n,e),fl.crossVectors(ul,Co);let o=this.direction.dot(fl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(Co.crossVectors(gi,Co));if(l<0)return null;const c=a*this.direction.dot(ul.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(fl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),_i.crossVectors(n,Yt),_i.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),_i.crossVectors(n,Yt)),_i.normalize(),Ao.crossVectors(Yt,_i),r[0]=_i.x,r[4]=Ao.x,r[8]=Yt.x,r[1]=_i.y,r[5]=Ao.y,r[9]=Yt.y,r[2]=_i.z,r[6]=Ao.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],b=n[3],x=n[7],y=n[11],S=n[15],A=r[0],L=r[4],v=r[8],w=r[12],D=r[1],W=r[5],z=r[9],N=r[13],O=r[2],j=r[6],$=r[10],K=r[14],H=r[3],ce=r[7],oe=r[11],Se=r[15];return s[0]=o*A+a*D+l*O+c*H,s[4]=o*L+a*W+l*j+c*ce,s[8]=o*v+a*z+l*$+c*oe,s[12]=o*w+a*N+l*K+c*Se,s[1]=u*A+h*D+f*O+p*H,s[5]=u*L+h*W+f*j+p*ce,s[9]=u*v+h*z+f*$+p*oe,s[13]=u*w+h*N+f*K+p*Se,s[2]=g*A+d*D+m*O+_*H,s[6]=g*L+d*W+m*j+_*ce,s[10]=g*v+d*z+m*$+_*oe,s[14]=g*w+d*N+m*K+_*Se,s[3]=b*A+x*D+y*O+S*H,s[7]=b*L+x*W+y*j+S*ce,s[11]=b*v+x*z+y*$+S*oe,s[15]=b*w+x*N+y*K+S*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+d*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],b=h*m*c-d*f*c+d*l*p-a*m*p-h*l*_+a*f*_,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*_-o*f*_,y=u*d*c-g*h*c+g*a*p-o*d*p-u*a*_+o*h*_,S=g*h*l-u*d*l-g*a*f+o*d*f+u*a*m-o*h*m,A=t*b+n*x+r*y+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=b*L,e[1]=(d*f*s-h*m*s-d*r*p+n*m*p+h*r*_-n*f*_)*L,e[2]=(a*m*s-d*l*s+d*r*c-n*m*c-a*r*_+n*l*_)*L,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*L,e[4]=x*L,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*_+t*f*_)*L,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*_-t*l*_)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*L,e[8]=y*L,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*L,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*L,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*L,e[12]=S*L,e[13]=(u*d*r-g*h*r+g*n*f-t*d*f-u*n*m+t*h*m)*L,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*m-t*a*m)*L,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,d=o*u,m=o*h,_=a*h,b=l*c,x=l*u,y=l*h,S=n.x,A=n.y,L=n.z;return r[0]=(1-(d+_))*S,r[1]=(p+y)*S,r[2]=(g-x)*S,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+_))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+x)*L,r[9]=(m-b)*L,r[10]=(1-(f+d))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new Y,Mn=new wt,px=new Y(0,0,0),mx=new Y(1,1,1),_i=new Y,Ao=new Y,Yt=new Y,zf=new wt,Uf=new xr;class Ea{constructor(e=0,t=0,n=0,r=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const Bf=new Y,Pr=new xr,Yn=new wt,Po=new Y,Es=new Y,_x=new Y,xx=new xr,kf=new Y(1,0,0),Gf=new Y(0,1,0),Vf=new Y(0,0,1),vx={type:"added"},Hf={type:"removed"};class tn extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,t=new Ea,n=new xr,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Jt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Gf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Gf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Es,Po,this.up):Yn.lookAt(Po,Es,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Hf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new Y,$n=new Y,hl=new Y,Kn=new Y,Rr=new Y,Lr=new Y,Wf=new Y,dl=new Y,pl=new Y,ml=new Y;class ti{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Sn.subVectors(r,t),$n.subVectors(n,t),hl.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot($n),l=Sn.dot(hl),c=$n.dot($n),u=$n.dot(hl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Kn),l.set(0,0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),$n.subVectors(e,t),Sn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Sn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ti.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,n),Lr.subVectors(s,n),dl.subVectors(e,n);const l=Rr.dot(dl),c=Lr.dot(dl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,r);const u=Rr.dot(pl),h=Lr.dot(pl);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Rr,o);ml.subVectors(e,s);const p=Rr.dot(ml),g=Lr.dot(ml);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Lr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wf.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Wf,a);const _=1/(m+d+f);return o=d*_,a=f*_,t.copy(n).addScaledVector(Rr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yx=0;class Ca extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=Jr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qd,this.blendDst=ep,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class up extends Ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,Ro=new Be;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Df,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fp extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hp extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bx=0;const ln=new wt,gl=new tn,Dr=new Y,$t=new fo,Cs=new fo,vt=new Y;class Fi extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?hp:fp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors($t.min,Cs.min),$t.expandByPoint(vt),vt.addVectors($t.max,Cs.max),$t.expandByPoint(vt)):($t.expandByPoint(Cs.min),$t.expandByPoint(Cs.max))}$t.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),vt.add(Dr)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new Y,u[D]=new Y;const h=new Y,f=new Y,p=new Y,g=new Be,d=new Be,m=new Be,_=new Y,b=new Y;function x(D,W,z){h.fromArray(r,D*3),f.fromArray(r,W*3),p.fromArray(r,z*3),g.fromArray(o,D*2),d.fromArray(o,W*2),m.fromArray(o,z*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(N),b.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(N),c[D].add(_),c[W].add(_),c[z].add(_),u[D].add(b),u[W].add(b),u[z].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,W=y.length;D<W;++D){const z=y[D],N=z.start,O=z.count;for(let j=N,$=N+O;j<$;j+=3)x(n[j+0],n[j+1],n[j+2])}const S=new Y,A=new Y,L=new Y,v=new Y;function w(D){L.fromArray(s,D*3),v.copy(L);const W=c[D];S.copy(W),S.sub(L.multiplyScalar(L.dot(W))).normalize(),A.crossVectors(v,W);const N=A.dot(u[D])<0?-1:1;l[D*4]=S.x,l[D*4+1]=S.y,l[D*4+2]=S.z,l[D*4+3]=N}for(let D=0,W=y.length;D<W;++D){const z=y[D],N=z.start,O=z.count;for(let j=N,$=N+O;j<$;j+=3)w(n[j+0]),w(n[j+1]),w(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Bn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qf=new wt,Ir=new dx,_l=new Kc,As=new Y,Ps=new Y,Rs=new Y,xl=new Y,Lo=new Y,Do=new Be,Io=new Be,Oo=new Be,vl=new Y,Fo=new Y;class ii extends tn{constructor(e=new Fi,t=new up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(xl.fromBufferAttribute(h,e),o?Lo.addScaledVector(xl,u):Lo.addScaledVector(xl.sub(t),u))}t.add(Lo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),e.ray.intersectsSphere(_l)===!1)||(qf.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(qf),n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=b;x<y;x+=3){const S=a.getX(x),A=a.getX(x+1),L=a.getX(x+2);o=No(this,m,e,Ir,c,u,S,A,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),b=a.getX(d+1),x=a.getX(d+2);o=No(this,r,e,Ir,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=b;x<y;x+=3){const S=x,A=x+1,L=x+2;o=No(this,m,e,Ir,c,u,S,A,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,b=d+1,x=d+2;o=No(this,r,e,Ir,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function Mx(i,e,t,n,r,s,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:i}}function No(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,As),i.getVertexPosition(a,Ps),i.getVertexPosition(l,Rs);const c=Mx(i,e,t,n,As,Ps,Rs,vl);if(c){r&&(Do.fromBufferAttribute(r,o),Io.fromBufferAttribute(r,a),Oo.fromBufferAttribute(r,l),c.uv=ti.getUV(vl,As,Ps,Rs,Do,Io,Oo,new Be)),s&&(Do.fromBufferAttribute(s,o),Io.fromBufferAttribute(s,a),Oo.fromBufferAttribute(s,l),c.uv2=ti.getUV(vl,As,Ps,Rs,Do,Io,Oo,new Be));const u={a:o,b:a,c:l,normal:new Y,materialIndex:0};ti.getNormal(As,Ps,Rs,u.normal),c.face=u}return c}class ho extends Fi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(h,2));function g(d,m,_,b,x,y,S,A,L,v,w){const D=y/L,W=S/v,z=y/2,N=S/2,O=A/2,j=L+1,$=v+1;let K=0,H=0;const ce=new Y;for(let oe=0;oe<$;oe++){const Se=oe*W-N;for(let G=0;G<j;G++){const ue=G*D-z;ce[d]=ue*b,ce[m]=Se*x,ce[_]=O,c.push(ce.x,ce.y,ce.z),ce[d]=0,ce[m]=0,ce[_]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(G/L),h.push(1-oe/v),K+=1}}for(let oe=0;oe<v;oe++)for(let Se=0;Se<L;Se++){const G=f+Se+j*oe,ue=f+Se+j*(oe+1),de=f+(Se+1)+j*(oe+1),F=f+(Se+1)+j*oe;l.push(G,ue,F),l.push(ue,de,F),H+=6}a.addGroup(p,H,w),p+=H,f+=K}}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=ls(i[t]);for(const r in n)e[r]=n[r]}return e}function Sx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dp(i){return i.getRenderTarget()===null&&i.outputEncoding===Je?On:eo}const wx={clone:ls,merge:Nt};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pp extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends pp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Fr=1;class Cx extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new hn(Or,Fr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new hn(Or,Fr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new hn(Or,Fr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new hn(Or,Fr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new hn(Or,Fr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new hn(Or,Fr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=oi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class mp extends en{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new mp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ho(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Ei});s.uniforms.tEquirect.value=t;const o=new ii(r,s),a=t.minFilter;return t.minFilter===Js&&(t.minFilter=fn),new Cx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const yl=new Y,Px=new Y,Rx=new Jt;class Zi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=yl.subVectors(n,t).cross(Px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(yl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rx.getNormalMatrix(e),r=this.coplanarPoint(yl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Kc,zo=new Y;class gp{constructor(e=new Zi,t=new Zi,n=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-r,h-l,d-f,x-m).normalize(),t[1].setComponents(a+r,h+l,d+f,x+m).normalize(),t[2].setComponents(a+s,h+c,d+p,x+_).normalize(),t[3].setComponents(a-s,h-c,d-p,x-_).normalize(),t[4].setComponents(a-o,h-u,d-g,x-b).normalize(),t[5].setComponents(a+o,h+u,d+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _p(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Lx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Zc extends Fi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const b=_*f-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-b,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,y=b+c*(_+1),S=b+1+c*(_+1),A=b+1+c*_;p.push(x,y,A),p.push(y,S,A)}this.setIndex(p),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(d,3)),this.setAttribute("uv",new kn(m,2))}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux="vec3 transformed = vec3( position );",Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Gx=`#ifdef USE_IRIDESCENCE
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
#endif`,Vx=`#ifdef USE_BUMPMAP
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zx=`#define PI 3.141592653589793
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
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qx=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
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
}`,gv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
#endif`,bv=`#if defined( USE_ENVMAP )
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
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,Cv=`struct PhysicalMaterial {
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
}`,Av=`
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Xv=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hy=`float getShadowMask() {
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
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ty=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ey=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ay=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ny=`#include <common>
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
}`,zy=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vy=`uniform float scale;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,qy=`uniform vec3 diffuse;
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
}`,Xy=`#define LAMBERT
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
}`,jy=`#define LAMBERT
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
}`,Yy=`#define MATCAP
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
}`,$y=`#define MATCAP
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
}`,Ky=`#define NORMAL
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
}`,Zy=`#define NORMAL
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
}`,Jy=`#define PHONG
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
}`,Qy=`#define PHONG
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
}`,eb=`#define STANDARD
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
}`,tb=`#define STANDARD
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
}`,nb=`#define TOON
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
}`,ib=`#define TOON
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
}`,rb=`uniform float size;
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
}`,sb=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,ab=`uniform vec3 color;
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
}`,lb=`uniform float rotation;
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
}`,cb=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Dx,alphamap_pars_fragment:Ix,alphatest_fragment:Ox,alphatest_pars_fragment:Fx,aomap_fragment:Nx,aomap_pars_fragment:zx,begin_vertex:Ux,beginnormal_vertex:Bx,bsdfs:kx,iridescence_fragment:Gx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Xx,color_fragment:jx,color_pars_fragment:Yx,color_pars_vertex:$x,color_vertex:Kx,common:Zx,cube_uv_reflection_fragment:Jx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:ev,displacementmap_vertex:tv,emissivemap_fragment:nv,emissivemap_pars_fragment:iv,encodings_fragment:rv,encodings_pars_fragment:sv,envmap_fragment:ov,envmap_common_pars_fragment:av,envmap_pars_fragment:lv,envmap_pars_vertex:cv,envmap_physical_pars_fragment:bv,envmap_vertex:uv,fog_vertex:fv,fog_pars_vertex:hv,fog_fragment:dv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_fragment:gv,lightmap_pars_fragment:_v,lights_lambert_fragment:xv,lights_lambert_pars_fragment:vv,lights_pars_begin:yv,lights_toon_fragment:Mv,lights_toon_pars_fragment:Sv,lights_phong_fragment:wv,lights_phong_pars_fragment:Tv,lights_physical_fragment:Ev,lights_physical_pars_fragment:Cv,lights_fragment_begin:Av,lights_fragment_maps:Pv,lights_fragment_end:Rv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Ov,map_fragment:Fv,map_pars_fragment:Nv,map_particle_fragment:zv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Bv,metalnessmap_pars_fragment:kv,morphcolor_vertex:Gv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Wv,normal_fragment_begin:qv,normal_fragment_maps:Xv,normal_pars_fragment:jv,normal_pars_vertex:Yv,normal_vertex:$v,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:ey,output_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:ry,dithering_fragment:sy,dithering_pars_fragment:oy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:uy,shadowmap_vertex:fy,shadowmask_pars_fragment:hy,skinbase_vertex:dy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:_y,specularmap_pars_fragment:xy,tonemapping_fragment:vy,tonemapping_pars_fragment:yy,transmission_fragment:by,transmission_pars_fragment:My,uv_pars_fragment:Sy,uv_pars_vertex:wy,uv_vertex:Ty,uv2_pars_fragment:Ey,uv2_pars_vertex:Cy,uv2_vertex:Ay,worldpos_vertex:Py,background_vert:Ry,background_frag:Ly,backgroundCube_vert:Dy,backgroundCube_frag:Iy,cube_vert:Oy,cube_frag:Fy,depth_vert:Ny,depth_frag:zy,distanceRGBA_vert:Uy,distanceRGBA_frag:By,equirect_vert:ky,equirect_frag:Gy,linedashed_vert:Vy,linedashed_frag:Hy,meshbasic_vert:Wy,meshbasic_frag:qy,meshlambert_vert:Xy,meshlambert_frag:jy,meshmatcap_vert:Yy,meshmatcap_frag:$y,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Jy,meshphong_frag:Qy,meshphysical_vert:eb,meshphysical_frag:tb,meshtoon_vert:nb,meshtoon_frag:ib,points_vert:rb,points_frag:sb,shadow_vert:ob,shadow_frag:ab,sprite_vert:lb,sprite_frag:cb},ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},Nn={basic:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Nt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Nt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Nt([ve.points,ve.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Nt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Nt([ve.common,ve.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Nt([ve.sprite,ve.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Nt([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Nt([ve.lights,ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Nn.physical={uniforms:Nt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Uo={r:0,b:0,g:0};function ub(i,e,t,n,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=i.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ta)?(u===void 0&&(u=new ii(new ho(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ls(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ii(new Zc(2,2),new Di({name:"BackgroundMaterial",uniforms:ls(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Uo,dp(i)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function fb(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(O,j,$,K,H){let ce=!1;if(o){const oe=d(K,$,j);c!==oe&&(c=oe,p(c.object)),ce=_(O,K,$,H),ce&&b(O,K,$,H)}else{const oe=j.wireframe===!0;(c.geometry!==K.id||c.program!==$.id||c.wireframe!==oe)&&(c.geometry=K.id,c.program=$.id,c.wireframe=oe,ce=!0)}H!==null&&t.update(H,34963),(ce||u)&&(u=!1,v(O,j,$,K),H!==null&&i.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function d(O,j,$){const K=$.wireframe===!0;let H=a[O.id];H===void 0&&(H={},a[O.id]=H);let ce=H[j.id];ce===void 0&&(ce={},H[j.id]=ce);let oe=ce[K];return oe===void 0&&(oe=m(f()),ce[K]=oe),oe}function m(O){const j=[],$=[],K=[];for(let H=0;H<r;H++)j[H]=0,$[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:K,object:O,attributes:{},index:null}}function _(O,j,$,K){const H=c.attributes,ce=j.attributes;let oe=0;const Se=$.getAttributes();for(const G in Se)if(Se[G].location>=0){const de=H[G];let F=ce[G];if(F===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),de===void 0||de.attribute!==F||F&&de.data!==F.data)return!0;oe++}return c.attributesNum!==oe||c.index!==K}function b(O,j,$,K){const H={},ce=j.attributes;let oe=0;const Se=$.getAttributes();for(const G in Se)if(Se[G].location>=0){let de=ce[G];de===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));const F={};F.attribute=de,de&&de.data&&(F.data=de.data),H[G]=F,oe++}c.attributes=H,c.attributesNum=oe,c.index=K}function x(){const O=c.newAttributes;for(let j=0,$=O.length;j<$;j++)O[j]=0}function y(O){S(O,0)}function S(O,j){const $=c.newAttributes,K=c.enabledAttributes,H=c.attributeDivisors;$[O]=1,K[O]===0&&(i.enableVertexAttribArray(O),K[O]=1),H[O]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,j),H[O]=j)}function A(){const O=c.newAttributes,j=c.enabledAttributes;for(let $=0,K=j.length;$<K;$++)j[$]!==O[$]&&(i.disableVertexAttribArray($),j[$]=0)}function L(O,j,$,K,H,ce){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(O,j,$,H,ce):i.vertexAttribPointer(O,j,$,K,H,ce)}function v(O,j,$,K){if(n.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=K.attributes,ce=$.getAttributes(),oe=j.defaultAttributeValues;for(const Se in ce){const G=ce[Se];if(G.location>=0){let ue=H[Se];if(ue===void 0&&(Se==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Se==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const de=ue.normalized,F=ue.itemSize,I=t.get(ue);if(I===void 0)continue;const ie=I.buffer,ae=I.type,ge=I.bytesPerElement;if(ue.isInterleavedBufferAttribute){const me=ue.data,Te=me.stride,E=ue.offset;if(me.isInstancedInterleavedBuffer){for(let P=0;P<G.locationSize;P++)S(G.location+P,me.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let P=0;P<G.locationSize;P++)y(G.location+P);i.bindBuffer(34962,ie);for(let P=0;P<G.locationSize;P++)L(G.location+P,F/G.locationSize,ae,de,Te*ge,(E+F/G.locationSize*P)*ge)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<G.locationSize;me++)S(G.location+me,ue.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<G.locationSize;me++)y(G.location+me);i.bindBuffer(34962,ie);for(let me=0;me<G.locationSize;me++)L(G.location+me,F/G.locationSize,ae,de,F*ge,F/G.locationSize*me*ge)}}else if(oe!==void 0){const de=oe[Se];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(G.location,de);break;case 3:i.vertexAttrib3fv(G.location,de);break;case 4:i.vertexAttrib4fv(G.location,de);break;default:i.vertexAttrib1fv(G.location,de)}}}}A()}function w(){z();for(const O in a){const j=a[O];for(const $ in j){const K=j[$];for(const H in K)g(K[H].object),delete K[H];delete j[$]}delete a[O]}}function D(O){if(a[O.id]===void 0)return;const j=a[O.id];for(const $ in j){const K=j[$];for(const H in K)g(K[H].object),delete K[H];delete j[$]}delete a[O.id]}function W(O){for(const j in a){const $=a[j];if($[O.id]===void 0)continue;const K=$[O.id];for(const H in K)g(K[H].object),delete K[H];delete $[O.id]}}function z(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function hb(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function db(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),x=f>0,y=o||e.has("OES_texture_float"),S=x&&y,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:A}}function pb(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Zi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,x=b*4;let y=_.clippingState||null;l.value=y,y=u(g,f,x,p);for(let S=0;S!==x;++S)y[S]=t[S];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=p;x!==d;++x,y+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function mb(i){let e=new WeakMap;function t(o,a){return a===Ql?o.mapping=ss:a===ec&&(o.mapping=os),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ql||a===ec)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ax(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class gb extends pp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,Xf=[.125,.215,.35,.446,.526,.582],rr=20,bl=new gb,jf=new tt;let Ml=null;const Ji=(1+Math.sqrt(5))/2,zr=1/Ji,Yf=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ji,zr),new Y(0,Ji,-zr),new Y(zr,0,Ji),new Y(-zr,0,Ji),new Y(Ji,zr,0),new Y(-Ji,zr,0)];class $f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ml=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Qs,format:An,encoding:gr,depthBuffer:!1},r=Kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_b(s)),this._blurMaterial=xb(s,e,t)}return r}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,n,r){const a=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(jf),u.toneMapping=oi,u.autoClear=!1;const p=new up({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new ii(new ho,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(jf),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Bo(r,b*x,_>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,bl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yf[(r-1)%Yf.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ii(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rr-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const _=[];let b=0;for(let L=0;L<rr;++L){const v=L/d,w=Math.exp(-v*v/2);_.push(w),L===0?b+=w:L<m&&(b+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[r],S=3*y*(r>x-Wr?r-x+Wr:0),A=4*(this._cubeSize-y);Bo(t,S,A,3*y,2*y),l.setRenderTarget(t),l.render(h,bl)}}function _b(i){const e=[],t=[],n=[];let r=i;const s=i-Wr+1+Xf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Wr?l=Xf[o-i+Wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,b=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,v=A>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];b.set(w,d*g*A),x.set(f,m*g*A);const D=[A,A,A,A,A,A];y.set(D,_*g*A)}const S=new Fi;S.setAttribute("position",new Bn(b,d)),S.setAttribute("uv",new Bn(x,m)),S.setAttribute("faceIndex",new Bn(y,_)),e.push(S),r>Wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kf(i,e,t){const n=new _r(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xb(i,e,t){const n=new Float32Array(rr),r=new Y(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Zf(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Jf(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function vb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ql||l===ec,u=l===ss||l===os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new $f(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new $f(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function yb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bb(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let x=0,y=b.length;x<y;x+=3){const S=b[x+0],A=b[x+1],L=b[x+2];f.push(S,A,A,L,L,S)}}else{const b=g.array;d=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const S=x+0,A=x+1,L=x+2;f.push(S,A,A,L,L,S)}}const m=new(rp(f)?hp:fp)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Mb(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Sb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wb(i,e){return i[0]-e[0]}function Tb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Eb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let j=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",j)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let w=0;x===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let D=u.attributes.position.count*w,W=1;D>e.maxTextureSize&&(W=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const z=new Float32Array(D*W*4*d),N=new lp(z,D,W,d);N.type=or,N.needsUpdate=!0;const O=w*4;for(let $=0;$<d;$++){const K=A[$],H=L[$],ce=v[$],oe=D*W*4*$;for(let Se=0;Se<K.count;Se++){const G=Se*O;x===!0&&(o.fromBufferAttribute(K,Se),z[oe+G+0]=o.x,z[oe+G+1]=o.y,z[oe+G+2]=o.z,z[oe+G+3]=0),y===!0&&(o.fromBufferAttribute(H,Se),z[oe+G+4]=o.x,z[oe+G+5]=o.y,z[oe+G+6]=o.z,z[oe+G+7]=0),S===!0&&(o.fromBufferAttribute(ce,Se),z[oe+G+8]=o.x,z[oe+G+9]=o.y,z[oe+G+10]=o.z,z[oe+G+11]=ce.itemSize===4?o.w:1)}}m={count:d,texture:N,size:new Be(D,W)},s.set(u,m),u.addEventListener("dispose",j)}let _=0;for(let x=0;x<p.length;x++)_+=p[x];const b=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const S=d[y];S[0]=y,S[1]=p[y]}d.sort(Tb);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(wb);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const S=a[y],A=S[0],L=S[1];A!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),_&&u.getAttribute("morphNormal"+y)!==_[A]&&u.setAttribute("morphNormal"+y,_[A]),r[y]=L,b+=L):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const x=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Cb(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const xp=new en,vp=new lp,yp=new fx,bp=new mp,Qf=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qf[r];if(s===void 0&&(s=new Float32Array(r),Qf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ab(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Lb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Db(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),gt(t,n)}}function Ib(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),gt(t,n)}}function Ob(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),gt(t,n)}}function Fb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Bb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Hb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||xp,r)}function Wb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yp,r)}function qb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bp,r)}function Xb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vp,r)}function jb(i){switch(i){case 5126:return Ab;case 35664:return Pb;case 35665:return Rb;case 35666:return Lb;case 35674:return Db;case 35675:return Ib;case 35676:return Ob;case 5124:case 35670:return Fb;case 35667:case 35671:return Nb;case 35668:case 35672:return zb;case 35669:case 35673:return Ub;case 5125:return Bb;case 36294:return kb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Xb}}function Yb(i,e){i.uniform1fv(this.addr,e)}function $b(i,e){const t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function Kb(i,e){const t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function Zb(i,e){const t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function Jb(i,e){const t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qb(i,e){const t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eM(i,e){const t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tM(i,e){i.uniform1iv(this.addr,e)}function nM(i,e){i.uniform2iv(this.addr,e)}function iM(i,e){i.uniform3iv(this.addr,e)}function rM(i,e){i.uniform4iv(this.addr,e)}function sM(i,e){i.uniform1uiv(this.addr,e)}function oM(i,e){i.uniform2uiv(this.addr,e)}function aM(i,e){i.uniform3uiv(this.addr,e)}function lM(i,e){i.uniform4uiv(this.addr,e)}function cM(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xp,s[o])}function uM(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||yp,s[o])}function fM(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bp,s[o])}function hM(i,e,t){const n=this.cache,r=e.length,s=Aa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vp,s[o])}function dM(i){switch(i){case 5126:return Yb;case 35664:return $b;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}class pM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=jb(t.type)}}class mM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=dM(t.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function rh(i,e){i.seq.push(e),i.map[e.id]=e}function _M(i,e,t){const n=i.name,r=n.length;for(Sl.lastIndex=0;;){const s=Sl.exec(n),o=Sl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rh(t,c===void 0?new pM(a,i,e):new mM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new gM(a),rh(t,h)),t=h}}}class Yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_M(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let xM=0;function vM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function yM(i){switch(i){case gr:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function oh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vM(i.getShaderSource(e),o)}else return r}function bM(i,e){const t=yM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function MM(i,e){let t;switch(e){case z0:t="Linear";break;case U0:t="Reinhard";break;case B0:t="OptimizedCineon";break;case k0:t="ACESFilmic";break;case G0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function wM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function TM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fs(i){return i!==""}function ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(EM,CM)}function CM(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return sc(t)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(AM,PM)}function PM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Os&&(e="SHADOWMAP_TYPE_VSM"),e}function LM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tp:e="ENVMAP_BLENDING_MULTIPLY";break;case F0:e="ENVMAP_BLENDING_MIX";break;case N0:e="ENVMAP_BLENDING_ADD";break}return e}function OM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function FM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=RM(t),c=LM(t),u=DM(t),h=IM(t),f=OM(t),p=t.isWebGL2?"":SM(t),g=wM(s),d=r.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Fs).join(`
`),_.length>0&&(_+=`
`)):(m=[uh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),_=[p,uh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==oi?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,bM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=sc(o),o=ah(o,t),o=lh(o,t),a=sc(a),a=ah(a,t),a=lh(a,t),o=ch(o),a=ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+m+o,y=b+_+a,S=sh(r,35633,x),A=sh(r,35632,y);if(r.attachShader(d,S),r.attachShader(d,A),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(A).trim();let z=!0,N=!0;if(r.getProgramParameter(d,35714)===!1){z=!1;const O=oh(r,S,"vertex"),j=oh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+O+`
`+j)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||W==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:_}})}r.deleteShader(S),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Yo(r,d)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=TM(r,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=A,this}let NM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new UM(e),t.set(e,n)),n}}class UM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function BM(i,e,t,n,r,s,o){const a=new cp,l=new zM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,D,W,z){const N=W.fog,O=z.geometry,j=v.isMeshStandardMaterial?W.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),K=$&&$.mapping===Ta?$.image.height:null,H=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=ce!==void 0?ce.length:0;let Se=0;O.morphAttributes.position!==void 0&&(Se=1),O.morphAttributes.normal!==void 0&&(Se=2),O.morphAttributes.color!==void 0&&(Se=3);let G,ue,de,F;if(H){const Te=Nn[H];G=Te.vertexShader,ue=Te.fragmentShader}else G=v.vertexShader,ue=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),F=l.getFragmentShaderID(v);const I=i.getRenderTarget(),ie=v.alphaTest>0,ae=v.clearcoat>0,ge=v.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:v.type,vertexShader:G,fragmentShader:ue,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:F,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:I===null?i.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:gr,map:!!v.map,matcap:!!v.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ax,tangentSpaceNormalMap:v.normalMapType===ox,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:ae,clearcoatMap:ae&&!!v.clearcoatMap,clearcoatRoughnessMap:ae&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!v.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!v.iridescenceMap,iridescenceThicknessMap:ge&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Jr,alphaMap:!!v.alphaMap,alphaTest:ie,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:oi,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ni,flipSided:v.side===Qt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(w,v),b(w,v),w.push(i.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function x(v){const w=g[v.type];let D;if(w){const W=Nn[w];D=wx.clone(W.uniforms)}else D=v.uniforms;return D}function y(v,w){let D;for(let W=0,z=c.length;W<z;W++){const N=c[W];if(N.cacheKey===w){D=N,++D.usedTimes;break}}return D===void 0&&(D=new FM(i,w,v,s),c.push(D)),D}function S(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:L}}function kM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function GM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,d,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function a(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||GM),n.length>1&&n.sort(f||fh),r.length>1&&r.sort(f||fh)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function VM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new hh,i.set(n,[o])):r>=s.length?(o=new hh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function HM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new tt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function WM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qM=0;function XM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jM(i,e){const t=new HM,n=WM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new wt,a=new wt;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,m=0,_=0,b=0,x=0,y=0,S=0,A=0,L=0,v=0;u.sort(XM);const w=h!==!0?Math.PI:1;for(let W=0,z=u.length;W<z;W++){const N=u[W],O=N.color,j=N.intensity,$=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=O.r*j*w,p+=O.g*j*w,g+=O.b*j*w;else if(N.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(N.sh.coefficients[H],j);else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const ce=N.shadow,oe=n.get(N);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,r.directionalShadow[d]=oe,r.directionalShadowMap[d]=K,r.directionalShadowMatrix[d]=N.shadow.matrix,y++}r.directional[d]=H,d++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(O).multiplyScalar(j*w),H.distance=$,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,r.spot[_]=H;const ce=N.shadow;if(N.map&&(r.spotLightMap[L]=N.map,L++,ce.updateMatrices(N),N.castShadow&&v++),r.spotLightMatrix[_]=ce.matrix,N.castShadow){const oe=n.get(N);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,r.spotShadow[_]=oe,r.spotShadowMap[_]=K,A++}_++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(O).multiplyScalar(j),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=H,b++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*w),H.distance=N.distance,H.decay=N.decay,N.castShadow){const ce=N.shadow,oe=n.get(N);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,oe.shadowCameraNear=ce.camera.near,oe.shadowCameraFar=ce.camera.far,r.pointShadow[m]=oe,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=N.shadow.matrix,S++}r.point[m]=H,m++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(j*w),H.groundColor.copy(N.groundColor).multiplyScalar(j*w),r.hemi[x]=H,x++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==L)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=b,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+L-v,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=m,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=L,r.version=qM++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const y=u[b];if(y.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),f++}else if(y.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const S=r.rectArea[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function dh(i,e){const t=new jM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function YM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new dh(i,e),t.set(s,[l])):o>=a.length?(l=new dh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class $M extends Ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends Ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
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
}`;function QM(i,e,t){let n=new gp;const r=new Be,s=new Be,o=new St,a=new $M({depthPacking:sx}),l=new KM,c={},u=t.maxTextureSize,h={[Li]:Qt,[Qt]:Li,[ni]:ni},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ZM,fragmentShader:JM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fi;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ii(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd,this.render=function(y,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ei),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,z=y.length;W<z;W++){const N=y[W],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const j=O.getFrameExtents();if(r.multiply(j),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,O.mapSize.y=s.y)),O.map===null){const K=this.type!==Os?{minFilter:zt,magFilter:zt}:{};O.map=new _r(r.x,r.y,K),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const $=O.getViewportCount();for(let K=0;K<$;K++){const H=O.getViewport(K);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),D.viewport(o),O.updateMatrices(N,K),n=O.getFrustum(),x(S,A,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Os&&_(O,A),O.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(L,v,w)};function _(y,S){const A=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _r(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(S,null,A,f,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(S,null,A,p,d,null)}function b(y,S,A,L,v,w){let D=null;const W=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)D=W;else if(D=A.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=D.uuid,N=S.uuid;let O=c[z];O===void 0&&(O={},c[z]=O);let j=O[N];j===void 0&&(j=D.clone(),O[N]=j),D=j}return D.visible=S.visible,D.wireframe=S.wireframe,w===Os?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:h[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=L,D.farDistance=v),D}function x(y,S,A,L,v){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Os)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const W=e.update(y),z=y.material;if(Array.isArray(z)){const N=W.groups;for(let O=0,j=N.length;O<j;O++){const $=N[O],K=z[$.materialIndex];if(K&&K.visible){const H=b(y,K,L,A.near,A.far,v);i.renderBufferDirect(A,null,W,H,y,$)}}}else if(z.visible){const N=b(y,z,L,A.near,A.far,v);i.renderBufferDirect(A,null,W,N,y,null)}}const D=y.children;for(let W=0,z=D.length;W<z;W++)x(D[W],S,A,L,v)}}function eS(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const ee=new St;let xe=null;const Ce=new St(0,0,0,0);return{setMask:function(Pe){xe!==Pe&&!U&&(i.colorMask(Pe,Pe,Pe,Pe),xe=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,je,_t,Et,zi){zi===!0&&(Pe*=Et,je*=Et,_t*=Et),ee.set(Pe,je,_t,Et),Ce.equals(ee)===!1&&(i.clearColor(Pe,je,_t,Et),Ce.copy(ee))},reset:function(){U=!1,xe=null,Ce.set(-1,0,0,0)}}}function s(){let U=!1,ee=null,xe=null,Ce=null;return{setTest:function(Pe){Pe?ie(2929):ae(2929)},setMask:function(Pe){ee!==Pe&&!U&&(i.depthMask(Pe),ee=Pe)},setFunc:function(Pe){if(xe!==Pe){switch(Pe){case A0:i.depthFunc(512);break;case P0:i.depthFunc(519);break;case R0:i.depthFunc(513);break;case Jl:i.depthFunc(515);break;case L0:i.depthFunc(514);break;case D0:i.depthFunc(518);break;case I0:i.depthFunc(516);break;case O0:i.depthFunc(517);break;default:i.depthFunc(515)}xe=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){Ce!==Pe&&(i.clearDepth(Pe),Ce=Pe)},reset:function(){U=!1,ee=null,xe=null,Ce=null}}}function o(){let U=!1,ee=null,xe=null,Ce=null,Pe=null,je=null,_t=null,Et=null,zi=null;return{setTest:function(Qe){U||(Qe?ie(2960):ae(2960))},setMask:function(Qe){ee!==Qe&&!U&&(i.stencilMask(Qe),ee=Qe)},setFunc:function(Qe,Wn,on){(xe!==Qe||Ce!==Wn||Pe!==on)&&(i.stencilFunc(Qe,Wn,on),xe=Qe,Ce=Wn,Pe=on)},setOp:function(Qe,Wn,on){(je!==Qe||_t!==Wn||Et!==on)&&(i.stencilOp(Qe,Wn,on),je=Qe,_t=Wn,Et=on)},setLocked:function(Qe){U=Qe},setClear:function(Qe){zi!==Qe&&(i.clearStencil(Qe),zi=Qe)},reset:function(){U=!1,ee=null,xe=null,Ce=null,Pe=null,je=null,_t=null,Et=null,zi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,y=null,S=null,A=null,L=null,v=null,w=!1,D=null,W=null,z=null,N=null,O=null;const j=i.getParameter(35661);let $=!1,K=0;const H=i.getParameter(7938);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=K>=2);let ce=null,oe={};const Se=i.getParameter(3088),G=i.getParameter(2978),ue=new St().fromArray(Se),de=new St().fromArray(G);function F(U,ee,xe){const Ce=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(U,Pe),i.texParameteri(U,10241,9728),i.texParameteri(U,10240,9728);for(let je=0;je<xe;je++)i.texImage2D(ee+je,0,6408,1,1,0,6408,5121,Ce);return Pe}const I={};I[3553]=F(3553,3553,1),I[34067]=F(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(2929),l.setFunc(Jl),Q(!1),fe(tf),ie(2884),q(Ei);function ie(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function ae(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function ge(U,ee){return p[U]!==ee?(i.bindFramebuffer(U,ee),p[U]=ee,n&&(U===36009&&(p[36160]=ee),U===36160&&(p[36009]=ee)),!0):!1}function me(U,ee){let xe=d,Ce=!1;if(U)if(xe=g.get(ee),xe===void 0&&(xe=[],g.set(ee,xe)),U.isWebGLMultipleRenderTargets){const Pe=U.texture;if(xe.length!==Pe.length||xe[0]!==36064){for(let je=0,_t=Pe.length;je<_t;je++)xe[je]=36064+je;xe.length=Pe.length,Ce=!0}}else xe[0]!==36064&&(xe[0]=36064,Ce=!0);else xe[0]!==1029&&(xe[0]=1029,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Te(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const E={[Gr]:32774,[_0]:32778,[x0]:32779};if(n)E[of]=32775,E[af]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(E[of]=U.MIN_EXT,E[af]=U.MAX_EXT)}const P={[v0]:0,[y0]:1,[b0]:768,[Qd]:770,[C0]:776,[T0]:774,[S0]:772,[M0]:769,[ep]:771,[E0]:775,[w0]:773};function q(U,ee,xe,Ce,Pe,je,_t,Et){if(U===Ei){_===!0&&(ae(3042),_=!1);return}if(_===!1&&(ie(3042),_=!0),U!==g0){if(U!==b||Et!==w){if((x!==Gr||A!==Gr)&&(i.blendEquation(32774),x=Gr,A=Gr),Et)switch(U){case Jr:i.blendFuncSeparate(1,771,1,771);break;case nf:i.blendFunc(1,1);break;case rf:i.blendFuncSeparate(0,769,0,1);break;case sf:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Jr:i.blendFuncSeparate(770,771,1,771);break;case nf:i.blendFunc(770,1);break;case rf:i.blendFuncSeparate(0,769,0,1);break;case sf:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,S=null,L=null,v=null,b=U,w=Et}return}Pe=Pe||ee,je=je||xe,_t=_t||Ce,(ee!==x||Pe!==A)&&(i.blendEquationSeparate(E[ee],E[Pe]),x=ee,A=Pe),(xe!==y||Ce!==S||je!==L||_t!==v)&&(i.blendFuncSeparate(P[xe],P[Ce],P[je],P[_t]),y=xe,S=Ce,L=je,v=_t),b=U,w=!1}function J(U,ee){U.side===ni?ae(2884):ie(2884);let xe=U.side===Qt;ee&&(xe=!xe),Q(xe),U.blending===Jr&&U.transparent===!1?q(Ei):q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ce=U.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(32926):ae(32926)}function Q(U){D!==U&&(U?i.frontFace(2304):i.frontFace(2305),D=U)}function fe(U){U!==d0?(ie(2884),U!==W&&(U===tf?i.cullFace(1029):U===p0?i.cullFace(1028):i.cullFace(1032))):ae(2884),W=U}function pe(U){U!==z&&($&&i.lineWidth(U),z=U)}function re(U,ee,xe){U?(ie(32823),(N!==ee||O!==xe)&&(i.polygonOffset(ee,xe),N=ee,O=xe)):ae(32823)}function _e(U){U?ie(3089):ae(3089)}function le(U){U===void 0&&(U=33984+j-1),ce!==U&&(i.activeTexture(U),ce=U)}function T(U,ee,xe){xe===void 0&&(ce===null?xe=33984+j-1:xe=ce);let Ce=oe[xe];Ce===void 0&&(Ce={type:void 0,texture:void 0},oe[xe]=Ce),(Ce.type!==U||Ce.texture!==ee)&&(ce!==xe&&(i.activeTexture(xe),ce=xe),i.bindTexture(U,ee||I[U]),Ce.type=U,Ce.texture=ee)}function M(){const U=oe[ce];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){ue.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function we(U){de.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function Le(U,ee){let xe=h.get(ee);xe===void 0&&(xe=new WeakMap,h.set(ee,xe));let Ce=xe.get(U);Ce===void 0&&(Ce=i.getUniformBlockIndex(ee,U.name),xe.set(U,Ce))}function ze(U,ee){const Ce=h.get(ee).get(U);u.get(ee)!==Ce&&(i.uniformBlockBinding(ee,Ce,U.__bindingPointIndex),u.set(ee,Ce))}function $e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,oe={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,y=null,S=null,A=null,L=null,v=null,w=!1,D=null,W=null,z=null,N=null,O=null,ue.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ie,disable:ae,bindFramebuffer:ge,drawBuffers:me,useProgram:Te,setBlending:q,setMaterial:J,setFlipSided:Q,setCullFace:fe,setLineWidth:pe,setPolygonOffset:re,setScissorTest:_e,activeTexture:le,bindTexture:T,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:Z,texImage2D:Ee,texImage3D:Me,updateUBOMapping:Le,uniformBlockBinding:ze,texStorage2D:k,texStorage3D:be,texSubImage2D:ne,texSubImage3D:he,compressedTexSubImage2D:ye,compressedTexSubImage3D:R,scissor:Ae,viewport:we,reset:$e}}function tS(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,M){return _?new OffscreenCanvas(T,M):ra("canvas")}function x(T,M,B,Z){let ne=1;if((T.width>Z||T.height>Z)&&(ne=Z/Math.max(T.width,T.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const he=M?rc:Math.floor,ye=he(ne*T.width),R=he(ne*T.height);d===void 0&&(d=b(ye,R));const k=B?b(ye,R):d;return k.width=ye,k.height=R,k.getContext("2d").drawImage(T,0,0,ye,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+R+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Ff(T.width)&&Ff(T.height)}function S(T){return a?!1:T.wrapS!==Cn||T.wrapT!==Cn||T.minFilter!==zt&&T.minFilter!==fn}function A(T,M){return T.generateMipmaps&&M&&T.minFilter!==zt&&T.minFilter!==fn}function L(T){i.generateMipmap(T)}function v(T,M,B,Z,ne=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=M;return M===6403&&(B===5126&&(he=33326),B===5131&&(he=33325),B===5121&&(he=33321)),M===33319&&(B===5126&&(he=33328),B===5131&&(he=33327),B===5121&&(he=33323)),M===6408&&(B===5126&&(he=34836),B===5131&&(he=34842),B===5121&&(he=Z===Je&&ne===!1?35907:32856),B===32819&&(he=32854),B===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function w(T,M,B){return A(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){return T===zt||T===lf||T===Xa?9728:9729}function W(T){const M=T.target;M.removeEventListener("dispose",W),N(M),M.isVideoTexture&&g.delete(M)}function z(T){const M=T.target;M.removeEventListener("dispose",z),j(M)}function N(T){const M=n.get(T);if(M.__webglInit===void 0)return;const B=T.source,Z=m.get(B);if(Z){const ne=Z[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(T),Object.keys(Z).length===0&&m.delete(B)}n.remove(T)}function O(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const B=T.source,Z=m.get(B);delete Z[M.__cacheKey],o.memory.textures--}function j(T){const M=T.texture,B=n.get(T),Z=n.get(M);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(B.__webglFramebuffer[ne]),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,he=M.length;ne<he;ne++){const ye=n.get(M[ne]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(T)}let $=0;function K(){$=0}function H(){const T=$;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),$+=1,T}function ce(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function oe(T,M){const B=n.get(T);if(T.isVideoTexture&&_e(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(B,T,M);return}}t.bindTexture(3553,B.__webglTexture,33984+M)}function Se(T,M){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ae(B,T,M);return}t.bindTexture(35866,B.__webglTexture,33984+M)}function G(T,M){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ae(B,T,M);return}t.bindTexture(32879,B.__webglTexture,33984+M)}function ue(T,M){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ge(B,T,M);return}t.bindTexture(34067,B.__webglTexture,33984+M)}const de={[tc]:10497,[Cn]:33071,[nc]:33648},F={[zt]:9728,[lf]:9984,[Xa]:9986,[fn]:9729,[V0]:9985,[Js]:9987};function I(T,M,B){if(B?(i.texParameteri(T,10242,de[M.wrapS]),i.texParameteri(T,10243,de[M.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,de[M.wrapR]),i.texParameteri(T,10240,F[M.magFilter]),i.texParameteri(T,10241,F[M.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(M.wrapS!==Cn||M.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,D(M.magFilter)),i.texParameteri(T,10241,D(M.minFilter)),M.minFilter!==zt&&M.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===zt||M.minFilter!==Xa&&M.minFilter!==Js||M.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ie(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",W));const Z=M.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const he=ce(M);if(he!==T.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[he].usedTimes++;const ye=ne[T.__cacheKey];ye!==void 0&&(ne[T.__cacheKey].usedTimes--,ye.usedTimes===0&&O(M)),T.__cacheKey=he,T.__webglTexture=ne[he].texture}return B}function ae(T,M,B){let Z=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=35866),M.isData3DTexture&&(Z=32879);const ne=ie(T,M),he=M.source;t.bindTexture(Z,T.__webglTexture,33984+B);const ye=n.get(he);if(he.version!==ye.__version||ne===!0){t.activeTexture(33984+B),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const R=S(M)&&y(M.image)===!1;let k=x(M.image,R,!1,u);k=le(M,k);const be=y(k)||a,Ee=s.convert(M.format,M.encoding);let Me=s.convert(M.type),Ae=v(M.internalFormat,Ee,Me,M.encoding,M.isVideoTexture);I(Z,M,be);let we;const Le=M.mipmaps,ze=a&&M.isVideoTexture!==!0,$e=ye.__version===void 0||ne===!0,U=w(M,k,be);if(M.isDepthTexture)Ae=6402,a?M.type===or?Ae=36012:M.type===sr?Ae=33190:M.type===Qr?Ae=35056:Ae=33189:M.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ur&&Ae===6402&&M.type!==ip&&M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sr,Me=s.convert(M.type)),M.format===as&&Ae===6402&&(Ae=34041,M.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Qr,Me=s.convert(M.type))),$e&&(ze?t.texStorage2D(3553,1,Ae,k.width,k.height):t.texImage2D(3553,0,Ae,k.width,k.height,0,Ee,Me,null));else if(M.isDataTexture)if(Le.length>0&&be){ze&&$e&&t.texStorage2D(3553,U,Ae,Le[0].width,Le[0].height);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],ze?t.texSubImage2D(3553,ee,0,0,we.width,we.height,Ee,Me,we.data):t.texImage2D(3553,ee,Ae,we.width,we.height,0,Ee,Me,we.data);M.generateMipmaps=!1}else ze?($e&&t.texStorage2D(3553,U,Ae,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,Ee,Me,k.data)):t.texImage2D(3553,0,Ae,k.width,k.height,0,Ee,Me,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(35866,U,Ae,Le[0].width,Le[0].height,k.depth);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],M.format!==An?Ee!==null?ze?t.compressedTexSubImage3D(35866,ee,0,0,0,we.width,we.height,k.depth,Ee,we.data,0,0):t.compressedTexImage3D(35866,ee,Ae,we.width,we.height,k.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,ee,0,0,0,we.width,we.height,k.depth,Ee,Me,we.data):t.texImage3D(35866,ee,Ae,we.width,we.height,k.depth,0,Ee,Me,we.data)}else{ze&&$e&&t.texStorage2D(3553,U,Ae,Le[0].width,Le[0].height);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],M.format!==An?Ee!==null?ze?t.compressedTexSubImage2D(3553,ee,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(3553,ee,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,ee,0,0,we.width,we.height,Ee,Me,we.data):t.texImage2D(3553,ee,Ae,we.width,we.height,0,Ee,Me,we.data)}else if(M.isDataArrayTexture)ze?($e&&t.texStorage3D(35866,U,Ae,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Ee,Me,k.data)):t.texImage3D(35866,0,Ae,k.width,k.height,k.depth,0,Ee,Me,k.data);else if(M.isData3DTexture)ze?($e&&t.texStorage3D(32879,U,Ae,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Ee,Me,k.data)):t.texImage3D(32879,0,Ae,k.width,k.height,k.depth,0,Ee,Me,k.data);else if(M.isFramebufferTexture){if($e)if(ze)t.texStorage2D(3553,U,Ae,k.width,k.height);else{let ee=k.width,xe=k.height;for(let Ce=0;Ce<U;Ce++)t.texImage2D(3553,Ce,Ae,ee,xe,0,Ee,Me,null),ee>>=1,xe>>=1}}else if(Le.length>0&&be){ze&&$e&&t.texStorage2D(3553,U,Ae,Le[0].width,Le[0].height);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],ze?t.texSubImage2D(3553,ee,0,0,Ee,Me,we):t.texImage2D(3553,ee,Ae,Ee,Me,we);M.generateMipmaps=!1}else ze?($e&&t.texStorage2D(3553,U,Ae,k.width,k.height),t.texSubImage2D(3553,0,0,0,Ee,Me,k)):t.texImage2D(3553,0,Ae,Ee,Me,k);A(M,be)&&L(Z),ye.__version=he.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ge(T,M,B){if(M.image.length!==6)return;const Z=ie(T,M),ne=M.source;t.bindTexture(34067,T.__webglTexture,33984+B);const he=n.get(ne);if(ne.version!==he.__version||Z===!0){t.activeTexture(33984+B),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,R=M.image[0]&&M.image[0].isDataTexture,k=[];for(let ee=0;ee<6;ee++)!ye&&!R?k[ee]=x(M.image[ee],!1,!0,c):k[ee]=R?M.image[ee].image:M.image[ee],k[ee]=le(M,k[ee]);const be=k[0],Ee=y(be)||a,Me=s.convert(M.format,M.encoding),Ae=s.convert(M.type),we=v(M.internalFormat,Me,Ae,M.encoding),Le=a&&M.isVideoTexture!==!0,ze=he.__version===void 0||Z===!0;let $e=w(M,be,Ee);I(34067,M,Ee);let U;if(ye){Le&&ze&&t.texStorage2D(34067,$e,we,be.width,be.height);for(let ee=0;ee<6;ee++){U=k[ee].mipmaps;for(let xe=0;xe<U.length;xe++){const Ce=U[xe];M.format!==An?Me!==null?Le?t.compressedTexSubImage2D(34069+ee,xe,0,0,Ce.width,Ce.height,Me,Ce.data):t.compressedTexImage2D(34069+ee,xe,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+ee,xe,0,0,Ce.width,Ce.height,Me,Ae,Ce.data):t.texImage2D(34069+ee,xe,we,Ce.width,Ce.height,0,Me,Ae,Ce.data)}}}else{U=M.mipmaps,Le&&ze&&(U.length>0&&$e++,t.texStorage2D(34067,$e,we,k[0].width,k[0].height));for(let ee=0;ee<6;ee++)if(R){Le?t.texSubImage2D(34069+ee,0,0,0,k[ee].width,k[ee].height,Me,Ae,k[ee].data):t.texImage2D(34069+ee,0,we,k[ee].width,k[ee].height,0,Me,Ae,k[ee].data);for(let xe=0;xe<U.length;xe++){const Pe=U[xe].image[ee].image;Le?t.texSubImage2D(34069+ee,xe+1,0,0,Pe.width,Pe.height,Me,Ae,Pe.data):t.texImage2D(34069+ee,xe+1,we,Pe.width,Pe.height,0,Me,Ae,Pe.data)}}else{Le?t.texSubImage2D(34069+ee,0,0,0,Me,Ae,k[ee]):t.texImage2D(34069+ee,0,we,Me,Ae,k[ee]);for(let xe=0;xe<U.length;xe++){const Ce=U[xe];Le?t.texSubImage2D(34069+ee,xe+1,0,0,Me,Ae,Ce.image[ee]):t.texImage2D(34069+ee,xe+1,we,Me,Ae,Ce.image[ee])}}}A(M,Ee)&&L(34067),he.__version=ne.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,B,Z,ne){const he=s.convert(B.format,B.encoding),ye=s.convert(B.type),R=v(B.internalFormat,he,ye,B.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,R,M.width,M.height,M.depth,0,he,ye,null):t.texImage2D(ne,0,R,M.width,M.height,0,he,ye,null)),t.bindFramebuffer(36160,T),re(M)?f.framebufferTexture2DMultisampleEXT(36160,Z,ne,n.get(B).__webglTexture,0,pe(M)):(ne===3553||ne>=34069&&ne<=34074)&&i.framebufferTexture2D(36160,Z,ne,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(T,M,B){if(i.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let Z=33189;if(B||re(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===or?Z=36012:ne.type===sr&&(Z=33190));const he=pe(M);re(M)?f.renderbufferStorageMultisampleEXT(36161,he,Z,M.width,M.height):i.renderbufferStorageMultisample(36161,he,Z,M.width,M.height)}else i.renderbufferStorage(36161,Z,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const Z=pe(M);B&&re(M)===!1?i.renderbufferStorageMultisample(36161,Z,35056,M.width,M.height):re(M)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<Z.length;ne++){const he=Z[ne],ye=s.convert(he.format,he.encoding),R=s.convert(he.type),k=v(he.internalFormat,ye,R,he.encoding),be=pe(M);B&&re(M)===!1?i.renderbufferStorageMultisample(36161,be,k,M.width,M.height):re(M)?f.renderbufferStorageMultisampleEXT(36161,be,k,M.width,M.height):i.renderbufferStorage(36161,k,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function E(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),oe(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,ne=pe(M);if(M.depthTexture.format===ur)re(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ne):i.framebufferTexture2D(36160,36096,3553,Z,0);else if(M.depthTexture.format===as)re(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ne):i.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function P(T){const M=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");E(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Te(M.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Te(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function q(T,M,B){const Z=n.get(T);M!==void 0&&me(Z.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&P(T)}function J(T){const M=T.texture,B=n.get(T),Z=n.get(M);T.addEventListener("dispose",z),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,ye=y(T)||a;if(ne){B.__webglFramebuffer=[];for(let R=0;R<6;R++)B.__webglFramebuffer[R]=i.createFramebuffer()}else{if(B.__webglFramebuffer=i.createFramebuffer(),he)if(r.drawBuffers){const R=T.texture;for(let k=0,be=R.length;k<be;k++){const Ee=n.get(R[k]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&re(T)===!1){const R=he?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let k=0;k<R.length;k++){const be=R[k];B.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(36161,B.__webglColorRenderbuffer[k]);const Ee=s.convert(be.format,be.encoding),Me=s.convert(be.type),Ae=v(be.internalFormat,Ee,Me,be.encoding,T.isXRRenderTarget===!0),we=pe(T);i.renderbufferStorageMultisample(36161,we,Ae,T.width,T.height),i.framebufferRenderbuffer(36160,36064+k,36161,B.__webglColorRenderbuffer[k])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Z.__webglTexture),I(34067,M,ye);for(let R=0;R<6;R++)me(B.__webglFramebuffer[R],T,M,36064,34069+R);A(M,ye)&&L(34067),t.unbindTexture()}else if(he){const R=T.texture;for(let k=0,be=R.length;k<be;k++){const Ee=R[k],Me=n.get(Ee);t.bindTexture(3553,Me.__webglTexture),I(3553,Ee,ye),me(B.__webglFramebuffer,T,Ee,36064+k,3553),A(Ee,ye)&&L(3553)}t.unbindTexture()}else{let R=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?R=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,Z.__webglTexture),I(R,M,ye),me(B.__webglFramebuffer,T,M,36064,R),A(M,ye)&&L(R),t.unbindTexture()}T.depthBuffer&&P(T)}function Q(T){const M=y(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,ne=B.length;Z<ne;Z++){const he=B[Z];if(A(he,M)){const ye=T.isWebGLCubeRenderTarget?34067:3553,R=n.get(he).__webglTexture;t.bindTexture(ye,R),L(ye),t.unbindTexture()}}}function fe(T){if(a&&T.samples>0&&re(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,Z=T.height;let ne=16384;const he=[],ye=T.stencilBuffer?33306:36096,R=n.get(T),k=T.isWebGLMultipleRenderTargets===!0;if(k)for(let be=0;be<M.length;be++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let be=0;be<M.length;be++){he.push(36064+be),T.depthBuffer&&he.push(ye);const Ee=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),k&&i.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[be]),Ee===!0&&(i.invalidateFramebuffer(36008,[ye]),i.invalidateFramebuffer(36009,[ye])),k){const Me=n.get(M[be]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Me,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ne,9728),p&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let be=0;be<M.length;be++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+be,36161,R.__webglColorRenderbuffer[be]);const Ee=n.get(M[be]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+be,3553,Ee,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function pe(T){return Math.min(h,T.samples)}function re(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(T){const M=o.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function le(T,M){const B=T.encoding,Z=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ic||B!==gr&&(B===Je?a===!1?e.has("EXT_sRGB")===!0&&Z===An?(T.format=ic,T.minFilter=fn,T.generateMipmaps=!1):M=op.sRGBToLinear(M):(Z!==An||ne!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.setTexture2D=oe,this.setTexture2DArray=Se,this.setTexture3D=G,this.setTextureCube=ue,this.rebindTextures=q,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=me,this.useMultisampledRTT=re}function nS(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===mr)return 5121;if(s===X0)return 32819;if(s===j0)return 32820;if(s===H0)return 5120;if(s===W0)return 5122;if(s===ip)return 5123;if(s===q0)return 5124;if(s===sr)return 5125;if(s===or)return 5126;if(s===Qs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Y0)return 6406;if(s===An)return 6408;if(s===$0)return 6409;if(s===K0)return 6410;if(s===ur)return 6402;if(s===as)return 34041;if(s===ic)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Z0)return 6403;if(s===J0)return 36244;if(s===Q0)return 33319;if(s===ex)return 33320;if(s===tx)return 36249;if(s===ja||s===Ya||s===$a||s===Ka)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cf||s===uf||s===ff||s===hf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ff)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===df||s===pf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===df)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mf||s===gf||s===_f||s===xf||s===vf||s===yf||s===bf||s===Mf||s===Sf||s===wf||s===Tf||s===Ef||s===Cf||s===Af)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_f)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ef)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Af)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Za)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Za)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ix||s===Pf||s===Rf||s===Lf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Za)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Pf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class iS extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rS={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ko;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sS extends en{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=sr),n===void 0&&u===as&&(n=Qr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1}}class oS extends yr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const b=[],x=[],y=new Set,S=new Map,A=new hn;A.layers.enable(1),A.viewport=new St;const L=new hn;L.layers.enable(2),L.viewport=new St;const v=[A,L],w=new iS;w.layers.enable(1),w.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ue=b[G];return ue===void 0&&(ue=new wl,b[G]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(G){let ue=b[G];return ue===void 0&&(ue=new wl,b[G]=ue),ue.getGripSpace()},this.getHand=function(G){let ue=b[G];return ue===void 0&&(ue=new wl,b[G]=ue),ue.getHandSpace()};function z(G){const ue=x.indexOf(G.inputSource);if(ue===-1)return;const de=b[ue];de!==void 0&&de.dispatchEvent({type:G.type,data:G.inputSource})}function N(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let G=0;G<b.length;G++){const ue=x[G];ue!==null&&(x[G]=null,b[G].disconnect(ue))}D=null,W=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,_=null,Se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),_=new _r(p.framebufferWidth,p.framebufferHeight,{format:An,type:mr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,de=null,F=null;d.depth&&(F=d.stencil?35056:33190,ue=d.stencil?as:ur,de=d.stencil?Qr:sr);const I={colorFormat:32856,depthFormat:F,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(I),r.updateRenderState({layers:[f]}),_=new _r(f.textureWidth,f.textureHeight,{format:An,type:mr,depthTexture:new sS(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const ie=e.properties.get(_);ie.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(G){for(let ue=0;ue<G.removed.length;ue++){const de=G.removed[ue],F=x.indexOf(de);F>=0&&(x[F]=null,b[F].disconnect(de))}for(let ue=0;ue<G.added.length;ue++){const de=G.added[ue];let F=x.indexOf(de);if(F===-1){for(let ie=0;ie<b.length;ie++)if(ie>=x.length){x.push(de),F=ie;break}else if(x[ie]===null){x[ie]=de,F=ie;break}if(F===-1)break}const I=b[F];I&&I.connect(de)}}const j=new Y,$=new Y;function K(G,ue,de){j.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const F=j.distanceTo($),I=ue.projectionMatrix.elements,ie=de.projectionMatrix.elements,ae=I[14]/(I[10]-1),ge=I[14]/(I[10]+1),me=(I[9]+1)/I[5],Te=(I[9]-1)/I[5],E=(I[8]-1)/I[0],P=(ie[8]+1)/ie[0],q=ae*E,J=ae*P,Q=F/(-E+P),fe=Q*-E;ue.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(fe),G.translateZ(Q),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const pe=ae+Q,re=ge+Q,_e=q-fe,le=J+(F-fe),T=me*ge/re*pe,M=Te*ge/re*pe;G.projectionMatrix.makePerspective(_e,le,T,M,pe,re)}function H(G,ue){ue===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ue.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;w.near=L.near=A.near=G.near,w.far=L.far=A.far=G.far,(D!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,W=w.far);const ue=G.parent,de=w.cameras;H(w,ue);for(let I=0;I<de.length;I++)H(de[I],ue);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),G.matrix.copy(w.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const F=G.children;for(let I=0,ie=F.length;I<ie;I++)F[I].updateMatrixWorld(!0);de.length===2?K(w,A,L):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return y};let ce=null;function oe(G,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let F=!1;de.length!==w.cameras.length&&(w.cameras.length=0,F=!0);for(let I=0;I<de.length;I++){const ie=de[I];let ae=null;if(p!==null)ae=p.getViewport(ie);else{const me=h.getViewSubImage(f,ie);ae=me.viewport,I===0&&(e.setRenderTargetTextures(_,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(_))}let ge=v[I];ge===void 0&&(ge=new hn,ge.layers.enable(I),ge.viewport=new St,v[I]=ge),ge.matrix.fromArray(ie.transform.matrix),ge.projectionMatrix.fromArray(ie.projectionMatrix),ge.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&w.matrix.copy(ge.matrix),F===!0&&w.cameras.push(ge)}}for(let de=0;de<b.length;de++){const F=x[de],I=b[de];F!==null&&I!==void 0&&I.update(F,ue,c||o)}if(ce&&ce(G,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let de=null;for(const F of y)ue.detectedPlanes.has(F)||(de===null&&(de=[]),de.push(F));if(de!==null)for(const F of de)y.delete(F),S.delete(F),n.dispatchEvent({type:"planeremoved",data:F});for(const F of ue.detectedPlanes)if(!y.has(F))y.add(F),S.set(F,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:F});else{const I=S.get(F);F.lastChangedTime>I&&(S.set(F,F.lastChangedTime),n.dispatchEvent({type:"planechanged",data:F}))}}g=null}const Se=new _p;Se.setAnimationLoop(oe),this.setAnimationLoop=function(G){ce=G},this.dispose=function(){}}}function aS(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,dp(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Qt&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Qt&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Qt&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function lS(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(b,S);const A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){const x=h();b.__bindingPointIndex=x;const y=i.createBuffer(),S=b.__size,A=b.usage;return i.bindBuffer(35345,y),i.bufferData(35345,S,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],y=b.uniforms,S=b.__cache;i.bindBuffer(35345,x);for(let A=0,L=y.length;A<L;A++){const v=y[A];if(p(v,A,S)===!0){const w=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let z=0;z<D.length;z++){const N=D[z],O=d(N);typeof N=="number"?(v.__data[0]=N,i.bufferSubData(35345,w+W,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=N.elements[0],v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=N.elements[0],v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=N.elements[0]):(N.toArray(v.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,v.__data)}}i.bindBuffer(35345,null)}function p(b,x,y){const S=b.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const A=Array.isArray(S)?S:[S],L=[];for(let v=0;v<A.length;v++)L.push(A[v].clone());y[x]=L}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const A=Array.isArray(y[x])?y[x]:[y[x]],L=Array.isArray(S)?S:[S];for(let v=0;v<A.length;v++){const w=A[v];if(w.equals(L[v])===!1)return w.copy(L[v]),!0}}return!1}function g(b){const x=b.uniforms;let y=0;const S=16;let A=0;for(let L=0,v=x.length;L<v;L++){const w=x[L],D={boundary:0,storage:0},W=Array.isArray(w.value)?w.value:[w.value];for(let z=0,N=W.length;z<N;z++){const O=W[z],j=d(O);D.boundary+=j.boundary,D.storage+=j.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){A=y%S;const z=S-A;A!==0&&z-D.boundary<0&&(y+=S-A,w.__offset=y)}y+=D.storage}return A=y%S,A>0&&(y+=S-A),b.__size=y,b.__cache={},this}function d(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function cS(){const i=ra("canvas");return i.style.display="block",i}function Mp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:cS(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gr,this.physicallyCorrectLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const d=this;let m=!1,_=0,b=0,x=null,y=-1,S=null;const A=new St,L=new St;let v=null,w=e.width,D=e.height,W=1,z=null,N=null;const O=new St(0,0,w,D),j=new St(0,0,w,D);let $=!1;const K=new gp;let H=!1,ce=!1,oe=null;const Se=new wt,G=new Be,ue=new Y,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return x===null?W:1}let I=t;function ie(C,X){for(let te=0;te<C.length;te++){const V=C[te],se=e.getContext(V,X);if(se!==null)return se}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Le,!1),I===null){const X=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&X.shift(),I=ie(X,C),I===null)throw ie(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,ge,me,Te,E,P,q,J,Q,fe,pe,re,_e,le,T,M,B,Z,ne,he,ye,R,k,be;function Ee(){ae=new yb(I),ge=new db(I,ae,i),ae.init(ge),R=new nS(I,ae,ge),me=new eS(I,ae,ge),Te=new Sb,E=new kM,P=new tS(I,ae,me,E,ge,R,Te),q=new mb(d),J=new vb(d),Q=new Lx(I,ge),k=new fb(I,ae,Q,ge),fe=new bb(I,Q,Te,k),pe=new Cb(I,fe,Q,Te),ne=new Eb(I,ge,P),M=new pb(E),re=new BM(d,q,J,ae,ge,k,M),_e=new aS(d,E),le=new VM,T=new YM(ae,ge),Z=new ub(d,q,J,me,pe,u,o),B=new QM(d,pe,ge),be=new lS(I,Te,ge,me),he=new hb(I,ae,Te,ge),ye=new Mb(I,ae,Te,ge),Te.programs=re.programs,d.capabilities=ge,d.extensions=ae,d.properties=E,d.renderLists=le,d.shadowMap=B,d.state=me,d.info=Te}Ee();const Me=new oS(d,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(w,D,!1))},this.getSize=function(C){return C.set(w,D)},this.setSize=function(C,X,te){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,D=X,e.width=Math.floor(C*W),e.height=Math.floor(X*W),te!==!1&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(w*W,D*W).floor()},this.setDrawingBufferSize=function(C,X,te){w=C,D=X,W=te,e.width=Math.floor(C*te),e.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,X,te,V){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,X,te,V),me.viewport(A.copy(O).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(j)},this.setScissor=function(C,X,te,V){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,X,te,V),me.scissor(L.copy(j).multiplyScalar(W).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){me.setScissorTest($=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,X=!0,te=!0){let V=0;C&&(V|=16384),X&&(V|=256),te&&(V|=1024),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),le.dispose(),T.dispose(),E.dispose(),q.dispose(),J.dispose(),pe.dispose(),k.dispose(),be.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ce),Me.removeEventListener("sessionend",Pe),oe&&(oe.dispose(),oe=null),je.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Te.autoReset,X=B.enabled,te=B.autoUpdate,V=B.needsUpdate,se=B.type;Ee(),Te.autoReset=C,B.enabled=X,B.autoUpdate=te,B.needsUpdate=V,B.type=se}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const X=C.target;X.removeEventListener("dispose",ze),$e(X)}function $e(C){U(C),E.remove(C)}function U(C){const X=E.get(C).programs;X!==void 0&&(X.forEach(function(te){re.releaseProgram(te)}),C.isShaderMaterial&&re.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,V,se,Re){X===null&&(X=de);const De=se.isMesh&&se.matrixWorld.determinant()<0,Ne=Om(C,X,te,V,se);me.setMaterial(V,De);let Ue=te.index,qe=1;V.wireframe===!0&&(Ue=fe.getWireframeAttribute(te),qe=2);const Ge=te.drawRange,Ve=te.attributes.position;let lt=Ge.start*qe,qt=(Ge.start+Ge.count)*qe;Re!==null&&(lt=Math.max(lt,Re.start*qe),qt=Math.min(qt,(Re.start+Re.count)*qe)),Ue!==null?(lt=Math.max(lt,0),qt=Math.min(qt,Ue.count)):Ve!=null&&(lt=Math.max(lt,0),qt=Math.min(qt,Ve.count));const qn=qt-lt;if(qn<0||qn===1/0)return;k.setup(se,V,Ne,te,Ue);let Ui,ct=he;if(Ue!==null&&(Ui=Q.get(Ue),ct=ye,ct.setIndex(Ui)),se.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*F()),ct.setMode(1)):ct.setMode(4);else if(se.isLine){let He=V.linewidth;He===void 0&&(He=1),me.setLineWidth(He*F()),se.isLineSegments?ct.setMode(1):se.isLineLoop?ct.setMode(2):ct.setMode(3)}else se.isPoints?ct.setMode(0):se.isSprite&&ct.setMode(4);if(se.isInstancedMesh)ct.renderInstances(lt,qn,se.count);else if(te.isInstancedBufferGeometry){const He=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ia=Math.min(te.instanceCount,He);ct.renderInstances(lt,qn,Ia)}else ct.render(lt,qn)},this.compile=function(C,X){function te(V,se,Re){V.transparent===!0&&V.side===ni&&V.forceSinglePass===!1?(V.side=Qt,V.needsUpdate=!0,on(V,se,Re),V.side=Li,V.needsUpdate=!0,on(V,se,Re),V.side=ni):on(V,se,Re)}f=T.get(C),f.init(),g.push(f),C.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(d.physicallyCorrectLights),C.traverse(function(V){const se=V.material;if(se)if(Array.isArray(se))for(let Re=0;Re<se.length;Re++){const De=se[Re];te(De,C,V)}else te(se,C,V)}),g.pop(),f=null};let ee=null;function xe(C){ee&&ee(C)}function Ce(){je.stop()}function Pe(){je.start()}const je=new _p;je.setAnimationLoop(xe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(C){ee=C,Me.setAnimationLoop(C),C===null?je.stop():je.start()},Me.addEventListener("sessionstart",Ce),Me.addEventListener("sessionend",Pe),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(X),X=Me.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,X,x),f=T.get(C,g.length),f.init(),g.push(f),Se.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Se),ce=this.localClippingEnabled,H=M.init(this.clippingPlanes,ce),h=le.get(C,p.length),h.init(),p.push(h),_t(C,X,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(z,N),H===!0&&M.beginShadows();const te=f.state.shadowsArray;if(B.render(te,C,X),H===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,C),f.setupLights(d.physicallyCorrectLights),X.isArrayCamera){const V=X.cameras;for(let se=0,Re=V.length;se<Re;se++){const De=V[se];Et(h,C,De,De.viewport)}}else Et(h,C,X);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(d,C,X),k.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function _t(C,X,te,V){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){V&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const De=pe.update(C),Ne=C.material;Ne.visible&&h.push(C,De,Ne,te,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Te.render.frame&&(C.skeleton.update(),C.skeleton.frame=Te.render.frame),!C.frustumCulled||K.intersectsObject(C))){V&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const De=pe.update(C),Ne=C.material;if(Array.isArray(Ne)){const Ue=De.groups;for(let qe=0,Ge=Ue.length;qe<Ge;qe++){const Ve=Ue[qe],lt=Ne[Ve.materialIndex];lt&&lt.visible&&h.push(C,De,lt,te,ue.z,Ve)}}else Ne.visible&&h.push(C,De,Ne,te,ue.z,null)}}const Re=C.children;for(let De=0,Ne=Re.length;De<Ne;De++)_t(Re[De],X,te,V)}function Et(C,X,te,V){const se=C.opaque,Re=C.transmissive,De=C.transparent;f.setupLightsView(te),H===!0&&M.setGlobalState(d.clippingPlanes,te),Re.length>0&&zi(se,X,te),V&&me.viewport(A.copy(V)),se.length>0&&Qe(se,X,te),Re.length>0&&Qe(Re,X,te),De.length>0&&Qe(De,X,te),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function zi(C,X,te){const V=ge.isWebGL2;oe===null&&(oe=new _r(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Qs:mr,minFilter:Js,samples:V&&s===!0?4:0})),d.getDrawingBufferSize(G),V?oe.setSize(G.x,G.y):oe.setSize(rc(G.x),rc(G.y));const se=d.getRenderTarget();d.setRenderTarget(oe),d.clear();const Re=d.toneMapping;d.toneMapping=oi,Qe(C,X,te),d.toneMapping=Re,P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),d.setRenderTarget(se)}function Qe(C,X,te){const V=X.isScene===!0?X.overrideMaterial:null;for(let se=0,Re=C.length;se<Re;se++){const De=C[se],Ne=De.object,Ue=De.geometry,qe=V===null?De.material:V,Ge=De.group;Ne.layers.test(te.layers)&&Wn(Ne,X,te,Ue,qe,Ge)}}function Wn(C,X,te,V,se,Re){C.onBeforeRender(d,X,te,V,se,Re),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(d,X,te,V,C,Re),se.transparent===!0&&se.side===ni&&se.forceSinglePass===!1?(se.side=Qt,se.needsUpdate=!0,d.renderBufferDirect(te,X,V,se,C,Re),se.side=Li,se.needsUpdate=!0,d.renderBufferDirect(te,X,V,se,C,Re),se.side=ni):d.renderBufferDirect(te,X,V,se,C,Re),C.onAfterRender(d,X,te,V,se,Re)}function on(C,X,te){X.isScene!==!0&&(X=de);const V=E.get(C),se=f.state.lights,Re=f.state.shadowsArray,De=se.state.version,Ne=re.getParameters(C,se.state,Re,X,te),Ue=re.getProgramCacheKey(Ne);let qe=V.programs;V.environment=C.isMeshStandardMaterial?X.environment:null,V.fog=X.fog,V.envMap=(C.isMeshStandardMaterial?J:q).get(C.envMap||V.environment),qe===void 0&&(C.addEventListener("dispose",ze),qe=new Map,V.programs=qe);let Ge=qe.get(Ue);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===De)return xu(C,Ne),Ge}else Ne.uniforms=re.getUniforms(C),C.onBuild(te,Ne,d),C.onBeforeCompile(Ne,d),Ge=re.acquireProgram(Ne,Ue),qe.set(Ue,Ge),V.uniforms=Ne.uniforms;const Ve=V.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=M.uniform),xu(C,Ne),V.needsLights=Nm(C),V.lightsStateVersion=De,V.needsLights&&(Ve.ambientLightColor.value=se.state.ambient,Ve.lightProbe.value=se.state.probe,Ve.directionalLights.value=se.state.directional,Ve.directionalLightShadows.value=se.state.directionalShadow,Ve.spotLights.value=se.state.spot,Ve.spotLightShadows.value=se.state.spotShadow,Ve.rectAreaLights.value=se.state.rectArea,Ve.ltc_1.value=se.state.rectAreaLTC1,Ve.ltc_2.value=se.state.rectAreaLTC2,Ve.pointLights.value=se.state.point,Ve.pointLightShadows.value=se.state.pointShadow,Ve.hemisphereLights.value=se.state.hemi,Ve.directionalShadowMap.value=se.state.directionalShadowMap,Ve.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ve.spotShadowMap.value=se.state.spotShadowMap,Ve.spotLightMatrix.value=se.state.spotLightMatrix,Ve.spotLightMap.value=se.state.spotLightMap,Ve.pointShadowMap.value=se.state.pointShadowMap,Ve.pointShadowMatrix.value=se.state.pointShadowMatrix);const lt=Ge.getUniforms(),qt=Yo.seqWithValue(lt.seq,Ve);return V.currentProgram=Ge,V.uniformsList=qt,Ge}function xu(C,X){const te=E.get(C);te.outputEncoding=X.outputEncoding,te.instancing=X.instancing,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Om(C,X,te,V,se){X.isScene!==!0&&(X=de),P.resetTextureUnits();const Re=X.fog,De=V.isMeshStandardMaterial?X.environment:null,Ne=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:gr,Ue=(V.isMeshStandardMaterial?J:q).get(V.envMap||De),qe=V.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ge=!!V.normalMap&&!!te.attributes.tangent,Ve=!!te.morphAttributes.position,lt=!!te.morphAttributes.normal,qt=!!te.morphAttributes.color,qn=V.toneMapped?d.toneMapping:oi,Ui=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ct=Ui!==void 0?Ui.length:0,He=E.get(V),Ia=f.state.lights;if(H===!0&&(ce===!0||C!==S)){const Xt=C===S&&V.id===y;M.setState(V,C,Xt)}let xt=!1;V.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ia.state.version||He.outputEncoding!==Ne||se.isInstancedMesh&&He.instancing===!1||!se.isInstancedMesh&&He.instancing===!0||se.isSkinnedMesh&&He.skinning===!1||!se.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ue||V.fog===!0&&He.fog!==Re||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==M.numPlanes||He.numIntersection!==M.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Ge||He.morphTargets!==Ve||He.morphNormals!==lt||He.morphColors!==qt||He.toneMapping!==qn||ge.isWebGL2===!0&&He.morphTargetsCount!==ct)&&(xt=!0):(xt=!0,He.__version=V.version);let Bi=He.currentProgram;xt===!0&&(Bi=on(V,X,se));let vu=!1,Ms=!1,Oa=!1;const It=Bi.getUniforms(),ki=He.uniforms;if(me.useProgram(Bi.program)&&(vu=!0,Ms=!0,Oa=!0),V.id!==y&&(y=V.id,Ms=!0),vu||S!==C){if(It.setValue(I,"projectionMatrix",C.projectionMatrix),ge.logarithmicDepthBuffer&&It.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,Ms=!0,Oa=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Xt=It.map.cameraPosition;Xt!==void 0&&Xt.setValue(I,ue.setFromMatrixPosition(C.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&It.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||se.isSkinnedMesh)&&It.setValue(I,"viewMatrix",C.matrixWorldInverse)}if(se.isSkinnedMesh){It.setOptional(I,se,"bindMatrix"),It.setOptional(I,se,"bindMatrixInverse");const Xt=se.skeleton;Xt&&(ge.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),It.setValue(I,"boneTexture",Xt.boneTexture,P),It.setValue(I,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fa=te.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&ge.isWebGL2===!0)&&ne.update(se,te,V,Bi),(Ms||He.receiveShadow!==se.receiveShadow)&&(He.receiveShadow=se.receiveShadow,It.setValue(I,"receiveShadow",se.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ki.envMap.value=Ue,ki.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ms&&(It.setValue(I,"toneMappingExposure",d.toneMappingExposure),He.needsLights&&Fm(ki,Oa),Re&&V.fog===!0&&_e.refreshFogUniforms(ki,Re),_e.refreshMaterialUniforms(ki,V,W,D,oe),Yo.upload(I,He.uniformsList,ki,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yo.upload(I,He.uniformsList,ki,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&It.setValue(I,"center",se.center),It.setValue(I,"modelViewMatrix",se.modelViewMatrix),It.setValue(I,"normalMatrix",se.normalMatrix),It.setValue(I,"modelMatrix",se.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xt=V.uniformsGroups;for(let Na=0,zm=Xt.length;Na<zm;Na++)if(ge.isWebGL2){const yu=Xt[Na];be.update(yu,Bi),be.bind(yu,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function Fm(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Nm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,X,te){E.get(C.texture).__webglTexture=X,E.get(C.depthTexture).__webglTexture=te;const V=E.get(C);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=te===void 0,V.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const te=E.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){x=C,_=X,b=te;let V=!0,se=null,Re=!1,De=!1;if(C){const Ue=E.get(C);Ue.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),V=!1):Ue.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ue.__hasExternalTextures&&P.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ge=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(se=Ge[X],Re=!0):ge.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?se=E.get(C).__webglMultisampledFramebuffer:se=Ge,A.copy(C.viewport),L.copy(C.scissor),v=C.scissorTest}else A.copy(O).multiplyScalar(W).floor(),L.copy(j).multiplyScalar(W).floor(),v=$;if(me.bindFramebuffer(36160,se)&&ge.drawBuffers&&V&&me.drawBuffers(C,se),me.viewport(A),me.scissor(L),me.setScissorTest(v),Re){const Ue=E.get(C.texture);I.framebufferTexture2D(36160,36064,34069+X,Ue.__webglTexture,te)}else if(De){const Ue=E.get(C.texture),qe=X||0;I.framebufferTextureLayer(36160,36064,Ue.__webglTexture,te||0,qe)}y=-1},this.readRenderTargetPixels=function(C,X,te,V,se,Re,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){me.bindFramebuffer(36160,Ne);try{const Ue=C.texture,qe=Ue.format,Ge=Ue.type;if(qe!==An&&R.convert(qe)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Qs&&(ae.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ge!==mr&&R.convert(Ge)!==I.getParameter(35738)&&!(Ge===or&&(ge.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-V&&te>=0&&te<=C.height-se&&I.readPixels(X,te,V,se,R.convert(qe),R.convert(Ge),Re)}finally{const Ue=x!==null?E.get(x).__webglFramebuffer:null;me.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(C,X,te=0){const V=Math.pow(2,-te),se=Math.floor(X.image.width*V),Re=Math.floor(X.image.height*V);P.setTexture2D(X,0),I.copyTexSubImage2D(3553,te,0,0,C.x,C.y,se,Re),me.unbindTexture()},this.copyTextureToTexture=function(C,X,te,V=0){const se=X.image.width,Re=X.image.height,De=R.convert(te.format),Ne=R.convert(te.type);P.setTexture2D(te,0),I.pixelStorei(37440,te.flipY),I.pixelStorei(37441,te.premultiplyAlpha),I.pixelStorei(3317,te.unpackAlignment),X.isDataTexture?I.texSubImage2D(3553,V,C.x,C.y,se,Re,De,Ne,X.image.data):X.isCompressedTexture?I.compressedTexSubImage2D(3553,V,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):I.texSubImage2D(3553,V,C.x,C.y,De,Ne,X.image),V===0&&te.generateMipmaps&&I.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te,V,se=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Ue=R.convert(V.format),qe=R.convert(V.type);let Ge;if(V.isData3DTexture)P.setTexture3D(V,0),Ge=32879;else if(V.isDataArrayTexture)P.setTexture2DArray(V,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,V.flipY),I.pixelStorei(37441,V.premultiplyAlpha),I.pixelStorei(3317,V.unpackAlignment);const Ve=I.getParameter(3314),lt=I.getParameter(32878),qt=I.getParameter(3316),qn=I.getParameter(3315),Ui=I.getParameter(32877),ct=te.isCompressedTexture?te.mipmaps[0]:te.image;I.pixelStorei(3314,ct.width),I.pixelStorei(32878,ct.height),I.pixelStorei(3316,C.min.x),I.pixelStorei(3315,C.min.y),I.pixelStorei(32877,C.min.z),te.isDataTexture||te.isData3DTexture?I.texSubImage3D(Ge,se,X.x,X.y,X.z,Re,De,Ne,Ue,qe,ct.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,se,X.x,X.y,X.z,Re,De,Ne,Ue,ct.data)):I.texSubImage3D(Ge,se,X.x,X.y,X.z,Re,De,Ne,Ue,qe,ct),I.pixelStorei(3314,Ve),I.pixelStorei(32878,lt),I.pixelStorei(3316,qt),I.pixelStorei(3315,qn),I.pixelStorei(32877,Ui),se===0&&V.generateMipmaps&&I.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,me.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uS extends Mp{}uS.prototype.isWebGL1Renderer=!0;class fS extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Qc extends Fi{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new Y,f=new Y,p=[],g=[],d=[],m=[];for(let _=0;_<=n;_++){const b=[],x=_/n;let y=0;_==0&&o==0?y=.5/t:_==n&&l==Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const A=S/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),m.push(A+y,1-x),b.push(c++)}u.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const x=u[_][b+1],y=u[_][b],S=u[_+1][b],A=u[_+1][b+1];(_!==0||o>0)&&p.push(x,y,A),(_!==n-1||l<Math.PI)&&p.push(y,S,A)}this.setIndex(p),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(d,3)),this.setAttribute("uv",new kn(m,2))}static fromJSON(e){return new Qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ph();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ph(){return(typeof performance>"u"?Date:performance).now()}class mh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const gh={type:"change"},Tl={type:"start"},_h={type:"end"};class dS extends yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",le),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gh),n.update(),s=r.NONE},this.update=function(){const R=new Y,k=new xr().setFromUnitVectors(e.up,new Y(0,1,0)),be=k.clone().invert(),Ee=new Y,Me=new xr,Ae=2*Math.PI;return function(){const Le=n.object.position;R.copy(Le).sub(n.target),R.applyQuaternion(k),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&w(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=n.minAzimuthAngle,$e=n.maxAzimuthAngle;return isFinite(ze)&&isFinite($e)&&(ze<-Math.PI?ze+=Ae:ze>Math.PI&&(ze-=Ae),$e<-Math.PI?$e+=Ae:$e>Math.PI&&($e-=Ae),ze<=$e?a.theta=Math.max(ze,Math.min($e,a.theta)):a.theta=a.theta>(ze+$e)/2?Math.max(ze,a.theta):Math.min($e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(be),Le.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ee.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o?(n.dispatchEvent(gh),Ee.copy(n.object.position),Me.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",q),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",_e),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",Q),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",le)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new mh,l=new mh;let c=1;const u=new Y;let h=!1;const f=new Be,p=new Be,g=new Be,d=new Be,m=new Be,_=new Be,b=new Be,x=new Be,y=new Be,S=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(R){l.theta-=R}function D(R){l.phi-=R}const W=function(){const R=new Y;return function(be,Ee){R.setFromMatrixColumn(Ee,0),R.multiplyScalar(-be),u.add(R)}}(),z=function(){const R=new Y;return function(be,Ee){n.screenSpacePanning===!0?R.setFromMatrixColumn(Ee,1):(R.setFromMatrixColumn(Ee,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(be),u.add(R)}}(),N=function(){const R=new Y;return function(be,Ee){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;R.copy(Ae).sub(n.target);let we=R.length();we*=Math.tan(n.object.fov/2*Math.PI/180),W(2*be*we/Me.clientHeight,n.object.matrix),z(2*Ee*we/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(be*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),z(Ee*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(R){f.set(R.clientX,R.clientY)}function K(R){b.set(R.clientX,R.clientY)}function H(R){d.set(R.clientX,R.clientY)}function ce(R){p.set(R.clientX,R.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(p),n.update()}function oe(R){x.set(R.clientX,R.clientY),y.subVectors(x,b),y.y>0?O(v()):y.y<0&&j(v()),b.copy(x),n.update()}function Se(R){m.set(R.clientX,R.clientY),_.subVectors(m,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(m),n.update()}function G(R){R.deltaY<0?j(v()):R.deltaY>0&&O(v()),n.update()}function ue(R){let k=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),k=!0;break}k&&(R.preventDefault(),n.update())}function de(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),k=.5*(S[0].pageY+S[1].pageY);f.set(R,k)}}function F(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),k=.5*(S[0].pageY+S[1].pageY);d.set(R,k)}}function I(){const R=S[0].pageX-S[1].pageX,k=S[0].pageY-S[1].pageY,be=Math.sqrt(R*R+k*k);b.set(0,be)}function ie(){n.enableZoom&&I(),n.enablePan&&F()}function ae(){n.enableZoom&&I(),n.enableRotate&&de()}function ge(R){if(S.length==1)p.set(R.pageX,R.pageY);else{const be=ye(R),Ee=.5*(R.pageX+be.x),Me=.5*(R.pageY+be.y);p.set(Ee,Me)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(p)}function me(R){if(S.length===1)m.set(R.pageX,R.pageY);else{const k=ye(R),be=.5*(R.pageX+k.x),Ee=.5*(R.pageY+k.y);m.set(be,Ee)}_.subVectors(m,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(m)}function Te(R){const k=ye(R),be=R.pageX-k.x,Ee=R.pageY-k.y,Me=Math.sqrt(be*be+Ee*Ee);x.set(0,Me),y.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),O(y.y),b.copy(x)}function E(R){n.enableZoom&&Te(R),n.enablePan&&me(R)}function P(R){n.enableZoom&&Te(R),n.enableRotate&&ge(R)}function q(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",J),n.domElement.addEventListener("pointerup",Q)),Z(R),R.pointerType==="touch"?T(R):pe(R))}function J(R){n.enabled!==!1&&(R.pointerType==="touch"?M(R):re(R))}function Q(R){ne(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",Q)),n.dispatchEvent(_h),s=r.NONE}function fe(R){ne(R)}function pe(R){let k;switch(R.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Mr.DOLLY:if(n.enableZoom===!1)return;K(R),s=r.DOLLY;break;case Mr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;H(R),s=r.PAN}else{if(n.enableRotate===!1)return;$(R),s=r.ROTATE}break;case Mr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;$(R),s=r.ROTATE}else{if(n.enablePan===!1)return;H(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Tl)}function re(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(R);break;case r.DOLLY:if(n.enableZoom===!1)return;oe(R);break;case r.PAN:if(n.enablePan===!1)return;Se(R);break}}function _e(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Tl),G(R),n.dispatchEvent(_h))}function le(R){n.enabled===!1||n.enablePan===!1||ue(R)}function T(R){switch(he(R),S.length){case 1:switch(n.touches.ONE){case Sr.ROTATE:if(n.enableRotate===!1)return;de(),s=r.TOUCH_ROTATE;break;case Sr.PAN:if(n.enablePan===!1)return;F(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Sr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(),s=r.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Tl)}function M(R){switch(he(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;me(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(R),n.update();break;default:s=r.NONE}}function B(R){n.enabled!==!1&&R.preventDefault()}function Z(R){S.push(R)}function ne(R){delete A[R.pointerId];for(let k=0;k<S.length;k++)if(S[k].pointerId==R.pointerId){S.splice(k,1);return}}function he(R){let k=A[R.pointerId];k===void 0&&(k=new Be,A[R.pointerId]=k),k.set(R.pageX,R.pageY)}function ye(R){const k=R.pointerId===S[0].pointerId?S[1]:S[0];return A[k.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",q),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",_e,{passive:!1}),this.update()}}const pS=`uniform float uTime;
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
`,mS=`uniform vec3 uColor;
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
}`,gS={class:"nav"},_S=co({__name:"Canvas",setup(i){const e=md();Zr("duration",2);const n=new Mp({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio);const r=new hn(75,window.innerWidth/window.innerHeight,1,10);r.position.set(0,0,3);const s=new fS,o=new Qc(1,32,32),a={uColor:{value:new tt("#000000")},uTime:{value:0},uBlueWave:{value:0},uGreenWave:{value:0},uReadWave:{value:0},uResolution:{value:new Be(0,0)},uRatio:{value:0}},l=new Di({vertexShader:pS,fragmentShader:mS,side:ni,uniforms:a});Zr("mat",l);const c=new ii(o,l);s.add(c),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)},!1);const u=()=>{document.addEventListener("touchmove",function(g){g.preventDefault()},{passive:!1});const p=new dS(r,n.domElement);p.enableDamping=!0,p.dampingFactor=.5},h=new hS,f=()=>{requestAnimationFrame(()=>{f()}),n.render(s,r);const p=h.getElapsedTime();a.uTime.value=p};return kc(()=>{e.value.appendChild(n.domElement),u(),f()}),(p,g)=>{const d=Du("router-link"),m=Du("router-view");return na(),Xd(Tn,null,[ia("nav",gS,[Mt(d,{to:"/",class:"nav__link"},{default:kr(()=>[Xo("Red")]),_:1}),Mt(d,{to:"/blue",class:"nav__link"},{default:kr(()=>[Xo("Blue")]),_:1}),Mt(d,{to:"/green",class:"nav__link"},{default:kr(()=>[Xo("Green")]),_:1})]),ia("div",{ref_key:"canvas",ref:e,id:"canvas"},null,512),Mt(m,null,{default:kr(({Component:_})=>[Mt(Yc,null,{default:kr(()=>[(na(),jd(o_(_)))]),_:2},1024)]),_:1})],64)}}});const xS=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},vS=xS(_S,[["__scopeId","data-v-d4c17b1b"]]),yS=co({__name:"App",setup(i){return(e,t)=>(na(),jd(vS))}}),bS="modulepreload",MS=function(i,e){return new URL(i,e).href},xh={},vh=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=MS(s,n),s in xh)return;xh[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":bS,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof window<"u";function SS(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function El(i,e){const t={};for(const n in e){const r=e[n];t[n]=Dn(r)?r.map(i):i(r)}return t}const Gs=()=>{},Dn=Array.isArray,wS=/\/$/,TS=i=>i.replace(wS,"");function Cl(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=PS(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function ES(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yh(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function CS(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&cs(e.matched[n],t.matched[r])&&Sp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function cs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Sp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!AS(i[t],e[t]))return!1;return!0}function AS(i,e){return Dn(i)?bh(i,e):Dn(e)?bh(e,i):i===e}function bh(i,e){return Dn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function PS(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var to;(function(i){i.pop="pop",i.push="push"})(to||(to={}));var Vs;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Vs||(Vs={}));function RS(i){if(!i)if(Vr){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),TS(i)}const LS=/^[^#]+#/;function DS(i,e){return i.replace(LS,"#")+e}function IS(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function OS(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=IS(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mh(i,e){return(history.state?history.state.position-e:-1)+i}const oc=new Map;function FS(i,e){oc.set(i,e)}function NS(i){const e=oc.get(i);return oc.delete(i),e}let zS=()=>location.protocol+"//"+location.host;function wp(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),yh(l,"")}return yh(t,i)+n+r}function US(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const p=wp(i,location),g=t.value,d=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===g){o=null;return}m=d?f.position-d.position:0}else n(p);r.forEach(_=>{_(t.value,g,{delta:m,type:to.pop,direction:m?m>0?Vs.forward:Vs.back:Vs.unknown})})};function l(){o=t.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ye({},f.state,{scroll:Pa()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Sh(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?Pa():null}}function BS(i){const{history:e,location:t}=window,n={value:wp(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:zS()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ye({},e.state,Sh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=Ye({},r.value,e.state,{forward:l,scroll:Pa()});s(u.current,u,!0);const h=Ye({},Sh(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function kS(i){i=RS(i);const e=BS(i),t=US(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ye({location:"",base:i,go:n,createHref:DS.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function GS(i){return typeof i=="string"||i&&typeof i=="object"}function Tp(i){return typeof i=="string"||typeof i=="symbol"}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ep=Symbol("");var wh;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(wh||(wh={}));function us(i,e){return Ye(new Error,{type:i,[Ep]:!0},e)}function Zn(i,e){return i instanceof Error&&Ep in i&&(e==null||!!(i.type&e))}const Th="[^/]+?",VS={sensitive:!1,strict:!1,start:!0,end:!0},HS=/[.+*?^${}()[\]/\\]/g;function WS(i,e){const t=Ye({},VS,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(HS,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=f;s.push({name:g,repeatable:d,optional:m});const b=_||Th;if(b!==Th){p+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+y.message)}}let x=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=20,m&&(p+=-8),d&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(Dn(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Dn(_)?_.join("/"):_;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function qS(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function XS(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=qS(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Eh(n))return 1;if(Eh(r))return-1}return r.length-n.length}function Eh(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const jS={type:0,value:""},YS=/[a-zA-Z0-9_]/;function $S(i){if(!i)return[[]];if(i==="/")return[[jS]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:YS.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function KS(i,e,t){const n=WS($S(i.path),t),r=Ye(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ZS(i,e){const t=[],n=new Map;e=Ph({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const p=!f,g=JS(u);g.aliasOf=f&&f.record;const d=Ph(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of x)m.push(Ye({},g,{components:f?f.record.components:g.components,path:y,aliasOf:f?f.record:g}))}let _,b;for(const x of m){const{path:y}=x;if(h&&y[0]!=="/"){const S=h.record.path,A=S[S.length-1]==="/"?"":"/";x.path=h.record.path+(y&&A+y)}if(_=KS(x,h,d),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),p&&u.name&&!Ah(_)&&o(u.name)),g.children){const S=g.children;for(let A=0;A<S.length;A++)s(S[A],_,f&&f.children[A])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:Gs}function o(u){if(Tp(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&XS(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Cp(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Ah(u)&&n.set(u.record.name,u)}function c(u,h){let f,p={},g,d;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw us(1,{location:u});d=f.record.name,p=Ye(Ch(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Ch(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(p=f.parse(g),d=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw us(1,{location:u,currentLocation:h});d=f.record.name,p=Ye({},h.params,u.params),g=f.stringify(p)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:e1(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ch(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function JS(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:QS(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function QS(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Ah(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function e1(i){return i.reduce((e,t)=>Ye(e,t.meta),{})}function Ph(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Cp(i,e){return e.children.some(t=>t===i||Cp(i,t))}const Ap=/#/g,t1=/&/g,n1=/\//g,i1=/=/g,r1=/\?/g,Pp=/\+/g,s1=/%5B/g,o1=/%5D/g,Rp=/%5E/g,a1=/%60/g,Lp=/%7B/g,l1=/%7C/g,Dp=/%7D/g,c1=/%20/g;function eu(i){return encodeURI(""+i).replace(l1,"|").replace(s1,"[").replace(o1,"]")}function u1(i){return eu(i).replace(Lp,"{").replace(Dp,"}").replace(Rp,"^")}function ac(i){return eu(i).replace(Pp,"%2B").replace(c1,"+").replace(Ap,"%23").replace(t1,"%26").replace(a1,"`").replace(Lp,"{").replace(Dp,"}").replace(Rp,"^")}function f1(i){return ac(i).replace(i1,"%3D")}function h1(i){return eu(i).replace(Ap,"%23").replace(r1,"%3F")}function d1(i){return i==null?"":h1(i).replace(n1,"%2F")}function sa(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function p1(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Pp," "),o=s.indexOf("="),a=sa(o<0?s:s.slice(0,o)),l=o<0?null:sa(s.slice(o+1));if(a in e){let c=e[a];Dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Rh(i){let e="";for(let t in i){const n=i[t];if(t=f1(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Dn(n)?n.map(s=>s&&ac(s)):[n&&ac(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function m1(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Dn(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const Ip=Symbol(""),Lh=Symbol(""),tu=Symbol(""),Op=Symbol(""),lc=Symbol("");function Ls(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function g1(i,e,t){const n=()=>{i[e].delete(t)};Gc(n),Dd(n),Ld(()=>{i[e].add(t)}),i[e].add(t)}function _1(i){const e=vn(Ip,{}).value;e&&g1(e,"leaveGuards",i)}function yi(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(us(4,{from:t,to:e})):h instanceof Error?a(h):GS(h)?a(us(2,{from:e,to:h})):(s&&n.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Al(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(x1(a)){const c=(a.__vccOpts||a)[e];c&&r.push(yi(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=SS(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&yi(f,t,n,s,o)()}))}}return r}function x1(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Dh(i){const e=vn(tu),t=vn(Op),n=dn(()=>e.resolve($r(i.to))),r=dn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(cs.bind(null,u));if(f>-1)return f;const p=Ih(l[c-2]);return c>1&&Ih(u)===p&&h[h.length-1].path!==p?h.findIndex(cs.bind(null,l[c-2])):f}),s=dn(()=>r.value>-1&&M1(t.params,n.value.params)),o=dn(()=>r.value>-1&&r.value===t.matched.length-1&&Sp(t.params,n.value.params));function a(l={}){return b1(l)?e[$r(i.replace)?"replace":"push"]($r(i.to)).catch(Gs):Promise.resolve()}return{route:n,href:dn(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const v1=co({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dh,setup(i,{slots:e}){const t=lo(Dh(i)),{options:n}=vn(tu),r=dn(()=>({[Oh(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Oh(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:jc("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),y1=v1;function b1(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function M1(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Dn(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function Ih(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Oh=(i,e,t)=>i??e??t,S1=co({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=vn(lc),r=dn(()=>i.route||n.value),s=vn(Lh,0),o=dn(()=>{let c=$r(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dn(()=>r.value.matched[o.value]);Zr(Lh,dn(()=>o.value+1)),Zr(Ip,a),Zr(lc,r);const l=md();return Ho(()=>[l.value,a.value,i.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!cs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Fh(t.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=jc(f,Ye({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Fh(t.default,{Component:m,route:c})||m}}});function Fh(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const w1=S1;function T1(i){const e=ZS(i.routes,i),t=i.parseQuery||p1,n=i.stringifyQuery||Rh,r=i.history,s=Ls(),o=Ls(),a=Ls(),l=Dg(xi);let c=xi;Vr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=El.bind(null,F=>""+F),h=El.bind(null,d1),f=El.bind(null,sa);function p(F,I){let ie,ae;return Tp(F)?(ie=e.getRecordMatcher(F),ae=I):ae=F,e.addRoute(ae,ie)}function g(F){const I=e.getRecordMatcher(F);I&&e.removeRoute(I)}function d(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function _(F,I){if(I=Ye({},I||l.value),typeof F=="string"){const E=Cl(t,F,I.path),P=e.resolve({path:E.path},I),q=r.createHref(E.fullPath);return Ye(E,P,{params:f(P.params),hash:sa(E.hash),redirectedFrom:void 0,href:q})}let ie;if("path"in F)ie=Ye({},F,{path:Cl(t,F.path,I.path).path});else{const E=Ye({},F.params);for(const P in E)E[P]==null&&delete E[P];ie=Ye({},F,{params:h(F.params)}),I.params=h(I.params)}const ae=e.resolve(ie,I),ge=F.hash||"";ae.params=u(f(ae.params));const me=ES(n,Ye({},F,{hash:u1(ge),path:ae.path})),Te=r.createHref(me);return Ye({fullPath:me,hash:ge,query:n===Rh?m1(F.query):F.query||{}},ae,{redirectedFrom:void 0,href:Te})}function b(F){return typeof F=="string"?Cl(t,F,l.value.path):Ye({},F)}function x(F,I){if(c!==F)return us(8,{from:I,to:F})}function y(F){return L(F)}function S(F){return y(Ye(b(F),{replace:!0}))}function A(F){const I=F.matched[F.matched.length-1];if(I&&I.redirect){const{redirect:ie}=I;let ae=typeof ie=="function"?ie(F):ie;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=b(ae):{path:ae},ae.params={}),Ye({query:F.query,hash:F.hash,params:"path"in ae?{}:F.params},ae)}}function L(F,I){const ie=c=_(F),ae=l.value,ge=F.state,me=F.force,Te=F.replace===!0,E=A(ie);if(E)return L(Ye(b(E),{state:typeof E=="object"?Ye({},ge,E.state):ge,force:me,replace:Te}),I||ie);const P=ie;P.redirectedFrom=I;let q;return!me&&CS(n,ae,ie)&&(q=us(16,{to:P,from:ae}),oe(ae,ae,!0,!1)),(q?Promise.resolve(q):w(P,ae)).catch(J=>Zn(J)?Zn(J,2)?J:ce(J):K(J,P,ae)).then(J=>{if(J){if(Zn(J,2))return L(Ye({replace:Te},b(J.to),{state:typeof J.to=="object"?Ye({},ge,J.to.state):ge,force:me}),I||P)}else J=W(P,ae,!0,Te,ge);return D(P,ae,J),J})}function v(F,I){const ie=x(F,I);return ie?Promise.reject(ie):Promise.resolve()}function w(F,I){let ie;const[ae,ge,me]=E1(F,I);ie=Al(ae.reverse(),"beforeRouteLeave",F,I);for(const E of ae)E.leaveGuards.forEach(P=>{ie.push(yi(P,F,I))});const Te=v.bind(null,F,I);return ie.push(Te),Ur(ie).then(()=>{ie=[];for(const E of s.list())ie.push(yi(E,F,I));return ie.push(Te),Ur(ie)}).then(()=>{ie=Al(ge,"beforeRouteUpdate",F,I);for(const E of ge)E.updateGuards.forEach(P=>{ie.push(yi(P,F,I))});return ie.push(Te),Ur(ie)}).then(()=>{ie=[];for(const E of F.matched)if(E.beforeEnter&&!I.matched.includes(E))if(Dn(E.beforeEnter))for(const P of E.beforeEnter)ie.push(yi(P,F,I));else ie.push(yi(E.beforeEnter,F,I));return ie.push(Te),Ur(ie)}).then(()=>(F.matched.forEach(E=>E.enterCallbacks={}),ie=Al(me,"beforeRouteEnter",F,I),ie.push(Te),Ur(ie))).then(()=>{ie=[];for(const E of o.list())ie.push(yi(E,F,I));return ie.push(Te),Ur(ie)}).catch(E=>Zn(E,8)?E:Promise.reject(E))}function D(F,I,ie){for(const ae of a.list())ae(F,I,ie)}function W(F,I,ie,ae,ge){const me=x(F,I);if(me)return me;const Te=I===xi,E=Vr?history.state:{};ie&&(ae||Te?r.replace(F.fullPath,Ye({scroll:Te&&E&&E.scroll},ge)):r.push(F.fullPath,ge)),l.value=F,oe(F,I,ie,Te),ce()}let z;function N(){z||(z=r.listen((F,I,ie)=>{if(!de.listening)return;const ae=_(F),ge=A(ae);if(ge){L(Ye(ge,{replace:!0}),ae).catch(Gs);return}c=ae;const me=l.value;Vr&&FS(Mh(me.fullPath,ie.delta),Pa()),w(ae,me).catch(Te=>Zn(Te,12)?Te:Zn(Te,2)?(L(Te.to,ae).then(E=>{Zn(E,20)&&!ie.delta&&ie.type===to.pop&&r.go(-1,!1)}).catch(Gs),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),K(Te,ae,me))).then(Te=>{Te=Te||W(ae,me,!1),Te&&(ie.delta&&!Zn(Te,8)?r.go(-ie.delta,!1):ie.type===to.pop&&Zn(Te,20)&&r.go(-1,!1)),D(ae,me,Te)}).catch(Gs)}))}let O=Ls(),j=Ls(),$;function K(F,I,ie){ce(F);const ae=j.list();return ae.length?ae.forEach(ge=>ge(F,I,ie)):console.error(F),Promise.reject(F)}function H(){return $&&l.value!==xi?Promise.resolve():new Promise((F,I)=>{O.add([F,I])})}function ce(F){return $||($=!F,N(),O.list().forEach(([I,ie])=>F?ie(F):I()),O.reset()),F}function oe(F,I,ie,ae){const{scrollBehavior:ge}=i;if(!Vr||!ge)return Promise.resolve();const me=!ie&&NS(Mh(F.fullPath,0))||(ae||!ie)&&history.state&&history.state.scroll||null;return yd().then(()=>ge(F,I,me)).then(Te=>Te&&OS(Te)).catch(Te=>K(Te,F,I))}const Se=F=>r.go(F);let G;const ue=new Set,de={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:i,push:y,replace:S,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:H,install(F){const I=this;F.component("RouterLink",y1),F.component("RouterView",w1),F.config.globalProperties.$router=I,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>$r(l)}),Vr&&!G&&l.value===xi&&(G=!0,y(r.location).catch(ge=>{}));const ie={};for(const ge in xi)ie[ge]=dn(()=>l.value[ge]);F.provide(tu,I),F.provide(Op,lo(ie)),F.provide(lc,l);const ae=F.unmount;ue.add(F),F.unmount=function(){ue.delete(F),ue.size<1&&(c=xi,z&&z(),z=null,l.value=xi,G=!1,$=!1),ae()}}};return de}function Ur(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function E1(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>cs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>cs(c,l))||r.push(l))}return[t,n,r]}function Qn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Fp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},nu,Lt,ft,mn=1e8,Ze=1/mn,cc=Math.PI*2,C1=cc/4,A1=0,Np=Math.sqrt,P1=Math.cos,R1=Math.sin,yt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},li=function(e){return typeof e=="number"},iu=function(e){return typeof e>"u"},Hn=function(e){return typeof e=="object"},Gt=function(e){return e!==!1},zp=function(){return typeof window<"u"},Go=function(e){return rt(e)||yt(e)},Up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dt=Array.isArray,uc=/(?:-?\.?\d|\.)+/gi,Bp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kp=/[+-]=-?[.\d]+/,Gp=/[^,'"\[\]\s]+/gi,L1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nt,un,fc,ru,rn={},oa={},Vp,Hp=function(e){return(oa=vr(e,rn))&&sn},su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},Wp=function(e,t){return e&&(rn[e]=t)&&oa&&(oa[e]=t)||rn},no=function(){return 0},D1={suppressEvents:!0,isStart:!0,kill:!1},$o={suppressEvents:!0,kill:!1},I1={suppressEvents:!0},ou={},Ci=[],hc={},qp,Kt={},Rl={},Nh=30,Ko=[],au="",lu=function(e){var t=e[0],n,r;if(Hn(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ko.length;r--&&!Ko[r].targetTest(t););n=Ko[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new dm(e[r],n)))||e.splice(r,1);return e},hr=function(e){return e._gsap||lu(gn(e))[0]._gsap},Xp=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():iu(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},O1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},la=function(){var e=Ci.length,t=Ci.slice(0),n,r;for(hc={},Ci.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},jp=function(e,t,n,r){Ci.length&&!Lt&&la(),e.render(t,n,r||Lt&&t<0&&(e._initted||e._startAt)),Ci.length&&!Lt&&la()},Yp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Gp).length<2?t:yt(e)?e.trim():e},$p=function(e){return e},yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},F1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},vr=function(e,t){for(var n in t)e[n]=t[n];return e},zh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ca=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Hs=function(e){var t=e.parent||nt,n=e.keyframes?F1(Dt(e.keyframes)):yn;if(Gt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},N1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Kp=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ra=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ii=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},z1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dc=function(e,t,n,r){return e._startAt&&(Lt?e._startAt.revert($o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},U1=function i(e){return!e||e._ts&&i(e.parent)},Uh=function(e){return e._repeat?hs(e._tTime,e=e.duration()+e._rDelay)*e:0},hs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ua=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},La=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},Da=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),La(e),n._dirty||dr(n,e)),e},Zp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ua(e.rawTime(),t),(!t._dur||po(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},Un=function(e,t,n,r){return t.parent&&Ii(t),t._start=bt((li(n)?n:n||e!==nt?cn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kp(e,t,"_first","_last",e._sort?"_start":0),pc(t)||(e._recent=t),r||Zp(e,t),e._ts<0&&Da(e,e._tTime),e},Jp=function(e,t){return(rn.ScrollTrigger||su("scrollTrigger",t))&&rn.ScrollTrigger.create(t,e)},Qp=function(e,t,n,r,s){if(uu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qp!==Zt.frame)return Ci.push(e),e._lazy=[s,r],1},B1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},pc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},k1=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&B1(e)&&!(!e._initted&&pc(e))||(e._ts<0||e._dp._ts<0)&&!pc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=po(0,e._tDur,t),u=hs(l,a),e._yoyo&&u&1&&(o=1-o),u!==hs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Lt||r||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&Qp(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&dc(e,t,n,!0),e._onUpdate&&!n&&_n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ii(e,1),!n&&!Lt&&(_n(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},G1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ds=function(e,t,n,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Da(e,e._tTime=e._tDur*a),e.parent&&La(e),n||dr(e.parent,e),e},Bh=function(e){return e instanceof kt?dr(e):ds(e,e._dur)},V1={_start:0,endTime:no,totalDuration:no},cn=function i(e,t,n){var r=e.labels,s=e._recent||V1,o=e.duration()>=mn?s.endTime(!1):e._dur,a,l,c;return yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Dt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ws=function(e,t,n){var r=li(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Gt(l.vars.inherit)&&l.parent;o.immediateRender=Gt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dt(t[0],o,t[s+1])},Ni=function(e,t){return e||e===0?t(e):t},po=function(e,t,n){return n<e?e:n>t?t:n},Pt=function(e,t){return!yt(e)||!(t=L1.exec(e))?"":t[1]},H1=function(e,t,n){return Ni(n,function(r){return po(e,t,r)})},mc=[].slice,em=function(e,t){return e&&Hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hn(e[0]))&&!e.nodeType&&e!==un},W1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return yt(r)&&!t||em(r,1)?(s=n).push.apply(s,gn(r)):n.push(r)})||n},gn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):yt(e)&&!n&&(fc||!ps())?mc.call((t||ru).querySelectorAll(e),0):Dt(e)?W1(e,n):em(e)?mc.call(e,0):e?[e]:[]},gc=function(e){return e=gn(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gn(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||ru.createElement("div"):e)}},tm=function(e){return e.sort(function(){return .5-Math.random()})},nm=function(e){if(rt(e))return e;var t=Hn(e)?e:{each:e},n=pr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return yt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,g){var d=(g||t).length,m=o[d],_,b,x,y,S,A,L,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,mn])[1],!w){for(L=-mn;L<(L=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*u-.5:r%w,b=w===mn?0:l?d*h/w-.5:r/w|0,L=0,v=mn,A=0;A<d;A++)x=A%w-_,y=b-(A/w|0),m[A]=S=c?Math.abs(c==="y"?y:x):Np(x*x+y*y),S>L&&(L=S),S<v&&(v=S);r==="random"&&tm(m),m.max=L-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Pt(t.amount||t.each)||0,n=n&&d<0?um(n):n}return d=(m[f]-m.min)/m.max||0,bt(m.b+(n?n(d):d)*m.v)+m.u}},_c=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(li(n)?0:Pt(n))}},im=function(e,t){var n=Dt(e),r,s;return!n&&Hn(e)&&(r=n=e.radius||mn,e.values?(e=gn(e.values),(s=!li(e[0]))&&(r*=r)):e=_c(e.increment)),Ni(t,n?rt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||li(o)?u:u+Pt(o)}:_c(e))},rm=function(e,t,n,r){return Ni(Dt(e)?!t:n===!0?!!(n=0):!r,function(){return Dt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},q1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},X1=function(e,t){return function(n){return e(parseFloat(n))+(t||Pt(n))}},j1=function(e,t,n){return om(e,t,0,1,n)},sm=function(e,t,n){return Ni(n,function(r){return e[~~t(r)]})},Y1=function i(e,t,n){var r=t-e;return Dt(e)?sm(e,i(0,e.length),t):Ni(n,function(s){return(r+(s-e)%r)%r+e})},$1=function i(e,t,n){var r=t-e,s=r*2;return Dt(e)?sm(e,i(0,e.length-1),t):Ni(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},io=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Gp:uc),n+=e.substr(t,r-t)+rm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},om=function(e,t,n,r,s){var o=t-e,a=r-n;return Ni(s,function(l){return n+((l-e)/o*a||0)})},K1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=yt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Dt(e)&&!Dt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else r||(e=vr(Dt(e)?[]:{},e));if(!u){for(l in t)cu.call(a,e,l,"get",t[l]);s=function(g){return du(g,a)||(o?e.p:e)}}}return Ni(n,s)},kh=function(e,t,n){var r=e.labels,s=mn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_n=function(e,t,n){var r=e.vars,s=r[t],o=ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ci.length&&la(),a&&(ft=a),u=l?s.apply(c,l):s.call(c),ft=o,u},Ns=function(e){return Ii(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&_n(e,"onInterrupt"),e},Xr,Z1=function(e){e=!e.name&&e.default||e;var t=e.name,n=rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:no,render:du,add:cu,kill:dw,modifier:hw,rawVars:0},o={targetTest:0,get:0,getSetter:hu,aliases:{},register:0};if(ps(),e!==r){if(Kt[t])return;yn(r,yn(ca(e,s),o)),vr(r.prototype,vr(s,ca(e,o))),Kt[r.prop=t]=r,e.targetTest&&(Ko.push(r),ou[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wp(t,r),e.register&&e.register(sn,r,Ht)},Ke=255,zs={aqua:[0,Ke,Ke],lime:[0,Ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ke],navy:[0,0,128],white:[Ke,Ke,Ke],olive:[128,128,0],yellow:[Ke,Ke,0],orange:[Ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ke,0,0],pink:[Ke,192,203],cyan:[0,Ke,Ke],transparent:[Ke,Ke,Ke,0]},Ll=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ke+.5|0},am=function(e,t,n){var r=e?li(e)?[e>>16,e>>8&Ke,e&Ke]:0:zs.black,s,o,a,l,c,u,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zs[e])r=zs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ke,r&Ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ke,e&Ke]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(uc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ll(l+1/3,s,o),r[1]=Ll(l,s,o),r[2]=Ll(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Bp),n&&r.length<4&&(r[3]=1),r}else r=e.match(uc)||zs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Ke,o=r[1]/Ke,a=r[2]/Ke,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},lm=function(e){var t=[],n=[],r=-1;return e.split(Ai).forEach(function(s){var o=s.match(qr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Gh=function(e,t,n){var r="",s=(e+r).match(Ai),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=am(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lm(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ai,"1").split(qr),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ai),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Ai=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),J1=/hsl[a]?\(/,cm=function(e){var t=e.join(" "),n;if(Ai.lastIndex=0,Ai.test(t))return n=J1.test(t),e[1]=Gh(e[1],n),e[0]=Gh(e[0],n,lm(e[1])),!0},ro,Zt=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function d(m){var _=i()-r,b=m===!0,x,y,S,A;if(_>e&&(n+=_-t),r+=_,S=r-n,x=S-o,(x>0||b)&&(A=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=x+(x>=s?4:s-x),y=1),b||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](S,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Vp&&(!fc&&zp()&&(un=fc=window,ru=un.document||{},rn.gsap=sn,(un.gsapVersions||(un.gsapVersions=[])).push(sn.version),Hp(oa||un.GreenSockGlobals||!un.gsap&&un||{}),u=un.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ro=1,g(2))},sleep:function(){(u?un.cancelAnimationFrame:clearTimeout)(l),ro=0,c=no},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,b){var x=_?function(y,S,A,L){m(y,S,A,L),h.remove(x)}:m;return h.remove(m),a[b?"unshift":"push"](x),ps(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),ps=function(){return!ro&&Zt.wake()},ke={},Q1=/^[\d.\-M][\d.\-,\s]/,ew=/["']/g,tw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(ew,"").trim():+c,r=l.substr(a+1).trim();return t},nw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},iw=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tw(t[1])]:nw(e).split(",").map(Yp)):ke._CE&&Q1.test(e)?ke._CE("",e):n},um=function(e){return function(t){return 1-e(1-t)}},fm=function i(e,t){for(var n=e._first,r;n;)n instanceof kt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},pr=function(e,t){return e&&(rt(e)?e:ke[e]||iw(e))||t},br=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Vt(e,function(a){ke[a]=rn[a]=s,ke[o=a.toLowerCase()]=n;for(var l in s)ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[a+"."+l]=s[l]}),s},hm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dl=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/cc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*R1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:hm(a);return s=cc/s,l.config=function(c,u){return i(e,c,u)},l},Il=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:hm(n);return r.config=function(s){return i(e,s)},r};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;br(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;br("Elastic",Dl("in"),Dl("out"),Dl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};br("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);br("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});br("Circ",function(i){return-(Np(1-i*i)-1)});br("Sine",function(i){return i===1?1:-P1(i*C1)+1});br("Back",Il("in"),Il("out"),Il());ke.SteppedEase=ke.steps=rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ze;return function(a){return((r*po(0,o,a)|0)+s)*n}}};fs.ease=ke["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return au+=i+","+i+"Params,"});var dm=function(e,t){this.id=A1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xp,this.set=t?t.getSetter:hu},ms=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ds(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),ro||Zt.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ps(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Da(this,n),!s._dp||s.parent||Zp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?hs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(po(-this._delay,this._tDur,r),!0),La(this),z1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Un(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ua(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=I1);var r=Lt;return Lt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Lt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Bh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(cn(this,n),Gt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Gt(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=rt(n)?n:$p,a=function(){var c=r.then;r.then=null,rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ns(this)},i}();yn(ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var kt=function(i){Fp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gt(n.sortChildren),nt&&Un(n.parent||nt,Qn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jp(Qn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ws(0,arguments,this),this},t.from=function(r,s,o){return Ws(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ws(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(r,s,cn(this,o),1),this},t.call=function(r,s,o){return Un(this,dt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dt(r,o,cn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Hs(o).immediateRender=Gt(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Hs(a).immediateRender=Gt(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:bt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,d,m,_,b,x,y,S,A,L;if(this!==nt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=bt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),S=hs(this._tTime,m),!a&&this._tTime&&S!==d&&(S=d),A&&d&1&&(f=c-f,L=1),d!==S&&!this._lock){var v=A&&S&1,w=v===(A&&d&1);if(d<S&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(L?0:bt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;fm(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=G1(this,bt(a),bt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&(_n(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-Ze);break}}p=g}else{p=this._last;for(var D=r<0?r:f;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,s,o||Lt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=D?-Ze:Ze);break}}p=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Ze)._zTime=f>=a?1:-1,this._ts))return this._start=y,La(this),this.render(r,s,o);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ii(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(_n(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(li(s)||(s=cn(this,s,r)),!(r instanceof ms)){if(Dt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(yt(r))return this.addLabel(r,s);if(rt(r))r=dt.delayedCall(0,r);else return this}return this!==r?Un(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return yt(r)?this.removeLabel(r):rt(r)?this.killTweensOf(r):(Ra(this,r),r===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(Zt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=cn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=dt.delayedCall(0,s||no,o);return a.data="isPause",this._hasPause=1,Un(this,a,cn(this,r))},t.removePause=function(r){var s=this._first;for(r=cn(this,r);s;)s._start===r&&s.data==="isPause"&&Ii(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)bi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=gn(r),l=this._first,c=li(s),u;l;)l instanceof dt?O1(l._targets,a)&&(c?(!bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=cn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=dt.to(o,yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ze,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ds(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,yn({startAt:{time:cn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),kh(this,cn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),kh(this,cn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return dr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),dr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=mn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Un(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ds(o,o===nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(nt._ts&&(jp(nt,ua(r,nt)),qp=Zt.frame),Zt.frame>=Nh){Nh+=nn.autoSleep||120;var s=nt._first;if((!s||!s._ts)&&nn.autoSleep&&Zt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zt.sleep()}}},e}(ms);yn(kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var rw=function(e,t,n,r,s,o,a){var l=new Ht(this._pt,e,t,0,1,vm,null,s),c=0,u=0,h,f,p,g,d,m,_,b;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=io(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),f=n.match(Pl)||[];h=Pl.exec(r);)g=h[0],d=r.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?es(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Pl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(kp.test(r)||_)&&(l.e=0),this._pt=l,l},cu=function(e,t,n,r,s,o,a,l,c,u){rt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:rt(h)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=rt(h)?c?cw:_m:fu,g;if(yt(r)&&(~r.indexOf("random(")&&(r=io(r)),r.charAt(1)==="="&&(g=es(f,r)+(Pt(f)||0),(g||g===0)&&(r=g))),!u||f!==r||xc)return!isNaN(f*r)&&r!==""?(g=new Ht(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?fw:xm,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&su(t,r),rw.call(this,e,t,f,r,p,l||nn.stringFilter,c))},sw=function(e,t,n,r,s){if(rt(e)&&(e=qs(e,s,t,n,r)),!Hn(e)||e.style&&e.nodeType||Dt(e)||Up(e))return yt(e)?qs(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=qs(e[a],s,t,n,r);return o},pm=function(e,t,n,r,s,o){var a,l,c,u;if(Kt[e]&&(a=new Kt[e]).init(s,a.rawVars?t[e]:sw(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Ht(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Xr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},bi,xc,uu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,b=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:b,S=e._overwrite==="auto"&&!nu,A=e.timeline,L,v,w,D,W,z,N,O,j,$,K,H,ce;if(A&&(!g||!s)&&(s="none"),e._ease=pr(s,fs.ease),e._yEase=p?um(pr(p===!0?s:p,fs.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!A&&!!r.runBackwards,!A||g&&!r.stagger){if(O=b[0]?hr(b[0]).harness:0,H=O&&r[O.prop],L=ca(r,ou),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&m?$o:D1),_._lazy=0),o){if(Ii(e._startAt=dt.set(b,yn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Gt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!a&&!d)&&e._startAt.revert($o),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),w=yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Gt(l),immediateRender:a,stagger:0,parent:x},L),H&&(w[O.prop]=H),Ii(e._startAt=dt.set(b,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert($o):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Gt(l)||l&&!m,v=0;v<b.length;v++){if(W=b[v],N=W._gsap||lu(b)[v]._gsap,e._ptLookup[v]=$={},hc[N.id]&&Ci.length&&la(),K=y===b?v:y.indexOf(W),O&&(j=new O).init(W,H||L,e,K,y)!==!1&&(e._pt=D=new Ht(e._pt,W,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(oe){$[oe]=D}),j.priority&&(z=1)),!O||H)for(w in L)Kt[w]&&(j=pm(w,L,e,K,W,y))?j.priority&&(z=1):$[w]=D=cu.call(e,W,w,"get",L[w],K,y,0,r.stringFilter);e._op&&e._op[v]&&e.kill(W,e._op[v]),S&&e._pt&&(bi=e,nt.killTweensOf(W,$,e.globalTime(t)),ce=!e.parent,bi=0),e._pt&&l&&(hc[N.id]=1)}z&&ym(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ce,g&&t<=0&&A.render(mn,!0,!0)},ow=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return xc=1,e.vars[t]="+=0",uu(e,a),xc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ot(n)+Pt(u.e)),u.b&&(u.b=c.s+Pt(u.b))},aw=function(e,t){var n=e[0]?hr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=vr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},lw=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Dt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qs=function(e,t,n,r,s){return rt(e)?e.call(t,n,r,s):yt(e)&&~e.indexOf("random(")?io(e):e},mm=au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gm={};Vt(mm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return gm[i]=1});var dt=function(i){Fp(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Hs(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=r.parent||nt,x=(Dt(n)||Up(n)?li(n[0]):"length"in r)?[n]:gn(n),y,S,A,L,v,w,D,W;if(a._targets=x.length?lu(x):aa("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Go(c)||Go(u)){if(r=a.vars,y=a.timeline=new kt({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:x}),y.kill(),y.parent=y._dp=Qn(a),y._start=0,f||Go(c)||Go(u)){if(L=x.length,D=f&&nm(f),Hn(f))for(v in f)~mm.indexOf(v)&&(W||(W={}),W[v]=f[v]);for(S=0;S<L;S++)A=ca(r,gm),A.stagger=0,_&&(A.yoyoEase=_),W&&vr(A,W),w=x[S],A.duration=+qs(c,Qn(a),S,w,x),A.delay=(+qs(u,Qn(a),S,w,x)||0)-a._delay,!f&&L===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(w,A,D?D(S,w,x):0),y._ease=ke.none;y.duration()?c=u=0:a.timeline=0}else if(g){Hs(yn(y.vars.defaults,{ease:"none"})),y._ease=pr(g.ease||r.ease||"none");var z=0,N,O,j;if(Dt(g))g.forEach(function($){return y.to(x,$,">")}),y.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||lw(v,g[v],A,g.easeEach);for(v in A)for(N=A[v].sort(function($,K){return $.t-K.t}),z=0,S=0;S<N.length;S++)O=N[S],j={ease:O.e,duration:(O.t-(S?N[S-1].t:0))/100*c},j[v]=O.v,y.to(x,j,z),z+=j.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!nu&&(bi=Qn(a),nt.killTweensOf(x),bi=0),Un(b,Qn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===bt(b._time)&&Gt(h)&&U1(Qn(a))&&b.data!=="nested")&&(a._tTime=-Ze,a.render(Math.max(0,-u)||0)),m&&Jp(Qn(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ze&&!u?l:r<Ze?0:r,f,p,g,d,m,_,b,x,y;if(!c)k1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(f=bt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=hs(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&fm(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(bt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qp(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&(_n(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(r<0?r:!f&&_?-Ze:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&dc(this,r,s,o),_n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&dc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ii(this,1),!s&&!(u&&!a)&&(h||a||_)&&(_n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){ro||Zt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||uu(this,l),c=this._ease(l/this._dur),ow(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Da(this,0),this.parent||Kp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ns(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,bi&&bi.vars.overwrite!==!0)._first||Ns(this),this.parent&&o!==this.timeline.totalDuration()&&ds(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?gn(r):a,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&N1(a,l))return s==="all"&&(this._pt=0),Ns(this);for(h=this._op=this._op||[],s!=="all"&&(yt(s)&&(d={},Vt(s,function(b){return d[b]=1}),s=d),s=aw(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Ra(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Ns(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ws(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ws(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return nt.killTweensOf(r,s,o)},e}(ms);yn(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(i){dt[i]=function(){var e=new kt,t=mc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var fu=function(e,t,n){return e[t]=n},_m=function(e,t,n){return e[t](n)},cw=function(e,t,n,r){return e[t](r.fp,n)},uw=function(e,t,n){return e.setAttribute(t,n)},hu=function(e,t){return rt(e[t])?_m:iu(e[t])&&e.setAttribute?uw:fu},xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vm=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},du=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hw=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},dw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ra(this,t,"_pt"):t.dep||(n=1),t=r;return!n},pw=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ym=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Ht=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||xm,this.d=l||this,this.set=c||fu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=pw,this.m=n,this.mt=s,this.tween=r},i}();Vt(au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return ou[i]=1});rn.TweenMax=rn.TweenLite=dt;rn.TimelineLite=rn.TimelineMax=kt;nt=new kt({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=cm;var gs=[],Zo={},mw=[],Vh=0,Ol=function(e){return(Zo[e]||mw).map(function(t){return t()})},vc=function(){var e=Date.now(),t=[];e-Vh>2&&(Ol("matchMediaInit"),gs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=un.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ol("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Vh=e,Ol("matchMedia"))},bm=function(){function i(t,n){this.selector=n&&gc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){rt(n)&&(s=r,r=n,n=rt);var o=this,a=function(){var c=ft,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=gc(s)),ft=o,h=r.apply(o,arguments),rt(h)&&o._r.push(h),ft=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===rt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=ft;ft=null,n(this),ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof dt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ms)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=gs.indexOf(this);~a&&gs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),gw=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Hn(n)||(n={matches:n});var o=new bm(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=un.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(vc):l.addEventListener("change",vc)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),fa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Z1(r)})},timeline:function(e){return new kt(e)},getTweensOf:function(e,t){return nt.getTweensOf(e,t)},getProperty:function(e,t,n,r){yt(e)&&(e=gn(e)[0]);var s=hr(e||{}).get,o=n?$p:Yp;return n==="native"&&(n=""),e&&(t?o((Kt[t]&&Kt[t].get||s)(e,t,n,r)):function(a,l,c){return o((Kt[a]&&Kt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gn(e),e.length>1){var r=e.map(function(u){return sn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Kt[t],a=hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Xr._pt=0,h.init(e,n?u+n:u,Xr,0,[e]),h.render(1,h),Xr._pt&&du(1,Xr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=sn.to(e,vr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=pr(e.ease,fs.ease)),zh(fs,e||{})},config:function(e){return zh(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Kt[a]&&!rn[a]&&aa(t+" effect requires "+a+" plugin.")}),Rl[t]=function(a,l,c){return n(gn(a),yn(l||{},s),c)},o&&(kt.prototype[t]=function(a,l,c){return this.add(Rl[t](a,Hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ke[e]=pr(t)},parseEase:function(e,t){return arguments.length?pr(e,t):ke},getById:function(e){return nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kt(e),r,s;for(n.smoothChildTiming=Gt(e.smoothChildTiming),nt.remove(n),n._dp=0,n._time=n._tTime=nt._time,r=nt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dt&&r.vars.onComplete===r._targets[0]))&&Un(n,r,r._start-r._delay),r=s;return Un(nt,n,0),n},context:function(e,t){return e?new bm(e,t):ft},matchMedia:function(e){return new gw(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||vc()},addEventListener:function(e,t){var n=Zo[e]||(Zo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Y1,wrapYoyo:$1,distribute:nm,random:rm,snap:im,normalize:j1,getUnit:Pt,clamp:H1,splitColor:am,toArray:gn,selector:gc,mapRange:om,pipe:q1,unitize:X1,interpolate:K1,shuffle:tm},install:Hp,effects:Rl,ticker:Zt,updateRoot:kt.updateRoot,plugins:Kt,globalTimeline:nt,core:{PropTween:Ht,globals:Wp,Tween:dt,Timeline:kt,Animation:ms,getCache:hr,_removeLinkedListItem:Ra,reverting:function(){return Lt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return nu=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return fa[i]=dt[i]});Zt.add(kt.updateRoot);Xr=fa.to({},{duration:0});var _w=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xw=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=_w(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Fl=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(yt(s)&&(l={},Vt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xw(a,s)}}}},sn=fa.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Lt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",_c),Fl("modifiers"),Fl("snap",im))||fa;dt.version=kt.version=sn.version="3.11.4";Vp=1;zp()&&ps();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hh,Mi,ts,pu,ar,Wh,mu,vw=function(){return typeof window<"u"},ci={},Qi=180/Math.PI,ns=Math.PI/180,Br=Math.atan2,qh=1e8,gu=/([A-Z])/g,yw=/(left|right|width|margin|padding|x)/i,bw=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Mw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ww=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Mm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Tw=function(e,t,n){return e.style[t]=n},Ew=function(e,t,n){return e.style.setProperty(t,n)},Cw=function(e,t,n){return e._gsap[t]=n},Aw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Pw=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Rw=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},it="transform",Ln=it+"Origin",Lw=function(e,t){var n=this,r=this.target,s=r.style;if(e in ci){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ei(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:ei(r,e)),this.props.indexOf(it)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ln,t,"")),e=it}(s||t)&&this.props.push(e,t,s[e])},wm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dw=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mu(),s&&!s.isStart&&!n[it]&&(wm(n),r.uncache=1)}},Tm=function(e,t){var n={target:e,props:[],revert:Dw,save:Lw};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},Em,bc=function(e,t){var n=Mi.createElementNS?Mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mi.createElement(e);return n.style?n:Mi.createElement(e)},Gn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,_s(t)||t,1)||""},Xh="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,n){var r=t||ar,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xh[o]:"")+e},Mc=function(){vw()&&window.document&&(Hh=window,Mi=Hh.document,ts=Mi.documentElement,ar=bc("div")||{style:{}},bc("div"),it=_s(it),Ln=it+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Em=!!_s("perspective"),mu=sn.core.reverting,pu=1)},Nl=function i(e){var t=bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(ts.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ts.removeChild(t),this.style.cssText=s,o},jh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cm=function(e){var t;try{t=e.getBBox()}catch{t=Nl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Nl||(t=Nl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+jh(e,["x","cx","x1"])||0,y:+jh(e,["y","cy","y1"])||0,width:0,height:0}:t},Am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cm(e))},so=function(e,t){if(t){var n=e.style;t in ci&&t!==Ln&&(t=it),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(gu,"-$1").toLowerCase())):n.removeAttribute(t)}},Si=function(e,t,n,r,s,o){var a=new Ht(e._pt,t,n,0,1,o?Sm:Mm);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Yh={deg:1,rad:1,turn:1},Iw={grid:1,flex:1},Oi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ar.style,l=yw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,d,m,_;return r===o||!s||Yh[r]||Yh[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),_=e.getCTM&&Am(e),(p||o==="%")&&(ci[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ot(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Mi||!d.appendChild)&&(d=Mi.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Zt.time&&!m.uncache?ot(s/m.width*h):((p||o==="%")&&!Iw[Gn(d,"display")]&&(a.position=Gn(e,"position")),d===e&&(a.position="static"),d.appendChild(ar),g=ar[u],d.removeChild(ar),a.position="absolute",l&&p&&(m=hr(d),m.time=Zt.time,m.width=d[u]),ot(f?g*s/h:g&&s?h/g*s:0))))},ei=function(e,t,n,r){var s;return pu||Mc(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(s=ao(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:da(Gn(e,Ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ha[t]&&ha[t](e,t,n)||Gn(e,t)||Xp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Oi(e,t,s,n)+n:s},Ow=function(e,t,n,r){if(!n||n==="none"){var s=_s(t,e,1),o=s&&Gn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gn(e,"borderTopColor"))}var a=new Ht(this._pt,e.style,t,0,1,vm),l=0,c=0,u,h,f,p,g,d,m,_,b,x,y,S;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Gn(e,t)||r,e.style[t]=n),u=[n,r],cm(u),n=u[0],r=u[1],f=n.match(qr)||[],S=r.match(qr)||[],S.length){for(;h=qr.exec(r);)m=h[0],b=r.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=es(p,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=qr.lastIndex-x.length,x||(x=x||nn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Oi(e,t,d,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Sm:Mm;return kp.test(r)&&(a.e=0),this._pt=a,a},$h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=$h[n]||n,t[1]=$h[r]||r,t.join(" ")},Nw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ci[a]&&(l=1,a=a==="transformOrigin"?Ln:it),so(n,a);l&&(so(n,it),o&&(o.svg&&n.removeAttribute("transform"),ao(n,1),o.uncache=1,wm(r)))}},ha={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Ht(e._pt,t,n,0,0,Nw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},oo=[1,0,0,1,0,0],Pm={},Rm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kh=function(e){var t=Gn(e,it);return Rm(t)?oo:t.substr(7).match(Bp).map(ot)},_u=function(e,t){var n=e._gsap||hr(e),r=e.style,s=Kh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oo:s):(s===oo&&!e.offsetParent&&e!==ts&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ts.appendChild(e)),s=Kh(e),l?r.display=l:so(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ts.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Sc=function(e,t,n,r,s,o){var a=e._gsap,l=s||_u(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],b=l[5],x=t.split(" "),y=parseFloat(x[0])||0,S=parseFloat(x[1])||0,A,L,v,w;n?l!==oo&&(L=p*m-g*d)&&(v=y*(m/L)+S*(-d/L)+(d*b-m*_)/L,w=y*(-g/L)+S*(p/L)-(p*b-g*_)/L,y=v,S=w):(A=Cm(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),S=A.y+(~(x[1]||x[0]).indexOf("%")?S/100*A.height:S)),r||r!==!1&&a.smooth?(_=y-c,b=S-u,a.xOffset=h+(_*p+b*d)-_,a.yOffset=f+(_*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Ln]="0px 0px",o&&(Si(o,a,"xOrigin",c,y),Si(o,a,"yOrigin",u,S),Si(o,a,"xOffset",h,a.xOffset),Si(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},ao=function(e,t){var n=e._gsap||new dm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Gn(e,Ln)||"0",u,h,f,p,g,d,m,_,b,x,y,S,A,L,v,w,D,W,z,N,O,j,$,K,H,ce,oe,Se,G,ue,de,F;return u=h=f=d=m=_=b=x=y=0,p=g=1,n.svg=!!(e.getCTM&&Am(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[it]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[it]!=="none"?l[it]:"")),r.scale=r.rotate=r.translate="none"),L=_u(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Sc(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,L)),S=n.xOrigin||0,A=n.yOrigin||0,L!==oo&&(W=L[0],z=L[1],N=L[2],O=L[3],u=j=L[4],h=$=L[5],L.length===6?(p=Math.sqrt(W*W+z*z),g=Math.sqrt(O*O+N*N),d=W||z?Br(z,W)*Qi:0,b=N||O?Br(N,O)*Qi+d:0,b&&(g*=Math.abs(Math.cos(b*ns))),n.svg&&(u-=S-(S*W+A*N),h-=A-(S*z+A*O))):(F=L[6],ue=L[7],oe=L[8],Se=L[9],G=L[10],de=L[11],u=L[12],h=L[13],f=L[14],v=Br(F,G),m=v*Qi,v&&(w=Math.cos(-v),D=Math.sin(-v),K=j*w+oe*D,H=$*w+Se*D,ce=F*w+G*D,oe=j*-D+oe*w,Se=$*-D+Se*w,G=F*-D+G*w,de=ue*-D+de*w,j=K,$=H,F=ce),v=Br(-N,G),_=v*Qi,v&&(w=Math.cos(-v),D=Math.sin(-v),K=W*w-oe*D,H=z*w-Se*D,ce=N*w-G*D,de=O*D+de*w,W=K,z=H,N=ce),v=Br(z,W),d=v*Qi,v&&(w=Math.cos(v),D=Math.sin(v),K=W*w+z*D,H=j*w+$*D,z=z*w-W*D,$=$*w-j*D,W=K,j=H),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ot(Math.sqrt(W*W+z*z+N*N)),g=ot(Math.sqrt($*$+F*F)),v=Br(j,$),b=Math.abs(v)>2e-4?v*Qi:0,y=de?1/(de<0?-de:de):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Rm(Gn(e,it)),K&&e.setAttribute("transform",K))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ot(p),n.scaleY=ot(g),n.rotation=ot(d)+a,n.rotationX=ot(m)+a,n.rotationY=ot(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Ln]=da(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?Uw:Em?Lm:zw,n.uncache=0,n},da=function(e){return(e=e.split(" "))[0]+" "+e[1]},zl=function(e,t,n){var r=Pt(t);return ot(parseFloat(t)+parseFloat(Oi(e,"x",n+"px",r)))+r},zw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lm(e,t)},Yi="0deg",Ds="0px",$i=") ",Lm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,y="",S=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Yi||u!==Yi)){var A=parseFloat(u)*ns,L=Math.sin(A),v=Math.cos(A),w;A=parseFloat(h)*ns,w=Math.cos(A),o=zl(b,o,L*w*-x),a=zl(b,a,-Math.sin(A)*-x),l=zl(b,l,v*w*-x+x)}m!==Ds&&(y+="perspective("+m+$i),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||o!==Ds||a!==Ds||l!==Ds)&&(y+=l!==Ds||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$i),c!==Yi&&(y+="rotate("+c+$i),u!==Yi&&(y+="rotateY("+u+$i),h!==Yi&&(y+="rotateX("+h+$i),(f!==Yi||p!==Yi)&&(y+="skew("+f+", "+p+$i),(g!==1||d!==1)&&(y+="scale("+g+", "+d+$i),b.style[it]=y||"translate(0, 0)"},Uw=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),y=parseFloat(a),S,A,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ns,c*=ns,S=Math.cos(l)*h,A=Math.sin(l)*h,L=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ns,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),S*=w,A*=w)),S=ot(S),A=ot(A),L=ot(L),v=ot(v)):(S=h,v=f,A=L=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Oi(p,"x",o,"px"),y=Oi(p,"y",a,"px")),(g||d||m||_)&&(x=ot(x+g-(g*S+d*L)+m),y=ot(y+d-(g*A+d*v)+_)),(r||s)&&(w=p.getBBox(),x=ot(x+r/100*w.width),y=ot(y+s/100*w.height)),w="matrix("+S+","+A+","+L+","+v+","+x+","+y+")",p.setAttribute("transform",w),b&&(p.style[it]=w)},Bw=function(e,t,n,r,s){var o=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qi:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*qh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*qh)%o-~~(c/o)*o)),e._pt=f=new Ht(e._pt,t,n,r,c,Mw),f.e=u,f.u="deg",e._props.push(n),f},Zh=function(e,t){for(var n in t)e[n]=t[n];return e},kw=function(e,t,n){var r=Zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[it]=t,a=ao(n,1),so(n,it),n.setAttribute("transform",c)):(c=getComputedStyle(n)[it],o[it]=t,a=ao(n,1),o[it]=c);for(l in ci)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Pt(c),g=Pt(u),h=p!==g?Oi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Ht(e._pt,a,l,h,f-h,yc),e._pt.u=g||0,e._props.push(l));Zh(a,r)};Vt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});ha[e>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return ei(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,p,h)}});var Dm={name:"css",register:Mc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,b,x,y,S,A,L,v;pu||Mc(),this.styles=this.styles||Tm(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Kt[d]&&pm(d,t,n,r,e,s)))){if(p=typeof u,g=ha[d],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=io(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Ai.lastIndex=0,Ai.test(c)||(m=Pt(c),_=Pt(u)),_?m!==_&&(c=Oi(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],yt(c)&&~c.indexOf("random(")&&(c=io(c)),Pt(c+"")||(c+=nn.units[d]||Pt(ei(e,d))||""),(c+"").charAt(1)==="="&&(c=ei(e,d))):c=ei(e,d),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),d in ri&&(d==="autoAlpha"&&(f===1&&ei(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Si(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=ri[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in ci,x){if(this.styles.save(d),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||ao(e,t.parseTransform),A=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Ht(this._pt,a,it,0,1,S.renderTransform,S,0,-1),y.dep=1),d==="scale")this._pt=new Ht(this._pt,S,"scaleY",S.scaleY,(b?es(S.scaleY,b+h):h)-S.scaleY||0,yc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(Ln,0,a[Ln]),u=Fw(u),S.svg?Sc(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&Si(this,S,"zOrigin",S.zOrigin,_),Si(this,a,d,da(c),da(u)));continue}else if(d==="svgOrigin"){Sc(e,u,1,A,0,this);continue}else if(d in Pm){Bw(this,S,d,f,b?es(f,b+u):u);continue}else if(d==="smoothOrigin"){Si(this,S,"smooth",S.smooth,u);continue}else if(d==="force3D"){S[d]=u;continue}else if(d==="transform"){kw(this,u,e);continue}}else d in a||(d=_s(d)||d);if(x||(h||h===0)&&(f||f===0)&&!bw.test(u)&&d in a)m=(c+"").substr((f+"").length),h||(h=0),_=Pt(u)||(d in nn.units?nn.units[d]:m),m!==_&&(f=Oi(e,d,c,_)),this._pt=new Ht(this._pt,x?S:a,d,f,(b?es(f,b+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?ww:yc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Sw);else if(d in a)Ow.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,r,s);else if(d!=="parseTransform"){su(d,u);continue}x||(d in a?v.push(d,0,a[d]):v.push(d,1,c||e[d])),o.push(d)}}L&&ym(this)},render:function(e,t){if(t.tween._time||!mu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ei,aliases:ri,getSetter:function(e,t,n){var r=ri[t];return r&&r.indexOf(",")<0&&(t=r),t in ci&&t!==Ln&&(e._gsap.x||ei(e,"x"))?n&&Wh===n?t==="scale"?Aw:Cw:(Wh=n||{})&&(t==="scale"?Pw:Rw):e.style&&!iu(e.style[t])?Tw:~t.indexOf("-")?Ew:hu(e,t)},core:{_removeProperty:so,_getMatrix:_u}};sn.utils.checkPrefix=_s;sn.core.getStyleSaver=Tm;(function(i,e,t,n){var r=Vt(i+","+e+","+t,function(s){ci[s]=1});Vt(e,function(s){nn.units[s]="deg",Pm[s]=1}),ri[r[13]]=i+","+e,Vt(n,function(s){var o=s.split(":");ri[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){nn.units[i]="px"});sn.registerPlugin(Dm);var er=sn.registerPlugin(Dm)||sn;er.core.Tween;const Gw={class:"text"},Vw=co({__name:"Red",setup(i){const e=vn("mat"),t=vn("duration");return er.to(e.uniforms.uColor.value,{r:1,g:0,b:0,duration:t}),er.to(e.uniforms.uResolution.value,{x:350,y:200,duration:t}),er.to(e.uniforms.uReadWave,{value:.2,duration:t*.5,delay:t*.3}),er.timeline().to(e.uniforms.uRatio,{value:.5,duration:t*.5}).to(e.uniforms.uRatio,{value:0,duration:t*.5}),_1((n,r)=>{er.to(e.uniforms.uResolution.value,{x:0,y:0,delay:t}),er.to(e.uniforms.uReadWave,{value:0,duration:t*.5})}),(n,r)=>(na(),Xd("p",Gw,"Red"))}}),Hw=[{path:"/",name:"Red",component:Vw},{path:"/blue",name:"Blue",component:()=>vh(()=>import("./Blue-49080a72.js"),[],import.meta.url)},{path:"/green",name:"Green",component:()=>vh(()=>import("./Green-c683f4de.js"),[],import.meta.url)}],Ww=T1({history:kS("./"),routes:Hw}),Im=f0(yS);Im.use(Ww);Im.mount("#app");export{na as a,Xd as c,co as d,er as g,vn as i,_1 as o};
