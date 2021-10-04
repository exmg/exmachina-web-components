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
function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,h;const a={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=c){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:a.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:a.fromAttribute;this._$Ei=r,this[r]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u,v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPolyfillSupport)||void 0===l||l.call(globalThis,{ReactiveElement:p}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.0.0");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,m="?"+_,y=`<${m}>`,$=document,b=(t="")=>$.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,T=/"/g,P=/^(?:script|style|textarea)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),N=new WeakMap,R=$.createTreeWalker($,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===E?"!--"===h[1]?r=w:void 0!==h[1]?r=S:void 0!==h[2]?(P.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=C):void 0!==h[3]&&(r=C):r===C?">"===h[0]?(r=null!=o?o:E,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?C:'"'===h[3]?T:k):r===T||r===k?r=C:r===w||r===S?r=E:(r=C,o=void 0);const c=r===C&&t[e+1].startsWith("/>")?" ":"";n+=r===E?i+y:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+_+c):i+_+(-2===a?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==f?f.createHTML(l):l,s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=L(t,e);if(this.el=M.createElement(h,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?V:"@"===e[1]?W:j})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],b()),R.nextNode(),l.push({type:2,index:++o});s.append(t[e],b())}}}else if(8===s.nodeType)if(s.data===m)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)l.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var o,n,r,l;if(e===O)return e;let h=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const a=A(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=z(t,h._$AS(t,e.values),h,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);R.currentNode=o;let n=R.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new D(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new q(n,this,t)),this.v.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(n=R.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),A(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new M(t)),e}M(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.A(b()),this.A(b()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=z(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=z(this,s[i+r],e,r),l===O&&(l=this._$AH[r]),n||(n=!A(l)||l!==this._$AH[r]),l===U?t=U:t!==U&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.k(t)}k(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===U?void 0:t}}class V extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:U)===O)return;const s=this._$AH,o=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==U&&(s===U||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,J,Z;null===(u=globalThis.litHtmlPolyfillSupport)||void 0===u||u.call(globalThis,M,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.0");class F extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new D(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}F.finalized=!0,F._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:F}),null===(J=globalThis.litElementPolyfillSupport)||void 0===J||J.call(globalThis,{LitElement:F}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),Q=n`:host{display:block;position:absolute;outline:none;z-index:var(--exmg-tooltip-z-index, 1002);-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default}#tooltip{display:block;outline:none;font-size:var(--exmg-tooltip-font-size, 10px);line-height:var(--exmg-tooltip-line-height, 1);background-color:var(--exmg-tooltip-background, #616161);opacity:var(--exmg-tooltip-opacity, 0.9);color:var(--exmg-tooltip-text-color, white);padding:var(--exmg-tooltip-padding, 8px);border-radius:var(--exmg-tooltip-border-radius, 2px);min-width:var(--exmg-tooltip-min-width, initial)}.hidden{display:none !important}`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}class tt extends F{constructor(){super(),this.position="bottom",this.fitToVisibleBounds=!1,this._showing=!1,this.setAttribute("role","tooltip"),this.setAttribute("tabindex","-1")}get target(){const t=this.parentNode,e=t.getRootNode();let i;return i=this.for?e.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t,i}connectedCallback(){super.connectedCallback(),this._boundShow=this.show.bind(this),this._boundHide=this.hide.bind(this),this._findTarget()}disconnectedCallback(){this._removeListeners(),super.disconnectedCallback()}show(){if(!this._showing){if(""===this.textContent.trim()){let t=!0;const e=this.childNodes;for(let i=0;i<e.length;i++)if(""!==e[i].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.toggleClass("hidden",!1,this.tooltip),this.updatePosition()}}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}hide(){this._showing&&(this._showing=!1,this.toggleClass("hidden",!0,this.tooltip))}updatePosition(){if(!this._target||!this.offsetParent)return;const t=this.offsetParent.getBoundingClientRect(),e=this._target.getBoundingClientRect(),i=this.getBoundingClientRect(),s=(e.width-i.width)/2,o=(e.height-i.height)/2,n=e.left-t.left,r=e.top-t.top;let l=0,h=0;switch(this.position){case"top":l=n+s,h=r-i.height;break;case"bottom":l=n+s,h=r+e.height;break;case"left":l=n-i.width,h=r+o;break;case"right":l=n+e.width,h=r+o}void 0!==this.xOffset&&(l+=this.xOffset),void 0!==this.yOffset&&(h+=this.yOffset),this.fitToVisibleBounds?(t.left+l+i.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,l)+"px",this.style.right="auto"),t.top+h+i.height>window.innerHeight?(this.style.bottom=t.height+"px",this.style.top="auto"):(this.style.top=Math.max(-t.top,h)+"px",this.style.bottom="auto")):(this.style.left=l+"px",this.style.top=h+"px")}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this._boundShow),this._target.addEventListener("focus",this._boundShow),this._target.addEventListener("mouseleave",this._boundHide),this._target.addEventListener("blur",this._boundHide),this._target.addEventListener("tap",this._boundHide)),this.addEventListener("mouseenter",this._boundHide)}_findTarget(){this._removeListeners(),this._target=this.target,this._addListeners()}_removeListeners(){this._target&&(this._target.removeEventListener("mouseenter",this._boundShow),this._target.removeEventListener("focus",this._boundShow),this._target.removeEventListener("mouseleave",this._boundHide),this._target.removeEventListener("blur",this._boundHide),this._target.removeEventListener("tap",this._boundHide)),this.removeEventListener("mouseenter",this._boundHide)}render(){return H`
      <div id="tooltip" class="hidden">
        <slot></slot>
      </div>
    `}}t([Y({type:String}),(t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,i)=>e.constructor._observers.set(i,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)}))}}e.constructor._observers.set(i,t)})((function(){this._findTarget()}))],tt.prototype,"for",void 0),t([Y({type:String})],tt.prototype,"position",void 0),t([Y({type:Boolean})],tt.prototype,"fitToVisibleBounds",void 0),t([Y({type:Number})],tt.prototype,"xOffset",void 0),t([Y({type:Number})],tt.prototype,"yOffset",void 0),t([Y({type:Boolean})],tt.prototype,"_showing",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */("#tooltip")],tt.prototype,"tooltip",void 0);let et=class extends tt{};et.styles=Q,et=t([G("exmg-tooltip")],et);let it=class extends F{render(){return H`
      <div class="container">
        <div>
          <h3>Simple Usage</h3>
          <div tabindex="0" style="display:inline-block; position:relative;">
            <input type="checkbox" />allosaurus
            <exmg-tooltip>the name means "different lizard"</exmg-tooltip>
          </div>
          <div tabindex="0" style="display:inline-block; position:relative;">
            <input type="checkbox" />brontosaurus
            <exmg-tooltip>the name means "thunder lizard"</exmg-tooltip>
          </div>
          <div tabindex="0" style="display:inline-block; position:relative;">
            <input type="checkbox" />megalosaurus
            <exmg-tooltip>the name means "roof lizard"</exmg-tooltip>
          </div>
        </div>

        <div style="display:inline-block; position:relative;">
          <h3>Positionning</h3>
          <div id="dir_1" class="avatar red" tabindex="0"></div>
          <div id="dir_2" class="avatar blue" tabindex="0"></div>
          <div id="dir_3" class="avatar green" tabindex="0"></div>
          <div id="dir_4" class="avatar orange" tabindex="0"></div>

          <exmg-tooltip for="dir_1" position="left">👈</exmg-tooltip>
          <exmg-tooltip for="dir_2" position="right">👉</exmg-tooltip>
          <exmg-tooltip for="dir_3" position="top">👍</exmg-tooltip>
          <exmg-tooltip for="dir_4" position="bottom">👎</exmg-tooltip>
        </div>

        <div style="display:inline-block; position:relative;">
          <h3>Offsets</h3>
          <div id="dir_5" class="avatar red" tabindex="0"></div>
          <div id="dir_6" class="avatar blue" tabindex="0"></div>
          <div id="dir_7" class="avatar green" tabindex="0"></div>
          <div id="dir_8" class="avatar orange" tabindex="0"></div>

          <exmg-tooltip for="dir_5" position="left" xOffset="-200">👈 With 50 offset</exmg-tooltip>
          <exmg-tooltip for="dir_6" position="right" xOffset="150">👉 With 150 offset</exmg-tooltip>
          <exmg-tooltip for="dir_7" position="top" yOffset="150">👍 With 200 offset</exmg-tooltip>
          <exmg-tooltip for="dir_8" position="bottom" yOffset="-100">👎 With -100 offset</exmg-tooltip>
        </div>

        <div>
          <h3>Styling</h3>
          <div tabindex="0" style="display:inline-block; position:relative;">
            <button id="styledBtn">Styled</button>
            <exmg-tooltip class="custom-style" for="styledBtn">the name means "different lizard"</exmg-tooltip>
          </div>
        </div>
      </div>
    `}};it.styles=[n`
      div {
        margin: 1rem;
      }
      input,
      .avatar {
        margin: 0 10px;
      }
      .avatar {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
        margin: 2rem;
      }
      .blue {
        background-color: blue;
      }
      .orange {
        background-color: orange;
      }
      .green {
        background-color: green;
      }
      .red {
        background-color: red;
      }
      .custom-style {
        --exmg-tooltip-font-size: 16px;
        --exmg-tooltip-background: yellow;
        --exmg-tooltip-opacity: 0.7;
        --exmg-tooltip-text-color: blue;
        --exmg-tooltip-min-width: 200px;
      }
      .container {
        width: 300px;
        margin: 2rem auto;
      }
    `],it=t([G("exmg-tooltip-demo")],it);export{it as ExmgTooltipDemo};
