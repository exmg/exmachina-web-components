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
function t(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a,s;const h={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},l=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:l};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=d){var o,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const a=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:h.toAttribute)(e,i.type);this._$Ei=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(t,e){var i,o,n;const r=this.constructor,a=r._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=r.getPropertyOptions(a),s=t.converter,l=null!==(n=null!==(o=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||l)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var c,p;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(a=globalThis.reactiveElementPolyfillSupport)||void 0===a||a.call(globalThis,{ReactiveElement:m}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.0.0");const f=globalThis.trustedTypes,g=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,v="?"+y,u=`<${v}>`,x=document,b=(t="")=>x.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,E=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,R=/"/g,k=/^(?:script|style|textarea)$/i,C=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),U=new WeakMap,H=x.createTreeWalker(x,129,null,!1),N=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",a=_;for(let e=0;e<i;e++){const i=t[e];let s,h,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,h=a.exec(i),null!==h);)d=a.lastIndex,a===_?"!--"===h[1]?a=A:void 0!==h[1]?a=E:void 0!==h[2]?(k.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=z):void 0!==h[3]&&(a=z):a===z?">"===h[0]?(a=null!=n?n:_,l=-1):void 0===h[1]?l=-2:(l=a.lastIndex-h[2].length,s=h[1],a=void 0===h[3]?z:'"'===h[3]?R:S):a===R||a===S?a=z:a===A||a===E?a=_:(a=z,n=void 0);const m=a===z&&t[e+1].startsWith("/>")?" ":"";r+=a===_?i+u:l>=0?(o.push(s),i.slice(0,l)+"$lit$"+i.slice(l)+y+m):i+y+(-2===l?(o.push(void 0),e):m)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(s):s,o]};class O{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[h,l]=N(t,e);if(this.el=O.createElement(h,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=H.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=l[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?D:"@"===e[1]?V:B})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(k.test(o.tagName)){const t=o.textContent.split(y),e=t.length-1;if(e>0){o.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],b()),H.nextNode(),s.push({type:2,index:++n});o.append(t[e],b())}}}else if(8===o.nodeType)if(o.data===v)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(y,t+1));)s.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function M(t,e,i=t,o){var n,r,a,s;if(e===T)return e;let h=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const l=$(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Cl)&&void 0!==a?a:s._$Cl=[])[o]=h:i._$Cu=h),void 0!==h&&(e=M(t,h._$AS(t,e.values),h,o)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);H.currentNode=n;let r=H.nextNode(),a=0,s=0,h=o[0];for(;void 0!==h;){if(a===h.index){let e;2===h.type?e=new L(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new W(r,this,t)),this.v.push(e),h=o[++s]}a!==(null==h?void 0:h.index)&&(r=H.nextNode(),a++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,o){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),$(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==P&&$(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=O.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new j(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new O(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new L(this.A(b()),this.A(b()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,o,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=M(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=M(this,o[i+a],e,a),s===T&&(s=this._$AH[a]),r||(r=!$(s)||s!==this._$AH[a]),s===P?t=P:t!==P&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!o&&this.k(t)}k(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===P?void 0:t}}class D extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==P?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends B{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=M(this,t,e,0))&&void 0!==i?i:P)===T)return;const o=this._$AH,n=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==P&&(o===P||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,q,J;null===(c=globalThis.litHtmlPolyfillSupport)||void 0===c||c.call(globalThis,O,L),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.0");class K extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new L(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}K.finalized=!0,K._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:K}),null===(q=globalThis.litElementPolyfillSupport)||void 0===q||q.call(globalThis,{LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z=[{name:"@exmg/exmg-button",version:"8.0.0",url:"https://www.npmjs.com/package/@exmg/exmg-button"},{name:"@exmg/exmg-cli",version:"4.1.0",url:"https://www.npmjs.com/package/@exmg/exmg-cli"},{name:"@exmg/exmg-dialogs",version:"8.0.0",url:"https://www.npmjs.com/package/@exmg/exmg-dialogs"},{name:"@exmg/exmg-radio-group",version:"3.0.1",url:"https://www.npmjs.com/package/@exmg/exmg-radio-group"},{name:"@exmg/exmg-tooltip",version:"8.0.0",url:"https://www.npmjs.com/package/@exmg/exmg-tooltip"}],G=((t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(o,i)})`.mdc-typography{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-font-family, Roboto, sans-serif)}.mdc-typography--headline1{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:6rem;font-size:var(--mdc-typography-headline1-font-size, 6rem);line-height:6rem;line-height:var(--mdc-typography-headline1-line-height, 6rem);font-weight:300;font-weight:var(--mdc-typography-headline1-font-weight, 300);letter-spacing:-0.015625em;letter-spacing:var(--mdc-typography-headline1-letter-spacing, -0.015625em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline1-text-transform, inherit)}.mdc-typography--headline2{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:3.75rem;font-size:var(--mdc-typography-headline2-font-size, 3.75rem);line-height:3.75rem;line-height:var(--mdc-typography-headline2-line-height, 3.75rem);font-weight:300;font-weight:var(--mdc-typography-headline2-font-weight, 300);letter-spacing:-0.0083333333em;letter-spacing:var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline2-text-transform, inherit)}.mdc-typography--headline3{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:3rem;font-size:var(--mdc-typography-headline3-font-size, 3rem);line-height:3.125rem;line-height:var(--mdc-typography-headline3-line-height, 3.125rem);font-weight:400;font-weight:var(--mdc-typography-headline3-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline3-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline3-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline3-text-transform, inherit)}.mdc-typography--headline4{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:2.125rem;font-size:var(--mdc-typography-headline4-font-size, 2.125rem);line-height:2.5rem;line-height:var(--mdc-typography-headline4-line-height, 2.5rem);font-weight:400;font-weight:var(--mdc-typography-headline4-font-weight, 400);letter-spacing:0.0073529412em;letter-spacing:var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline4-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline4-text-transform, inherit)}.mdc-typography--headline5{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.5rem;font-size:var(--mdc-typography-headline5-font-size, 1.5rem);line-height:2rem;line-height:var(--mdc-typography-headline5-line-height, 2rem);font-weight:400;font-weight:var(--mdc-typography-headline5-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline5-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline5-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline5-text-transform, inherit)}.mdc-typography--headline6{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-typography--subtitle1{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit)}.mdc-typography--subtitle2{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-typography--body1{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-typography--body2{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-typography--caption{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-typography--button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-typography--overline{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-overline-font-size, 0.75rem);line-height:2rem;line-height:var(--mdc-typography-overline-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-overline-font-weight, 500);letter-spacing:0.1666666667em;letter-spacing:var(--mdc-typography-overline-letter-spacing, 0.1666666667em);text-decoration:none;text-decoration:var(--mdc-typography-overline-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-overline-text-transform, uppercase)}h1{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:6rem;font-size:var(--mdc-typography-headline1-font-size, 6rem);line-height:6rem;line-height:var(--mdc-typography-headline1-line-height, 6rem);font-weight:300;font-weight:var(--mdc-typography-headline1-font-weight, 300);letter-spacing:-0.015625em;letter-spacing:var(--mdc-typography-headline1-letter-spacing, -0.015625em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline1-text-transform, inherit)}h2{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:3.75rem;font-size:var(--mdc-typography-headline2-font-size, 3.75rem);line-height:3.75rem;line-height:var(--mdc-typography-headline2-line-height, 3.75rem);font-weight:300;font-weight:var(--mdc-typography-headline2-font-weight, 300);letter-spacing:-0.0083333333em;letter-spacing:var(--mdc-typography-headline2-letter-spacing, -0.0083333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline2-text-transform, inherit)}h3{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:3rem;font-size:var(--mdc-typography-headline3-font-size, 3rem);line-height:3.125rem;line-height:var(--mdc-typography-headline3-line-height, 3.125rem);font-weight:400;font-weight:var(--mdc-typography-headline3-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline3-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline3-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline3-text-transform, inherit)}h4{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline4-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:2.125rem;font-size:var(--mdc-typography-headline4-font-size, 2.125rem);line-height:2.5rem;line-height:var(--mdc-typography-headline4-line-height, 2.5rem);font-weight:400;font-weight:var(--mdc-typography-headline4-font-weight, 400);letter-spacing:0.0073529412em;letter-spacing:var(--mdc-typography-headline4-letter-spacing, 0.0073529412em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline4-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline4-text-transform, inherit)}h5{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.5rem;font-size:var(--mdc-typography-headline5-font-size, 1.5rem);line-height:2rem;line-height:var(--mdc-typography-headline5-line-height, 2rem);font-weight:400;font-weight:var(--mdc-typography-headline5-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline5-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline5-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline5-text-transform, inherit)}h6{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}body,p{font-family:var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));margin:0}a,a:visited{text-decoration:none}.landing{margin:1rem;display:flex;flex-direction:column;align-items:center}.header{margin-bottom:75px}.header h3{font-weight:200}.elements{display:flex;margin:2rem 0;width:100%;justify-content:space-evenly}.element{border:1px solid #f0b344;color:#000;padding:1rem}.element:hover{cursor:pointer}.element h3{font-size:15px;font-weight:100;letter-spacing:2px;margin:0}.element p{margin:0}.demos{width:100%}.demos .sidemenu{color:#eee;background:#1f1f23;height:100%;width:300px;position:fixed;top:0;left:0}.demos .sidemenu .sidemenu-header{padding:1rem}.demos .sidemenu .sidemenu-header h3{font-size:30px;margin:0}.demos .sidemenu .sidemenu-elements{overflow-y:scroll}.demos .sidemenu .element{color:#eee;border-left:none;border-right:none;border-top:none;border-bottom:1px solid #f0b344}.demos .sidemenu .element.active{color:#f0b344}.demos .sidemenu .element:first-child{border-top:1px solid #f0b344}.demos .header{width:calc(100% - 332px);height:100px;margin-bottom:0;margin-left:300px;background:#18181b;color:#fff;padding:1rem;display:flex;justify-content:space-between}.demos .header h3{margin:0;font-size:30px}.demos .header .actions,.demos .header .infos{display:flex;flex-direction:column;justify-content:center}.demos .header .actions exmg-button,.demos .header .infos exmg-button{width:100%}.demos .header .actions exmg-button:first-child,.demos .header .infos exmg-button:first-child{margin-bottom:.5rem}.demos .header .actions .npm,.demos .header .infos .npm{text-decoration:none;color:#fff;background-color:#d83941;text-align:center;letter-spacing:.5px;-webkit-transition:background-color .2s ease-out;transition:background-color .2s ease-out;cursor:pointer;border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.demos .main{width:calc(100% - 300px);margin-left:300px;height:calc(100vh - 132px)}.demos iframe{border:none;height:100%;width:100%}`;let Q=class extends K{connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.updateElementFromUrl),this.updateElementFromUrl()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.updateElementFromUrl)}updateElementFromUrl(){const t=window.location.pathname,e=t.indexOf("exmg"),i=t.substring(e,t.length-1);this.selectedElement=Z.find((t=>t.name===`@exmg/${i}`))}renderElements(){return Z.map((t=>{const e=this.selectedElement&&this.selectedElement.name===t.name,i=t.name.replace("@exmg/",""),o=this.selectedElement?`../${i}/`:`./demos/${i}/`;return C`
        <a
          href=${o}
        >
          <div class=${"element "+(e?"active":"")}>
            <h3>${t.name}</h3>
            ${this.selectedElement?"":C`<p>${t.version}</p>`}
          </div>
        </a>
      `}))}render(){return this.selectedElement?C`
        <section class="demos">
          <div class="sidemenu">
            <div class="sidemenu-header">
              <h3>EXMACHINA WEB COMPONENTS.</h3>
            </div>
            <div class="sidemenu-elements">${this.renderElements()}</div>
          </div>
          <div class="header">
            <div class="infos">
              <h3>${this.selectedElement.name}</h3>
              <p>v${this.selectedElement.version}</p>
            </div>
            <div class="actions">
              <a href=${this.selectedElement.url} target="_blank">
                <button class="npm" raised>NPMJS</button>
              </a>
            </div>
          </div>
          <div class="main">
            <slot></slot>
          </div>
        </section>
      `:C`
        <section class="landing">
          <div class="header">
            <h3>EXMACHINA WEB COMPONENTS.</h3>
          </div>
          <div class="elements">${this.renderElements()}</div>
        </section>
      `}};Q.styles=[G],t([function(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)}({type:Object})],Q.prototype,"selectedElement",void 0),Q=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e))("demo-app")],Q);export{Q as DemoApp};