import{P as e,h as t,d as r,B as i}from"../exmg-icons-1c45363a.js";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)};function s(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=window,d=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),u=new WeakMap;class h{constructor(e,t,r){if(this._$cssResult$=!0,r!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(d&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=u.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&u.set(t,e))}return e}toString(){return this.cssText}}const m=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new h(r,e,p)},g=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new h("string"==typeof e?e:e+"",void 0,p))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var f;const v=window,b=v.trustedTypes,y=b?b.emptyScript:"",_=v.reactiveElementPolyfillSupport,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},x=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:x};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this._$Ep(r,t);void 0!==i&&(this._$Ev.set(i,r),e.push(i))})),e}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||w}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{d?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),i=l.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=w){var i;const n=this.constructor._$Ep(e,r);if(void 0!==n&&!0===r.reflect){const o=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:k).toAttribute(t,r.type);this._$El=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:k;this._$El=n,this[n]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||x)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $;A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:A}),(null!==(f=v.reactiveElementVersions)&&void 0!==f?f:v.reactiveElementVersions=[]).push("1.6.1");const E=window,S=E.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,F="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,P="?"+R,T=`<${P}>`,O=document,z=()=>O.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=Array.isArray,D="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,I=/>/g,M=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,q=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),G=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),X=new WeakMap,Y=O.createTreeWalker(O,129,null,!1),K=(e,t)=>{const r=e.length-1,i=[];let n,o=2===t?"<svg>":"",a=N;for(let t=0;t<r;t++){const r=e[t];let s,c,l=-1,d=0;for(;d<r.length&&(a.lastIndex=d,c=a.exec(r),null!==c);)d=a.lastIndex,a===N?"!--"===c[1]?a=U:void 0!==c[1]?a=I:void 0!==c[2]?(q.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=M):void 0!==c[3]&&(a=M):a===M?">"===c[0]?(a=null!=n?n:N,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?M:'"'===c[3]?B:j):a===B||a===j?a=M:a===U||a===I?a=N:(a=M,n=void 0);const p=a===M&&e[t+1].startsWith("/>")?" ":"";o+=a===N?r+T:l>=0?(i.push(s),r.slice(0,l)+F+r.slice(l)+R+p):r+R+(-2===l?(i.push(void 0),t):p)}const s=o+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==C?C.createHTML(s):s,i]};class W{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const a=e.length-1,s=this.parts,[c,l]=K(e,t);if(this.el=W.createElement(c,r),Y.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=Y.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith(F)||t.startsWith(R)){const r=l[o++];if(e.push(t),void 0!==r){const e=i.getAttribute(r.toLowerCase()+F).split(R),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?re:"?"===t[1]?ne:"@"===t[1]?oe:te})}else s.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(q.test(i.tagName)){const e=i.textContent.split(R),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],z()),Y.nextNode(),s.push({type:2,index:++n});i.append(e[t],z())}}}else if(8===i.nodeType)if(i.data===P)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(R,e+1));)s.push({type:7,index:n}),e+=R.length-1}n++}}static createElement(e,t){const r=O.createElement("template");return r.innerHTML=e,r}}function J(e,t,r=e,i){var n,o,a,s;if(t===G)return t;let c=void 0!==i?null===(n=r._$Co)||void 0===n?void 0:n[i]:r._$Cl;const l=L(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,r,i)),void 0!==i?(null!==(a=(s=r)._$Co)&&void 0!==a?a:s._$Co=[])[i]=c:r._$Cl=c),void 0!==c&&(t=J(e,c._$AS(e,t.values),c,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(r,!0);Y.currentNode=n;let o=Y.nextNode(),a=0,s=0,c=i[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ee(o,o.nextSibling,this,e):1===c.type?t=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(t=new ae(o,this,e)),this._$AV.push(t),c=i[++s]}a!==(null==c?void 0:c.index)&&(o=Y.nextNode(),a++)}return Y.currentNode=O,n}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ee{constructor(e,t,r,i){var n;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),L(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>H(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Z&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=W.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(r);else{const e=new Q(n,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new W(e)),t}T(e){H(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new ee(this.k(z()),this.k(z()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class te{constructor(e,t,r,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(void 0===n)e=J(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=J(this,i[r+a],t,a),s===G&&(s=this._$AH[a]),o||(o=!L(s)||s!==this._$AH[a]),s===Z?e=Z:e!==Z&&(e+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}o&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class re extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}const ie=S?S.emptyScript:"";class ne extends te{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Z?this.element.setAttribute(this.name,ie):this.element.removeAttribute(this.name)}}class oe extends te{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=J(this,e,t,0))&&void 0!==r?r:Z)===G)return;const i=this._$AH,n=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=E.litHtmlPolyfillSupport;null==se||se(W,ee),(null!==($=E.litHtmlVersions)&&void 0!==$?$:E.litHtmlVersions=[]).push("2.7.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ce,le;class de extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var i,n;const o=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:t;let a=o._$litPart$;if(void 0===a){const e=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new ee(t.insertBefore(z(),e),e,void 0,null!=r?r:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return G}}de.finalized=!0,de._$litElement$=!0,null===(ce=globalThis.litElementHydrateSupport)||void 0===ce||ce.call(globalThis,{LitElement:de});const pe=globalThis.litElementPolyfillSupport;null==pe||pe({LitElement:de}),(null!==(le=globalThis.litElementVersions)&&void 0!==le?le:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var he;null===(he=window.HTMLSlotElement)||void 0===he||he.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me=window,ge=me.ShadowRoot&&(void 0===me.ShadyCSS||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),ve=new WeakMap;class be{constructor(e,t,r){if(this._$cssResult$=!0,r!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=ve.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ve.set(t,e))}return e}toString(){return this.cssText}}const ye=ge?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new be("string"==typeof e?e:e+"",void 0,fe))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var _e;const ke=window,xe=ke.trustedTypes,we=xe?xe.emptyScript:"",Ae=ke.reactiveElementPolyfillSupport,$e={toAttribute(e,t){switch(t){case Boolean:e=e?we:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},Ee=(e,t)=>t!==e&&(t==t||e==e),Se={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ee};class Ce extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this._$Ep(r,t);void 0!==i&&(this._$Ev.set(i,r),e.push(i))})),e}static createProperty(e,t=Se){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Se}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(ye(e))}else void 0!==e&&t.push(ye(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{ge?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),i=me.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Se){var i;const n=this.constructor._$Ep(e,r);if(void 0!==n&&!0===r.reflect){const o=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:$e).toAttribute(t,r.type);this._$El=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:$e;this._$El=n,this[n]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ee)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}Ce.finalized=!0,Ce.elementProperties=new Map,Ce.elementStyles=[],Ce.shadowRootOptions={mode:"open"},null==Ae||Ae({ReactiveElement:Ce}),(null!==(_e=ke.reactiveElementVersions)&&void 0!==_e?_e:ke.reactiveElementVersions=[]).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fe=1,Re=e=>(...t)=>({_$litDirective$:e,values:t});class Pe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=Re(class extends Pe{constructor(e){var t;if(super(e),e.type!==Fe||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,i;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(e))&&this.it.add(e);return this.render(t)}const n=e.element.classList;this.it.forEach((e=>{e in t||(n.remove(e),this.it.delete(e))}));for(const e in t){const r=!!t[e];r===this.it.has(e)||(null===(i=this.nt)||void 0===i?void 0:i.has(e))||(r?(n.add(e),this.it.add(e)):(n.remove(e),this.it.delete(e)))}return G}}),Oe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ze(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):Oe(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const Le=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.define(e,t)}}})(e,t),He=e=>(t,r)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,r)=>t.constructor._observers.set(r,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const r=this.constructor._observers.get(t);void 0!==r&&r.call(this,this[t],e)}))}}t.constructor._observers.set(r,e)};class De extends de{constructor(){super(...arguments),this.bubbles=!1}fire(e,t,r){this.dispatchEvent(new CustomEvent(e,{bubbles:r||this.bubbles,composed:!0,detail:t}))}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ne=[],Ue=document.createTextNode("");new window.MutationObserver((function(){const e=Ne.length;for(let t=0;t<e;t++){const e=Ne[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}Ne.splice(0,e)})).observe(Ue,{characterData:!0});const Ie={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Me{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,je.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),je.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,r){return e instanceof Me?e._cancelAsync():e=new Me,e.setConfig(t,r),e}}const je=new Set,Be=e=>e;document.head.style.touchAction;const qe=["mousedown","mousemove","mouseup","click"],Ve=[0,1,4,2],Ge=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();let Ze=!1;!function(){try{const e=Object.defineProperty({},"passive",{get:()=>(Ze=!0,!0)});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();const Xe=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Ye=[],Ke={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},We={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Je(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{const r=e.getRootNode();if(e.id){const i=r.querySelectorAll(`label[for = '${e.id}']`);for(let e=0;e<i.length;e++)t.push(i[e])}}catch(e){}}return t}const Qe=function(e){const t=e.sourceCapabilities;var r;if((!t||t.firesTouchEvents)&&(e.__polymerGesturesHandled={skip:!0},"click"===e.type)){let t=!1;const i=ot(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)Ye.push(i[e]);else if(r=i[e],Ke[r.localName]){const r=Je(i[e]);for(let e=0;e<r.length;e++)t=t||Ye.indexOf(r[e])>-1}if(i[e]===rt.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function et(e){const t=Xe?["click"]:qe;for(let r,i=0;i<t.length;i++)r=t[i],e?(Ye.length=0,document.addEventListener(r,Qe,!0)):document.removeEventListener(r,Qe,!0)}function tt(e){const t=e.type;if(r=t,!(qe.indexOf(r)>-1))return!1;var r;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Ge&&(t=Ve[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}const rt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function it(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function nt(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){rt.mouse.mouseIgnoreJob||et(!0),rt.mouse.target=ot(e)[0],rt.mouse.mouseIgnoreJob=Me.debounce(rt.mouse.mouseIgnoreJob,Ie.after(2500),(function(){et(),rt.mouse.target=null,rt.mouse.mouseIgnoreJob=null}))}),!!Ze&&{passive:!0});const ot=e=>e.composedPath&&e.composedPath()||[],at={},st=[];function ct(e){const t=ot(e);return t.length>0?t[0]:e.target}function lt(e){st.push(e);for(let t=0;t<e.emits.length;t++)at[e.emits[t]]=e}function dt(e,t,r){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,Be(e).dispatchEvent(i),i.defaultPrevented){const e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function pt(e){const t=function(e){for(let t,r=0;r<st.length;r++){t=st[r];for(let r,i=0;i<t.emits.length;i++)if(r=t.emits[i],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function ut(e,t,r,i){t&&dt(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:function(e){return pt(e)}})}function ht(e,t,r){if(e.prevent)return!1;if(e.started)return!0;const i=Math.abs(e.x-t),n=Math.abs(e.y-r);return i>=5||n>=5}function mt(e,t,r){if(!t)return;const i=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],o=n.x-e.x,a=n.y-e.y;let s,c=0;i&&(s=n.x-i.x,c=n.y-i.y),dt(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:o,dy:a,ddx:s,ddy:c,sourceEvent:r,hover:function(){return function(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot;){const n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(r=i)}return r}(r.clientX,r.clientY)}})}function gt(e,t,r){const i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=ct(r||t);!o||We[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;const t=ct(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const r=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(t))&&(e.prevent||dt(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}lt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){nt(this.info)},mousedown:function(e){if(!tt(e))return;const t=ct(e),r=this;it(this.info,(function(e){tt(e)||(ut("up",t,e),nt(r.info))}),(function(e){tt(e)&&ut("up",t,e),nt(r.info)})),ut("down",t,e)},touchstart:function(e){ut("down",ct(e),e.changedTouches[0],e)},touchend:function(e){ut("up",ct(e),e.changedTouches[0],e)}}),lt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,nt(this.info)},mousedown:function(e){if(!tt(e))return;const t=ct(e),r=this,i=function(e){const i=e.clientX,n=e.clientY;ht(r.info,i,n)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&pt("tap"),r.info.addMove({x:i,y:n}),tt(e)||(r.info.state="end",nt(r.info)),t&&mt(r.info,t,e),r.info.started=!0)};it(this.info,i,(function(e){r.info.started&&i(e),nt(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){const t=ct(e),r=e.changedTouches[0],i=r.clientX,n=r.clientY;ht(this.info,i,n)&&("start"===this.info.state&&pt("tap"),this.info.addMove({x:i,y:n}),mt(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){const t=ct(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),mt(this.info,t,r))}}),lt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){tt(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){tt(e)&&gt(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){gt(this.info,e.changedTouches[0],e)}});const ft=m`:host{display:block}.radio-group-container{display:flex}.radio-group-container.wrap{flex-wrap:wrap}.radio-group-container[invalid]{border:1px solid var(--exmg-radio-group-invalid, red)}.radio-group-container.horizontal{flex-direction:row}.radio-group-container.vertical{flex-direction:column}`;let vt=class extends De{constructor(){super(),this.selected="",this.required=!1,this.vertical=!1,this.wrap=!1,this.invalid=!1,this.litItemName="",this._onKeyPressed=this.onKeyPressed.bind(this),this._handleRadioGroupItemChanged=this.handleRadioGroupItemChanged.bind(this)}get value(){return this.selected}set value(e){this.selected=e}onKeyPressed(e){switch(e.code||e.keyCode){case 13:case"Enter":case"NumpadEnter":e.ctrlKey||e.stopPropagation()}}validate(){return this.invalid=this.required&&!this.selected,!this.invalid}handleRadioGroupItemChanged(e){const{detail:t}=e;this.selected=t.value,this.dispatchEvent(new CustomEvent("exmg-radio-group-changed",{detail:{selected:this.selected},composed:!0,bubbles:!0}))}setProperSelectedItem(){this.querySelectorAll("exmg-radio-group-item").forEach((e=>{const t=e;t.name=this.litItemName,t.checked=this.selected===t.value}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",this._onKeyPressed),this.addEventListener("exmg-radio-group-item-changed",this._handleRadioGroupItemChanged),this.litItemName=`_${this.name}-options`,this.setProperSelectedItem()}disconnectedCallback(){this.removeEventListener("keyup",this._onKeyPressed),this.removeEventListener("exmg-radio-group-item-changed",this._handleRadioGroupItemChanged),super.disconnectedCallback()}render(){const e={vertical:this.vertical,horizontal:!this.vertical,wrap:this.wrap};return V`
      <div class="radio-group-container ${Te(e)}" ?invalid="${this.invalid}">
        <slot></slot>
      </div>
    `}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function bt(e){return ze({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */vt.styles=[ft],s([ze({type:String})],vt.prototype,"name",void 0),s([ze({type:String,reflect:!0}),He((function(){this.setProperSelectedItem()}))],vt.prototype,"selected",void 0),s([ze({type:Boolean})],vt.prototype,"required",void 0),s([ze({type:Boolean})],vt.prototype,"vertical",void 0),s([ze({type:Boolean})],vt.prototype,"wrap",void 0),s([ze({type:Boolean,reflect:!0,attribute:"invalid"})],vt.prototype,"invalid",void 0),vt=s([Le("exmg-radio-group")],vt);const yt=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(void 0===i){const i=null!==(n=r.originalKey)&&void 0!==n?n:r.key,o=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:{...r,key:i};return null!=e&&(o.finisher=function(t){e(t,i)}),o}{const n=r.constructor;void 0!==t&&Object.defineProperty(r,i,t(i)),null==e||e(n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function _t(e,t){return yt({descriptor:r=>{const i={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var r,i;return void 0===this[t]&&(this[t]=null!==(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kt;null===(kt=window.HTMLSlotElement)||void 0===kt||kt.prototype.assignedElements;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const xt=()=>{},wt={get passive(){return!1}};document.addEventListener("x",xt,wt),document.removeEventListener("x",xt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class At extends de{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var $t,Et;const St=null!==(Et=null===($t=window.ShadyDOM)||void 0===$t?void 0:$t.inUse)&&void 0!==Et&&Et;class Ct extends At{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||St)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}Ct.shadowRootOptions={mode:"open",delegatesFocus:!0},s([ze({type:Boolean})],Ct.prototype,"disabled",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ft=m`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class Rt{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}
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
 */var Pt=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),Tt={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Ot={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},zt=function(e){function t(r){return e.call(this,a(a({},t.defaultAdapter),r))||this}return o(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Tt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setDisabled=function(e){var r=t.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(r):this.adapter.removeClass(r)},t}(Pt);
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
 */const Lt=Symbol("selection controller");class Ht{constructor(){this.selected=null,this.focused=null,this.ordered=null,this.set=new Set}}class Dt{constructor(e){this.sets={},this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",(e=>this.keyDownHandler(e))),e.addEventListener("mousedown",(()=>this.mousedownHandler())),e.addEventListener("mouseup",(()=>this.mouseupHandler()))}static getController(e){const t=e;return t[Lt]||(t[Lt]=new Dt(t)),t[Lt]}keyDownHandler(e){if(!(e.target instanceof er))return;const t=e.target;this.has(t)&&("ArrowRight"===e.key||"ArrowDown"===e.key?this.next(t):"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||this.previous(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}previous(e){const t=this.getOrdered(e),r=t.indexOf(e);this.focus(t[r-1]||t[t.length-1])}next(e){const t=this.getOrdered(e),r=t.indexOf(e);this.focus(t[r+1]||t[0])}select(e){e.click()}focus(e){this.mouseIsDown||e.focusNative()}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort(((e,t)=>e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_PRECEDING?1:0))),t.ordered.filter((e=>!e.disabled))}getSet(e){return this.sets[e]||(this.sets[e]=new Ht),this.sets[e]}register(e){const t=this.getSet(e.name);t.set.add(e),t.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected===e&&(t.selected=null)}update(e){if(!this.updating){if(this.updating=!0,e.checked){const t=this.getSet(e.name);for(const r of t.set)r.checked=r===e;t.selected=e}this.updating=!1}}}const Nt=m`:host{display:block;border:1px solid var(--exmg-radio-group-item-border, #d2d2d7);border-radius:var(--exmg-radio-group-item-border-radius, 10px);font-family:"Roboto","Noto",sans-serif;font-size:var(--exmg-radio-group-item-font-size, 16px);line-height:1.23536;font-weight:400;letter-spacing:-0.022em;padding:0px;color:var(--exmg-radio-group-item-color, rgb(29, 29, 31));box-sizing:border-box;margin:0;cursor:pointer;margin-top:var(--exmg-radio-group-item-top-margin, 0.8rem);margin-left:var(--exmg-radio-group-item-side-margin, 0.5rem);margin-right:var(--exmg-radio-group-item-side-margin, 0.5rem)}::slotted(.figure){text-align:center;font-size:var(--exmg-radio-group-item-body-font-size, 12px);color:var(--exmg-radio-group-item-body-color, rgba(29, 29, 31, 0.8))}::slotted(.figure.horizontal){display:flex;flex-direction:row;text-align:left;align-items:center}::slotted([slot=title]){margin-bottom:.3rem}:host label{padding:15px;height:100%;box-sizing:border-box}:host(:not([checked]):not([disabled]):hover){border:1px solid var(--exmg-radio-group-item-border-hover, #9d9da0)}:host([checked]){outline:none;border:2px solid var(--exmg-radio-group-item-border-checked, #0071e3)}:host([checked]) label{padding:14px}:host(:focus-within){box-shadow:0 0 0 3px var(--mdc-theme-secondary-box-shadow, rgba(131, 192, 253, 0.5))}.item{display:flex;flex-direction:row;align-items:center}.description{display:flex;flex-direction:column;justify-content:center;width:100%}.description>.title{font-weight:600}.description>.body{font-size:var(--exmg-radio-group-item-body-font-size, 12px);line-height:1.33337;font-weight:400;letter-spacing:-0.01em;margin-top:.5rem;color:var(--exmg-radio-group-item-body-color, rgba(29, 29, 31, 0.8))}.description>*{flex:1}.item.disabled>.description{opacity:.26}.mdc-radio[hidden]{opacity:0;width:0;height:0;padding:0}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-theme-secondary, #0071e3)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-theme-secondary, #0071e3)}`
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
 */;
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
var Ut=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),It={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Mt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},jt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
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
var Bt=["touchstart","pointerdown","mousedown","keydown"],qt=["touchend","pointerup","mouseup","contextmenu"],Vt=[],Gt=function(e){function t(r){var i=e.call(this,a(a({},t.defaultAdapter),r))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(e){i.activateImpl(e)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return o(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return It},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return jt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var i=t.cssClasses,n=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var r=t.cssClasses,i=r.ROOT,n=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(i),e.adapter.removeClass(n),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},t.prototype.setUnbounded=function(e){var r=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var t,r;if(e){try{for(var i=c(Bt),n=i.next();!n.done;n=i.next()){var o=n.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var t,r;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var i=c(qt),n=i.next();!n.done;n=i.next()){var o=n.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},t.prototype.deregisterRootHandlers=function(){var e,t;try{for(var r=c(Bt),i=r.next();!i.done;i=r.next()){var n=i.value;this.adapter.deregisterInteractionHandler(n,this.activateHandler)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=c(qt),i=r.next();!i.done;i=r.next()){var n=i.value;this.adapter.deregisterDocumentInteractionHandler(n,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,r=t.strings;Object.keys(r).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(r[t],null)}))},t.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var i=this.previousActivationEvent;if(!(i&&void 0!==e&&i.type!==e.type))r.isActivated=!0,r.isProgrammatic=void 0===e,r.activationEvent=e,r.wasActivatedByPointer=!r.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&Vt.length>0&&Vt.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(Vt.push(e.target),this.registerDeactivationHandlers(e)),r.wasElementMadeActive=this.checkElementMadeActive(e),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){Vt=[],r.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(r.wasElementMadeActive=t.checkElementMadeActive(e),r.wasElementMadeActive&&t.animateActivation()),r.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},t.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation=function(){var e=this,r=t.strings,i=r.VAR_FG_TRANSLATE_START,n=r.VAR_FG_TRANSLATE_END,o=t.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",d="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),u=p.startPoint,h=p.endPoint;l=u.x+"px, "+u.y+"px",d=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(i,l),this.adapter.updateCssVariable(n,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),c)},t.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,r=t.activationEvent;return e=t.wasActivatedByPointer?function(e,t,r){if(!e)return{x:0,y:0};var i,n,o=t.x,a=t.y,s=o+r.left,c=a+r.top;if("touchstart"===e.type){var l=e;i=l.changedTouches[0].pageX-s,n=l.changedTouches[0].pageY-c}else{var d=e;i=d.pageX-s,n=d.pageY-c}return{x:i,y:n}}(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:e={x:e.x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,r=t.cssClasses.FG_DEACTIVATION,i=this.activationState,n=i.hasDeactivationUXRun,o=i.isActivated;(n||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(r)}),jt.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var r=a({},t);t.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(r)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(r),e.resetActivationState()})))}},t.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,r=e.wasElementMadeActive;(t||r)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?r:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+t.numbers.PADDING;var i=Math.floor(r*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,r=e.VAR_FG_SIZE,i=e.VAR_LEFT,n=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},t}(Ut),Zt=Gt;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt="important",Yt=" !"+Xt,Kt=Re(class extends Pe{constructor(e){var t;if(super(e),e.type!==Fe||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const i=e[r];return null==i?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const i=t[e];if(null!=i){this.ut.add(e);const t="string"==typeof i&&i.endsWith(Yt);e.includes("-")||t?r.setProperty(e,t?i.slice(0,-11):i,t?Xt:""):r[e]=i}}return G}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Wt extends At{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Zt}get isActive(){return e=this.parentElement||this,t=":active",(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t);var e,t}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return V`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Te(r)}"
          style="${Kt({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}s([_t(".mdc-ripple-surface")],Wt.prototype,"mdcRoot",void 0),s([ze({type:Boolean})],Wt.prototype,"primary",void 0),s([ze({type:Boolean})],Wt.prototype,"accent",void 0),s([ze({type:Boolean})],Wt.prototype,"unbounded",void 0),s([ze({type:Boolean})],Wt.prototype,"disabled",void 0),s([ze({type:Boolean})],Wt.prototype,"activated",void 0),s([ze({type:Boolean})],Wt.prototype,"selected",void 0),s([ze({type:Boolean})],Wt.prototype,"internalUseStateLayerCustomProperties",void 0),s([bt()],Wt.prototype,"hovering",void 0),s([bt()],Wt.prototype,"bgFocused",void 0),s([bt()],Wt.prototype,"fgActivation",void 0),s([bt()],Wt.prototype,"fgDeactivation",void 0),s([bt()],Wt.prototype,"fgScale",void 0),s([bt()],Wt.prototype,"fgSize",void 0),s([bt()],Wt.prototype,"translateStart",void 0),s([bt()],Wt.prototype,"translateEnd",void 0),s([bt()],Wt.prototype,"leftPos",void 0),s([bt()],Wt.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Jt=m`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Qt=class extends Wt{};Qt.styles=[Jt],Qt=s([Le("mwc-ripple")],Qt);let er=class extends Ct{constructor(){super(),this.checked=!1,this.disabled=!1,this.value="",this.name="",this.enableRadioButton=!1,this.rippleHandlers=null,this.shouldRenderRipple=!1,this.mdcFoundationClass=zt,window.ShadyDOM&&window.ShadyDOM.inUse||(this.selectionController=Dt.getController(this.parentNode)),this.rippleHandlers=new Rt((()=>(this.shouldRenderRipple=!0,this.ripple?this.ripple:Promise.resolve(null))))}connectedCallback(){super.connectedCallback(),this.selectionController&&this.selectionController.register(this)}disconnectedCallback(){this.selectionController&&this.selectionController.unregister(this),super.disconnectedCallback()}focusNative(){this.formElement.focus()}createAdapter(){return{setNativeControlDisabled:e=>{this.formElement.disabled=e}}}changeHandler(){this.checked=this.formElement.checked,this.selectionController&&(this.selectionController.update(this),this.dispatchEvent(new CustomEvent("exmg-radio-group-item-changed",{detail:{value:this.value},composed:!1,bubbles:!0})))}setFormData(){}renderRipple(){return this.shouldRenderRipple?this.renderRippleTemplate():""}renderRippleTemplate(){return V`<mwc-ripple .disabled="${this.disabled}" unbounded></mwc-ripple>`}render(){return V`
      <label class="item ${this.checked?"checked":""} ${this.disabled?"disabled":""}">
        <div class="mdc-radio" ?hidden="${!this.enableRadioButton}">
          <input
            class="mdc-radio__native-control"
            type="radio"
            name="${this.name}"
            .checked="${this.checked}"
            .value="${this.value}"
            @change="${this.changeHandler}"
            @focus="${this.handleRippleFocusA}"
            @blur="${this.handleRippleBlurA}"
            @mousedown="${this.handleRippleActivateA}"
            @mouseenter="${this.handleRippleMouseEnterA}"
            @mouseleave="${this.handleRippleMouseLeaveA}"
            @touchstart="${this.handleRippleActivateA}"
            @touchend="${this.handleRippleDeactivateA}"
            @touchcancel="${this.handleRippleDeactivateA}"
          />
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
        </div>
        <div class="description">
          <slot></slot>
          <slot class="title" name="title"></slot>
          <slot class="body" name="body"></slot>
        </div>
        ${this.renderRipple()}
      </label>
    `}firstUpdated(){super.firstUpdated(),this.selectionController&&this.selectionController.update(this)}handleRippleActivateA(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivateA()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivateA(){this.rippleHandlers.endPress()}handleRippleMouseEnterA(){this.rippleHandlers.startHover()}handleRippleMouseLeaveA(){this.rippleHandlers.endHover()}handleRippleFocusA(){this.rippleHandlers.startFocus()}handleRippleBlurA(){this.rippleHandlers.endFocus()}};er.styles=[Ft,Nt],s([_t(".mdc-radio")],er.prototype,"mdcRoot",void 0),s([_t("input")],er.prototype,"formElement",void 0),s([ze({type:Boolean,reflect:!0}),He((function(e){this.formElement.checked=e}))],er.prototype,"checked",void 0),s([ze({type:Boolean,reflect:!0}),He((function(e){this.mdcFoundation.setDisabled(e)}))],er.prototype,"disabled",void 0),s([ze({type:String}),He((function(e){this.formElement.value=e}))],er.prototype,"value",void 0),s([ze({type:String})],er.prototype,"name",void 0),s([ze({type:Boolean,attribute:"enable-radio-button"})],er.prototype,"enableRadioButton",void 0),s([ze({type:Object})],er.prototype,"rippleHandlers",void 0),s([function(e){return yt({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}({passive:!0})],er.prototype,"handleRippleActivateA",null),er=s([Le("exmg-radio-group-item")],er),function(e){var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:m,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:m,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:m,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links={},this.options=e||f.defaults,this.rules=t.normal,this.options.gfm&&(this.options.tables?this.rules=t.tables:this.rules=t.gfm)}t._label=/(?:\\[\[\]]|[^\[\]])+/,t._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,t.def=d(t.def).replace("label",t._label).replace("title",t._title).getRegex(),t.bullet=/(?:[*+-]|\d+\.)/,t.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,t.item=d(t.item,"gm").replace(/bull/g,t.bullet).getRegex(),t.list=d(t.list).replace(/bull/g,t.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+t.def.source+")").getRegex(),t._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",t.html=d(t.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,t._tag).getRegex(),t.paragraph=d(t.paragraph).replace("hr",t.hr).replace("heading",t.heading).replace("lheading",t.lheading).replace("tag","<"+t._tag).getRegex(),t.blockquote=d(t.blockquote).replace("paragraph",t.paragraph).getRegex(),t.normal=g({},t),t.gfm=g({},t.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),t.gfm.paragraph=d(t.paragraph).replace("(?!","(?!"+t.gfm.fences.source.replace("\\1","\\2")+"|"+t.list.source.replace("\\1","\\3")+"|").getRegex(),t.tables=g({},t.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),r.rules=t,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,r){var i,n,o,a,s,c,l,d,p,u,h;for(e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(r&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),c={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},d=0;d<c.align.length;d++)/^ *-+: *$/.test(c.align[d])?c.align[d]="right":/^ *:-+: *$/.test(c.align[d])?c.align[d]="center":/^ *:-+ *$/.test(c.align[d])?c.align[d]="left":c.align[d]=null;for(d=0;d<c.cells.length;d++)c.cells[d]=c.cells[d].split(/ *\| */);this.tokens.push(c)}else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,r),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),h=(a=o[2]).length>1,this.tokens.push({type:"list_start",ordered:h,start:h?+a:""}),i=!1,u=(o=o[0].match(this.rules.item)).length,d=0;d<u;d++)l=(c=o[d]).length,~(c=c.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(l-=c.length,c=this.options.pedantic?c.replace(/^ {1,4}/gm,""):c.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&d!==u-1&&(a===(s=t.bullet.exec(o[d+1])[0])||a.length>1&&s.length>1||(e=o.slice(d+1).join("\n")+e,d=u-1)),n=i||/\n\n(?!\s*$)/.test(c),d!==u-1&&(i="\n"===c.charAt(c.length-1),n||(n=i)),this.tokens.push({type:n?"loose_item_start":"list_item_start"}),this.token(c,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(r&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),o[3]&&(o[3]=o[3].substring(1,o[3].length-1)),p=o[1].toLowerCase(),this.tokens.links[p]||(this.tokens.links[p]={href:o[2],title:o[3]});else if(r&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),c={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},d=0;d<c.align.length;d++)/^ *-+: *$/.test(c.align[d])?c.align[d]="right":/^ *:-+: *$/.test(c.align[d])?c.align[d]="center":/^ *:-+ *$/.test(c.align[d])?c.align[d]="left":c.align[d]=null;for(d=0;d<c.cells.length;d++)c.cells[d]=c.cells[d].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(c)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(r&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var i={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:m,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function n(e,t){if(this.options=t||f.defaults,this.links=e,this.rules=i.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=i.breaks:this.rules=i.gfm:this.options.pedantic&&(this.rules=i.pedantic)}function o(e){this.options=e||{}}function a(){}function s(e){this.tokens=[],this.token=null,this.options=e||f.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function c(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}function d(e,t){return e=e.source,t=t||"",{replace:function(t,r){return r=(r=r.source||r).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},getRegex:function(){return new RegExp(e,t)}}}function p(e,t){return u[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?u[" "+e]=e+"/":u[" "+e]=e.replace(/[^/]*$/,"")),e=u[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}i._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,i._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,i.autolink=d(i.autolink).replace("scheme",i._scheme).replace("email",i._email).getRegex(),i._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,i._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,i.link=d(i.link).replace("inside",i._inside).replace("href",i._href).getRegex(),i.reflink=d(i.reflink).replace("inside",i._inside).getRegex(),i.normal=g({},i),i.pedantic=g({},i.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),i.gfm=g({},i.normal,{escape:d(i.escape).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",i._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:d(i.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),i.breaks=g({},i.gfm,{br:d(i.br).replace("{2,}","*").getRegex(),text:d(i.gfm.text).replace("{2,}","*").getRegex()}),n.rules=i,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,r,i,n,o="";e;)if(n=this.rules.escape.exec(e))e=e.substring(n[0].length),o+=n[1];else if(n=this.rules.autolink.exec(e))e=e.substring(n[0].length),i="@"===n[2]?"mailto:"+(r=c(this.mangle(n[1]))):r=c(n[1]),o+=this.renderer.link(i,null,r);else if(this.inLink||!(n=this.rules.url.exec(e))){if(n=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(n[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(n[0])&&(this.inLink=!1),e=e.substring(n[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):c(n[0]):n[0];else if(n=this.rules.link.exec(e))e=e.substring(n[0].length),this.inLink=!0,o+=this.outputLink(n,{href:n[2],title:n[3]}),this.inLink=!1;else if((n=this.rules.reflink.exec(e))||(n=this.rules.nolink.exec(e))){if(e=e.substring(n[0].length),t=(n[2]||n[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=n[0].charAt(0),e=n[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(n,t),this.inLink=!1}else if(n=this.rules.strong.exec(e))e=e.substring(n[0].length),o+=this.renderer.strong(this.output(n[2]||n[1]));else if(n=this.rules.em.exec(e))e=e.substring(n[0].length),o+=this.renderer.em(this.output(n[2]||n[1]));else if(n=this.rules.code.exec(e))e=e.substring(n[0].length),o+=this.renderer.codespan(c(n[2].trim(),!0));else if(n=this.rules.br.exec(e))e=e.substring(n[0].length),o+=this.renderer.br();else if(n=this.rules.del.exec(e))e=e.substring(n[0].length),o+=this.renderer.del(this.output(n[1]));else if(n=this.rules.text.exec(e))e=e.substring(n[0].length),o+=this.renderer.text(c(this.smartypants(n[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else n[0]=this.rules._backpedal.exec(n[0])[0],e=e.substring(n[0].length),"@"===n[2]?i="mailto:"+(r=c(n[0])):(r=c(n[0]),i="www."===n[1]?"http://"+r:r),o+=this.renderer.link(i,null,r);return o},n.prototype.outputLink=function(e,t){var r=c(t.href),i=t.title?c(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,i,this.output(e[1])):this.renderer.image(r,i,c(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",i=e.length,n=0;n<i;n++)t=e.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},o.prototype.code=function(e,t,r){if(this.options.highlight){var i=this.options.highlight(e,t);null!=i&&i!==e&&(r=!0,e=i)}return t?'<pre><code class="'+this.options.langPrefix+c(t,!0)+'">'+(r?e:c(e,!0))+"\n</code></pre>\n":"<pre><code>"+(r?e:c(e,!0))+"\n</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,r){return"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,r){var i=t?"ol":"ul";return"<"+i+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+i+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' style="text-align:'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,r){if(this.options.sanitize){try{var i=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return r}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return r}this.options.baseUrl&&!h.test(e)&&(e=p(this.options.baseUrl,e));var n='<a href="'+e+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>"},o.prototype.image=function(e,t,r){this.options.baseUrl&&!h.test(e)&&(e=p(this.options.baseUrl,e));var i='<img src="'+e+'" alt="'+r+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(e){return e},a.prototype.link=a.prototype.image=function(e,t,r){return""+r},a.prototype.br=function(){return""},s.parse=function(e,t){return new s(t).parse(e)},s.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,g({},this.options,{renderer:new a})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,i,n="",o="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(n+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",i=0;i<t.length;i++)r+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});o+=this.renderer.tablerow(r)}return this.renderer.table(n,o);case"blockquote_start":for(o="";"blockquote_end"!==this.next().type;)o+=this.tok();return this.renderer.blockquote(o);case"list_start":o="";for(var a=this.token.ordered,s=this.token.start;"list_end"!==this.next().type;)o+=this.tok();return this.renderer.list(o,a,s);case"list_item_start":for(o="";"list_item_end"!==this.next().type;)o+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(o);case"loose_item_start":for(o="";"list_item_end"!==this.next().type;)o+=this.tok();return this.renderer.listitem(o);case"html":var c=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(c);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var u={},h=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function g(e){for(var t,r,i=1;i<arguments.length;i++)for(r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function f(e,t,i){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(i||"function"==typeof t){i||(i=t,t=null);var n,o,a=(t=g({},f.defaults,t||{})).highlight,l=0;try{n=r.lex(e,t)}catch(e){return i(e)}o=n.length;var d=function(e){if(e)return t.highlight=a,i(e);var r;try{r=s.parse(n,t)}catch(t){e=t}return t.highlight=a,e?i(e):i(null,r)};if(!a||a.length<3)return d();if(delete t.highlight,!o)return d();for(;l<n.length;l++)!function(e){"code"!==e.type?--o||d():a(e.text,e.lang,(function(t,r){return t?d(t):null==r||r===e.text?--o||d():(e.text=r,e.escaped=!0,void(--o||d()))}))}(n[l])}else try{return t&&(t=g({},f.defaults,t)),s.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||f.defaults).silent)return"<p>An error occurred:</p><pre>"+c(e.message+"",!0)+"</pre>";throw e}}m.exec=m,f.options=f.setOptions=function(e){return g(f.defaults,e),f},f.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new o,xhtml:!1,baseUrl:null},f.Parser=s,f.parser=s.parse,f.Renderer=o,f.TextRenderer=a,f.Lexer=r,f.lexer=r.lex,f.InlineLexer=n,f.inlineLexer=n.output,f.parse=f,"undefined"!=typeof module&&"object"==typeof exports?module.exports=f:"function"==typeof define&&define.amd?define((function(){return f})):e.marked=f}("undefined"!=typeof window?window:global);var tr=Object.freeze({__proto__:null});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/window.marked||(window.marked=tr)
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/,e({_template:t`
    <style>
      :host {
        display: block;
      }
    </style>
    <slot name="markdown-html">
      <div id="content"></div>
    </slot>
  `,is:"marked-element",properties:{markdown:{type:String,value:null},breaks:{type:Boolean,value:!1},pedantic:{type:Boolean,value:!1},renderer:{type:Function,value:null},sanitize:{type:Boolean,value:!1},sanitizer:{type:Function,value:null},disableRemoteSanitization:{type:Boolean,value:!1},smartypants:{type:Boolean,value:!1},callback:{type:Function,value:null},xhr:{type:Object,notify:!0,readOnly:!0}},observers:["render(markdown, breaks, pedantic, renderer, sanitize, sanitizer, smartypants, callback)"],ready:function(){this.markdown||(this._markdownElement=r(this).querySelector('[type="text/markdown"]'),this._markdownElement&&(this._markdownElement.src&&this._request(this._markdownElement.src),""!==this._markdownElement.textContent.trim()&&(this.markdown=this._unindent(this._markdownElement.textContent)),new MutationObserver(this._onScriptAttributeChanged.bind(this)).observe(this._markdownElement,{attributes:!0})))},attached:function(){this._attached=!0,this._outputElement=this.outputElement,this.render()},detached:function(){this._attached=!1},unindent:function(e){return this._unindent(e)},get outputElement(){return r(this).queryDistributedElements('[slot="markdown-html"]')[0]||this.$.content},render:function(){if(this._attached)if(this.markdown){var e=new marked.Renderer;this.renderer&&this.renderer(e);var t={renderer:e,highlight:this._highlight.bind(this),breaks:this.breaks,sanitize:this.sanitize,sanitizer:this.sanitizer,pedantic:this.pedantic,smartypants:this.smartypants};r(this._outputElement).innerHTML=marked(this.markdown,t,this.callback),this.fire("marked-render-complete",{},{composed:!0})}else r(this._outputElement).innerHTML=""},_highlight:function(e,t){return this.fire("syntax-highlight",{code:e,lang:t},{composed:!0}).detail.code||e},_unindent:function(e){if(!e)return e;var t=e.replace(/\t/g,"  ").split("\n"),r=t.reduce((function(e,t){if(/^\s*$/.test(t))return e;var r=t.match(/^(\s*)/)[0].length;return null===e||r<e?r:e}),null);return t.map((function(e){return e.substr(r)})).join("\n")},_request:function(e){this._setXhr(new XMLHttpRequest);var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("error",this._handleError.bind(this)),t.addEventListener("loadend",function(e){var t=this.xhr.status||0;0===t||t>=200&&t<300?(this.sanitize=!this.disableRemoteSanitization,this.markdown=e.target.response):this._handleError(e),this.fire("marked-loadend",e)}.bind(this)),t.open("GET",e),t.setRequestHeader("Accept","text/markdown"),t.send()},_handleError:function(e){this.fire("marked-request-error",e,{cancelable:!0}).defaultPrevented||(this.markdown="Failed loading markdown source")},_onScriptAttributeChanged:function(e){"src"===e[0].attributeName&&this._request(this._markdownElement.src)}});var rr=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,i={},n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof o?new o(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var i,o;switch(r=r||{},n.util.type(t)){case"Object":if(o=n.util.objId(t),r[o])return r[o];for(var a in i={},r[o]=i,t)t.hasOwnProperty(a)&&(i[a]=e(t[a],r));return i;case"Array":return o=n.util.objId(t),r[o]?r[o]:(i=[],r[o]=i,t.forEach((function(t,n){i[n]=e(t,r)})),i);default:return t}},getLanguage:function(e){for(;e;){var r=t.exec(e.className);if(r)return r[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,r){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+r)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var i="no-"+t;e;){var n=e.classList;if(n.contains(t))return!0;if(n.contains(i))return!1;e=e.parentElement}return!!r}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var i in t)r[i]=t[i];return r},insertBefore:function(e,t,r,i){var o=(i=i||n.languages)[e],a={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var c in r)r.hasOwnProperty(c)&&(a[c]=r[c]);r.hasOwnProperty(s)||(a[s]=o[s])}var l=i[e];return i[e]=a,n.languages.DFS(n.languages,(function(t,r){r===l&&t!=e&&(this[t]=a)})),a},DFS:function e(t,r,i,o){o=o||{};var a=n.util.objId;for(var s in t)if(t.hasOwnProperty(s)){r.call(t,s,t[s],i||s);var c=t[s],l=n.util.type(c);"Object"!==l||o[a(c)]?"Array"!==l||o[a(c)]||(o[a(c)]=!0,e(c,r,s,o)):(o[a(c)]=!0,e(c,r,null,o))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var i={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),n.hooks.run("before-all-elements-highlight",i);for(var o,a=0;o=i.elements[a++];)n.highlightElement(o,!0===t,i.callback)},highlightElement:function(t,r,i){var o=n.util.getLanguage(t),a=n.languages[o];n.util.setLanguage(t,o);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&n.util.setLanguage(s,o);var c={element:t,language:o,grammar:a,code:t.textContent};function l(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),i&&i.call(c.element)}if(n.hooks.run("before-sanity-check",c),(s=c.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!c.code)return n.hooks.run("complete",c),void(i&&i.call(c.element));if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){l(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(n.highlight(c.code,c.grammar,c.language));else l(n.util.encode(c.code))},highlight:function(e,t,r){var i={code:e,grammar:t,language:r};if(n.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),o.stringify(n.util.encode(i.tokens),i.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}var n=new c;return l(n,n.head,e),s(e,n,t,n.head,0),function(e){var t=[],r=e.head.next;for(;r!==e.tail;)t.push(r.value),r=r.next;return t}(n)},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var i,o=0;i=r[o++];)i(t)}},Token:o};function o(e,t,r,i){this.type=e,this.content=t,this.alias=r,this.length=0|(i||"").length}function a(e,t,r,i){e.lastIndex=t;var n=e.exec(r);if(n&&i&&n[1]){var o=n[1].length;n.index+=o,n[0]=n[0].slice(o)}return n}function s(e,t,r,i,c,p){for(var u in r)if(r.hasOwnProperty(u)&&r[u]){var h=r[u];h=Array.isArray(h)?h:[h];for(var m=0;m<h.length;++m){if(p&&p.cause==u+","+m)return;var g=h[m],f=g.inside,v=!!g.lookbehind,b=!!g.greedy,y=g.alias;if(b&&!g.pattern.global){var _=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,_+"g")}for(var k=g.pattern||g,x=i.next,w=c;x!==t.tail&&!(p&&w>=p.reach);w+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof o)){var $,E=1;if(b){if(!($=a(k,w,e,v))||$.index>=e.length)break;var S=$.index,C=$.index+$[0].length,F=w;for(F+=x.value.length;S>=F;)F+=(x=x.next).value.length;if(w=F-=x.value.length,x.value instanceof o)continue;for(var R=x;R!==t.tail&&(F<C||"string"==typeof R.value);R=R.next)E++,F+=R.value.length;E--,A=e.slice(w,F),$.index-=w}else if(!($=a(k,0,A,v)))continue;S=$.index;var P=$[0],T=A.slice(0,S),O=A.slice(S+P.length),z=w+A.length;p&&z>p.reach&&(p.reach=z);var L=x.prev;if(T&&(L=l(t,L,T),w+=T.length),d(t,L,E),x=l(t,L,new o(u,f?n.tokenize(P,f):P,y,P)),O&&l(t,x,O),E>1){var H={cause:u+","+m,reach:z};s(e,t,r,x.prev,w,H),p&&H.reach>p.reach&&(p.reach=H.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,r){var i=t.next,n={value:r,prev:t,next:i};return t.next=n,i.prev=n,e.length++,n}function d(e,t,r){for(var i=t.next,n=0;n<r&&i!==e.tail;n++)i=i.next;t.next=i,i.prev=t,e.length-=n}if(e.Prism=n,o.stringify=function e(t,r){if("string"==typeof t)return t;if(Array.isArray(t)){var i="";return t.forEach((function(t){i+=e(t,r)})),i}var o={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},a=t.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(o.classes,a):o.classes.push(a)),n.hooks.run("wrap",o);var s="";for(var c in o.attributes)s+=" "+c+'="'+(o.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var r=JSON.parse(t.data),i=r.language,o=r.code,a=r.immediateClose;e.postMessage(n.highlight(o,n.languages[i],i)),a&&e.close()}),!1),n):n;var p=n.util.currentScript();function u(){n.manual||n.highlightAll()}if(p&&(n.filename=p.src,p.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var h=document.readyState;"loading"===h||"interactive"===h&&p&&p.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */"undefined"!=typeof module&&module.exports&&(module.exports=rr),"undefined"!=typeof global&&(global.Prism=rr),rr.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},rr.languages.markup.tag.inside["attr-value"].inside.entity=rr.languages.markup.entity,rr.languages.markup.doctype.inside["internal-subset"].inside=rr.languages.markup,rr.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(rr.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:rr.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i["language-"+t]={pattern:/[\s\S]+/,inside:rr.languages[t]};var n={};n[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:i},rr.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(rr.languages.markup.tag,"addAttribute",{value:function(e,t){rr.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:rr.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),rr.languages.html=rr.languages.markup,rr.languages.mathml=rr.languages.markup,rr.languages.svg=rr.languages.markup,rr.languages.xml=rr.languages.extend("markup",{}),rr.languages.ssml=rr.languages.xml,rr.languages.atom=rr.languages.xml,rr.languages.rss=rr.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(rr),rr.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},rr.languages.javascript=rr.languages.extend("clike",{"class-name":[rr.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),rr.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,rr.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:rr.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:rr.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:rr.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:rr.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:rr.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),rr.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:rr.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),rr.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),rr.languages.markup&&(rr.languages.markup.tag.addInlined("script","javascript"),rr.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),rr.languages.js=rr.languages.javascript,function(){if(void 0!==rr&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r="loading",i="loaded",n="pre[data-src]:not(["+t+'="'+i+'"]):not(['+t+'="'+r+'"])';rr.hooks.add("before-highlightall",(function(e){e.selector+=", "+n})),rr.hooks.add("before-sanity-check",(function(o){var a=o.element;if(a.matches(n)){o.code="",a.setAttribute(t,r);var s=a.appendChild(document.createElement("CODE"));s.textContent="Loading…";var c=a.getAttribute("data-src"),l=o.language;if("none"===l){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];l=e[d]||d}rr.util.setLanguage(s,l),rr.util.setLanguage(a,l);var p=rr.plugins.autoloader;p&&p.loadLanguages(l),function(e,t,r){var i=new XMLHttpRequest;i.open("GET",e,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?t(i.responseText):i.status>=400?r("✖ Error "+i.status+" while fetching file: "+i.statusText):r("✖ Error: File does not exist or is empty"))},i.send(null)}(c,(function(e){a.setAttribute(t,i);var r=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var r=Number(t[1]),i=t[2],n=t[3];return i?n?[r,Number(n)]:[r,void 0]:[r,r]}}(a.getAttribute("data-range"));if(r){var n=e.split(/\r\n?|\n/g),o=r[0],c=null==r[1]?n.length:r[1];o<0&&(o+=n.length),o=Math.max(0,Math.min(o-1,n.length)),c<0&&(c+=n.length),c=Math.max(0,Math.min(c,n.length)),e=n.slice(o,c).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(o+1))}s.textContent=e,rr.highlightElement(s)}),(function(e){a.setAttribute(t,"failed"),s.textContent=e}))}})),rr.plugins.fileHighlight={highlight:function(e){for(var t,r=(e||document).querySelectorAll(n),i=0;t=r[i++];)rr.highlightElement(t)}};var o=!1;rr.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),rr.plugins.fileHighlight.highlight.apply(this,arguments)}}}();
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
var ir="syntax-highlight";e({is:"prism-highlighter",properties:{languages:{type:Object,value:function(){return{}}}},ready:function(){this._handler=this._highlight.bind(this)},attached:function(){(this.parentNode.host||this.parentElement).addEventListener(ir,this._handler)},detached:function(){(this.parentNode.host||this.parentElement).removeEventListener(ir,this._handler)},_highlight:function(e){if(e.detail&&e.detail.code){e.stopPropagation();var t=e.detail;t.code=Prism.highlight(t.code,this._detectLang(t.code,t.lang))}else i._warn("Malformed",ir,"event:",e.detail)},_detectLang:function(e,t){if(!t)return e.match(/^\s*</)?Prism.languages.markup:Prism.languages.javascript;if(this.languages[t])return this.languages[t];if(Prism.languages[t])return Prism.languages[t];switch(t.substr(0,2)){case"js":case"es":return Prism.languages.javascript;case"c":return Prism.languages.clike;default:return Prism.languages.markup}}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const nr=t`
<dom-module id="prism-theme-default">
  <template>
    <style>
    /**
    * prism.js default theme for JavaScript, CSS and HTML
    * Based on dabblet (http://dabblet.com)
    * @author Lea Verou
    */
    code[class*="language-"],
    pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    }

    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
    }

    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
    }

    @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
    }

    /* Code blocks */
    pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
    background: #f5f2f0;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
    color: slategray;
    }

    .token.punctuation {
    color: #999;
    }

    .namespace {
    opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
    color: #905;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
    color: #690;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
    color: #a67f59;
    background: hsla(0, 0%, 100%, .5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
    color: #07a;
    }

    .token.function {
    color: #DD4A68;
    }

    .token.regex,
    .token.important,
    .token.variable {
    color: #e90;
    }

    .token.important,
    .token.bold {
    font-weight: bold;
    }
    .token.italic {
    font-style: italic;
    }

    .token.entity {
    cursor: help;
    }
    </style>
  </template>
</dom-module>`;document.head.appendChild(nr.content),
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
e({_template:t`
    <style include="prism-theme-default">
      :host {
        display: block;

        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
        margin-bottom: 40px;
        @apply --demo-snippet;
      }

      .demo {
        display: block;
        border-bottom: 1px solid #e0e0e0;
        background-color: white;
        margin: 0;
        padding: 20px;
        @apply --demo-snippet-demo;
      }

      .code-container {
        margin: 0;
        background-color: #f5f5f5;
        font-size: 13px;
        overflow: auto;
        position: relative;
        padding: 0 20px;
        @apply --demo-snippet-code;
      }

      .code {
        padding: 20px;
        margin: 0;
        background-color: var(--google-grey-100);
        font-size: 13px;
        overflow: auto;
        @apply --demo-snippet-code;
      }
      .code > pre {
        margin: 0;
        padding: 0 0 10px 0;
      }

      button {
        position: absolute;
        top: 0;
        right: 0px;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        background: #e0e0e0;
      }
    </style>

    <prism-highlighter></prism-highlighter>

    <div class="demo">
      <slot id="content"></slot>
    </div>

    <div class="code-container">
      <marked-element markdown="[[_markdown]]" id="marked">
         <div class="code" slot="markdown-html" id="code"></div>
      </marked-element>
      <button id="copyButton" title="copy to clipboard" on-tap="_copyToClipboard">Copy</button>
    </div>
`,is:"demo-snippet",properties:{_markdown:{type:String}},attached:function(){this._observer=r(this.$.content).observeNodes(function(e){this._updateMarkdown()}.bind(this))},detached:function(){this._observer&&(r(this.$.content).unobserveNodes(this._observer),this._observer=null)},_updateMarkdown:function(){var e=r(this).queryDistributedElements("template")[0];if(e){var t=this.$.marked.unindent(e.innerHTML);t=(t=t.replace(/ class=""/g,"")).replace(/=""/g,""),this._markdown="```\n"+t+"\n```",e.hasAttribute("is")||(r(this.$.content).unobserveNodes(this._observer),this._observer=null,r(this).appendChild(document.importNode(e.content,!0))),this.dispatchEvent(new CustomEvent("dom-ready"))}else this._markdown=""},_copyToClipboard:function(){var e=document.createRange();e.selectNodeContents(this.$.code);var t=window.getSelection();t.removeAllRanges(),t.addRange(e);var r=!1;try{r=document.execCommand("copy"),this.$.copyButton.textContent="done"}catch(e){console.error(e),this.$.copyButton.textContent="error"}return setTimeout(this._resetCopyButtonState.bind(this),1e3),t.removeAllRanges(),r},_resetCopyButtonState:function(){this.$.copyButton.textContent="copy"}});let or=class extends de{constructor(){super(),this.selected="option2",this.selected="option2",this.handleKeyUp=this.handleKeyUp.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp),super.disconnectedCallback()}handleKeyUp(){}onPaperRadioGroupChanged(e){this.selected=e.detail.selected}render(){return V`
      <style>
        :host {
          font-family: var(
            --mdc-typography-headline3-font-family,
            var(--mdc-typography-font-family, Roboto, sans-serif)
          );
          font-size: 15px;
          display: block;
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          width: 500px;
        }
        .main > div {
          width: 100%;
          padding-bottom: 1rem;
        }
        .g6 {
          flex-basis: calc(50% - 1rem);
          max-width: calc(50% - 1rem);
        }

        .center {
          text-align: center;
        }
        /* exmg-radio-group-item {
        min-height: 100px;
      } */
        .horizontal > figure {
          margin-left: 1rem;
          margin-right: 2rem;
        }
        .large {
          font-size: 29px;
          line-height: 1;
          font-weight: 400;
        }
      </style>

      <div class="main">
        <div>
          <h4>Flex wrap example</h4>
          <demo-snippet>
            <template>
              <exmg-radio-group
                name="license"
                selected="${this.selected}"
                @exmg-radio-group-changed="${this.onPaperRadioGroupChanged}"
                wrap
              >
                <exmg-radio-group-item value="option1" class="g6">
                  <div slot="title"><span class="large">128</span>GB</div>
                  <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option2" class="g6">
                  <div slot="title"><span class="large">256</span>GB</div>
                  <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option3" class="g6">
                  <div slot="title"><span class="large">512</span>GB</div>
                  <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option4" class="g6">
                  <div slot="title"><span class="large">1</span>TB</div>
                  <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
                </exmg-radio-group-item>
              </exmg-radio-group>
            </template>
          </demo-snippet>
        </div>

        <div>
          <h4>Clean yes/no example</h4>
          <demo-snippet>
            <template>
              <exmg-radio-group class="custom-style" name="YesNo">
                <exmg-radio-group-item value="option1" class="g6">
                  <div class="center">Yes</div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option2" class="g6">
                  <div class="center">No</div>
                </exmg-radio-group-item>
              </exmg-radio-group>
            </template>
          </demo-snippet>
        </div>

        <div>
          <h4>Image horizontal</h4>
          <demo-snippet>
            <template>
              <exmg-radio-group class="custom-style" name="Choice">
                <exmg-radio-group-item value="option1" class="g6">
                  <div class="figure">
                    <figure>
                      <img src="logo-att-2x.png" alt="test1" width="74" height="34" />
                    </figure>
                    <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
                  </div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option2" class="g6">
                  <div class="figure">
                    <figure>
                      <img src="logo-sprint-2x.png" alt="test2" width="71" height="34" />
                    </figure>
                    <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
                  </div>
                </exmg-radio-group-item>
              </exmg-radio-group>
            </template>
          </demo-snippet>
        </div>

        <div>
          <h4>Image vertical</h4>
          <demo-snippet>
            <template>
              <exmg-radio-group class="custom-style" name="Choice" vertical>
                <exmg-radio-group-item value="option1">
                  <div class="figure horizontal">
                    <figure>
                      <img src="logo-att-2x.png" alt="test1" width="74" height="34" />
                    </figure>
                    <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
                  </div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option2" disabled>
                  <div class="figure horizontal">
                    <figure>
                      <img src="logo-sprint-2x.png" alt="test2" width="71" height="34" style="margin-right:3px;" />
                    </figure>
                    <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
                  </div>
                </exmg-radio-group-item>
              </exmg-radio-group>
            </template>
          </demo-snippet>
        </div>

        <div>
          <h4>Image vertical</h4>
          <demo-snippet>
            <template>
              <exmg-radio-group class="custom-style" name="Choice" vertical>
                <exmg-radio-group-item value="option1" enable-radio-button>
                  <div class="figure horizontal">
                    <figure>
                      <img src="logo-att-2x.png" alt="test1" width="74" height="34" />
                    </figure>
                    <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
                  </div>
                </exmg-radio-group-item>
                <exmg-radio-group-item value="option2" enable-radio-button>
                  <div class="figure horizontal">
                    <figure>
                      <img src="logo-sprint-2x.png" alt="test2" width="71" height="34" style="margin-right:3px;" />
                    </figure>
                    <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
                  </div>
                </exmg-radio-group-item>
              </exmg-radio-group>
            </template>
          </demo-snippet>
        </div>
      </div>
    `}};s([function(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):ue(e,t)}({type:String})],or.prototype,"selected",void 0),or=s([(e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.define(e,t)}}})(e,t))("exmg-radio-group-demo")],or);export{or as ExmgRadioGroupDemo};
