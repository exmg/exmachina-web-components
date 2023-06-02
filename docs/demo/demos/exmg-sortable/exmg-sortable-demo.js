function t(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}}const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,h=l.trustedTypes,c=h?h.emptyScript:"",d=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=f){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:u).toAttribute(e,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:m}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const g=window,y=g.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,E="?"+_,A=`<${E}>`,S=document,x=()=>S.createComment(""),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,N="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,T=/>/g,O=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,M=/"/g,H=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),L=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),z=new WeakMap,D=S.createTreeWalker(S,129,null,!1),I=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=k;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===k?"!--"===l[1]?r=P:void 0!==l[1]?r=T:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:k,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?M:U):r===M||r===U?r=O:r===P||r===T?r=k:(r=O,n=void 0);const d=r===O&&t[e+1].startsWith("/>")?" ":"";o+=r===k?s+A:h>=0?(i.push(a),s.slice(0,h)+$+s.slice(h)+_+d):s+_+(-2===h?(i.push(void 0),e):d)}const a=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,i]};class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=I(t,e);if(this.el=B.createElement(l,s),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=D.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith($)||e.startsWith(_)){const s=h[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+$).split(_),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?K:"@"===e[1]?G:V})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(H.test(i.tagName)){const t=i.textContent.split(_),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],x()),D.nextNode(),a.push({type:2,index:++n});i.append(t[e],x())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(_,t+1));)a.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){var n,o,r,a;if(e===L)return e;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const h=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(r=(a=s)._$Co)&&void 0!==r?r:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=Y(t,l._$AS(t,e.values),l,i)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);D.currentNode=n;let o=D.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new X(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new F(o,this,t)),this._$AV.push(e),l=i[++a]}r!==(null==l?void 0:l.index)&&(o=D.nextNode(),r++)}return D.currentNode=S,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{constructor(t,e,s,i){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),w(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&w(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new q(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new B(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new X(this.k(x()),this.k(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,s,i,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Y(this,i[s+r],e,r),a===L&&(a=this._$AH[r]),o||(o=!w(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const J=y?y.emptyScript:"";class K extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends V{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=Y(this,t,e,0))&&void 0!==s?s:j)===L)return;const i=this._$AH,n=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==j&&(i===j||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const Z=g.litHtmlPolyfillSupport;null==Z||Z(B,X),(null!==(v=g.litHtmlVersions)&&void 0!==v?v:g.litHtmlVersions=[]).push("2.7.4");const Q=window,tt=Q.ShadowRoot&&(void 0===Q.ShadyCSS||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),st=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=st.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&st.set(e,t))}return t}toString(){return this.cssText}}const nt=(t,e)=>{tt?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=Q.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))},ot=tt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new it("string"==typeof t?t:t+"",void 0,et))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var rt;const at=window,lt=at.trustedTypes,ht=lt?lt.emptyScript:"",ct=at.reactiveElementPolyfillSupport,dt={toAttribute(t,e){switch(e){case Boolean:t=t?ht:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},ut=(t,e)=>e!==t&&(e==e||t==t),pt={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:ut};class ft extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(ot(t))}else void 0!==t&&e.push(ot(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return nt(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=pt){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:dt).toAttribute(e,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:dt;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ut)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var mt,vt;ft.finalized=!0,ft.elementProperties=new Map,ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},null==ct||ct({ReactiveElement:ft}),(null!==(rt=at.reactiveElementVersions)&&void 0!==rt?rt:at.reactiveElementVersions=[]).push("1.6.1");class gt extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new X(e.insertBefore(x(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}gt.finalized=!0,gt._$litElement$=!0,null===(mt=globalThis.litElementHydrateSupport)||void 0===mt||mt.call(globalThis,{LitElement:gt});const yt=globalThis.litElementPolyfillSupport;null==yt||yt({LitElement:gt}),(null!==(vt=globalThis.litElementVersions)&&void 0!==vt?vt:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,$t=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function _t(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):$t(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var Et;null===(Et=window.HTMLSlotElement)||void 0===Et||Et.prototype.assignedElements;class At extends gt{constructor(){super(...arguments),this.bubbles=!1}fire(t,e,s){this.dispatchEvent(new CustomEvent(t,{bubbles:s||this.bubbles,composed:!0,detail:e}))}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let St=0,xt=0;const wt=[];let Ct=0,Nt=!1;const kt=document.createTextNode("");new window.MutationObserver((function(){Nt=!1;const t=wt.length;for(let e=0;e<t;e++){const t=wt[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}wt.splice(0,t),xt+=t})).observe(kt,{characterData:!0});const Pt={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Tt={run:t=>(Nt||(Nt=!0,kt.textContent=String(Ct++)),wt.push(t),St++),cancel(t){const e=t-xt;if(e>=0){if(!wt[e])throw new Error("invalid async handle: "+t);wt[e]=null}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ot{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Ut.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ut.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,s){return t instanceof Ot?t._cancelAsync():t=new Ot,t.setConfig(e,s),t}}const Ut=new Set,Mt=!1,Ht=t=>t,Rt="string"==typeof document.head.style.touchAction,Lt="__polymerGestures",jt="__polymerGesturesHandled",zt="__polymerGesturesTouchAction",Dt=["mousedown","mousemove","mouseup","click"],It=[0,1,4,2],Bt=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Yt(t){return Dt.indexOf(t)>-1}let qt=!1;function Xt(t){if(!Yt(t)&&"touchend"!==t)return Rt&&qt&&Mt?{passive:!0}:void 0}!function(){try{const t=Object.defineProperty({},"passive",{get:()=>(qt=!0,!0)});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const Vt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Wt=[],Jt={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Kt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Gt(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{const s=t.getRootNode();if(t.id){const i=s.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<i.length;t++)e.push(i[t])}}catch(t){}}return e}const Ft=function(t){const e=t.sourceCapabilities;var s;if((!e||e.firesTouchEvents)&&(t[jt]={skip:!0},"click"===t.type)){let e=!1;const i=ie(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)Wt.push(i[t]);else if(s=i[t],Jt[s.localName]){const s=Gt(i[t]);for(let t=0;t<s.length;t++)e=e||Wt.indexOf(s[t])>-1}if(i[t]===te.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Zt(t){const e=Vt?["click"]:Dt;for(let s,i=0;i<e.length;i++)s=e[i],t?(Wt.length=0,document.addEventListener(s,Ft,!0)):document.removeEventListener(s,Ft,!0)}function Qt(t){const e=t.type;if(!Yt(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Bt&&(e=It[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const te={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ee(t,e,s){t.movefn=e,t.upfn=s,document.addEventListener("mousemove",e),document.addEventListener("mouseup",s)}function se(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){te.mouse.mouseIgnoreJob||Zt(!0),te.mouse.target=ie(t)[0],te.mouse.mouseIgnoreJob=Ot.debounce(te.mouse.mouseIgnoreJob,Pt.after(2500),(function(){Zt(),te.mouse.target=null,te.mouse.mouseIgnoreJob=null}))}),!!qt&&{passive:!0});const ie=t=>t.composedPath&&t.composedPath()||[],ne={},oe=[];function re(t){const e=ie(t);return e.length>0?e[0]:t.target}function ae(t){const e=t.type,s=t.currentTarget[Lt];if(!s)return;const i=s[e];if(!i)return;if(!t[jt]&&(t[jt]={},"touch"===e.slice(0,5))){const s=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(te.touch.id=s.identifier),te.touch.id!==s.identifier)return;Rt||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],s=t.type;if("touchstart"===s)te.touch.x=e.clientX,te.touch.y=e.clientY,te.touch.scrollDecided=!1;else if("touchmove"===s){if(te.touch.scrollDecided)return;te.touch.scrollDecided=!0;const s=function(t){let e="auto";const s=ie(t);for(let t,i=0;i<s.length;i++)if(t=s[i],t[zt]){e=t[zt];break}return e}(t);let i=!1;const n=Math.abs(te.touch.x-e.clientX),o=Math.abs(te.touch.y-e.clientY);t.cancelable&&("none"===s?i=!0:"pan-x"===s?i=o>n:"pan-y"===s&&(i=n>o)),i?t.preventDefault():ue("track")}}(t)}const n=t[jt];if(!n.skip){for(let e,s=0;s<oe.length;s++)e=oe[s],i[e.name]&&!n[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let s,o=0;o<oe.length;o++)s=oe[o],i[s.name]&&!n[s.name]&&(n[s.name]=!0,s[e](t))}}function le(t,e,s){return!!ne[e]&&(function(t,e,s){const i=ne[e],n=i.deps,o=i.name;let r=t[Lt];r||(t[Lt]=r={});for(let e,s,i=0;i<n.length;i++)e=n[i],Vt&&Yt(e)&&"click"!==e||(s=r[e],s||(r[e]=s={_count:0}),0===s._count&&t.addEventListener(e,ae,Xt(e)),s[o]=(s[o]||0)+1,s._count=(s._count||0)+1);t.addEventListener(e,s),i.touchAction&&function(t,e){Rt&&t instanceof HTMLElement&&Tt.run((()=>{t.style.touchAction=e}));t[zt]=e}(t,i.touchAction)}(t,e,s),!0)}function he(t,e,s){return!!ne[e]&&(function(t,e,s){const i=ne[e],n=i.deps,o=i.name,r=t[Lt];if(r)for(let e,s,i=0;i<n.length;i++)e=n[i],s=r[e],s&&s[o]&&(s[o]=(s[o]||1)-1,s._count=(s._count||1)-1,0===s._count&&t.removeEventListener(e,ae,Xt(e)));t.removeEventListener(e,s)}(t,e,s),!0)}function ce(t){oe.push(t);for(let e=0;e<t.emits.length;e++)ne[t.emits[e]]=t}function de(t,e,s){const i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=s,Ht(t).dispatchEvent(i),i.defaultPrevented){const t=s.preventer||s.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function ue(t){const e=function(t){for(let e,s=0;s<oe.length;s++){e=oe[s];for(let s,i=0;i<e.emits.length;i++)if(s=e.emits[i],s===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function pe(t,e,s,i){e&&de(e,t,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:i,prevent:function(t){return ue(t)}})}function fe(t,e,s){if(t.prevent)return!1;if(t.started)return!0;const i=Math.abs(t.x-e),n=Math.abs(t.y-s);return i>=5||n>=5}function me(t,e,s){if(!e)return;const i=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],o=n.x-t.x,r=n.y-t.y;let a,l=0;i&&(a=n.x-i.x,l=n.y-i.y),de(e,"track",{state:t.state,x:s.clientX,y:s.clientY,dx:o,dy:r,ddx:a,ddy:l,sourceEvent:s,hover:function(){return function(t,e){let s=document.elementFromPoint(t,e),i=s;for(;i&&i.shadowRoot;){const n=i;if(i=i.shadowRoot.elementFromPoint(t,e),n===i)break;i&&(s=i)}return s}(s.clientX,s.clientY)}})}function ve(t,e,s){const i=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),o=re(s||e);!o||Kt[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=25&&n<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=re(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const s=e.getBoundingClientRect(),i=t.pageX,n=t.pageY;return!(i>=s.left&&i<=s.right&&n>=s.top&&n<=s.bottom)}return!1}(e))&&(t.prevent||de(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s}))}ce({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){se(this.info)},mousedown:function(t){if(!Qt(t))return;const e=re(t),s=this;ee(this.info,(function(t){Qt(t)||(pe("up",e,t),se(s.info))}),(function(t){Qt(t)&&pe("up",e,t),se(s.info)})),pe("down",e,t)},touchstart:function(t){pe("down",re(t),t.changedTouches[0],t)},touchend:function(t){pe("up",re(t),t.changedTouches[0],t)}}),ce({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,se(this.info)},mousedown:function(t){if(!Qt(t))return;const e=re(t),s=this,i=function(t){const i=t.clientX,n=t.clientY;fe(s.info,i,n)&&(s.info.state=s.info.started?"mouseup"===t.type?"end":"track":"start","start"===s.info.state&&ue("tap"),s.info.addMove({x:i,y:n}),Qt(t)||(s.info.state="end",se(s.info)),e&&me(s.info,e,t),s.info.started=!0)};ee(this.info,i,(function(t){s.info.started&&i(t),se(s.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){const e=re(t),s=t.changedTouches[0],i=s.clientX,n=s.clientY;fe(this.info,i,n)&&("start"===this.info.state&&ue("tap"),this.info.addMove({x:i,y:n}),me(this.info,e,s),this.info.state="track",this.info.started=!0)},touchend:function(t){const e=re(t),s=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),me(this.info,e,s))}}),ce({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Qt(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Qt(t)&&ve(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){ve(this.info,t.changedTouches[0],t)}});const ge={horizontal:{x:1,y:0},vertical:{x:0,y:1}};class ye extends At{constructor(){super(),this.itemSelector="li",this.animationEnabled=!1,this.clonedClass="cloned",this.draggedClass="dragged",this.animationTiming={duration:200,easing:"ease-out"},this.dragRequestPending=!1,this.sortableNodes=[],this.animatedElements=[],this.initialScrollTop=0,this.handleTrack=this.handleTrack.bind(this)}connectedCallback(){super.connectedCallback(),le(this.getSortableHost(),"track",this.handleTrack)}disconnectedCallback(){he(this.getSortableHost(),"track",this.handleTrack),super.disconnectedCallback()}updated(t){t.has("sortableHostNode")&&(he(t.get("sortableHostNode")||this,"track",this.handleTrack),le(this.getSortableHost(),"track",this.handleTrack),this.sortableHostNode&&(this.sortableHostNode.style.position="relative"))}getSortableHost(){return this.sortableHostNode?this.sortableHostNode:this}handleTrack(t){switch(t.detail.state){case"start":this.dragRequestPending||this.trackStart(t);break;case"track":this.trackMove(t);break;case"end":this.animationPromise?this.animationPromise.then((()=>{setTimeout((()=>this.trackEnd()))})):setTimeout((()=>this.trackEnd()))}}trackStart(t){const e=this.handleSelector,s=(t.path?t.path:t.composedPath())[0];if(e&&!s.closest(e))return;this.updateUserSelectStyle("none"),this.dragRequestPending=!0;const i=this.itemSelector,n=s.closest(i);n&&(t.preventDefault(),this.draggedElement=n,this.sortableNodes=Array.from(this.getSortableHost().querySelectorAll(i))||[],this.draggedElementClone=this.createClone(n),this.draggedElementOrigin=n.nextSibling,this.animatedElements=[],this.draggedElement.classList.add(this.draggedClass))}trackEnd(){if(!this.draggedElement)return;const t=Array.from(this.getSortableHost().querySelectorAll(this.itemSelector)),e=this.sortableNodes.indexOf(this.draggedElement),s=t.indexOf(this.draggedElement);e!==s&&this.dispatchEvent(new CustomEvent("dom-order-change",{bubbles:!0,composed:!0,detail:{sourceIndex:e,targetIndex:s}})),this.reset(),this.dragRequestPending=!1,this.updateUserSelectStyle("text")}trackMove(t){if(t.preventDefault(),!this.draggedElementClone)return;let{dx:e,dy:s}=t.detail;const i=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);this.orientation&&(e*=ge[this.orientation].x,s*=ge[this.orientation].y),s-=this.initialScrollTop-i,Object.assign(this.draggedElementClone.style,{transform:`translate3d(${e}px, ${s}px, 0)`});const n=this.hitTest(this.draggedElementClone,this.sortableNodes)[0];n&&n!==this.draggedElement&&!this.isAnimating(n)&&this.insertAtTarget(this.draggedElement,n)}updateUserSelectStyle(t){this.style.userSelect=t,this.style.MozUserSelect=t,this.style.msUserSelect=t,this.style.webkitUserSelect=t}hitTest(t,e){const{left:s,top:i,width:n,height:o}=t.getBoundingClientRect(),r=s+n/2,a=i+o/2;return e.filter((t=>{const{left:e,right:s,top:i,bottom:n}=t.getBoundingClientRect();return!(r<e||r>s||a<i||a>n)}))}isAnimating(t){return-1!==this.animatedElements.indexOf(t)}reset(){void 0!==this.draggedElementClone&&null!==this.draggedElementClone.parentNode&&this.draggedElementClone.parentNode.removeChild(this.draggedElementClone),this.draggedElement&&this.draggedElement.parentNode&&this.draggedElementOrigin&&(this.draggedElement.classList.remove(this.draggedClass),this.draggedElement.parentNode.insertBefore(this.draggedElement,this.draggedElementOrigin)),delete this.draggedElementClone,delete this.draggedElement,this.sortableNodes=[],this.animatedElements=[],this.dragRequestPending=!1,this.updateUserSelectStyle("text")}animateNode(t,e=0,s=0){t.animate&&(this.animatedElements.push(t),Object.assign(t.style,{willChange:"transform"}),this.animationPromise=new Promise((i=>{t.animate([{transform:`translate3d(${e}px, ${s}px, 0)`},{transform:"none"}],this.animationTiming).addEventListener("finish",(()=>{const e=this.animatedElements.indexOf(t);Object.assign(t.style,{willChange:"initial"}),-1!==e&&this.animatedElements.splice(e,1),i(),delete this.animationPromise}))})))}insertAtTarget(t,e){let s=[];if(this.animationEnabled&&(s=this.sortableNodes.map((t=>({x:t.offsetLeft,y:t.offsetTop})))),t&&t.parentNode){const s=t.compareDocumentPosition(e)&this.DOCUMENT_POSITION_FOLLOWING?e.nextSibling:e;t.parentNode.insertBefore(t,s)}this.animationEnabled&&this.sortableNodes.forEach(((t,e)=>{const{x:i,y:n}=s[e],o=i-t.offsetLeft,r=n-t.offsetTop;0===o&&0===r||this.animateNode(t,o,r)}))}createClone(t){const e=t.cloneNode(!0);Array.from(e.children).forEach(((e,s)=>{const i=e,n=t.children.item(s);n&&(i.style.width=`${n.offsetWidth}px`)})),Object.keys(t).filter((t=>t.startsWith("__"))).forEach((s=>e[s]=t[s]));const{offsetLeft:s,offsetTop:i}=t;return this.initialScrollTop=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),Object.assign(e.style,{position:"absolute",left:`${s}px`,top:`${i}px`,willChange:"transform,opacity"}),e.classList.add(this.clonedClass),t.parentNode.appendChild(e)}render(){return R`
      <style>
        :host {
          position: relative;
          display: block;
        }
      </style>
      <slot></slot>
    `}}t([_t({type:String,attribute:"handle-selector"})],ye.prototype,"handleSelector",void 0),t([_t({type:String,attribute:"item-selector"})],ye.prototype,"itemSelector",void 0),t([_t({type:Object})],ye.prototype,"sortableHostNode",void 0),t([_t({type:Boolean,attribute:"animation-enabled"})],ye.prototype,"animationEnabled",void 0),t([_t({type:String,attribute:"cloned-class"})],ye.prototype,"clonedClass",void 0),t([_t({type:String,attribute:"dragged-class"})],ye.prototype,"draggedClass",void 0),t([_t({type:Object,attribute:"animation-timing"})],ye.prototype,"animationTiming",void 0),t([_t({type:String})],ye.prototype,"orientation",void 0);let be=class extends ye{};be=t([bt("exmg-sortable")],be);const $e=[{index:2,firstName:"Peter",lastName:"Neder",email:"peter@email.com"},{index:3,firstName:"Marloes",lastName:"Haut",email:"marloes@email.com"},{index:6,firstName:"Mark",lastName:"Smiths",email:"mark@email.com"},{index:4,firstName:"Peter-Paul",lastName:"Elf",email:"pp@email.com"}];let _e=class extends gt{constructor(){super(),this.users=$e,this.orderChange=this.orderChange.bind(this)}async firstUpdated(){await this.updateComplete,setTimeout((()=>{this.externalSortableHost=this.shadowRoot.querySelector("#externalSortableHost")}))}orderChange(t){setTimeout((()=>{const{sourceIndex:e,targetIndex:s}=t.detail,i=[...this.users],n=i[e];n.amountOfMoves=(n.amountOfMoves||0)+1,i.splice(e,1),i.splice(s,0,n),this.users=i}),0)}render(){return R`
      <h2>List</h2>
      <exmg-sortable animation-enabled orientation="vertical" @dom-order-change="${this.orderChange}">
        <ul>
          ${this.users.map((t=>R`
              <li>
                <strong>${t.firstName}</strong>
                <span>${t.lastName}</span>
                <span>${t.email}</span>
              </li>
            `))}
        </ul>
      </exmg-sortable>
      <h2>Cards with animation</h2>
      <exmg-sortable
        item-selector="div.box"
        @dom-order-change="${this.orderChange}"
      >
        <div class="boxes">
          ${this.users.map((t=>R` <div class="box">${t.firstName}</div> `))}
        </div>
      </exmg-sortable>

      <h2>Table with custom handle</h2>
      <exmg-sortable
        item-selector="tr"
        handle-selector=".handle span"
        orientation="vertical"
        @dom-order-change="${this.orderChange}"
      >
        <table>
          ${this.users.map((t=>R`
              <tr>
                <td class="handle"><span></span></td>
                <td>${t.firstName}</td>
                <td>${t.lastName}</td>
                <td>${t.email}</td>
              </tr>
            `))}
        </table>
      </exmg-sortable>

      <h2>Table with custom handle and external sortable node host</h2>
      <table id="externalSortableHost">
        ${this.users.map((t=>R`
            <tr>
              <td class="handle"><span></span></td>
              <td>${t.firstName}</td>
              <td>${t.lastName}</td>
              <td>${t.email}</td>
            </tr>
          `))}
      </table>
      <exmg-sortable
        item-selector="tr"
        handle-selector=".handle span"
        orientation="vertical"
        @dom-order-change="${this.orderChange}"
        .sortableHostNode="${this.externalSortableHost}"
      ></exmg-sortable>

      <h2>Manipulate sorted data</h2>
      <exmg-sortable item-selector="div.box" @dom-order-change="${this.orderChange}">
        <div class="boxes">
          ${this.users.map((t=>R`
              <div class="box">
                ${t.firstName}<br />
                Moves: ${t.amountOfMoves||0}
              </div>
            `))}
        </div>
      </exmg-sortable>
    `}};_e.styles=[((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new it(s,t,et)})`
    ul,
    li {
      margin-left: 0;
      padding-left: 0;
    }

    li {
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid silver;
    }

    li.cloned {
      background: white;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      opacity: 0.9;
    }

    li.dragged {
      background: #c0c0c0;
      opacity: 0.25;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) inset;
    }

    li > strong {
      flex-grow: 1;
    }

    li > span {
      width: 30%;
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      padding: 10px 15px;
      border-bottom: 1px solid silver;
    }

    tr.dragged {
      background: #c0c0c0;
      opacity: 0.25;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) inset;
    }

    tr.cloned {
      background: white;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      opacity: 0.9;
    }

    td.handle {
      padding: 0;
      vertical-align: middle;
    }
    td.handle span {
      display: block;
      background: gray;
      width: 20px;
      height: 20px;
      margin: 10px;
    }

    .boxes {
      margin-top: 2em;
      overflow: hidden;
    }

    .box {
      float: left;
      width: 150px;
      height: 150px;
      padding: 10px;
      margin: 20px;
      box-sizing: border-box;
      background: #f0f0f0;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    .box.dragged {
      opacity: 0;
    }
  `],t([_t({type:Array})],_e.prototype,"users",void 0),t([_t({type:Object})],_e.prototype,"externalSortableHost",void 0),_e=t([bt("exmg-sortable-demo")],_e);export{_e as SortableDemo};
