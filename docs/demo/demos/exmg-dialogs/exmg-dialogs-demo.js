/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},e(t,i)};var t=function(){return t=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},t.apply(this,arguments)};function i(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}function r(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],r=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new Map;class a{constructor(e,t){if(this._$cssResult$=!0,t!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=s.get(this.cssText);return n&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const l=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1]),e[0]);return new a(i,o)},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",o))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c,p;const h={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},u=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const r=this._$Eh(i,t);void 0!==r&&(this._$Eu.set(r,i),e.push(r))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$Eg(e,t,i=f){var r,n;const o=this.constructor._$Eh(e,i);if(void 0!==o&&!0===i.reflect){const s=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:h.toAttribute)(t,i.type);this._$Ei=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(e,t){var i,r,n;const o=this.constructor,s=o._$Eu.get(e);if(void 0!==s&&this._$Ei!==s){const e=o.getPropertyOptions(s),a=e.converter,l=null!==(n=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=s,this[s]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _,g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(c=globalThis.reactiveElementPolyfillSupport)||void 0===c||c.call(globalThis,{ReactiveElement:m}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.0.0");const b=globalThis.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,x="?"+v,w=`<${x}>`,C=document,S=(e="")=>C.createComment(e),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,T=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,R=/"/g,I=/^(?:script|style|textarea)$/i,z=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),$=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),M=new WeakMap,L=C.createTreeWalker(C,129,null,!1),F=(e,t)=>{const i=e.length-1,r=[];let n,o=2===t?"<svg>":"",s=E;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===E?"!--"===l[1]?s=O:void 0!==l[1]?s=T:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=k):void 0!==l[3]&&(s=k):s===k?">"===l[0]?(s=null!=n?n:E,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?k:'"'===l[3]?R:N):s===R||s===N?s=k:s===O||s===T?s=E:(s=k,n=void 0);const p=s===k&&e[t+1].startsWith("/>")?" ":"";o+=s===E?i+w:d>=0?(r.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+v+p):i+v+(-2===d?(r.push(void 0),t):p)}const a=o+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==y?y.createHTML(a):a,r]};class H{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const s=e.length-1,a=this.parts,[l,d]=F(e,t);if(this.el=H.createElement(l,i),L.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=L.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(v)){const i=d[o++];if(e.push(t),void 0!==i){const e=r.getAttribute(i.toLowerCase()+"$lit$").split(v),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?V:"?"===t[1]?Y:"@"===t[1]?W:U})}else a.push({type:6,index:n})}for(const t of e)r.removeAttribute(t)}if(I.test(r.tagName)){const e=r.textContent.split(v),t=e.length-1;if(t>0){r.textContent=b?b.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],S()),L.nextNode(),a.push({type:2,index:++n});r.append(e[t],S())}}}else if(8===r.nodeType)if(r.data===x)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(v,e+1));)a.push({type:7,index:n}),e+=v.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function B(e,t,i=e,r){var n,o,s,a;if(t===$)return t;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const d=A(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,r)),void 0!==r?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(t=B(e,l._$AS(e,t.values),l,r)),t}class j{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(i,!0);L.currentNode=n;let o=L.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new q(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new J(o,this,e)),this.v.push(t),l=r[++a]}s!==(null==l?void 0:l.index)&&(o=L.nextNode(),s++)}return n}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class q{constructor(e,t,i,r){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),A(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==$&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return P(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==D&&A(this._$AH)?this._$AA.nextSibling.data=e:this.S(C.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=H.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(i);else{const e=new j(n,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=M.get(e.strings);return void 0===t&&M.set(e.strings,t=new H(e)),t}M(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new q(this.A(S()),this.A(S()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class U{constructor(e,t,i,r,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(void 0===n)e=B(this,e,t,0),o=!A(e)||e!==this._$AH&&e!==$,o&&(this._$AH=e);else{const r=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=B(this,r[i+s],t,s),a===$&&(a=this._$AH[s]),o||(o=!A(a)||a!==this._$AH[s]),a===D?e=D:e!==D&&(e+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}o&&!r&&this.k(e)}k(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class V extends U{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===D?void 0:e}}class Y extends U{constructor(){super(...arguments),this.type=4}k(e){e&&e!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends U{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=B(this,e,t,0))&&void 0!==i?i:D)===$)return;const r=this._$AH,n=e===D&&r!==D||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==D&&(r===D||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,G,Z;null===(_=globalThis.litHtmlPolyfillSupport)||void 0===_||_.call(globalThis,H,q),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.0");class K extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var r,n;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:t;let s=o._$litPart$;if(void 0===s){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=s=new q(t.insertBefore(S(),e),e,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return $}}K.finalized=!0,K._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:K}),null===(G=globalThis.litElementPolyfillSupport)||void 0===G||G.call(globalThis,{LitElement:K}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function te(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ee(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const ie=({finisher:e,descriptor:t})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:{...i,key:r};return null!=e&&(o.finisher=function(t){e(t,r)}),o}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,r,t(r)),null==e||e(n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function re(e,t){return ie({descriptor:i=>{const r={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[t]&&(this[t]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(e){return te({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oe(e){return ie({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(e){return ie({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ae=()=>{},le={get passive(){return!1}};document.addEventListener("x",ae,le),document.removeEventListener("x",ae);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class de extends K{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ce=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),pe={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},he={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ue={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fe=["touchstart","pointerdown","mousedown","keydown"],me=["touchend","pointerup","mouseup","contextmenu"],_e=[],ge=function(i){function n(e){var r=i.call(this,t(t({},n.defaultAdapter),e))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(e){r.activateImpl(e)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}(n,i),Object.defineProperty(n,"cssClasses",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return he},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var e=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var i=n.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(r),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())}))}},n.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION));var t=n.cssClasses,i=t.ROOT,r=t.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(i),e.adapter.removeClass(r),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},n.prototype.activate=function(e){this.activateImpl(e)},n.prototype.deactivate=function(){this.deactivateImpl()},n.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},n.prototype.setUnbounded=function(e){var t=n.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},n.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(n.cssClasses.BG_FOCUSED)}))},n.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(n.cssClasses.BG_FOCUSED)}))},n.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},n.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},n.prototype.registerRootHandlers=function(e){var t,i;if(e){try{for(var n=r(fe),o=n.next();!o.done;o=n.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},n.prototype.registerDeactivationHandlers=function(e){var t,i;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=r(me),o=n.next();!o.done;o=n.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}},n.prototype.deregisterRootHandlers=function(){var e,t;try{for(var i=r(fe),n=i.next();!n.done;n=i.next()){var o=n.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},n.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=r(me),n=i.next();!n.done;n=i.next()){var o=n.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},n.prototype.removeCssVars=function(){var e=this,t=n.strings;Object.keys(t).forEach((function(i){0===i.indexOf("VAR_")&&e.adapter.updateCssVariable(t[i],null)}))},n.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;if(!(r&&void 0!==e&&r.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&_e.length>0&&_e.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(_e.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){_e=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive(e),i.wasElementMadeActive&&t.animateActivation()),i.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},n.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},n.prototype.animateActivation=function(){var e=this,t=n.strings,i=t.VAR_FG_TRANSLATE_START,r=t.VAR_FG_TRANSLATE_END,o=n.cssClasses,s=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,l=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var d="",c="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),h=p.startPoint,u=p.endPoint;d=h.x+"px, "+h.y+"px",c=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(i,d),this.adapter.updateCssVariable(r,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(a),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),l)},n.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,i=t.activationEvent;return e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var r,n,o=t.x,s=t.y,a=o+i.left,l=s+i.top;if("touchstart"===e.type){var d=e;r=d.changedTouches[0].pageX-a,n=d.changedTouches[0].pageY-l}else{var c=e;r=c.pageX-a,n=c.pageY-l}return{x:r,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:e={x:e.x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},n.prototype.runDeactivationUXLogicIfReady=function(){var e=this,t=n.cssClasses.FG_DEACTIVATION,i=this.activationState,r=i.hasDeactivationUXRun,o=i.isActivated;(r||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(t)}),ue.FG_DEACTIVATION_MS))},n.prototype.rmBoundedActivationClasses=function(){var e=n.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},n.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),n.numbers.TAP_DELAY_MS)},n.prototype.deactivateImpl=function(){var e=this,i=this.activationState;if(i.isActivated){var r=t({},i);i.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(r)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(r),e.resetActivationState()})))}},n.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady()},n.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+n.numbers.PADDING;var i=Math.floor(t*n.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},n.prototype.updateLayoutCssVars=function(){var e=n.strings,t=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},n}(ce),be=ge;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye=1,ve=e=>(...t)=>({_$litDirective$:e,values:t});class xe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=ve(class extends xe{constructor(e){var t;if(super(e),e.type!==ye||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,r;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.et)||void 0===i?void 0:i.has(e))&&this.st.add(e);return this.render(t)}const n=e.element.classList;this.st.forEach((e=>{e in t||(n.remove(e),this.st.delete(e))}));for(const e in t){const i=!!t[e];i===this.st.has(e)||(null===(r=this.et)||void 0===r?void 0:r.has(e))||(i?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return $}}),Ce=ve(class extends xe{constructor(e){var t;if(super(e),e.type!==ye||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const r=t[e];null!=r&&(this.ut.add(e),e.includes("-")?i.setProperty(e,r):i[e]=r)}return $}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Se extends de{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=be}get isActive(){return e=this.parentElement||this,t=":active",(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t);var e,t}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return z`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${we(i)}"
          style="${Ce({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}i([re(".mdc-ripple-surface")],Se.prototype,"mdcRoot",void 0),i([te({type:Boolean})],Se.prototype,"primary",void 0),i([te({type:Boolean})],Se.prototype,"accent",void 0),i([te({type:Boolean})],Se.prototype,"unbounded",void 0),i([te({type:Boolean})],Se.prototype,"disabled",void 0),i([te({type:Boolean})],Se.prototype,"activated",void 0),i([te({type:Boolean})],Se.prototype,"selected",void 0),i([te({type:Boolean})],Se.prototype,"internalUseStateLayerCustomProperties",void 0),i([ne()],Se.prototype,"hovering",void 0),i([ne()],Se.prototype,"bgFocused",void 0),i([ne()],Se.prototype,"fgActivation",void 0),i([ne()],Se.prototype,"fgDeactivation",void 0),i([ne()],Se.prototype,"fgScale",void 0),i([ne()],Se.prototype,"fgSize",void 0),i([ne()],Se.prototype,"translateStart",void 0),i([ne()],Se.prototype,"translateEnd",void 0),i([ne()],Se.prototype,"leftPos",void 0),i([ne()],Se.prototype,"topPos",void 0),
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ae=l`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Pe=class extends Se{};function Ee(e,t,i){if(void 0!==t)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
return function(e,t,i){const r=e.constructor;if(!i){const e=`__${t}`;if(!(i=r.getPropertyDescriptor(t,e)))throw new Error("@ariaProperty must be used after a @property decorator")}const n=i;let o="";if(!n.set)throw new Error(`@ariaProperty requires a setter for ${t}`);const s={configurable:!0,enumerable:!0,set(e){if(""===o){const e=r.getPropertyOptions(t);o=e.attribute}this.hasAttribute(o)&&this.removeAttribute(o),n.set.call(this,e)}};return n.get&&(s.get=function(){return n.get.call(this)}),s}(e,t,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Pe.styles=[Ae],Pe=i([Q("mwc-ripple")],Pe);class Oe{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=e=>null!=e?e:D
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class ke extends K{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new Oe((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?z`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return z`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${Te(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}i([te({type:Boolean,reflect:!0})],ke.prototype,"disabled",void 0),i([te({type:String})],ke.prototype,"icon",void 0),i([Ee,te({type:String,attribute:"aria-label"})],ke.prototype,"ariaLabel",void 0),i([Ee,te({type:String,attribute:"aria-haspopup"})],ke.prototype,"ariaHasPopup",void 0),i([re("button")],ke.prototype,"buttonElement",void 0),i([se("mwc-ripple")],ke.prototype,"ripple",void 0),i([ne()],ke.prototype,"shouldRenderRipple",void 0),i([oe({passive:!0})],ke.prototype,"handleRippleMouseDown",null),i([oe({passive:!0})],ke.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ne=l`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Re=class extends ke{};Re.styles=[Ne],Re=i([Q("mwc-icon-button")],Re);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ie=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ze,$e;function De(e){ze=(!e||!e.shimcssproperties)&&(Ie||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&($e=window.ShadyCSS.cssBuild);const Me=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ze=window.ShadyCSS.nativeCss:window.ShadyCSS?(De(window.ShadyCSS),window.ShadyCSS=void 0):De(window.WebComponents&&window.WebComponents.flags);const Le=ze;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Fe{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function He(e){return Be(function(e){let t=new Fe;t.start=0,t.end=e.length;let i=t;for(let r=0,n=e.length;r<n;r++)if(e[r]===Ue){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new Fe,i.start=r+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[r]===Ve&&(i.end=r+1,i=i.parent||t);return t}(e=e.replace(Ye.comments,"").replace(Ye.port,"")),e)}function Be(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let r=e.previous?e.previous.end:e.parent.start;i=t.substring(r,e.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(Ye.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=i.trim();e.atRule=0===n.indexOf(Xe),e.atRule?0===n.indexOf(Je)?e.type=qe.MEDIA_RULE:n.match(Ye.keyframesRule)&&(e.type=qe.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Ye.multipleSpaces).pop()):0===n.indexOf(We)?e.type=qe.MIXIN_RULE:e.type=qe.STYLE_RULE}let r=e.rules;if(r)for(let e,i=0,n=r.length;i<n&&(e=r[i]);i++)Be(e,t);return e}function je(e,t,i=""){let r="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(We)}(i))for(let e,n=0,o=i.length;n<o&&(e=i[n]);n++)r=je(e,t,r);else r=t?e.cssText:function(e){return function(e){return e.replace(Ye.mixinApply,"").replace(Ye.varApply,"")}(e=function(e){return e.replace(Ye.customProp,"").replace(Ye.mixinProp,"")}(e))}(e.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+Ue+"\n"),i+=r,e.selector&&(i+=Ve+"\n\n")),i}const qe={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Ue="{",Ve="}",Ye={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},We="--",Je="@media",Xe="@",Ge=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ze=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Ke=/@media\s(.*)/,Qe=new Set;function et(e){const t=e.textContent;if(!Qe.has(t)){Qe.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function tt(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function it(e,t){return e?("string"==typeof e&&(e=He(e)),t&&nt(e,t),je(e,Le)):""}function rt(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=He(e.textContent)),e.__cssRules||null}function nt(e,t,i,r){if(!e)return;let n=!1,o=e.type;if(r&&o===qe.MEDIA_RULE){let t=e.selector.match(Ke);t&&(window.matchMedia(t[1]).matches||(n=!0))}o===qe.STYLE_RULE?t(e):i&&o===qe.KEYFRAMES_RULE?i(e):o===qe.MIXIN_RULE&&(n=!0);let s=e.rules;if(s&&!n)for(let e,n=0,o=s.length;n<o&&(e=s[n]);n++)nt(e,t,i,r)}function ot(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let r=function(e,t){let i=0;for(let r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}(e,i+3),n=e.substring(i+4,r),o=e.substring(0,i),s=ot(e.substring(r+1),t),a=n.indexOf(",");return-1===a?t(o,n.trim(),"",s):t(o,n.substring(0,a).trim(),n.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;function st(e){if(void 0!==$e)return $e;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function at(e){return""!==st(e)}function lt(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function dt(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ct=/;\s*/m,pt=/^\s*(initial)|(inherit)\s*$/,ht=/\s*!important/;class ut{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let ft=null;class mt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new ut}detectMixin(e){return function(e){const t=Ze.test(e)||Ge.test(e);return Ze.lastIndex=0,Ge.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const r=i[e];tt(r)?Ie||(et(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=rt(e);return this.transformRules(i,t),e.textContent=it(i),i}transformCustomStyle(e){let t=rt(e);return nt(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=it(t),t}transformRules(e,t){this._currentElement=t,nt(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(Ge,((e,i,r,n)=>this._produceCssProperties(e,i,r,n,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let r=!1;return nt(t,(t=>{r=r||t===e,r||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))})),i}_consumeCssProperties(e,t){let i=null;for(;i=Ze.exec(e);){let r=i[0],n=i[1],o=i.index,s=o+r.indexOf("@apply"),a=o+r.length,l=e.slice(0,s),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let p=this._atApplyToCssProperties(n,c);e=`${l}${p}${d}`,Ze.lastIndex=o+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(ct,"");let i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){let n,o,s;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(n in a)s=t&&t[n],o=[n,": var(",e,"_-_",n],s&&o.push(",",s.replace(ht,"")),o.push(")"),ht.test(a[n])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=pt.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,r,n=e.split(";"),o={};for(let e,s,a=0;a<n.length;a++)e=n[a],e&&(s=e.split(":"),s.length>1&&(i=s[0].trim(),r=s.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(i,r)),o[i]=r));return o}_invalidateMixinEntry(e){if(ft)for(let t in e.dependants)t!==this._currentElement&&ft(t)}_produceCssProperties(e,t,i,r,n){if(i&&ot(i,((e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)})),!r)return e;let o=this._consumeCssProperties(""+r,n),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let p,h,u=[],f=!1;for(p in l)h=a[p],void 0===h&&(h="initial"),c&&!(p in c)&&(f=!0),u.push(`${t}_-_${p}: ${h}`);return f&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(s=`${e};${s}`),`${s}${u.join("; ")};`}}mt.prototype.detectMixin=mt.prototype.detectMixin,mt.prototype.transformStyle=mt.prototype.transformStyle,mt.prototype.transformCustomStyle=mt.prototype.transformCustomStyle,mt.prototype.transformRules=mt.prototype.transformRules,mt.prototype.transformRule=mt.prototype.transformRule,mt.prototype.transformTemplate=mt.prototype.transformTemplate,mt.prototype._separator="_-_",Object.defineProperty(mt.prototype,"invalidCallback",{get:()=>ft,set(e){ft=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _t={},gt="_applyShimCurrentVersion",bt="_applyShimNextVersion",yt="_applyShimValidatingVersion",vt=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function xt(e){let t=_t[e];t&&function(e){e[gt]=e[gt]||0,e[yt]=e[yt]||0,e[bt]=(e[bt]||0)+1}(t)}function wt(e){return e[gt]===e[bt]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ct,St=null,At=window.HTMLImports&&window.HTMLImports.whenReady||null;function Pt(e){requestAnimationFrame((function(){At?At(e):(St||(St=new Promise((e=>{Ct=e})),"complete"===document.readyState?Ct():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&Ct()}))),St.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Et="__shadyCSSCachedStyle";let Ot=null,Tt=null;class kt{constructor(){this.customStyles=[],this.enqueued=!1,Pt((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&Tt&&(this.enqueued=!0,Pt(Tt))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Et])return e[Et];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[Et])continue;const r=this.getStyleForCustomStyle(i);if(r){const e=r.__appliedElement||r;Ot&&Ot(e),i[Et]=e}}return e}}kt.prototype.addCustomStyle=kt.prototype.addCustomStyle,kt.prototype.getStyleForCustomStyle=kt.prototype.getStyleForCustomStyle,kt.prototype.processStyles=kt.prototype.processStyles,Object.defineProperties(kt.prototype,{transformCallback:{get:()=>Ot,set(e){Ot=e}},validateCallback:{get:()=>Tt,set(e){let t=!1;Tt||(t=!0),Tt=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Nt=new mt;class Rt{constructor(){this.customStyleInterface=null,Nt.invalidCallback=xt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Nt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),at(e))return;_t[t]=e;let i=Nt.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&Nt.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&lt(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}(e),i=_t[t];if((!i||!at(i))&&i&&!wt(i)){(function(e){return!wt(e)&&e[yt]===e[bt]})(i)||(this.prepareTemplate(i,t),function(e){e[yt]=e[bt],e._validating||(e._validating=!0,vt.then((function(){e[gt]=e[bt],e._validating=!1})))}(i));let r=e.shadowRoot;if(r){let e=r.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=it(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Rt;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,r){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>dt(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Le,nativeShadow:Ie,cssBuild:$e,disableRuntime:Me},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Nt,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let It,zt,$t=/(url\()([^)]*)(\))/g,Dt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Mt(e,t){if(e&&Dt.test(e))return e;if("//"===e)return e;if(void 0===It){It=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",It="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),It)try{return new URL(e,t).href}catch(t){return e}return zt||(zt=document.implementation.createHTMLDocument("temp"),zt.base=zt.createElement("base"),zt.head.appendChild(zt.base),zt.anchor=zt.createElement("a"),zt.body.appendChild(zt.anchor)),zt.base.href=t,zt.anchor.href=e,zt.anchor.href||e}function Lt(e,t){return e.replace($t,(function(e,i,r,n){return i+"'"+Mt(r.replace(/["']/g,""),t)+"'"+n}))}function Ft(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ht=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Bt=Ht&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let jt=window.Polymer&&window.Polymer.rootPath||Ft(document.baseURI||window.location.href),qt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Ut=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Vt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Yt=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Wt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Jt=window.Polymer&&window.Polymer.legacyWarnings||!1,Xt=window.Polymer&&window.Polymer.syncInitialRender||!1,Gt=window.Polymer&&window.Polymer.legacyUndefined||!1,Zt=window.Polymer&&window.Polymer.orderedComputed||!1,Kt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Qt=window.Polymer&&window.Polymer.fastDomIf||!1,ei=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,ti=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,ii=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,ri=0;const ni=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=ri++;return function(r){let n=r.__mixinSet;if(n&&n[i])return r;let o=t,s=o.get(r);if(!s){s=e(r),o.set(r,s);let t=Object.create(s.__mixinSet||n||null);t[i]=!0,s.__mixinSet=t}return s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let oi={},si={};function ai(e,t){oi[e]=si[e.toLowerCase()]=t}function li(e){return oi[e]||si[e.toLowerCase()]}class di extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=li(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,r){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Mt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ft(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Vt&&void 0!==li(e))throw ai(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ai(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}di.prototype.modules=oi,customElements.define("dom-module",di);function ci(e){return di.import(e)}function pi(e){const t=Lt((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function hi(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...ui(t[e]));return i}function ui(e){const t=ci(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...mi(t));const i=t.querySelector("template");i&&e.push(...fi(i,t.assetpath)),t._styles=e}return t._styles}function fi(e,t){if(!e._styles){const i=[],r=e.content.querySelectorAll("style");for(let e=0;e<r.length;e++){let n=r[e],o=n.getAttribute("include");o&&i.push(...hi(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(n.textContent=Lt(n.textContent,t)),i.push(n)}e._styles=i}return e._styles}function mi(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let r=i[e];if(r.import){const e=r.import,i=r.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=pi(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=pi(e));t.push(i?e._unscopedStyle:e._style)}}return t}function _i(e){let t=ci(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=mi(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const r=fi(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const gi=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function bi(e){return e.indexOf(".")>=0}function yi(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function vi(e,t){return 0===e.indexOf(t+".")}function xi(e,t){return 0===t.indexOf(e+".")}function wi(e,t,i){return t+i.slice(e.length)}function Ci(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let r=e[i].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function Si(e){return Array.isArray(e)?Ci(e).split("."):e.toString().split(".")}function Ai(e,t,i){let r=e,n=Si(t);for(let e=0;e<n.length;e++){if(!r)return;r=r[n[e]]}return i&&(i.path=n.join(".")),r}function Pi(e,t,i){let r=e,n=Si(t),o=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(r=r[n[e]],!r)return}r[o]=i}else r[t]=i;return n.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ei={},Oi=/-[a-z]/g,Ti=/([A-Z])/g;function ki(e){return Ei[e]||(Ei[e]=e.indexOf("-")<0?e:e.replace(Oi,(e=>e[1].toUpperCase())))}function Ni(e){return Ei[e]||(Ei[e]=e.replace(Ti,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ri=0,Ii=0,zi=[],$i=0,Di=!1,Mi=document.createTextNode("");new window.MutationObserver((function(){Di=!1;const e=zi.length;for(let t=0;t<e;t++){let e=zi[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}zi.splice(0,e),Ii+=e})).observe(Mi,{characterData:!0});const Li={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Fi={run:e=>(Di||(Di=!0,Mi.textContent=$i++),zi.push(e),Ri++),cancel(e){const t=e-Ii;if(t>=0){if(!zi[t])throw new Error("invalid async handle: "+e);zi[t]=null}}},Hi=Fi,Bi=ni((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Hi.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const r=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=gi(e)),void 0===r?e.removeAttribute(i):e.setAttribute(i,r)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),ji={};let qi=HTMLElement.prototype;for(;qi;){let e=Object.getOwnPropertyNames(qi);for(let t=0;t<e.length;t++)ji[e[t]]=!0;qi=Object.getPrototypeOf(qi)}const Ui=ni((e=>{const t=Bi(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ki(e[t]))}static attributeNameForProperty(e){return Ni(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}}return super._serializeValue(e)}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!ji[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Vi={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Yi=!1,Wi=!1;function Ji(e){(function(){if(!Yi){Yi=!0;const e=document.createElement("textarea");e.placeholder="a",Wi=e.placeholder===e.textContent}return Wi})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Xi(e){let t=e.getAttribute("is");if(t&&Vi[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Gi(e,t){let i=t.parentInfo&&Gi(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}function Zi(e,t,i,r){r.id&&(t[r.id]=i)}function Ki(e,t,i){if(i.events&&i.events.length)for(let r,n=0,o=i.events;n<o.length&&(r=o[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Qi(e,t,i,r){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=r)}const er=ni((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let r=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,Ji(n),n.firstChild&&this._parseTemplateChildNodes(n,t,i),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let r,n=e.firstChild,o=0;n;n=r){if("template"==n.localName&&(n=Xi(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,r=i.nextSibling,e.removeChild(i),i=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(n,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),n.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let r=e,n=this._parseTemplate(r,t);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let r=!1,n=Array.from(e.attributes);for(let o,s=n.length-1;o=n[s];s--)r=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let o=n.nodeList=new Array(i.length);n.$={};for(let e,r=0,s=i.length;r<s&&(e=i[r]);r++){let i=o[r]=Gi(n,e);Zi(0,n.$,i,e),Qi(0,i,e,t),Ki(this,i,e)}return n=n,n}_addMethodEventListenerToNode(e,t,i,r){let n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let tr=0;const ir=[],rr={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},nr=/[A-Z]/;function or(e,t,i){let r=e[t];if(r){if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),i))for(let e in r){let t=r[e],i=r[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else r=e[t]={};return r}function sr(e,t,i,r,n,o){if(t){let s=!1;const a=tr++;for(let l in i){let d=t[n?yi(l):l];if(d)for(let t,c=0,p=d.length;c<p&&(t=d[c]);c++)t.info&&t.info.lastRun===a||n&&!lr(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,r,t.info,n,o),s=!0)}return s}return!1}function ar(e,t,i,r,n,o,s,a){let l=!1,d=t[s?yi(r):r];if(d)for(let t,c=0,p=d.length;c<p&&(t=d[c]);c++)t.info&&t.info.lastRun===i||s&&!lr(r,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,r,n,o,t.info,s,a),l=!0);return l}function lr(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!vi(i,e))||!(!t.wildcard||!xi(i,e))}return!0}function dr(e,t,i,r,n){let o="string"==typeof n.method?e[n.method]:n.method,s=n.property;o?o.call(e,e.__data[s],r[s]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function cr(e,t,i){let r=yi(t);if(r!==t){return pr(e,Ni(r)+"-changed",i[t],t),!0}return!1}function pr(e,t,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),gi(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function hr(e,t,i,r,n,o){let s=(o?yi(t):t)!=t?t:null,a=s?Ai(e,s):e.__data[t];s&&void 0===a&&(a=i[t]),pr(e,n.eventName,a,s)}function ur(e,t,i,r,n){let o=e.__data[t];qt&&(o=qt(o,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,o)}function fr(e,t,i,r){let n=e[rr.COMPUTE];if(n)if(Zt){tr++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[rr.COMPUTE];let r,{counts:n,ready:o,total:s}=function(e){const t=e.__computeInfo,i={},r=e[rr.COMPUTE],n=[];let o=0;for(let e in t){const r=t[e];o+=i[e]=r.args.filter((e=>!e.literal)).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||n.push(e);return{counts:i,ready:n,total:o}}(e);for(;r=o.shift();){t.set(r,t.size);const e=i[r];e&&e.forEach((e=>{const t=e.info.methodInfo;--s,0==--n[t]&&o.push(t)}))}if(0!==s){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),s=[];for(let e in t)_r(e,n,s,o,r);let a;for(;a=s.shift();)gr(e,"",t,i,a)&&_r(a.methodInfo,n,s,o,r);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;sr(e,n,o,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const mr=(e,t,i)=>{let r=0,n=t.length-1,o=-1;for(;r<=n;){const s=r+n>>1,a=i.get(t[s].methodInfo)-i.get(e.methodInfo);if(a<0)r=s+1;else{if(!(a>0)){o=s;break}n=s-1}}o<0&&(o=n+1),t.splice(o,0,e)},_r=(e,t,i,r,n)=>{const o=t[n?yi(e):e];if(o)for(let t=0;t<o.length;t++){const s=o[t];s.info.lastRun===tr||n&&!lr(e,s.trigger)||(s.info.lastRun=tr,mr(s.info,i,r))}};function gr(e,t,i,r,n){let o=Sr(e,t,i,r,n);if(o===ir)return!1;let s=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):(e[s]=o,!1)}function br(e,t,i,r,n,o,s){i.bindings=i.bindings||[];let a={kind:r,target:n,parts:o,literal:s,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Ni(n)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,yr(e,t,a,r,l)}}function yr(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,s={index:n,binding:i,part:r,evaluator:e};for(let i=0;i<o.length;i++){let r=o[i];"string"==typeof r&&(r=Tr(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:vr,info:s,trigger:r})}}}function vr(e,t,i,r,n,o,s){let a=s[n.index],l=n.binding,d=n.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[t];t=wi(d.source,l.target,t),a._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(a)}else{let s=n.evaluator._evaluateBinding(e,d,t,i,r,o);s!==ir&&function(e,t,i,r,n){n=function(e,t,i,r){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,r),qt&&(n=qt(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[rr.READ_ONLY]&&t[rr.READ_ONLY][r]||t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}(e,a,l,d,s)}}function xr(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length);for(let e=0;e<r.length;e++)n[e]=r[e].literal;let o=t.target;i[o]=n,t.literal&&"property"==t.kind&&("className"===o&&(e=gi(e)),e[o]=t.literal)}}function wr(e,t,i){if(i.listenerEvent){let r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){let o,s=e.detail,a=s&&s.path;a?(r=wi(i,r,a),o=s&&s.value):o=e.currentTarget[i],o=n?!o:o,t[rr.READ_ONLY]&&t[rr.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,o,!0,Boolean(a))||s&&s.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function Cr(e,t,i,r,n,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:o};for(let n,o=0;o<t.args.length&&(n=t.args[o]);o++)n.literal||e._addPropertyEffect(n.rootProperty,i,{fn:r,info:s,trigger:n});return o&&e._addPropertyEffect(t.methodName,i,{fn:r,info:s}),s}function Sr(e,t,i,r,n){let o=e._methodHost||e,s=o[n.methodName];if(s){let r=e._marshalArgs(n.args,t,i);return r===ir?ir:s.apply(o,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const Ar=[],Pr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Er(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function Or(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Ar};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=Tr(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Tr(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=yi(t),i.structured=bi(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function kr(e,t,i){let r=Ai(e,i);return void 0===r&&(r=t[i]),r}function Nr(e,t,i,r){const n={indexSplices:r};Gt&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),Gt&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function Rr(e,t,i,r,n,o){Nr(e,t,i,[{index:r,addedCount:n,removed:o,object:t,type:"splice"}])}const Ir=ni((e=>{const t=er(Ui(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return rr}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(zr.length){let e=zr[zr.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[rr.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==rr.READ_ONLY);let r=or(this,t,!0)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){let r=or(this,t,!0)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,rr.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,rr.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,rr.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,rr.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||yi(Array.isArray(e)?e[0]:e)!==e){if(!r){let i=Ai(this,e);if(!(e=Pi(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let r=e.__dataLinkedPaths;if(r){let n;for(let o in r){let s=r[o];xi(o,t)?(n=wi(o,s,t),e._setPendingPropertyOrPath(n,i,!0,!0)):xi(s,t)&&(n=wi(s,o,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=gi(e)),e[t]=i)}_setPendingProperty(e,t,i){let r=this.__dataHasPaths&&bi(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[rr.NOTIFY]&&this[rr.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[rr.READ_ONLY]&&this[rr.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let r,n=this.__dataHasPaths;this.__dataHasPaths=!1,fr(this,t,i,n),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),sr(this,this[rr.REFLECT],t,i,n),sr(this,this[rr.OBSERVE],t,i,n),r&&function(e,t,i,r,n){let o,s,a=e[rr.NOTIFY],l=tr++;for(let s in t)t[s]&&(a&&ar(e,a,l,s,i,r,n)||n&&cr(e,s,i))&&(o=!0);o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[rr.PROPAGATE]&&sr(this,this[rr.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,r){const n=(t,r)=>{sr(this,e.propertyEffects,t,i,r,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,i,r)};e.runEffects?e.runEffects(n,t,r):n(t,r)}linkPaths(e,t){e=Ci(e),t=Ci(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Ci(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Nr(this,Ai(this,e,i),i.path,t)}get(e,t){return Ai(t||this,e)}set(e,t,i){i?Pi(i,e,t):this[rr.READ_ONLY]&&this[rr.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},r=Ai(this,e,i),n=r.length,o=r.push(...t);return t.length&&Rr(this,r,i.path,n,t.length,[]),o}pop(e){let t={path:""},i=Ai(this,e,t),r=Boolean(i.length),n=i.pop();return r&&Rr(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){let n,o={path:""},s=Ai(this,e,o);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?s.splice(t):s.splice(t,i,...r),(r.length||n.length)&&Rr(this,s,o.path,t,r.length,n),n}shift(e){let t={path:""},i=Ai(this,e,t),r=Boolean(i.length),n=i.shift();return r&&Rr(this,i,t.path,0,0,[n]),n}unshift(e,...t){let i={path:""},r=Ai(this,e,i),n=r.unshift(...t);return t.length&&Rr(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){let i;if(1==arguments.length){let r={path:""};t=Ai(this,e,r),i=r.path}else i=Array.isArray(e)?Ci(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,rr.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,rr.OBSERVE,{fn:dr,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,rr.OBSERVE,{fn:dr,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let i=Or(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Cr(this,i,rr.OBSERVE,Sr,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,rr.NOTIFY,{fn:hr,info:{eventName:Ni(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,rr.REFLECT,{fn:ur,info:{attrName:t}})}_createComputedProperty(e,t,i){let r=Or(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");const n=Cr(this,r,rr.COMPUTE,gr,e,i);or(this,"__computeInfo")[e]=n}_marshalArgs(e,t,i){const r=this.__data,n=[];for(let o=0,s=e.length;o<s;o++){let{name:s,structured:a,wildcard:l,value:d,literal:c}=e[o];if(!c)if(l){const e=xi(s,t),n=kr(r,i,e?t:s);d={path:e?t:s,value:n,base:e?Ai(r,s):n}}else d=a?kr(r,i,s):r[s];if(Gt&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return ir;n[o]=d}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==i;if(!r)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),zr.push(this);let i=super._stampTemplate(e,t);if(zr.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let n=r[t],o=i[t],s=n.bindings;if(s)for(let t=0;t<s.length;t++){let i=s[t];xr(o,i),wr(o,e,i)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:r,parent:n}=t;i?i.nextSibling=r:n&&(n.firstChild=r),r?r.previousSibling=i:n&&(n.lastChild=i),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];gi(gi(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,r){let n=t._parseTemplateNode.call(this,e,i,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Er(t)||" ",br(this,i,r,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,r,n,o){let s=this._parseBindings(o,i);if(s){let t=n,o="property";nr.test(n)?o="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),o="attribute");let a=Er(s);return a&&"attribute"==o&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(n=ki(n)),br(this,i,r,o,n,s,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,r,n,o)}static _parseTemplateNestedTemplate(e,i,r){let n=t._parseTemplateNestedTemplate.call(this,e,i,r);const o=e.parentNode,s=r.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;Kt&&(a||l)&&(o.removeChild(e),(r=r.parentInfo).templateInfo=s,r.noted=!0,n=!1);let d=s.hostProps;if(Qt&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),Kt||(r.parentInfo.noted=!0));else{let e="{";for(let t in d){br(this,i,r,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return n}static _parseBindings(e,t){let i,r=[],n=0;for(;null!==(i=Pr.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});let o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let p=Or(a),h=[];if(p){let{args:e,methodName:i}=p;for(let t=0;t<e.length;t++){let i=e[t];i.literal||h.push(i)}let r=t.dynamicFns;(r&&r[i]||p.static)&&(h.push(i),p.dynamicFn=!0)}else h.push(a);r.push({source:a,mode:o,negate:s,customEvent:l,signature:p,dependencies:h,event:d}),n=Pr.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,o){let s;return s=t.signature?Sr(e,i,r,0,t.signature):i!=t.source?Ai(e,t.source):o&&bi(i)?Ai(e,i):e.__data[i],t.negate&&(s=!s),s}}})),zr=[];const $r=ni((e=>{const t=Bi(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),Dr=window.ShadyCSS&&window.ShadyCSS.cssBuild,Mr=ni((e=>{const t=$r(Ir(e));function i(e,t,i,r){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,r)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,r[i.observer]),e._addPropertyToAttributeMap(t)}function r(e,t,i,r){if(!Dr){const n=t.content.querySelectorAll("style"),o=fi(t),s=function(e){let t=ci(e);return t?mi(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<s.length;i++){let n=s[i];n.textContent=e._processStyleText(n.textContent,r),t.content.insertBefore(n,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],s=n[l];s!==i?(i=i.cloneNode(!0),s.parentNode.insertBefore(i,s)):l++,i.textContent=e._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),ii&&Dr&&Bt){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Wt||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!Vt||Yt)&&(t=di.import(e,"template"),Vt&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Ft(e.url);else{const e=di.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=jt,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Lt(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;r(this,t,e,i?Mt(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=gi(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Xt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Mt(this.importPath)),Mt(e,t)}static _parseTemplateContent(e,i,r){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,r)}static _addTemplatePropertyEffect(e,i,r){return!Jt||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,r)}}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Lr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Fr.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Fr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Lr?e._cancelAsync():e=new Lr,e.setConfig(t,i),e}}let Fr=new Set;const Hr=function(e){Fr.add(e)},Br=function(){const e=Boolean(Fr.size);return Fr.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let jr="string"==typeof document.head.style.touchAction,qr="__polymerGestures",Ur="__polymerGesturesHandled",Vr="__polymerGesturesTouchAction",Yr=["mousedown","mousemove","mouseup","click"],Wr=[0,1,4,2],Jr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Xr(e){return Yr.indexOf(e)>-1}let Gr=!1;function Zr(e){if(!Xr(e)&&"touchend"!==e)return jr&&Gr&&Ut?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Gr=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Kr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Qr=[],en={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},tn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function rn(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let r=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<r.length;e++)t.push(r[e])}}return t}let nn=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Ur]={skip:!0},"click"===e.type)){let t=!1,r=cn(e);for(let e=0;e<r.length;e++){if(r[e].nodeType===Node.ELEMENT_NODE)if("label"===r[e].localName)Qr.push(r[e]);else if(i=r[e],en[i.localName]){let i=rn(r[e]);for(let e=0;e<i.length;e++)t=t||Qr.indexOf(i[e])>-1}if(r[e]===an.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function on(e){let t=Kr?["click"]:Yr;for(let i,r=0;r<t.length;r++)i=t[r],e?(Qr.length=0,document.addEventListener(i,nn,!0)):document.removeEventListener(i,nn,!0)}function sn(e){let t=e.type;if(!Xr(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Jr&&(t=Wr[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let an={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ln(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function dn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){an.mouse.mouseIgnoreJob||on(!0),an.mouse.target=cn(e)[0],an.mouse.mouseIgnoreJob=Lr.debounce(an.mouse.mouseIgnoreJob,Li.after(2500),(function(){on(),an.mouse.target=null,an.mouse.mouseIgnoreJob=null}))}),!!Gr&&{passive:!0});const cn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],pn={},hn=[];function un(e){const t=cn(e);return t.length>0?t[0]:e.target}function fn(e){let t,i=e.type,r=e.currentTarget.__polymerGestures;if(!r)return;let n=r[i];if(n){if(!e[Ur]&&(e[Ur]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(an.touch.id=t.identifier),an.touch.id!==t.identifier)return;jr||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)an.touch.x=t.clientX,an.touch.y=t.clientY,an.touch.scrollDecided=!1;else if("touchmove"===i){if(an.touch.scrollDecided)return;an.touch.scrollDecided=!0;let i=function(e){let t="auto",i=cn(e);for(let e,r=0;r<i.length;r++)if(e=i[r],e[Vr]){t=e[Vr];break}return t}(e),r=!1,n=Math.abs(an.touch.x-t.clientX),o=Math.abs(an.touch.y-t.clientY);e.cancelable&&("none"===i?r=!0:"pan-x"===i?r=o>n:"pan-y"===i&&(r=n>o)),r?e.preventDefault():vn("track")}}(e)}if(t=e[Ur],!t.skip){for(let i,r=0;r<hn.length;r++)i=hn[r],n[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let r,o=0;o<hn.length;o++)r=hn[o],n[r.name]&&!t[r.name]&&(t[r.name]=!0,r[i](e))}}}function mn(e,t,i){return!!pn[t]&&(function(e,t,i){let r=pn[t],n=r.deps,o=r.name,s=e[qr];s||(e[qr]=s={});for(let t,i,r=0;r<n.length;r++)t=n[r],Kr&&Xr(t)&&"click"!==t||(i=s[t],i||(s[t]=i={_count:0}),0===i._count&&e.addEventListener(t,fn,Zr(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),r.touchAction&&bn(e,r.touchAction)}(e,t,i),!0)}function _n(e,t,i){return!!pn[t]&&(function(e,t,i){let r=pn[t],n=r.deps,o=r.name,s=e[qr];if(s)for(let t,i,r=0;r<n.length;r++)t=n[r],i=s[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,fn,Zr(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function gn(e){hn.push(e);for(let t=0;t<e.emits.length;t++)pn[e.emits[t]]=e}function bn(e,t){jr&&e instanceof HTMLElement&&Fi.run((()=>{e.style.touchAction=t})),e[Vr]=t}function yn(e,t,i){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,gi(e).dispatchEvent(r),r.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function vn(e){let t=function(e){for(let t,i=0;i<hn.length;i++){t=hn[i];for(let i,r=0;r<t.emits.length;r++)if(i=t.emits[r],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function xn(e,t,i,r){t&&yn(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return vn(e)}})}function wn(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function Cn(e,t,i){if(!t)return;let r,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,l=0;n&&(r=o.x-n.x,l=o.y-n.y),yn(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:r,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(e,t),n===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function Sn(e,t,i){let r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=un(i||t);!o||tn[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=un(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||yn(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/gn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){dn(this.info)},mousedown:function(e){if(!sn(e))return;let t=un(e),i=this;ln(this.info,(function(e){sn(e)||(xn("up",t,e),dn(i.info))}),(function(e){sn(e)&&xn("up",t,e),dn(i.info)})),xn("down",t,e)},touchstart:function(e){xn("down",un(e),e.changedTouches[0],e)},touchend:function(e){xn("up",un(e),e.changedTouches[0],e)}}),gn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,dn(this.info)},mousedown:function(e){if(!sn(e))return;let t=un(e),i=this,r=function(e){let r=e.clientX,n=e.clientY;wn(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&vn("tap"),i.info.addMove({x:r,y:n}),sn(e)||(i.info.state="end",dn(i.info)),t&&Cn(i.info,t,e),i.info.started=!0)};ln(this.info,r,(function(e){i.info.started&&r(e),dn(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=un(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;wn(this.info,r,n)&&("start"===this.info.state&&vn("tap"),this.info.addMove({x:r,y:n}),Cn(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=un(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Cn(this.info,t,i))}}),gn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){sn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){sn(e)&&Sn(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Sn(this.info,e.changedTouches[0],e)}});const An=ni((e=>class extends e{_addEventListenerToNode(e,t,i){mn(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){_n(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),Pn=/:host\(:dir\((ltr|rtl)\)\)/g,En=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,On=/:dir\((?:ltr|rtl)\)/,Tn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),kn=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Nn=null,Rn="";function In(){Rn=document.documentElement.getAttribute("dir")}function zn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Rn)}}function $n(){In(),Rn=document.documentElement.getAttribute("dir");for(let e=0;e<kn.length;e++)zn(kn[e])}const Dn=ni((e=>{Tn||Nn||(In(),Nn=new MutationObserver($n),Nn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Ui(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Tn&&On.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Pn,':host([dir="$1"])'),t=t.replace(En,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Nn&&Nn.takeRecords().length&&$n(),kn.push(this),zn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=kn.indexOf(this);e>-1&&kn.splice(e,1)}}}return i.__activateDir=!1,i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Mn(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ln(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Mn():window.addEventListener("DOMContentLoaded",Mn);function Fn(e,t,i,r,n,o){let s,a=0,l=0,d=Math.min(i-t,o-n);if(0==t&&0==n&&(a=function(e,t,i){for(let r=0;r<i;r++)if(!Bn(e[r],t[r]))return r;return i}(e,r,d)),i==e.length&&o==r.length&&(l=function(e,t,i){let r=e.length,n=t.length,o=0;for(;o<i&&Bn(e[--r],t[--n]);)o++;return o}(e,r,d-a)),n+=a,o-=l,(i-=l)-(t+=a)==0&&o-n==0)return[];if(t==i){for(s=Ln(t,[],0);n<o;)s.removed.push(r[n++]);return[s]}if(n==o)return[Ln(t,[],i-t)];let c=function(e){let t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];for(;t>0||i>0;){if(0==t){n.push(2),i--;continue}if(0==i){n.push(3),t--;continue}let o,s=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];o=a<l?a<s?a:s:l<s?l:s,o==s?(s==r?n.push(0):(n.push(1),r=s),t--,i--):o==a?(n.push(3),t--,r=a):(n.push(2),i--,r=l)}return n.reverse(),n}(function(e,t,i,r,n,o){let s=o-n+1,a=i-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<s;i++)for(let o=1;o<a;o++)if(Bn(e[t+o-1],r[n+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,r,n,o));s=void 0;let p=[],h=t,u=n;for(let e=0;e<c.length;e++)switch(c[e]){case 0:s&&(p.push(s),s=void 0),h++,u++;break;case 1:s||(s=Ln(h,[],0)),s.addedCount++,h++,s.removed.push(r[u]),u++;break;case 2:s||(s=Ln(h,[],0)),s.addedCount++,h++;break;case 3:s||(s=Ln(h,[],0)),s.removed.push(r[u]),u++}return s&&p.push(s),p}function Hn(e,t){return Fn(e,0,e.length,t,0,t.length)}function Bn(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function jn(e){return"slot"===e.localName}let qn=class{static getFlattenedNodes(e){const t=gi(e);return jn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>jn(e)?gi(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){jn(this._target)?this._listenSlots([this._target]):gi(this._target).children&&(this._listenSlots(gi(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){jn(this._target)?this._unlistenSlots([this._target]):gi(this._target).children&&(this._unlistenSlots(gi(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Fi.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Hn(t,this._effectiveNodes);for(let t,r=0;r<i.length&&(t=i[r]);r++)for(let i,r=0;r<t.removed.length&&(i=t.removed[r]);r++)e.removedNodes.push(i);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let i=r.index;i<r.index+r.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];jn(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];jn(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Un=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Br()}while(e||t)},Vn=Element.prototype,Yn=Vn.matches||Vn.matchesSelector||Vn.mozMatchesSelector||Vn.msMatchesSelector||Vn.oMatchesSelector||Vn.webkitMatchesSelector,Wn=function(e,t){return Yn.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Jn{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new qn(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(gi(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=gi(t).parentNode||gi(t).host;return t===this.node}getOwnerRoot(){return gi(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?gi(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=gi(this.node).assignedSlot;for(;t;)e.push(t),t=gi(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return gi(i).importNode(e,t)}getEffectiveChildNodes(){return qn.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let r,n=0,o=t.length;n<o&&(r=t[n]);n++)r.nodeType===Node.ELEMENT_NODE&&Wn(r,e)&&i.push(r);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Xn(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}class Gn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Jn.prototype.cloneNode,Jn.prototype.appendChild,Jn.prototype.insertBefore,Jn.prototype.removeChild,Jn.prototype.replaceChild,Jn.prototype.setAttribute,Jn.prototype.removeAttribute,Jn.prototype.querySelector,Jn.prototype.querySelectorAll,Jn.prototype.parentNode,Jn.prototype.firstChild,Jn.prototype.lastChild,Jn.prototype.nextSibling,Jn.prototype.previousSibling,Jn.prototype.firstElementChild,Jn.prototype.lastElementChild,Jn.prototype.nextElementSibling,Jn.prototype.previousElementSibling,Jn.prototype.childNodes,Jn.prototype.children,Jn.prototype.classList,Jn.prototype.textContent,Jn.prototype.innerHTML;let Zn=Jn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Jn.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=Jn.prototype[t])})),Xn(e.prototype,["classList"]),Zn=e,Object.defineProperties(Gn.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Kn(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const r=i[e];if(Kn(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}(Jn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Xn(Jn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}(Jn.prototype,["textContent","innerHTML","className"]);const Kn=function(e){if((e=e||document)instanceof Zn)return e;if(e instanceof Gn)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Gn(e):new Zn(e),e.__domApi=t),t},Qn=window.ShadyDOM,eo=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function to(e,t){return gi(e).getRootNode()===t}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const io=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};ni((e=>{const t=Mr(e);let i=io(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,r){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,gi(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,r)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));let ro=window.ShadyCSS;const no=ni((e=>{const t=An(Mr(e)),i=Dr?t:Dn(t),r=io(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(ti&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(ti&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return ti&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):r.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,r){t!==i&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,gi(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,r),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(Wt&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ti&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let r,n=0;n<i.length&&(r=i[n]);n++){let i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=t;let n=i.node||this;return gi(n).dispatchEvent(r),r}listen(e,t,i){e=e||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(e);n||(n={},r.set(e,n));let o=t+i;n[o]||(n[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let r=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,o=r&&r[n];o&&(this._removeEventListenerFromNode(e,t,o),r[n]=null)}setScrollDirection(e,t){bn(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=gi(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Kn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Kn(this).getEffectiveChildNodes()}queryDistributedElements(e){return Kn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,r=0;i=e[r];r++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Kn(t).getDistributedNodes():[]}getContentChildren(e){let t=this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}));return t}isLightDescendant(e){const t=this;return t!==e&&gi(t).contains(e)&&gi(t).getRootNode()===gi(e).getRootNode()}isLocalDescendant(e){return this.root===gi(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Qn||!eo)return null;if(!Qn.handlesDynamicScoping)return null;const i=eo.ScopingShim;if(!i)return null;const r=i.scopeForNode(e),n=gi(e).getRootNode(),o=e=>{if(!to(e,n))return;const t=Array.from(Qn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!to(o,n))continue;const s=i.currentScopeForNode(o);s!==r&&(""!==s&&i.unscopeNode(o,s),i.scopeNode(o,r))}};if(o(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return ro.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Lr.debounce(this._debouncers[e],i>0?Li.after(i):Fi,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Li.run(e.bind(this),t):~Fi.run(e.bind(this))}cancelAsync(e){e<0?Fi.cancel(~e):Li.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return Wn(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(gi(i).setAttribute(e,""),!0):(gi(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,r){r=r||this,this.transform("translate3d("+e+","+t+","+i+")",r)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=Ai(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o})),oo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},so={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},ao=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},so);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function lo(e,t,i,r){!function(e,t,i){const r=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let o=0;o<n.length;o++){let s=n[o];if(!(s in i))if(r)t[s]=e[s];else{let i=Object.getOwnPropertyDescriptor(e,s);i&&(i.configurable=!0,Object.defineProperty(t,s,i))}}}(t,e,r);for(let e in oo)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function co(e,t,i){t=t||[];for(let r=e.length-1;r>=0;r--){let n=e[r];n?Array.isArray(n)?co(n,t):t.indexOf(n)<0&&(!i||i.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function po(e,t){for(const i in t){const r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}const ho=no(HTMLElement);function uo(e,t,i){let r;const n={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let e,t=0;t<r.length;t++)e=r[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(r)for(let e=0;e<r.length;e++)po(t,r[e].properties);return po(t,e.properties),t}static get observers(){let t=[];if(r)for(let e,i=0;i<r.length;i++)e=r[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=n.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Wt&&s(e);const t=Object.getPrototypeOf(this);let i=n.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=n.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=n.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=n.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=n.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=n.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=n.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let r=n.attributeChanged;if(r)for(let n=0;n<r.length;n++)r[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;r=co(i,null,e),o.prototype.behaviors=e?e.concat(i):r}const s=t=>{r&&function(e,t,i){for(let r=0;r<t.length;r++)lo(e,t[r],i,ao)}(t,r,n),lo(t,e,n,so)};return Wt||s(o.prototype),o.generatedFrom=e,o}const fo=function(e){let t;return t="function"==typeof e?e:fo.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function mo(e,t,i,r,n){let o;n&&(o="object"==typeof i&&null!==i,o&&(r=e.__dataTemp[t]));let s=r!==i&&(r==r||i==i);return o&&s&&(e.__dataTemp[t]=i),s}fo.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(ho):ho;return i=uo(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const _o=ni((e=>class extends e{_shouldPropertyChange(e,t,i){return mo(this,e,t,i,!0)}})),go=ni((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return mo(this,e,t,i,this.mutableData)}}));_o._mutablePropertyChange=mo;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let bo=null;function yo(){return bo}yo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:yo,writable:!0}});const vo=Ir(yo),xo=_o(vo);const wo=Ir(class{});function Co(e,t){for(let i=0;i<t.length;i++){let r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),gi(gi(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const e=r.__polymerReplaced__;e&&gi(gi(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}class So extends wo{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e)}));else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,i)}}_showHideChildren(e){Co(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}So.prototype.__dataHost,So.prototype.__templatizeOptions,So.prototype._methodHost,So.prototype.__templatizeOwner,So.prototype.__hostProps;const Ao=_o(So);function Po(e){let t=e.__dataHost;return t&&t._methodHost||t}function Eo(e,t,i){let r=i.mutableData?Ao:So;No.mixin&&(r=No.mixin(r));let n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,r){let n=i.hostProps||{};for(let t in r.instanceProps){delete n[t];let i=r.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ko(t,i)})}if(r.forwardHostProp&&t.__dataHost)for(let t in n)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function Oo(e,t,i,r){let n=i.forwardHostProp;if(n&&t.hasHostProps){const o="template"==e.localName;let s=t.templatizeTemplateClass;if(!s){if(o){let e=i.mutableData?xo:vo;class r extends e{}s=t.templatizeTemplateClass=r}else{const i=e.constructor;class r extends i{}s=t.templatizeTemplateClass=r}let a=t.hostProps;for(let e in a)s.prototype._addPropertyEffect("_host_"+e,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:To(e,n)}),s.prototype._createNotifyingProperty("_host_"+e);Jt&&r&&function(e,t,i){const r=i.constructor._properties,{propertyEffects:n}=e,{instanceProps:o}=t;for(let e in n)if(!(r[e]||o&&o[e])){const t=n[e];for(let i=0;i<t.length;i++){const{part:r}=t[i].info;if(!r.signature||!r.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,r)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),o)!function(e,t){bo=e,Object.setPrototypeOf(e,t.prototype),new t,bo=null}(e,s),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,s.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function To(e,t){return function(e,i,r){t.call(e.__templatizeOwner,i.substring("_host_".length),r[i])}}function ko(e,t){return function(e,i,r){t.call(e.__templatizeOwner,e,i,r[i])}}function No(e,t,i){if(Vt&&!Po(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let r=(t?t.constructor:So)._parseTemplate(e),n=r.templatizeInstanceClass;n||(n=Eo(e,r,i),r.templatizeInstanceClass=n);const o=Po(e);Oo(e,r,i,o);let s=class extends n{};return s.prototype._methodHost=o,s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=r.hostProps,s=s,s}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ro=!1;function Io(){if(Wt&&!Ht){if(!Ro){Ro=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zo=An(go(Ir(HTMLElement)));customElements.define("dom-bind",class extends zo{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Vt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,r){this.mutableData=!0}connectedCallback(){Io()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){gi(gi(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class $o{constructor(e){this.value=e.toString()}toString(){return this.value}}function Do(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof $o)return function(e){if(e instanceof $o)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Mo=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce(((t,i,r)=>t+Do(i)+e[r+1]),e[0]),i},Lo=Mr(HTMLElement),Fo=go(Lo);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ho extends Fo{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!ei,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),Io()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=gi(gi(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=No(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let r,n=0;n<i.length&&(r=i[n]);n++)r.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((r=this.as)===(n=t)||vi(r,n)||xi(r,n)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=i);let n=wi(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(n,i)}var r,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Lr.debounce(this.__renderDebouncer,t>0?Li.after(t):Fi,e.bind(this)),Hr(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Un()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),ei&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,r)=>this.__filterFn(e[t],i,r)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),r=Math.max(t-i,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const r=this.__itemsIdxToInstIdx={};let n;for(n=0;n<t;n++){let t=this.__instances[n],o=i[n],s=e[o];r[o]=n,t?(t._setPendingProperty(this.as,s),t._setPendingProperty(this.indexAs,n),t._setPendingProperty(this.itemsIndexAs,o),t._flushProperties()):this.__insertInstance(s,n,o)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=gi(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];i.appendChild(r)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(e,t,i){const r=this.__stampInstance(e,t,i);let n=this.__instances[t+1],o=n?n.children[0]:this;return gi(gi(this).parentNode).insertBefore(r.root,o),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);if(n==parseInt(n,10)){let e=r<0?"":i.substring(r+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[n],s=this.__instances[o];if(s){let i=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(i,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=gi(t).parentNode;return null}(this.template,e)}}customElements.define(Ho.is,Ho);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Bo extends Lo{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Lr.debounce(this.__renderDebouncer,Fi,(()=>this.__render())),Hr(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=gi(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||gi(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Io()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:gi(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!gi(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=gi(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(gi(this).previousSibling!==t[t.length-1])for(let i,r=0;r<t.length&&(i=t[r]);r++)gi(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Un()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),ei&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const jo=Qt?class extends Bo{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Vt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let r=this.__syncInfo;if(this.if)r&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(r.changedProps,t)),e(t,i);else if(this.__instance)if(r||(r=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=yi(e);r.changedProps[t]=this.__dataHost[t]}else Object.assign(r.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),gi(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Co(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends Bo{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=No(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[yi(e)]=!0))}})),this.__instance=new this.__ctor,gi(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=gi(e[0]).parentNode;if(t){t=gi(t);for(let i,r=0;r<e.length&&(i=e[r]);r++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(jo.is,jo);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let qo=ni((e=>{let t=Mr(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=Hn(i,r);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let r=e[i];t.forEach(((e,i)=>{e<r.index||(e>=r.index+r.removed.length?t.set(i,e+r.addedCount-r.removed.length):t.set(i,-1))}));for(let e=0;e<r.addedCount;e++){let i=r.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach(((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(r)):i++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,r)=>{t==e++&&this.deselect(r)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})),Uo=qo(Lo);class Vo extends Uo{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Vo.is,Vo);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Yo=new kt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Yo.processStyles(),lt(e,t)},styleElement(e){Yo.processStyles()},styleDocument(e){Yo.processStyles(),lt(document.body,e)},getComputedStyleValue:(e,t)=>dt(e,t),flushCustomStyles(){},nativeCss:Le,nativeShadow:Ie,cssBuild:$e,disableRuntime:Me}),window.ShadyCSS.CustomStyleInterface=Yo;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Wo=window.ShadyCSS.CustomStyleInterface;class Jo extends HTMLElement{constructor(){super(),this._style=null,Wo.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=_i(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Jo);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Xo=no(HTMLElement).prototype,Go=Mo`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Go.setAttribute("style","display: none;"),document.head.appendChild(Go.content);var Zo=document.createElement("style");Zo.textContent="[hidden] { display: none !important; }",document.head.appendChild(Zo);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ko=Mo`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Ko.setAttribute("style","display: none;"),document.head.appendChild(Ko.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Qo=Mo`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(Qo.setAttribute("style","display: none;"),document.head.appendChild(Qo.content),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const es=Mo`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;es.setAttribute("style","display: none;"),document.head.appendChild(es.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ts=Mo`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;ts.setAttribute("style","display: none;"),document.head.appendChild(ts.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const is=document.createElement("template");is.setAttribute("style","display: none;"),is.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(is.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const rs={_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let t,r=0;t=e[r];r++){let e=document.createElement(t.name);if(e.isNeonAnimation){let r=null;e.configure||(e.configure=function(e){return null}),r=e.configure(t),i.push({result:r,config:t,neonAnimation:e})}else console.warn(this.is+":",t.name,"not found!")}for(var r=0;r<i.length;r++){let e=i[r].result,n=i[r].config,o=i[r].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(t){e=null,console.warn("Couldnt play","(",n.name,").",t)}e&&t.push({neonAnimation:o,config:n,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var r=this._configureAnimations(i);if(0!=r.length){this._active[e]=r;for(var n=0;n<r.length;n++)r[n].animation.onfinish=function(){this._shouldComplete(r)&&(this._complete(r),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}},ns=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var r;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(r=e?this.animationConfig[e]:this.animationConfig,Array.isArray(r)||(r=[r]),r)for(var n,o=0;n=r[o];o++)if(n.animatable)n.animatable._getAnimationConfigRecursive(n.type||e,t,i);else if(n.id){var s=t[n.id];s?(s.isClone||(t[n.id]=this._cloneConfig(s),s=t[n.id]),this._copyProperties(s,n)):t[n.id]=n}else i.push(n)},getAnimationConfig:function(e){var t={},i=[];for(var r in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[r]);return i}},rs];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let os;const ss={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=Kn(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let r,n,o,s;this.expandSizingTargetForScrollbars&&(r=this.sizingTarget.offsetWidth,n=this.sizingTarget.offsetHeight,o=this.sizingTarget.clientWidth,s=this.sizingTarget.clientHeight);var a=this._fitInfo.margin,l={width:e.width+a.left+a.right,height:e.height+a.top+a.bottom},d=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,e,t,i),c=d.left+a.left,p=d.top+a.top,h=Math.min(i.right-a.right,c+e.width),u=Math.min(i.bottom-a.bottom,p+e.height);c=Math.max(i.left+a.left,Math.min(c,h-this._fitInfo.sizedBy.minWidth)),p=Math.max(i.top+a.top,Math.min(p,u-this._fitInfo.sizedBy.minHeight));const f=Math.max(h-c,this._fitInfo.sizedBy.minWidth),m=Math.max(u-p,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=f+"px",this.sizingTarget.style.maxHeight=m+"px";const _=c-e.left,g=p-e.top;if(this.style.left=`${_}px`,this.style.top=`${g}px`,this.expandSizingTargetForScrollbars){const e=this.sizingTarget.offsetHeight,t=e-this.sizingTarget.clientHeight-(n-s);if(t>0){const r=i.height-a.top-a.bottom,n=Math.min(r,m+t);this.sizingTarget.style.maxHeight=`${n}px`;const o=this.sizingTarget.offsetHeight,s=o-e;let l;"top"===d.verticalAlign?l=g:"middle"===d.verticalAlign?l=g-s/2:"bottom"===d.verticalAlign&&(l=g-s),l=Math.max(i.top+a.top,Math.min(l,i.bottom-a.bottom-o)),this.style.top=`${l}px`}const l=this.sizingTarget.offsetWidth,c=l-this.sizingTarget.clientWidth-(r-o);if(c>0){const e=(()=>{if(void 0!==os)return os;const e=document.createElement("div");Object.assign(e.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const t=document.createElement("div");return t.style.width="200px",t.style.height="200px",e.appendChild(t),document.body.appendChild(e),os=Math.abs(e.offsetWidth-100)>1?e.offsetWidth-e.clientWidth:0,document.body.removeChild(e),os})(),t=i.width-a.left-a.right,r=Math.min(t,f+c-e);this.sizingTarget.style.maxWidth=`${r}px`;const n=this.sizingTarget.offsetWidth+e,o=n-l;let s;"left"===d.horizontalAlign?s=_:"center"===d.horizontalAlign?s=_-o/2:"right"===d.horizontalAlign&&(s=_-o),s=Math.max(i.left+a.left,Math.min(s,i.right-a.right-n)),this.style.left=`${s}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,r,n){this.__sizeDimension(e,t,i,r,n)},__sizeDimension:function(e,t,i,r,n){var o=this._fitInfo,s=this.__getNormalizedRect(this.fitInto),a="Width"===n?s.width:s.height,l=t===r,d=l?a-e[r]:e[i],c=o.margin[l?i:r],p="offset"+n,h=this[p]-this.sizingTarget[p];this.sizingTarget.style["max"+n]=a-c-d-h+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var r=i.top-t.top+(i.height-t.height)/2;this.style.top=r+"px"}if(!e.horizontally){var n=i.left-t.left+(i.width-t.width)/2;this.style.left=n+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var r=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),n=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(r)*t.width+Math.abs(n)*t.height},__getPosition:function(e,t,i,r,n,o){var s,a=[{verticalAlign:"top",horizontalAlign:"left",top:n.top+this.verticalOffset,left:n.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:n.top+this.verticalOffset,left:n.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:n.bottom-i.height-this.verticalOffset,left:n.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:n.bottom-i.height-this.verticalOffset,left:n.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,d=a.length;l<d;l++){var c={};for(var p in a[l])c[p]=a[l][p];a.push(c)}a[0].top=a[1].top+=n.height,a[2].top=a[3].top-=n.height,a[4].left=a[6].left+=n.width,a[5].left=a[7].left-=n.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(a.push({verticalAlign:"top",horizontalAlign:"center",top:n.top+this.verticalOffset+(this.noOverlap?n.height:0),left:n.left-r.width/2+n.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:n.bottom-i.height-this.verticalOffset-(this.noOverlap?n.height:0),left:n.left-r.width/2+n.width/2+this.horizontalOffset})),t&&"middle"!==t||(a.push({verticalAlign:"middle",horizontalAlign:"left",top:n.top-r.height/2+n.height/2+this.verticalOffset,left:n.left+this.horizontalOffset+(this.noOverlap?n.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:n.top-r.height/2+n.height/2+this.verticalOffset,left:n.right-i.width-this.horizontalOffset-(this.noOverlap?n.width:0)})),"middle"===t&&"center"===e&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:n.top-r.height/2+n.height/2+this.verticalOffset,left:n.left-r.width/2+n.width/2+this.horizontalOffset});for(l=0;l<a.length;l++){var h=a[l],u=h.verticalAlign===t,f=h.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&u&&f){s=h;break}var m=(!t||u)&&(!e||f);if(this.dynamicAlign||m){if(h.offscreenArea=this.__getOffscreenArea(h,i,o),0===h.offscreenArea&&m){s=h;break}s=s||h;var _=h.offscreenArea-s.offscreenArea;(_<0||0===_&&(u||f))&&(s=h)}}return s}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var as=new Set;const ls={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(as.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():Ht||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Kn(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(as.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?as.delete(this):as.add(this)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ds=Element.prototype,cs=ds.matches||ds.matchesSelector||ds.mozMatchesSelector||ds.msMatchesSelector||ds.oMatchesSelector||ds.webkitMatchesSelector;const ps=new class{getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}isFocusable(e){return cs.call(e,"input, select, textarea, button, object")?cs.call(e,":not([disabled])"):cs.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&cs.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}_collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var i=e;if(!this._isVisible(i))return!1;var r,n=this._normalizedTabIndex(i),o=n>0;n>=0&&t.push(i),r="content"===i.localName||"slot"===i.localName?Kn(i).getDistributedNodes():Kn(i.root||i).children;for(var s=0;s<r.length;s++)o=this._collectTabbableNodes(r[s],t)||o;return o}_isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}_sortByTabIndex(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,i)),n=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(r,n)}_mergeSortByTabIndex(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}_hasLowerTabOrder(e,t){var i=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return 0===i||0===r?r>i:i>r}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/fo({_template:Mo`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&Kn(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||Kn(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var hs={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},us={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},fs={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ms=/[a-z0-9*]/,_s=/U\+/,gs=/^arrow/,bs=/^space(bar)?/,ys=/^escape$/;function vs(e,t){var i="";if(e){var r=e.toLowerCase();" "===r||bs.test(r)?i="space":ys.test(r)?i="esc":1==r.length?t&&!ms.test(r)||(i=r):i=gs.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return i}function xs(e,t){return e.key?vs(e.key,t):e.detail&&e.detail.key?vs(e.detail.key,t):(i=e.keyIdentifier,r="",i&&(i in hs?r=hs[i]:_s.test(i)?(i=parseInt(i.replace("U+","0x"),16),r=String.fromCharCode(i).toLowerCase()):r=i.toLowerCase()),r||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):us[e]),t}(e.keyCode)||"");var i,r}function ws(e,t){return xs(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Cs(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),r=i[0],n=i[1];return r in fs?(e[fs[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}Boolean;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ss=function(e,t){for(var i=Cs(t),r=0;r<i.length;++r)if(ws(i[r],e))return!0;return!1};const As=new class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,mn(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&Kn(e.root).activeElement;)e=Kn(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var t=this._overlays[e];if(t){var i=this._overlays.length-1,r=this._overlays[i];if(r&&this._shouldBeBehindOverlay(t,r)&&i--,!(e>=i)){var n=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=n&&this._applyOverlayZ(t,n);e<i;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[i]=t}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var i=this._overlays.length,r=this._overlays[i-1],n=Math.max(this._getZ(r),this._minimumZ),o=this._getZ(e);if(r&&this._shouldBeBehindOverlay(e,r)){this._applyOverlayZ(r,n),i--;var s=this._overlays[i-1];n=Math.max(this._getZ(s),this._minimumZ)}o<=n&&this._applyOverlayZ(e,n),this._overlays.splice(i,0,e),this.trackBackdrop()}removeOverlay(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var t=this._minimumZ;if(e){var i=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);i==i&&(t=i)}return t}_setZ(e,t){e.style.zIndex=t}_applyOverlayZ(e,t){this._setZ(e,t+2)}_overlayInPath(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]}_onCaptureClick(e){var t=this._overlays.length-1;if(-1!==t)for(var i,r=Kn(e).path;(i=this._overlays[t])&&this._overlayInPath(r)!==i&&(i._onCaptureClick(e),i.allowClickThrough);)t--}_onCaptureFocus(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)}_onCaptureKeyDown(e){var t=this.currentOverlay();t&&(Ss(e,"esc")?t._onCaptureEsc(e):Ss(e,"tab")&&t._onCaptureTab(e))}_shouldBeBehindOverlay(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ps,Es,Os={pageX:0,pageY:0},Ts=null,ks=[],Ns=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function Rs(e){zs.indexOf(e)>=0||(0===zs.length&&function(){Ps=Ps||$s.bind(void 0);for(var e=0,t=Ns.length;e<t;e++)document.addEventListener(Ns[e],Ps,{capture:!0,passive:!1})}(),zs.push(e),Es=zs[zs.length-1])}function Is(e){var t=zs.indexOf(e);-1!==t&&(zs.splice(t,1),Es=zs[zs.length-1],0===zs.length&&function(){for(var e=0,t=Ns.length;e<t;e++)document.removeEventListener(Ns[e],Ps,{capture:!0,passive:!1})}())}const zs=[];function $s(e){if(e.cancelable&&function(e){var t=Kn(e).rootTarget;"touchmove"!==e.type&&Ts!==t&&(Ts=t,ks=function(e){for(var t=[],i=e.indexOf(Es),r=0;r<=i;r++)if(e[r].nodeType===Node.ELEMENT_NODE){var n=e[r],o=n.style;"scroll"!==o.overflow&&"auto"!==o.overflow&&(o=window.getComputedStyle(n)),"scroll"!==o.overflow&&"auto"!==o.overflow||t.push(n)}return t}(Kn(e).path));if(!ks.length)return!0;if("touchstart"===e.type)return!1;var i=function(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=Os.pageX-i.pageX,t.deltaY=Os.pageY-i.pageY}return t}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(e);return!function(e,t,i){if(!t&&!i)return;for(var r=Math.abs(i)>=Math.abs(t),n=0;n<e.length;n++){var o=e[n];if(r?i<0?o.scrollTop>0:o.scrollTop<o.scrollHeight-o.clientHeight:t<0?o.scrollLeft>0:o.scrollLeft<o.scrollWidth-o.clientWidth)return o}}(ks,i.deltaX,i.deltaY)}(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];Os.pageX=t.pageX,Os.pageY=t.pageY}}const Ds={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:As},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||Kn(this).querySelector("[autofocus]")||this},get _focusableNodes(){return ps.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=Kn(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in this._observer&&Kn(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||Ms(this,e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=Kn(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,r=t?this.__lastFocusableNode:this.__firstFocusableNode,n=!1;if(i===r)n=!0;else{var o=this._manager.deepActiveElement;n=o===i||o===this}n&&(e.preventDefault(),this._focusedChild=r,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;null!==i[e]&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame(function(){i[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,i){e&&t&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),Rs(this)),this.__addScrollListeners()):(Is(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],Ht)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||Kn(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},Ms=(e,t)=>{for(let r=t;r;r=(i=r).assignedSlot||i.parentNode||i.host)if(r===e)return!0;var i;return!1},Ls={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Kn(e).path,i=0,r=t.indexOf(this);i<r;i++){var n=t[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
fo({_template:Mo`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[[[ss,ls,Ds],Ls],ns],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fs=l`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Hs=class extends K{render(){return z`<span><slot></slot></span>`}};Hs.styles=[Fs],Hs=i([Q("mwc-icon")],Hs);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Bs extends K{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Oe((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return z``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?z`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return z`
      <button
          id="button"
          class="mdc-button ${we(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${Te(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${we({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return z`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Bs.shadowRootOptions={mode:"open",delegatesFocus:!0},i([Ee,te({type:String,attribute:"aria-haspopup"})],Bs.prototype,"ariaHasPopup",void 0),i([te({type:Boolean,reflect:!0})],Bs.prototype,"raised",void 0),i([te({type:Boolean,reflect:!0})],Bs.prototype,"unelevated",void 0),i([te({type:Boolean,reflect:!0})],Bs.prototype,"outlined",void 0),i([te({type:Boolean})],Bs.prototype,"dense",void 0),i([te({type:Boolean,reflect:!0})],Bs.prototype,"disabled",void 0),i([te({type:Boolean,attribute:"trailingicon"})],Bs.prototype,"trailingIcon",void 0),i([te({type:Boolean,reflect:!0})],Bs.prototype,"fullwidth",void 0),i([te({type:String})],Bs.prototype,"icon",void 0),i([te({type:String})],Bs.prototype,"label",void 0),i([te({type:Boolean})],Bs.prototype,"expandContent",void 0),i([re("#button")],Bs.prototype,"buttonElement",void 0),i([se("mwc-ripple")],Bs.prototype,"ripple",void 0),i([ne()],Bs.prototype,"shouldRenderRipple",void 0),i([oe({passive:!0})],Bs.prototype,"handleRippleActivate",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const js=l`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`,qs=l`:host[dense]{bottom:1px}:host .header{display:flex;flex-direction:row;align-items:center;margin:0;padding:20px;border-bottom:1px solid var(--exmg-form-drawer-header-separator-color, var(--mdc-theme-on-surface, rgba(2, 24, 43, 0.1)))}:host .header .header-buttons{display:flex;flex-direction:row;flex:1;justify-content:flex-end}:host .header .header-buttons exmg-form-drawer-button{margin-left:20px}:host .exmg-loading{visibility:hidden}:host .exmg-button-content{display:inline-flex;align-items:center;justify-content:center}:host button{display:relative}:host exmg-button-spinner{margin:3px 0;position:absolute;bottom:5px;left:50%;transform:translateX(-50%);--exmg-spinner-size: 20px}:host .progress-holder{overflow:hidden;border-top-left-radius:4px;border-top-right-radius:4px;position:absolute;pointer-events:none;left:0;right:0;top:0;width:100%;height:4px}:host .progress-holder progress{-webkit-appearance:none;appearance:none;height:100%;width:100%;position:absolute;pointer-events:none;left:0;top:0;direction:var(--exmg-button-progress-direction, ltr)}:host .progress-holder progress::-moz-progress-bar{background:var(--exmg-button-progress-color, #89c8ff)}:host .progress-holder progress::-webkit-progress-value{background-color:var(--exmg-button-progress-color, #89c8ff)}:host .progress-holder progress::-webkit-progress-bar{background-color:transparent}:host([dense]) exmg-button-spinner{bottom:1px}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Us=l`:host{font-size:0;display:inline-block;position:relative;width:var(--exmg-spinner-size, 28px);height:var(--exmg-spinner-size, 28px);--paper-spinner-container-rotation-duration: 1568ms;--paper-spinner-expand-contract-duration: 1333ms;--paper-spinner-full-cycle-duration: 5332ms;--paper-spinner-cooldown-duration: 400ms}#spinnerContainer{width:100%;height:100%;direction:ltr}#spinnerContainer.exmg-active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;color:var(--exmg-spinner-color, grey);white-space:nowrap}.exmg-active .spinner-layer{-webkit-animation-name:fill-unfill-rotate;-webkit-animation-duration:5332ms;-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-animation-iteration-count:infinite;animation-name:fill-unfill-rotate;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-iteration-count:infinite;opacity:1}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden}.spinner-layer::after{content:"";left:45%;width:10%;border-top-style:solid}.spinner-layer::after,.circle-clipper .circle{box-sizing:border-box;position:absolute;top:0;border-width:var(--exmg-spinner-stroke-width, 3px);border-radius:50%}.circle-clipper .circle{bottom:0;width:200%;border-style:solid;border-bottom-color:transparent !important}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(130deg);transform:rotate(130deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}.exmg-active .gap-patch::after,.exmg-active .circle-clipper .circle{-webkit-animation-duration:1333ms;-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-animation-iteration-count:infinite;animation-duration:1333ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-iteration-count:infinite}.exmg-active .circle-clipper.left .circle{-webkit-animation-name:left-spin;animation-name:left-spin}.exmg-active .circle-clipper.right .circle{-webkit-animation-name:right-spin;animation-name:right-spin}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.exmg-cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}`;let Vs=class extends K{constructor(){super(...arguments),this.coolingDown=!1,this.active=!1}resetAnimation(){this.active=!1,this.coolingDown=!1}setAriaHidden(e){const t="aria-hidden";e?this.setAttribute(t,"true"):this.removeAttribute(t)}render(){const e={"exmg-active":this.active||this.coolingDown,"exmg-cooldown":this.coolingDown};return z`
      <div
        id="spinnerContainer"
        class="${we(e)}"
        @animationend="${()=>this.resetAnimation}"
        @webkitAnimationEnd="${()=>this.resetAnimation}"
      >
        <div class="spinner-layer">
          <div class="circle-clipper left"><div class="circle"></div></div>
          <div class="circle-clipper right"><div class="circle"></div></div>
        </div>
      </div>
    `}};Vs.styles=Us,i([te({type:Boolean})],Vs.prototype,"coolingDown",void 0),i([te({type:Boolean,reflect:!0}),(e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)})((function(e){this.setAriaHidden(!e),this.coolingDown=!e}))],Vs.prototype,"active",void 0),Vs=i([Q("exmg-button-spinner")],Vs);let Ys=class extends Bs{constructor(){super(...arguments),this.loading=!1}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},t={"exmg-loading":this.loading,"exmg-button-content":!0},i=z`
      <span class="material-icons mdc-button__icon">${this.icon}</span>
    `;return z`
      <button
        id="button"
        class="mdc-button ${we(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label||this.icon}"
        @focus="${this.handleRippleFocusA}"
        @blur="${this.handleRippleBlurA}"
        @mousedown="${this.handleRippleActivateA}"
        @mouseenter="${this.handleRippleMouseEnterA}"
        @mouseleave="${this.handleRippleMouseLeaveA}"
        @touchstart="${this.handleRippleActivateA}"
        @touchend="${this.handleRippleDeactivateA}"
        @touchcancel="${this.handleRippleDeactivateA}"
      >
        ${this.renderRipple()}
        <span class="${we(t)}">
          ${this.icon&&!this.trailingIcon?i:""}
          <span class="mdc-button__label">${this.label}</span>
          ${this.icon&&this.trailingIcon?i:""}
          <slot></slot>
        </span>
        ${this.loading?z` <exmg-button-spinner active></exmg-button-spinner> `:""}
        ${this.progress?z`
              <div class="progress-holder">
                <progress max="100" value=${this.progress}></progress>
              </div>
            `:""}
      </button>
    `}handleRippleActivateA(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivateA()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivateA(){this.rippleHandlers.endPress()}handleRippleMouseEnterA(){this.rippleHandlers.startHover()}handleRippleMouseLeaveA(){this.rippleHandlers.endHover()}handleRippleFocusA(){this.rippleHandlers.startFocus()}handleRippleBlurA(){this.rippleHandlers.endFocus()}};Ys.styles=[js,qs],i([te({type:Boolean})],Ys.prototype,"loading",void 0),i([te({type:Number})],Ys.prototype,"progress",void 0),i([oe({passive:!0})],Ys.prototype,"handleRippleActivateA",null),Ys=i([Q("exmg-button")],Ys),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
fo({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(e,t){this.resolveCompletes=e,this.rejectCompletes=t}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut)return!1;var e=this.xhr.status||0;return 0===e||e>=200&&e<300},send:function(e){var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("progress",function(e){this._setProgress({lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total}),this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this)),t.addEventListener("error",function(t){this._setErrored(!0),this._updateStatus();var i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("timeout",function(t){this._setTimedOut(!0),this._updateStatus();var i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("abort",function(){this._setAborted(!0),this._updateStatus();var t=new Error("Request aborted."),i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("loadend",function(){if(this._updateStatus(),this._setResponse(this.parseResponse()),this.succeeded)this.resolveCompletes(this);else{var t=new Error("The request failed with status code: "+this.xhr.status),i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}}.bind(this)),this.url=e.url;var i=!1!==e.async;t.open(e.method||"GET",e.url,i);var r={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[e.handleAs],n=e.headers||Object.create(null),o=Object.create(null);for(var s in n)o[s.toLowerCase()]=n[s];if(n=o,r&&!n.accept&&(n.accept=r),Object.keys(n).forEach((function(e){/[A-Z]/.test(e)&&Xo._error("Headers must be lower case, got",e),t.setRequestHeader(e,n[e])}),this),i){t.timeout=e.timeout;var a=e.handleAs;!e.jsonPrefix&&a||(a="text"),t.responseType=t._responseType=a,e.jsonPrefix&&(t._jsonPrefix=e.jsonPrefix)}t.withCredentials=!!e.withCredentials;var l=this._encodeBodyObject(e.body,n["content-type"]);return t.send(l),this.completes},parseResponse:function(){var e=this.xhr,t=e.responseType||e._responseType,i=!this.xhr.responseType,r=e._jsonPrefix&&e._jsonPrefix.length||0;try{switch(t){case"json":if(i||void 0===e.response)try{return JSON.parse(e.responseText)}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.response;case"xml":return e.responseXML;case"blob":case"document":case"arraybuffer":return e.response;default:if(r)try{return JSON.parse(e.responseText.substring(r))}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.responseText}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0),this.xhr.abort()},_encodeBodyObject:function(e,t){if("string"==typeof e)return e;var i=e;switch(t){case"application/json":return JSON.stringify(i);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(i)}return e},_wwwFormUrlEncode:function(e){if(!e)return"";var t=[];return Object.keys(e).forEach((function(i){t.push(this._wwwFormUrlEncodePiece(i)+"="+this._wwwFormUrlEncodePiece(e[i]))}),this),t.join("&")},_wwwFormUrlEncodePiece:function(e){return null!=e&&e.toString?encodeURIComponent(e.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+"):""},_updateStatus:function(){this._setStatus(this.xhr.status),this._setStatusText(void 0===this.xhr.statusText?"":this.xhr.statusText)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
fo({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var e,t,i=[];for(e in this.params)if(t=this.params[e],e=window.encodeURIComponent(e),Array.isArray(t))for(var r=0;r<t.length;r++)i.push(e+"="+window.encodeURIComponent(t[r]));else null!==t?i.push(e+"="+window.encodeURIComponent(t)):i.push(e);return i.join("&")},get requestUrl(){var e=this.queryString,t=this.url||"";if(e){var i=t.indexOf("?")>=0?"&":"?";return t+i+e}return t},get requestHeaders(){var e,t={},i=this.contentType;if(null==i&&"string"==typeof this.body&&(i="application/x-www-form-urlencoded"),i&&(t["content-type"]=i),"object"==typeof this.headers)for(e in this.headers)t[e]=this.headers[e].toString();return t},_onProgressChanged:function(e){this._setLastProgress(e.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var e=document.createElement("iron-request"),t=this.toRequestOptions();return this.push("activeRequests",e),e.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,e)).then(this._discardRequest.bind(this,e)),this.fire("iron-ajax-presend",{request:e,options:t},{bubbles:this.bubbles,cancelable:!0}).defaultPrevented?(e.abort(),e.rejectCompletes(e),e):(this.lastRequest&&this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.send(t),this._setLastProgress(null),this._setLastRequest(e),this._setLoading(!0),this.fire("request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),e)},_handleResponse:function(e){e===this.lastRequest&&(this._setLastResponse(e.response),this._setLastError(null),this._setLoading(!1)),this.fire("response",e,{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-response",e,{bubbles:this.bubbles,composed:!0})},_handleError:function(e,t){this.verbose&&Xo._error(t),e===this.lastRequest&&(this._setLastError({request:e,error:t,status:e.xhr.status,statusText:e.xhr.statusText,response:e.xhr.response}),this._setLastResponse(null),this._setLoading(!1)),this.fire("iron-ajax-error",{request:e,error:t},{bubbles:this.bubbles,composed:!0}),this.fire("error",{request:e,error:t},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(e){var t=this.activeRequests.indexOf(e);t>-1&&this.splice("activeRequests",t,1)},_requestOptionsChanged:function(){this.debounce("generate-request",(function(){null!=this.url&&this.auto&&this.generateRequest()}),this.debounceDuration)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
fo({_template:Mo`
    <style>
      :host {
        display: block;
      }
    </style>

    <!-- This form is used to collect the elements that should be submitted -->
    <slot></slot>

    <!-- This form is used for submission -->
    <form id="helper" action\$="[[action]]" method\$="[[method]]" enctype\$="[[enctype]]"></form>
`,is:"iron-form",properties:{allowRedirect:{type:Boolean,value:!1},headers:{type:Object,value:function(){return{}}},withCredentials:{type:Boolean,value:!1}},attached:function(){this._form||(this._form=Kn(this).querySelector("form"),this._form?(this._init(),this.async(this._saveInitialValues.bind(this),1)):this._nodeObserver=Kn(this).observeNodes(function(e){for(var t=0;t<e.addedNodes.length;t++)"FORM"===e.addedNodes[t].tagName&&(this._form=e.addedNodes[t],this._init(),Kn(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)}.bind(this)))},detached:function(){this._nodeObserver&&(Kn(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)},_init:function(){this._form.addEventListener("submit",this.submit.bind(this)),this._form.addEventListener("reset",this.reset.bind(this)),this._defaults=this._defaults||new WeakMap,this._saveInitialValues()},saveResetValues:function(){this._saveInitialValues(!0)},_saveInitialValues:function(e){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var r=t[i];if(!this._defaults.has(r)||e){var n={value:r.value};"checked"in r&&(n.checked=r.checked),"invalid"in r&&(n.invalid=r.invalid),this._defaults.set(r,n)}}},validate:function(){if(!this._form)return!1;if(""===this._form.getAttribute("novalidate"))return!0;for(var e,t=this._form.checkValidity(),i=this._getValidatableElements(),r=0;e=i[r],r<i.length;r++){var n=e;n.validate&&(t=!!n.validate()&&t)}return t},submit:function(e){if(e&&e.preventDefault(),this._form)if(this.validate()){this.$.helper.textContent="";var t=this.serializeForm();if(this.allowRedirect){for(var i in t)this.$.helper.appendChild(this._createHiddenElement(i,t[i]));this.$.helper.action=this._form.getAttribute("action"),this.$.helper.method=this._form.getAttribute("method")||"GET",this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.$.helper.submit(),this.fire("iron-form-submit")}else this._makeAjaxRequest(t)}else this.fire("iron-form-invalid")},reset:function(e){if(e&&e.preventDefault(),this._form)if(e&&"reset"===e.type&&e.target===this._form){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var r=t[i];if(this._defaults.has(r)){var n=this._defaults.get(r);for(var o in n)r[o]=n[o]}}this.fire("iron-form-reset")}else this._form.reset()},serializeForm:function(){for(var e=this._getSubmittableElements(),t={},i=0;i<e.length;i++)for(var r=this._serializeElementValues(e[i]),n=0;n<r.length;n++)this._addSerializedElement(t,e[i].name,r[n]);return t},_handleFormResponse:function(e){this.fire("iron-form-response",e.detail)},_handleFormError:function(e){this.fire("iron-form-error",e.detail)},_makeAjaxRequest:function(e){this.request||(this.request=document.createElement("iron-ajax"),this.request.addEventListener("response",this._handleFormResponse.bind(this)),this.request.addEventListener("error",this._handleFormError.bind(this))),this.request.url=this._form.getAttribute("action"),this.request.method=this._form.getAttribute("method")||"GET",this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.request.withCredentials=this.withCredentials,this.request.headers=this.headers,"POST"===this._form.method.toUpperCase()?this.request.body=e:this.request.params=e,this.fire("iron-form-presubmit",{},{cancelable:!0}).defaultPrevented||(this.request.generateRequest(),this.fire("iron-form-submit",e))},_getValidatableElements:function(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function(){return this._findElements(this._form,!1,!1)},_findElements:function(e,t,i,r){r=r||[];for(var n=Kn(e).querySelectorAll("*"),o=0;o<n.length;o++)i||"slot"!==n[o].localName&&"content"!==n[o].localName?this._searchSubmittable(r,n[o],t):this._searchSubmittableInSlot(r,n[o],t);return r},_searchSubmittableInSlot:function(e,t,i){for(var r=Kn(t).getDistributedNodes(),n=0;n<r.length;n++)if(r[n].nodeType!==Node.TEXT_NODE){this._searchSubmittable(e,r[n],i);for(var o=Kn(r[n]).querySelectorAll("*"),s=0;s<o.length;s++)this._searchSubmittable(e,o[s],i)}},_searchSubmittable:function(e,t,i){this._isSubmittable(t,i)?e.push(t):t.root&&this._findElements(t.root,i,!0,e)},_isSubmittable:function(e,t){return!e.disabled&&(t?e.name||"function"==typeof e.validate:e.name)},_serializeElementValues:function(e){var t=e.tagName.toLowerCase();return"button"===t||"input"===t&&("submit"===e.type||"reset"===e.type)?[]:"select"===t?this._serializeSelectValues(e):"input"===t?this._serializeInputValues(e):e._hasIronCheckedElementBehavior&&!e.checked?[]:[e.value]},_serializeSelectValues:function(e){for(var t=[],i=0;i<e.options.length;i++)e.options[i].selected&&t.push(e.options[i].value);return t},_serializeInputValues:function(e){var t=e.type.toLowerCase();return("checkbox"!==t&&"radio"!==t||e.checked)&&"file"!==t?[e.value]:[]},_createHiddenElement:function(e,t){var i=document.createElement("input");return i.setAttribute("type","hidden"),i.setAttribute("name",e),i.setAttribute("value",t),i},_addSerializedElement:function(e,t,i){void 0===e[t]?e[t]=i:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(i))}});const Ws=l`exmg-button{text-transform:initial;text-transform:none;letter-spacing:.25px;min-width:3.75rem}paper-dialog{border-radius:var(--exmg-dialog-border-radius, 0.5rem);min-width:var(--exmg-dialog-min-width, 31.25rem);box-shadow:var(--shadow-elevation-8dp_-_box-shadow);background:var(--exmg-dialog-background-color, white);color:var(--exmg-dialog-color, #000)}paper-dialog>.actions{margin:1.5rem 0;text-align:right}paper-dialog>header{-webkit-box-flex:0 0 auto;-webkit-flex:0 0 auto;flex:0 0 auto;padding:.25rem 1.5rem 0 1.5rem;display:flex;flex-direction:row}paper-dialog>header>.title{flex:1;flex-basis:.000000001px}paper-dialog>header>paper-icon-button{position:relative;top:-0.5rem}paper-dialog>header>.title{-webkit-flex-shrink:0;flex-shrink:0;color:var(--exmg-dialog-color, #000);font-size:1.25rem;font-weight:500;line-height:1.75rem;margin:0 2rem 1rem 0}paper-dialog{max-width:32rem;box-sizing:border-box}:host([large]) paper-dialog{max-width:50rem;width:100%}paper-dialog>.actions{margin:1.5rem 0 1.5rem}::slotted(hr){border:none;height:1px;background:var(--divider-color);margin:1rem 0 .5rem}:host([submitting]) paper-dialog>.actions{margin:1.5rem 0 1.25rem}p,::slotted(p){font-size:.875rem;line-height:1.25rem;color:var(--exmg-dialog-color, rgba(0, 0, 0, 0.54))}::slotted(label){font-size:.75rem;font-weight:400;height:1.25rem;justify-content:normal;letter-spacing:.12rem;line-height:1.25rem;text-overflow:ellipsis;color:var(--secondary-text-color)}::slotted(p.help){margin-top:-2px;font-size:.8em}.body{margin-top:0px;margin-bottom:1.5rem}paper-dialog>.actions{margin:1.125rem 0 1.125rem}paper-dialog>.actions>*{margin-left:1rem}paper-dialog>.close-button{position:absolute;top:-0.8rem;right:-0.4rem;font-size:1rem;z-index:1;color:var(--mdc-theme-primary)}paper-dialog>.close-button:hover{cursor:pointer;color:var(--secondary-text-color)}:host([submitting]) paper-dialog>.actions{margin:1.125rem 0 .875rem}paper-dialog-scrollable{margin-top:.25rem}.error{display:none;font-size:.875rem;line-height:1.25rem;color:rgba(0,0,0,.54);padding:0}.error>span{display:flex;background-color:#fbe9e7;color:#ff5252;padding:0 0 0 1rem;margin:0 0 .75rem;min-height:3rem;align-items:center;justify-content:center}.error svg{margin-right:.75rem;fill:#ff5252}.error.show{display:block}`,Js=z`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
`,Xs=z`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
  </svg>
`;let Gs=class extends K{constructor(){super(),this.title="",this.message="",this.hideCloseButton=!1,this.buttonCopy="",this.submitting=!1,this.hasSlotContent=!1,this.onCloseDialog=this.onCloseDialog.bind(this),this.submit=this.submit.bind(this)}connectedCallback(){super.connectedCallback();this.observer=new MutationObserver((e=>{for(const t of e)"childList"===t.type&&(this.hasSlotContent=this.children.length>0)})),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1}),this.hasSlotContent=this.children.length>0}disconnectedCallback(){super.disconnectedCallback(),this.observer&&this.observer.disconnect()}onCloseDialog(){this.reset()}open(){this.dialogNode&&this.dialogNode.open()}close(){this.dialogNode&&this.dialogNode.close()}reset(){this.submitting=!1,this.errorMessage=void 0,this.submitBtnNode&&this.submitBtnNode.removeAttribute("disabled")}error(e){this.submitting=!1,this.errorMessage=e.message,this.submitBtnNode&&this.submitBtnNode.removeAttribute("disabled")}done(){this.submitting=!1,this.submitBtnNode&&this.submitBtnNode.removeAttribute("disabled"),this.close()}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!1,composed:!0}))}submit(){this.errorMessage=void 0,this.submitting=!0,this.submitBtnNode&&this.submitBtnNode.setAttribute("disabled","disabled"),this.dispatchEvent(new CustomEvent("submit",{bubbles:!1,composed:!0}))}render(){return z`
      <paper-dialog
        id="dialog"
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this.onCloseDialog}"
      >
        ${this.hideCloseButton?"":z`
              <mwc-icon-button @click=${this.close} class="close-button"
                >${Js}</mwc-icon-button
              >
            `}
        <header>
          ${this.title?z` <h2 class="title">${this.title}</h2> `:""}
        </header>
        <div class="body">
          <div class="error ${this.errorMessage?"show":""}">
            <span class="body">
              ${Xs}
              <span class="msg">${this.errorMessage}</span>
            </span>
          </div>
          ${this.hasSlotContent?z` <slot></slot> `:z` <p>${this.message}</p> `}
        </div>
        <div class="actions">
          <exmg-button dialog-dismiss @click=${this.cancel}>Cancel</exmg-button>
          <exmg-button
            id="submitBtn"
            @click=${this.submit}
            ?loading="${this.submitting}"
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `}};Gs.styles=[Ws],i([te({type:String})],Gs.prototype,"title",void 0),i([te({type:String})],Gs.prototype,"message",void 0),i([te({type:Boolean,attribute:"hide-close-button"})],Gs.prototype,"hideCloseButton",void 0),i([te({type:String,attribute:"button-copy"})],Gs.prototype,"buttonCopy",void 0),i([te({type:Boolean,reflect:!0})],Gs.prototype,"submitting",void 0),i([te({type:String,attribute:"error-message"})],Gs.prototype,"errorMessage",void 0),i([re("#dialog")],Gs.prototype,"dialogNode",void 0),i([re("#submitBtn")],Gs.prototype,"submitBtnNode",void 0),i([te({type:Boolean})],Gs.prototype,"hasSlotContent",void 0),Gs=i([Q("exmg-dialog-confirm")],Gs),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
fo({_template:Mo`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(Ls)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}});let Zs=class extends K{constructor(){super(),this.title="",this.buttonCopy="",this.hideCloseButton=!1,this.submitting=!1,this.onCloseDialog=this.onCloseDialog.bind(this),this.submit=this.submit.bind(this)}onCloseDialog(e){const t=e.path?e.path:e.composedPath();t[0]instanceof Element&&"PAPER-DIALOG"===t[0].tagName&&this.reset()}open(){this.dialogNode&&this.dialogNode.open()}close(){this.dialogNode&&this.dialogNode.close()}reset(){this.submitting=!1,this.errorMessage=void 0,this.submitBtnNode&&this.submitBtnNode.removeAttribute("disabled"),this.formNode&&this.formNode.reset()}error(e){this.submitting=!1,this.errorMessage=e.message,this.submitBtnNode&&this.submitBtnNode.removeAttribute("disabled")}done(){this.submitting=!1,this.submitBtnNode&&this.submitBtnNode.removeAttribute("disabled"),this.close()}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!1,composed:!0}))}submit(){this.errorMessage=void 0,this.formNode.validate()&&(this.submitting=!0,this.submitBtnNode&&this.submitBtnNode.setAttribute("disabled","disabled"),this.dispatchEvent(new CustomEvent("submit",{bubbles:!1,composed:!0,detail:this.formNode.serializeForm()})))}render(){return z`
      <paper-dialog
        id="dialog"
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this.onCloseDialog}"
      >
        ${this.hideCloseButton?"":z`
              <mwc-icon-button @click=${this.close} class="close-button"
                >${Js}</mwc-icon-button
              >
            `}
        <header>
          ${this.title?z` <h2 class="title">${this.title}</h2> `:""}
        </header>
        <paper-dialog-scrollable>
          <div class="body">
            <div class="error ${this.errorMessage?"show":""}">
              <span class="body">
                ${Xs}
                <span class="msg">${this.errorMessage}</span>
              </span>
            </div>
            <iron-form id="form">
              <form>
                <slot></slot>
              </form>
            </iron-form>
          </div>
        </paper-dialog-scrollable>
        <div class="actions">
          <exmg-button dialog-dismiss @click=${this.cancel}>Cancel</exmg-button>
          <exmg-button
            id="submitBtn"
            @click=${this.submit}
            ?loading="${this.submitting}"
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `}};Zs.styles=[Ws],i([te({type:String})],Zs.prototype,"title",void 0),i([te({type:String,attribute:"button-copy"})],Zs.prototype,"buttonCopy",void 0),i([te({type:Boolean,attribute:"hide-close-button"})],Zs.prototype,"hideCloseButton",void 0),i([te({type:Boolean,reflect:!0})],Zs.prototype,"submitting",void 0),i([te({type:String,attribute:"error-message"})],Zs.prototype,"errorMessage",void 0),i([re("#dialog")],Zs.prototype,"dialogNode",void 0),i([re("#form")],Zs.prototype,"formNode",void 0),i([re("#submitBtn")],Zs.prototype,"submitBtnNode",void 0),Zs=i([Q("exmg-dialog-form")],Zs);let Ks=class extends K{constructor(){super(...arguments),this.title="",this.buttonCopy="",this.hideCloseButton=!1,this.buttonUnelevated=!1}open(){this.dialogNode&&this.dialogNode.open()}close(){this.dialogNode&&this.dialogNode.close()}done(){this.dispatchEvent(new CustomEvent("done"))}renderHeader(){return z`
      ${this.title?z`
            <header>
              <h2 class="title">${this.title}</h2>
            </header>
          `:z` <div class="top-margin">&nbsp;</div> `}
    `}render(){return z`
      <paper-dialog id="dialog" with-backdrop no-cancel-on-outside-click>
        ${this.hideCloseButton?z` ${this.renderHeader()} `:z`
              <mwc-icon-button @click=${this.close} class="close-button"
                >${Js}</mwc-icon-button
              >
              ${this.renderHeader()}
            `}

        <paper-dialog-scrollable>
          <slot></slot>
        </paper-dialog-scrollable>
        <div class="actions">
          <exmg-button
            id="doneBtn"
            @click=${this.done}
            ?unelevated=${this.buttonUnelevated}
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `}};Ks.styles=[Ws],i([te({type:String})],Ks.prototype,"title",void 0),i([te({type:String,attribute:"button-copy"})],Ks.prototype,"buttonCopy",void 0),i([te({type:Boolean,attribute:"hide-close-button"})],Ks.prototype,"hideCloseButton",void 0),i([te({type:Boolean,attribute:"button-unelevated"})],Ks.prototype,"buttonUnelevated",void 0),i([re("#dialog")],Ks.prototype,"dialogNode",void 0),Ks=i([Q("exmg-dialog-info")],Ks);let Qs=class extends K{getElementBySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}_delete(e){const t=e.target;setTimeout((()=>{t.done()}),1e3)}_saveData(e){const t=e.target;setTimeout((()=>{t.done()}),1e3)}_saveDataTicket(e){const t=e.target;setTimeout((()=>{t.done()}),1e3)}_done(e){e.target.close()}_cancelCallback(e){e.target.close()}_saveDataError(e){const t=e.target;setTimeout((()=>{try{throw Error("User does not have permission to save data")}catch(e){t.error(e)}}),1e3)}render(){return z`
      <style>
        :host {
          font-family: var(
            --mdc-typography-headline3-font-family,
            var(--mdc-typography-font-family, Roboto, sans-serif)
          );
          font-size: 15px;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .main > div {
          width: 100%;
          border-bottom: 1px solid #666;
        }
        div > * {
          padding: 8px;
        }
      </style>
      <div class="main">
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog0").open()}
            >Dialog Confirm</exmg-button
          >
          <exmg-dialog-confirm
            id="dialog0"
            class="dark"
            title="Confirmation"
            message="Are you sure you want to delete this item [message]?"
            button-copy="Delete account"
            @cancel=${this._cancelCallback}
            @submit=${this._saveDataError}
          ></exmg-dialog-confirm>
        </div>
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog00").open()}
            >Dialog Confirm (Using slot)</exmg-button
          >
          <exmg-dialog-confirm
            id="dialog00"
            title="Confirmation"
            message="Are you sure you want to delete this item [message]?"
            button-copy="Delete account"
            @cancel=${this._cancelCallback}
            @submit="${this._delete}"
          >
            <p>Are you sure you want to delete this item [slot]?</p>
          </exmg-dialog-confirm>
        </div>
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog1").open()}
            >Dialog Normal</exmg-button
          >
          <exmg-dialog-form
            class="dark"
            id="dialog1"
            title="Create account"
            button-copy="Save"
            @cancel=${this._cancelCallback}
            @submit="${this._saveData}"
          >
            <paper-input name="name" label="Name" required></paper-input>
            <paper-input name="test" label="Test"></paper-input>
          </exmg-dialog-form>
        </div>
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog2").open()}
            >Dialog Error</exmg-button
          >
          <exmg-dialog-form
            id="dialog2"
            class="dark"
            title="Create account"
            button-copy="Save"
            @cancel=${this._cancelCallback}
            @submit="${this._saveDataError}"
          >
            <p>
              This setting either prevents or allows users to create multiple
              accounts using the same email address if they sign in to your app
              using different authentication providers.
            </p>
            <paper-input name="name" label="Name" required></paper-input>
            <paper-input
              name="password"
              label="Password"
              required
            ></paper-input>
          </exmg-dialog-form>
        </div>
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog4a").open()}
            >Dialog Info with scroll and normal title</exmg-button
          >
          <exmg-dialog-info
            class="dark"
            id="dialog4a"
            title="Title"
            button-copy="Close"
            @done="${this._done}"
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
            </div>
          </exmg-dialog-info>
        </div>
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog4b").open()}
            >Dialog Info without close btn</exmg-button
          >
          <exmg-dialog-info
            id="dialog4b"
            title="Test"
            hide-close-button
            button-copy="Close"
            @done="${this._done}"
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
            </div>
          </exmg-dialog-info>
        </div>
        <div>
          <exmg-button
            @click=${()=>this.getElementBySelector("#dialog3").open()}
            >Dialog Large</exmg-button
          >
          <exmg-dialog-form
            id="dialog3"
            title="Create Ticket"
            button-copy="Create"
            @cancel=${this._cancelCallback}
            @submit="${this._saveDataTicket}"
            large
          >
            <exmg-paper-combobox
              label="Project"
              style="max-width:280px;"
              always-float-label
              required
            >
              <paper-item>PlayToTV</paper-item>
              <paper-item>Website</paper-item>
            </exmg-paper-combobox>
            <exmg-paper-combobox
              label="Issue Type"
              style="max-width:280px;"
              always-float-label
              required
            >
              <paper-item>Story</paper-item>
              <paper-item>Bug</paper-item>
            </exmg-paper-combobox>
            <p class="help">
              Some issue types are unavailable due to incompatible field
              configuration and/or workflow associations.
            </p>
            <hr />
            <paper-input
              name="name"
              label="Summary"
              required
              always-float-label
            ></paper-input>
            <paper-input
              name="reporter"
              label="Reporter"
              required
              always-float-label
            ></paper-input>
            <p class="help">Start typing to get a list of possible matches.</p>
            <exmg-paper-token-input
              name="components"
              label="Components"
              always-float-label
            >
              <paper-item>javascript</paper-item>
              <paper-item>css</paper-item>
            </exmg-paper-token-input>
            <p class="help">
              Start typing to get a list of possible matches or press down to
              select.
            </p>
            <paper-input
              name="estimate"
              label="Estimates"
              type="number"
              always-float-label
              style="max-width:180px;"
            ></paper-input>
            <p class="help">
              Estimated time needed to resolve this issue in hours.
            </p>
            <label>Message</label>
            <exmg-markdown-editor>
              <marked-element markdown="# Hello Word!">
                <div slot="markdown-html"></div>
              </marked-element>
            </exmg-markdown-editor>
            <paper-input
              name="test"
              label="Test"
              type="number"
              always-float-label
            ></paper-input>
          </exmg-dialog-form>
        </div>
      </div>
    `}};Qs=i([Q("exmg-dialogs-demo")],Qs);export{Qs as DialogDemo};
