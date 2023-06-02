import{a as e,i as t,A as i,Z as r,T as n,_ as o,s,x as a,e as l,b as d,c,d as p,E as h}from"./gestures-5d82c3ec.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(t){return e({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=({finisher:e,descriptor:t})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:{...i,key:r};return null!=e&&(o.finisher=function(t){e(t,r)}),o}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,r,t(r)),null==e||e(n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function m(e){return f({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(e,t){return f({descriptor:i=>{const r={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[t]&&(this[t]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(e){return f({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}const y=t`:host{display:flex;color:var(--exmg-upload-text-color, #000);flex-direction:column;justify-content:center;align-items:center;gap:.5rem;padding:8px 0 8px 0}.image-upload-wrapper{display:flex;width:100%;flex-direction:row}#preview{max-width:80px;max-height:80px}.preview-wrapper{margin:1rem}.info-wrapper{display:flex;margin-left:1.5rem;flex-direction:column;padding:1rem;gap:12px}.info{display:flex;flex-direction:column;gap:8px}.description{color:var(--exmg-upload-description-text-color, #a7a7a7);font-size:.9rem;margin-bottom:1rem}.browse{width:50%}exmg-button{display:flex;align-items:center}.click-label{position:absolute;width:100%;height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;cursor:pointer}img{z-index:99999;display:block;max-width:100%}.image-container{width:200px;height:200px}.error-message{display:flex;align-items:center;gap:1rem;background-color:#dedede;width:450px;padding:8px;color:#f02d2d;border-radius:4px;margin-bottom:1rem;box-sizing:border-box}.item{width:100%}.item-container{width:100%}.item:first-child{margin-top:1rem}.item:last-child{border-bottom:none}.actions{display:flex;flex-direction:row;justify-content:space-between;margin-bottom:2rem;align-items:center}.actions .icon-buttons{display:flex;flex-direction:row;gap:8px}.disabled{opacity:.5;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none}mwc-icon-button{color:#0071dc;--mdc-icon-size: 20px;--mdc-icon-button-size: 28px}exmg-upload-drop-area a{color:#0071dc;text-decoration:none}exmg-upload-drop-area svg{fill:#0071dc}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,_=e=>null!=e?e:i
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,v=1,A=2,w=e=>(...t)=>({_$litDirective$:e,values:t});class x{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:C}=r,P=()=>document.createComment(""),S=(e,t,i)=>{var r;const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(P(),o),r=n.insertBefore(P(),o);i=new C(t,r,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,a=s!==e;if(a){let t;null===(r=i._$AQ)||void 0===r||r.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==o||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,o),e=t}}}return i},O=(e,t,i=e)=>(e._$AI(t,i),e),E={},T=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const r=e._$AB.nextSibling;for(;i!==r;){const e=i.nextSibling;i.remove(),i=e}},k=(e,t,i)=>{const r=new Map;for(let n=t;n<=i;n++)r.set(e[n],n);return r},R=w(class extends x{constructor(e){if(super(e),e.type!==A)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let r;void 0===i?i=t:void 0!==t&&(r=t);const n=[],o=[];let s=0;for(const t of e)n[s]=r?r(t,s):s,o[s]=i(t,s),s++;return{values:o,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,r]){var o;const s=(e=>e._$AH)(e),{values:a,keys:l}=this.dt(t,i,r);if(!Array.isArray(s))return this.ht=l,a;const d=null!==(o=this.ht)&&void 0!==o?o:this.ht=[],c=[];let p,h,u=0,f=s.length-1,m=0,g=a.length-1;for(;u<=f&&m<=g;)if(null===s[u])u++;else if(null===s[f])f--;else if(d[u]===l[m])c[m]=O(s[u],a[m]),u++,m++;else if(d[f]===l[g])c[g]=O(s[f],a[g]),f--,g--;else if(d[u]===l[g])c[g]=O(s[u],a[g]),S(e,c[g+1],s[u]),u++,g--;else if(d[f]===l[m])c[m]=O(s[f],a[m]),S(e,s[u],s[f]),f--,m++;else if(void 0===p&&(p=k(l,m,g),h=k(d,u,f)),p.has(d[u]))if(p.has(d[f])){const t=h.get(l[m]),i=void 0!==t?s[t]:null;if(null===i){const t=S(e,s[u]);O(t,a[m]),c[m]=t}else c[m]=O(i,a[m]),S(e,s[u],i),s[t]=null;m++}else T(s[f]),f--;else T(s[u]),u++;for(;m<=g;){const t=S(e,c[g+1]);O(t,a[m]),c[m++]=t}for(;u<=f;){const e=s[u++];null!==e&&T(e)}return this.ht=l,((e,t=E)=>{e._$AH=t})(e,c),n}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;!function(e){e.INVALID_SIZE="File size too large",e.INVALID_TYPE="Invalid file type",e.INVALID_AMOUNT="Max amount of files exceeded",e.INVALID_MULTIPLE="Multiple files not allowed",e.INVALID_RESOLUTION="Image resulution is not valid",e.SERVER_ERROR="Server error occured"}(z||(z={}));
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D=w(class extends x{constructor(e){var t;if(super(e),e.type!==v||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(e))&&this.it.add(e);return this.render(t)}const o=e.element.classList;this.it.forEach((e=>{e in t||(o.remove(e),this.it.delete(e))}));for(const e in t){const i=!!t[e];i===this.it.has(e)||(null===(r=this.nt)||void 0===r?void 0:r.has(e))||(i?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return n}}),I=t`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */let M=class extends s{render(){return a`<span><slot></slot></span>`}};M.styles=[I],M=o([l("mwc-icon")],M);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const N=()=>{},L={get passive(){return!1}};document.addEventListener("x",N,L),document.removeEventListener("x",N);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class B extends s{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
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
 */var F=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),H={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},j={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},U={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
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
var q=["touchstart","pointerdown","mousedown","keydown"],V=["touchend","pointerup","mouseup","contextmenu"],X=[],Y=function(e){function t(i){var r=e.call(this,p(p({},t.defaultAdapter),i))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(e){r.activateImpl(e)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return d(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=t.cssClasses,n=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var i=t.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(r),e.adapter.removeClass(n),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},t.prototype.setUnbounded=function(e){var i=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var t,i;if(e){try{for(var r=c(q),n=r.next();!n.done;n=r.next()){var o=n.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var t,i;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=c(V),n=r.next();!n.done;n=r.next()){var o=n.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}},t.prototype.deregisterRootHandlers=function(){var e,t;try{for(var i=c(q),r=i.next();!r.done;r=i.next()){var n=r.value;this.adapter.deregisterInteractionHandler(n,this.activateHandler)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=c(V),r=i.next();!r.done;r=i.next()){var n=r.value;this.adapter.deregisterDocumentInteractionHandler(n,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,i=t.strings;Object.keys(i).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(i[t],null)}))},t.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;if(!(r&&void 0!==e&&r.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&X.length>0&&X.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(X.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){X=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive(e),i.wasElementMadeActive&&t.animateActivation()),i.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},t.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation=function(){var e=this,i=t.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,o=t.cssClasses,s=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,l=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var d="",c="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),h=p.startPoint,u=p.endPoint;d=h.x+"px, "+h.y+"px",c=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(r,d),this.adapter.updateCssVariable(n,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(a),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),l)},t.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,i=t.activationEvent;return e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var r,n,o=t.x,s=t.y,a=o+i.left,l=s+i.top;if("touchstart"===e.type){var d=e;r=d.changedTouches[0].pageX-a,n=d.changedTouches[0].pageY-l}else{var c=e;r=c.pageX-a,n=c.pageY-l}return{x:r,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:e={x:e.x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,i=t.cssClasses.FG_DEACTIVATION,r=this.activationState,n=r.hasDeactivationUXRun,o=r.isActivated;(n||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(i)}),U.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var i=p({},t);t.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(i)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(i),e.resetActivationState()})))}},t.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+t.numbers.PADDING;var r=Math.floor(i*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,i=e.VAR_FG_SIZE,r=e.VAR_LEFT,n=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},t}(F),W=Y;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $="important",Z=" !"+$,J=w(class extends x{constructor(e){var t;if(super(e),e.type!==v||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const r=t[e];if(null!=r){this.ut.add(e);const t="string"==typeof r&&r.endsWith(Z);e.includes("-")||t?i.setProperty(e,t?r.slice(0,-11):r,t?$:""):i[e]=r}}return n}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class K extends B{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=W}get isActive(){return e=this.parentElement||this,t=":active",(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t);
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
var e,t}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return a`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${D(i)}"
          style="${J({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}o([g(".mdc-ripple-surface")],K.prototype,"mdcRoot",void 0),o([e({type:Boolean})],K.prototype,"primary",void 0),o([e({type:Boolean})],K.prototype,"accent",void 0),o([e({type:Boolean})],K.prototype,"unbounded",void 0),o([e({type:Boolean})],K.prototype,"disabled",void 0),o([e({type:Boolean})],K.prototype,"activated",void 0),o([e({type:Boolean})],K.prototype,"selected",void 0),o([e({type:Boolean})],K.prototype,"internalUseStateLayerCustomProperties",void 0),o([u()],K.prototype,"hovering",void 0),o([u()],K.prototype,"bgFocused",void 0),o([u()],K.prototype,"fgActivation",void 0),o([u()],K.prototype,"fgDeactivation",void 0),o([u()],K.prototype,"fgScale",void 0),o([u()],K.prototype,"fgSize",void 0),o([u()],K.prototype,"translateStart",void 0),o([u()],K.prototype,"translateEnd",void 0),o([u()],K.prototype,"leftPos",void 0),o([u()],K.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const G=t`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Q=class extends K{};function ee(e,t,i){if(void 0!==t)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
return function(e,t,i){const r=e.constructor;if(!i){const e=`__${t}`;if(!(i=r.getPropertyDescriptor(t,e)))throw new Error("@ariaProperty must be used after a @property decorator")}const n=i;let o="";if(!n.set)throw new Error(`@ariaProperty requires a setter for ${t}`);if(e.dispatchWizEvent)return i;const s={configurable:!0,enumerable:!0,set(e){if(""===o){const e=r.getPropertyOptions(t);o="string"==typeof e.attribute?e.attribute:t}this.hasAttribute(o)&&this.removeAttribute(o),n.set.call(this,e)}};return n.get&&(s.get=function(){return n.get.call(this)}),s}(e,t,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Q.styles=[G],Q=o([l("mwc-ripple")],Q);class te{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ie extends s{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new te((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return a``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?a`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return a`
      <button
          id="button"
          class="mdc-button ${D(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${_(this.ariaHasPopup)}"
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
        <span class="slot-container ${D({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return a`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}ie.shadowRootOptions={mode:"open",delegatesFocus:!0},o([ee,e({type:String,attribute:"aria-haspopup"})],ie.prototype,"ariaHasPopup",void 0),o([e({type:Boolean,reflect:!0})],ie.prototype,"raised",void 0),o([e({type:Boolean,reflect:!0})],ie.prototype,"unelevated",void 0),o([e({type:Boolean,reflect:!0})],ie.prototype,"outlined",void 0),o([e({type:Boolean})],ie.prototype,"dense",void 0),o([e({type:Boolean,reflect:!0})],ie.prototype,"disabled",void 0),o([e({type:Boolean,attribute:"trailingicon"})],ie.prototype,"trailingIcon",void 0),o([e({type:Boolean,reflect:!0})],ie.prototype,"fullwidth",void 0),o([e({type:String})],ie.prototype,"icon",void 0),o([e({type:String})],ie.prototype,"label",void 0),o([e({type:Boolean})],ie.prototype,"expandContent",void 0),o([g("#button")],ie.prototype,"buttonElement",void 0),o([b("mwc-ripple")],ie.prototype,"ripple",void 0),o([u()],ie.prototype,"shouldRenderRipple",void 0),o([m({passive:!0})],ie.prototype,"handleRippleActivate",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const re=t`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`,ne=t`:host[dense]{bottom:1px}:host .header{display:flex;flex-direction:row;align-items:center;margin:0;padding:20px;border-bottom:1px solid var(--exmg-form-drawer-header-separator-color, var(--mdc-theme-on-surface, rgba(2, 24, 43, 0.1)))}:host .header .header-buttons{display:flex;flex-direction:row;flex:1;justify-content:flex-end}:host .header .header-buttons exmg-form-drawer-button{margin-left:20px}:host .exmg-loading{visibility:hidden}:host .exmg-button-content{display:inline-flex;align-items:center;justify-content:center}:host button{display:relative}:host exmg-button-spinner{margin:3px 0;position:absolute;bottom:5px;left:50%;transform:translateX(-50%);--exmg-spinner-size: 20px}:host .progress-holder{overflow:hidden;border-top-left-radius:4px;border-top-right-radius:4px;position:absolute;pointer-events:none;left:0;right:0;top:0;width:100%;height:4px}:host .progress-holder progress{-webkit-appearance:none;appearance:none;height:100%;width:100%;position:absolute;pointer-events:none;left:0;top:0;direction:var(--exmg-button-progress-direction, ltr)}:host .progress-holder progress::-moz-progress-bar{background:var(--exmg-button-progress-color, #89c8ff)}:host .progress-holder progress::-webkit-progress-value{background-color:var(--exmg-button-progress-color, #89c8ff)}:host .progress-holder progress::-webkit-progress-bar{background-color:rgba(0,0,0,0)}:host([dense]) exmg-button-spinner{bottom:1px}`,oe=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)},se=t`:host{font-size:0;display:inline-block;position:relative;width:var(--exmg-spinner-size, 28px);height:var(--exmg-spinner-size, 28px);--paper-spinner-container-rotation-duration: 1568ms;--paper-spinner-expand-contract-duration: 1333ms;--paper-spinner-full-cycle-duration: 5332ms;--paper-spinner-cooldown-duration: 400ms}#spinnerContainer{width:100%;height:100%;direction:ltr}#spinnerContainer.exmg-active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;color:var(--exmg-spinner-color, grey);white-space:nowrap}.exmg-active .spinner-layer{-webkit-animation-name:fill-unfill-rotate;-webkit-animation-duration:5332ms;-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-animation-iteration-count:infinite;animation-name:fill-unfill-rotate;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-iteration-count:infinite;opacity:1}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden}.spinner-layer::after{content:"";left:45%;width:10%;border-top-style:solid}.spinner-layer::after,.circle-clipper .circle{box-sizing:border-box;position:absolute;top:0;border-width:var(--exmg-spinner-stroke-width, 3px);border-radius:50%}.circle-clipper .circle{bottom:0;width:200%;border-style:solid;border-bottom-color:rgba(0,0,0,0) !important}.circle-clipper.left .circle{left:0;border-right-color:rgba(0,0,0,0) !important;-webkit-transform:rotate(130deg);transform:rotate(130deg)}.circle-clipper.right .circle{left:-100%;border-left-color:rgba(0,0,0,0) !important;-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}.exmg-active .gap-patch::after,.exmg-active .circle-clipper .circle{-webkit-animation-duration:1333ms;-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-animation-iteration-count:infinite;animation-duration:1333ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-iteration-count:infinite}.exmg-active .circle-clipper.left .circle{-webkit-animation-name:left-spin;animation-name:left-spin}.exmg-active .circle-clipper.right .circle{-webkit-animation-name:right-spin;animation-name:right-spin}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.exmg-cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}`;let ae=class extends h{constructor(){super(...arguments),this.coolingDown=!1,this.active=!1}resetAnimation(){this.active=!1,this.coolingDown=!1}setAriaHidden(e){const t="aria-hidden";e?this.setAttribute(t,"true"):this.removeAttribute(t)}render(){const e={"exmg-active":this.active||this.coolingDown,"exmg-cooldown":this.coolingDown};return a`
      <div
        id="spinnerContainer"
        class="${D(e)}"
        @animationend="${()=>this.resetAnimation}"
        @webkitAnimationEnd="${()=>this.resetAnimation}"
      >
        <div class="spinner-layer">
          <div class="circle-clipper left"><div class="circle"></div></div>
          <div class="circle-clipper right"><div class="circle"></div></div>
        </div>
      </div>
    `}};ae.styles=se,o([e({type:Boolean})],ae.prototype,"coolingDown",void 0),o([e({type:Boolean,reflect:!0}),oe((function(e){this.setAriaHidden(!e),this.coolingDown=!e}))],ae.prototype,"active",void 0),ae=o([l("exmg-button-spinner")],ae);let le=class extends ie{constructor(){super(...arguments),this.loading=!1}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},t={"exmg-loading":this.loading,"exmg-button-content":!0},i=a` <span class="material-icons mdc-button__icon">${this.icon}</span> `;return a`
      <button
        id="button"
        class="mdc-button ${D(e)}"
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
        <span class="${D(t)}">
          ${this.icon&&!this.trailingIcon?i:""}
          <span class="mdc-button__label">${this.label}</span>
          ${this.icon&&this.trailingIcon?i:""}
          <slot></slot>
        </span>
        ${this.loading?a` <exmg-button-spinner active></exmg-button-spinner> `:""}
        ${this.progress?a`
              <div class="progress-holder">
                <progress max="100" value=${this.progress}></progress>
              </div>
            `:""}
      </button>
    `}handleRippleActivateA(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivateA()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivateA(){this.rippleHandlers.endPress()}handleRippleMouseEnterA(){this.rippleHandlers.startHover()}handleRippleMouseLeaveA(){this.rippleHandlers.endHover()}handleRippleFocusA(){this.rippleHandlers.startFocus()}handleRippleBlurA(){this.rippleHandlers.endFocus()}};le.styles=[re,ne],o([e({type:Boolean})],le.prototype,"loading",void 0),o([e({type:Number})],le.prototype,"progress",void 0),o([m({passive:!0})],le.prototype,"handleRippleActivateA",null),le=o([l("exmg-button")],le);const de=t`:host{display:flex;align-items:center;height:65px;border-bottom:1px solid #e7e7e7;padding-bottom:6px;margin-bottom:6px}.item{display:grid;height:65px;width:100%;grid-template-columns:2rem 1fr 6rem;grid-auto-flow:column;align-items:center}.progress{justify-self:flex-end;color:#a7a7a7;font-size:.8rem}.vertical-center{display:flex;align-items:center}.loader{width:18px;height:18px;border:3px solid #0071dc;border-bottom-color:rgba(0,0,0,0);border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.name-container{margin-left:16px;display:flex;flex-direction:column;gap:4px;width:100%}.file-name{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-error{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-details{display:flex;flex-direction:row;justify-content:space-between}.file-error{font-size:.7rem;color:#b00020}.actions{display:flex;justify-content:flex-end;justify-self:flex-end;width:60px}.error-icon,.error-icon svg{fill:#b00020;font-weight:bold;width:32px;height:32px}.success-icon,.success-icon svg{fill:green;font-weight:bold;width:32px;height:32px}.badge{display:flex;align-items:center;background-color:#aed8ff;margin-right:4px;border-radius:4px;color:#0071dc;padding:6px;font-size:.6rem;height:.4rem;font-weight:bold;line-height:1.75;letter-spacing:.5px}mwc-icon-button{color:#a7a7a7;--mdc-icon-size: 20px;--mdc-icon-button-size: 28px}.status{display:flex;justify-content:center}progress{display:inline-block;margin:0;padding:0;width:100%}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class ce extends s{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new te((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?a`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return a`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${_(this.ariaHasPopup)}"
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
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([e({type:Boolean,reflect:!0})],ce.prototype,"disabled",void 0),o([e({type:String})],ce.prototype,"icon",void 0),o([ee,e({type:String,attribute:"aria-label"})],ce.prototype,"ariaLabel",void 0),o([ee,e({type:String,attribute:"aria-haspopup"})],ce.prototype,"ariaHasPopup",void 0),o([g("button")],ce.prototype,"buttonElement",void 0),o([b("mwc-ripple")],ce.prototype,"ripple",void 0),o([u()],ce.prototype,"shouldRenderRipple",void 0),o([m({passive:!0})],ce.prototype,"handleRippleMouseDown",null),o([m({passive:!0})],ce.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pe=t`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let he=class extends ce{};he.styles=[pe],he=o([l("mwc-icon-button")],he);const ue=e=>{if(e)return e.type.startsWith("image")};async function fe(e,t){if(!e)throw new Error("Class UploadAdapter path not set.");const{UploadAdapter:i}=await import(e);if("function"==typeof i)return new i(t);throw new Error("Class UploadAdapter not found.")}class me{constructor(e){this.adapter=e}async upload(e,t){return this.adapter.upload(e,t)}abort(){this.adapter.abort&&this.adapter.abort()}static async create(e,t){let i;switch(e){case"local":i=await fe("./adapters/local-adapter.js",t);break;case"xhr":i=await fe("./adapters/xhr-adapter.js",t);break;case"custom":i=await fe(null==t?void 0:t.customAdapterPath,t);break;default:throw new Error(`Unknown upload destination: ${e}`)}return new me(i)}}const ge=a` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
</svg>`,be=a` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
</svg>`,ye=a` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
</svg>`,_e=a` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none" />
  <path
    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  />
</svg>`,ve=a`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
`;class Ae extends h{constructor(){super(...arguments),this.serverType="xhr"}async firstUpdated(){const e=this.uploadUrl,t=window.uploadDefaults.headers;this.uploadService=await me.create(this.serverType,{customAdapterPath:this.customAdapterPath||window.uploadDefaults.customAdapterPath,uploadUrl:e||window.uploadDefaults.uploadUrl,headers:t,responseType:this.responseType}),this.handleFileUpload()}_handleEditClick(){this.fire("edit-image",this.item,!0)}_handleRemoveClick(){var e,t;null===(e=this.uploadService)||void 0===e||e.abort(),this.fire("remove-item",null===(t=this.item)||void 0===t?void 0:t.id,!0)}handleError(e){this.item.invalid=!0,this.item.status="INVALID",this.item.error=e,this.requestUpdate("item")}async handleFileUpload(){var e;if(this.item&&!this.item.invalid)try{const t=await(null===(e=this.uploadService)||void 0===e?void 0:e.upload(this.item.file,(e=>{this.item.progress=e,this.requestUpdate("item")})));this.item.url=t,this.item.status="UPLOADED",this.requestUpdate("item")}catch(e){throw this.handleError(e),new Error(e)}}renderStatus(){const{status:e}=this.item;switch(e){case"UPLOADING":return this.renderUploading();case"UPLOADED":return this.renderUploaded();case"INVALID":return this.renderInvalid();case"WARNING":return this._renderWarning();default:return i}}renderActions(){const{item:e,allowCropping:t}=this,{status:r}=e;return a`${"UPLOADED"===r&&ue(e.file)&&t?a`<mwc-icon-button @click=${this._handleEditClick}>${_e}</mwc-icon-button>`:i} <mwc-icon-button @click=${this._handleRemoveClick}>${ve}</mwc-icon-button>`}_renderWarning(){return a`<span class="warning-icon">${ye}</span>`}renderUploading(){return a`<span class="loader"></span> `}renderUploaded(){return a`<span class="success-icon">${ge}</span>`}renderInvalid(){return a`<span class="error-icon">${be}</span>`}render(){var e,t,r;const n=null===(e=this.item)||void 0===e?void 0:e.file,{progress:o,status:s}=this.item,l=null==n?void 0:n.name,d=l.substring(0,l.lastIndexOf(".")),c=l.substring(l.lastIndexOf(".")+1,l.length);return a`
      <div class="item">
        <div class="status vertical-center">${this.renderStatus()}</div>
        <div class="name-container">
          <span class="file-name">${d}</span>
          ${"INVALID"!==s&&"WARNING"!==s?a` <progress id="file" max="100" value=${_(o||0)}></progress>`:i}
          ${(null===(t=this.item)||void 0===t?void 0:t.error)?a` <span class="file-error">${null===(r=this.item)||void 0===r?void 0:r.error}</span> `:a` <div class="file-details vertical-center">
                <div class="vertical-center">
                  <span class="file-size badge">${c.toUpperCase()}</span>
                  <span class="file-type badge">${(e=>{if(!e)return"0 Bytes";const t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB"][t]})(null==n?void 0:n.size)}</span>
                </div>
                <span class="progress">${Math.round(10*(o||0))/10}%</span>
              </div>`}
        </div>
        <div class="actions vertical-center">${this.renderActions()}</div>
      </div>
    `}}o([e({type:String})],Ae.prototype,"uploadUrl",void 0),o([e({type:String})],Ae.prototype,"customAdapterPath",void 0),o([e({type:String})],Ae.prototype,"serverType",void 0),o([e({type:String})],Ae.prototype,"responseType",void 0),o([e({type:Object})],Ae.prototype,"uploadService",void 0),o([e({type:Object})],Ae.prototype,"item",void 0),o([e({type:Boolean})],Ae.prototype,"allowCropping",void 0),o([e({type:Number})],Ae.prototype,"aspectRatio",void 0);let we=class extends Ae{};we.styles=de,we=o([l("exmg-upload-item")],we);const xe=t`#image{z-index:99999;display:flex;max-width:100%}.image-container{max-width:300px;max-height:300px}.actions{margin-top:8px;display:flex;justify-content:flex-end}/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:43.444Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none !important;max-width:none !important;min-height:0 !important;min-width:0 !important;width:100%}.cropper-wrap-box,.cropper-canvas,.cropper-drag-box,.cropper-crop-box,.cropper-modal{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-wrap-box,.cropper-canvas{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.3333333333%;left:0;top:33.3333333333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.3333333333%;top:0;width:33.3333333333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center::before,.cropper-center::after{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center::before{height:1px;left:-3px;top:0;width:7px}.cropper-center::after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media(min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media(min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media(min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se::before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none !important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */;function Ce(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Pe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(i),!0).forEach((function(t){Ee(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ce(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Se(e){return Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se(e)}function Oe(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Te(e){return function(e){if(Array.isArray(e))return ke(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ke(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ke(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var Re="undefined"!=typeof window&&void 0!==window.document,ze=Re?window:{},De=!(!Re||!ze.document.documentElement)&&"ontouchstart"in ze.document.documentElement,Ie=!!Re&&"PointerEvent"in ze,Me="cropper",Ne="all",Le="crop",Be="move",Fe="zoom",He="e",je="w",Ue="s",qe="n",Ve="ne",Xe="nw",Ye="se",We="sw",$e="".concat(Me,"-crop"),Ze="".concat(Me,"-disabled"),Je="".concat(Me,"-hidden"),Ke="".concat(Me,"-hide"),Ge="".concat(Me,"-invisible"),Qe="".concat(Me,"-modal"),et="".concat(Me,"-move"),tt="".concat(Me,"Action"),it="".concat(Me,"Preview"),rt="crop",nt="move",ot="none",st="crop",at="cropend",lt="cropmove",dt="cropstart",ct="dblclick",pt=Ie?"pointerdown":De?"touchstart":"mousedown",ht=Ie?"pointermove":De?"touchmove":"mousemove",ut=Ie?"pointerup pointercancel":De?"touchend touchcancel":"mouseup",ft="ready",mt="resize",gt="wheel",bt="zoom",yt="image/jpeg",_t=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,vt=/^data:/,At=/^data:image\/jpeg;base64,/,wt=/^img|canvas$/i,xt={viewMode:0,dragMode:rt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ct=Number.isNaN||ze.isNaN;function Pt(e){return"number"==typeof e&&!Ct(e)}var St=function(e){return e>0&&e<1/0};function Ot(e){return void 0===e}function Et(e){return"object"===Se(e)&&null!==e}var Tt=Object.prototype.hasOwnProperty;function kt(e){if(!Et(e))return!1;try{var t=e.constructor,i=t.prototype;return t&&i&&Tt.call(i,"isPrototypeOf")}catch(e){return!1}}function Rt(e){return"function"==typeof e}var zt=Array.prototype.slice;function Dt(e){return Array.from?Array.from(e):zt.call(e)}function It(e,t){return e&&Rt(t)&&(Array.isArray(e)||Pt(e.length)?Dt(e).forEach((function(i,r){t.call(e,i,r,e)})):Et(e)&&Object.keys(e).forEach((function(i){t.call(e,e[i],i,e)}))),e}var Mt=Object.assign||function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return Et(e)&&i.length>0&&i.forEach((function(t){Et(t)&&Object.keys(t).forEach((function(i){e[i]=t[i]}))})),e},Nt=/\.\d*(?:0|9){12}\d*$/;function Lt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Nt.test(e)?Math.round(e*t)/t:e}var Bt=/^width|height|left|top|marginLeft|marginTop$/;function Ft(e,t){var i=e.style;It(t,(function(e,t){Bt.test(t)&&Pt(e)&&(e="".concat(e,"px")),i[t]=e}))}function Ht(e,t){if(t)if(Pt(e.length))It(e,(function(e){Ht(e,t)}));else if(e.classList)e.classList.add(t);else{var i=e.className.trim();i?i.indexOf(t)<0&&(e.className="".concat(i," ").concat(t)):e.className=t}}function jt(e,t){t&&(Pt(e.length)?It(e,(function(e){jt(e,t)})):e.classList?e.classList.remove(t):e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,"")))}function Ut(e,t,i){t&&(Pt(e.length)?It(e,(function(e){Ut(e,t,i)})):i?Ht(e,t):jt(e,t))}var qt=/([a-z\d])([A-Z])/g;function Vt(e){return e.replace(qt,"$1-$2").toLowerCase()}function Xt(e,t){return Et(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(Vt(t)))}function Yt(e,t,i){Et(i)?e[t]=i:e.dataset?e.dataset[t]=i:e.setAttribute("data-".concat(Vt(t)),i)}var Wt=/\s\s*/,$t=function(){var e=!1;if(Re){var t=!1,i=function(){},r=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(e){t=e}});ze.addEventListener("test",i,r),ze.removeEventListener("test",i,r)}return e}();function Zt(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;t.trim().split(Wt).forEach((function(t){if(!$t){var o=e.listeners;o&&o[t]&&o[t][i]&&(n=o[t][i],delete o[t][i],0===Object.keys(o[t]).length&&delete o[t],0===Object.keys(o).length&&delete e.listeners)}e.removeEventListener(t,n,r)}))}function Jt(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;t.trim().split(Wt).forEach((function(t){if(r.once&&!$t){var o=e.listeners,s=void 0===o?{}:o;n=function(){delete s[t][i],e.removeEventListener(t,n,r);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];i.apply(e,a)},s[t]||(s[t]={}),s[t][i]&&e.removeEventListener(t,s[t][i],r),s[t][i]=n,e.listeners=s}e.addEventListener(t,n,r)}))}function Kt(e,t,i){var r;return Rt(Event)&&Rt(CustomEvent)?r=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,i),e.dispatchEvent(r)}function Gt(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var Qt=ze.location,ei=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ti(e){var t=e.match(ei);return null!==t&&(t[1]!==Qt.protocol||t[2]!==Qt.hostname||t[3]!==Qt.port)}function ii(e){var t="timestamp=".concat((new Date).getTime());return e+(-1===e.indexOf("?")?"?":"&")+t}function ri(e){var t=e.rotate,i=e.scaleX,r=e.scaleY,n=e.translateX,o=e.translateY,s=[];Pt(n)&&0!==n&&s.push("translateX(".concat(n,"px)")),Pt(o)&&0!==o&&s.push("translateY(".concat(o,"px)")),Pt(t)&&0!==t&&s.push("rotate(".concat(t,"deg)")),Pt(i)&&1!==i&&s.push("scaleX(".concat(i,")")),Pt(r)&&1!==r&&s.push("scaleY(".concat(r,")"));var a=s.length?s.join(" "):"none";return{WebkitTransform:a,msTransform:a,transform:a}}function ni(e,t){var i=e.pageX,r=e.pageY,n={endX:i,endY:r};return t?n:Pe({startX:i,startY:r},n)}function oi(e){var t=e.aspectRatio,i=e.height,r=e.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=St(r),s=St(i);if(o&&s){var a=i*t;"contain"===n&&a>r||"cover"===n&&a<r?i=r/t:r=i*t}else o?i=r/t:s&&(r=i*t);return{width:r,height:i}}var si=String.fromCharCode;var ai=/^data:.*,/;function li(e){var t,i=new DataView(e);try{var r,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var s=i.byteLength,a=2;a+1<s;){if(255===i.getUint8(a)&&225===i.getUint8(a+1)){n=a;break}a+=1}if(n){var l=n+10;if("Exif"===function(e,t,i){var r="";i+=t;for(var n=t;n<i;n+=1)r+=si(e.getUint8(n));return r}(i,n+4,4)){var d=i.getUint16(l);if(((r=18761===d)||19789===d)&&42===i.getUint16(l+2,r)){var c=i.getUint32(l+4,r);c>=8&&(o=l+c)}}}if(o){var p,h,u=i.getUint16(o,r);for(h=0;h<u;h+=1)if(p=o+12*h+2,274===i.getUint16(p,r)){p+=8,t=i.getUint16(p,r),i.setUint16(p,1,r);break}}}catch(e){t=1}return t}var di={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var e=this.element,t=this.options,i=this.container,r=this.cropper,n=Number(t.minContainerWidth),o=Number(t.minContainerHeight);Ht(r,Je),jt(e,Je);var s={width:Math.max(i.offsetWidth,n>=0?n:200),height:Math.max(i.offsetHeight,o>=0?o:100)};this.containerData=s,Ft(r,{width:s.width,height:s.height}),Ht(e,Je),jt(r,Je)},initCanvas:function(){var e=this.containerData,t=this.imageData,i=this.options.viewMode,r=Math.abs(t.rotate)%180==90,n=r?t.naturalHeight:t.naturalWidth,o=r?t.naturalWidth:t.naturalHeight,s=n/o,a=e.width,l=e.height;e.height*s>e.width?3===i?a=e.height*s:l=e.width/s:3===i?l=e.width/s:a=e.height*s;var d={aspectRatio:s,naturalWidth:n,naturalHeight:o,width:a,height:l};this.canvasData=d,this.limited=1===i||2===i,this.limitCanvas(!0,!0),d.width=Math.min(Math.max(d.width,d.minWidth),d.maxWidth),d.height=Math.min(Math.max(d.height,d.minHeight),d.maxHeight),d.left=(e.width-d.width)/2,d.top=(e.height-d.height)/2,d.oldLeft=d.left,d.oldTop=d.top,this.initialCanvasData=Mt({},d)},limitCanvas:function(e,t){var i=this.options,r=this.containerData,n=this.canvasData,o=this.cropBoxData,s=i.viewMode,a=n.aspectRatio,l=this.cropped&&o;if(e){var d=Number(i.minCanvasWidth)||0,c=Number(i.minCanvasHeight)||0;s>1?(d=Math.max(d,r.width),c=Math.max(c,r.height),3===s&&(c*a>d?d=c*a:c=d/a)):s>0&&(d?d=Math.max(d,l?o.width:0):c?c=Math.max(c,l?o.height:0):l&&(d=o.width,(c=o.height)*a>d?d=c*a:c=d/a));var p=oi({aspectRatio:a,width:d,height:c});d=p.width,c=p.height,n.minWidth=d,n.minHeight=c,n.maxWidth=1/0,n.maxHeight=1/0}if(t)if(s>(l?0:1)){var h=r.width-n.width,u=r.height-n.height;n.minLeft=Math.min(0,h),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,h),n.maxTop=Math.max(0,u),l&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===s&&(n.width>=r.width&&(n.minLeft=Math.min(0,h),n.maxLeft=Math.max(0,h)),n.height>=r.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=r.width,n.maxTop=r.height},renderCanvas:function(e,t){var i=this.canvasData,r=this.imageData;if(t){var n=function(e){var t=e.width,i=e.height,r=e.degree;if(90==(r=Math.abs(r)%180))return{width:i,height:t};var n=r%90*Math.PI/180,o=Math.sin(n),s=Math.cos(n),a=t*s+i*o,l=t*o+i*s;return r>90?{width:l,height:a}:{width:a,height:l}}({width:r.naturalWidth*Math.abs(r.scaleX||1),height:r.naturalHeight*Math.abs(r.scaleY||1),degree:r.rotate||0}),o=n.width,s=n.height,a=i.width*(o/i.naturalWidth),l=i.height*(s/i.naturalHeight);i.left-=(a-i.width)/2,i.top-=(l-i.height)/2,i.width=a,i.height=l,i.aspectRatio=o/s,i.naturalWidth=o,i.naturalHeight=s,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,Ft(this.canvas,Mt({width:i.width,height:i.height},ri({translateX:i.left,translateY:i.top}))),this.renderImage(e),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(e){var t=this.canvasData,i=this.imageData,r=i.naturalWidth*(t.width/t.naturalWidth),n=i.naturalHeight*(t.height/t.naturalHeight);Mt(i,{width:r,height:n,left:(t.width-r)/2,top:(t.height-n)/2}),Ft(this.image,Mt({width:i.width,height:i.height},ri(Mt({translateX:i.left,translateY:i.top},i)))),e&&this.output()},initCropBox:function(){var e=this.options,t=this.canvasData,i=e.aspectRatio||e.initialAspectRatio,r=Number(e.autoCropArea)||.8,n={width:t.width,height:t.height};i&&(t.height*i>t.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*r),n.height=Math.max(n.minHeight,n.height*r),n.left=t.left+(t.width-n.width)/2,n.top=t.top+(t.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=Mt({},n)},limitCropBox:function(e,t){var i=this.options,r=this.containerData,n=this.canvasData,o=this.cropBoxData,s=this.limited,a=i.aspectRatio;if(e){var l=Number(i.minCropBoxWidth)||0,d=Number(i.minCropBoxHeight)||0,c=s?Math.min(r.width,n.width,n.width+n.left,r.width-n.left):r.width,p=s?Math.min(r.height,n.height,n.height+n.top,r.height-n.top):r.height;l=Math.min(l,r.width),d=Math.min(d,r.height),a&&(l&&d?d*a>l?d=l/a:l=d*a:l?d=l/a:d&&(l=d*a),p*a>c?p=c/a:c=p*a),o.minWidth=Math.min(l,c),o.minHeight=Math.min(d,p),o.maxWidth=c,o.maxHeight=p}t&&(s?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(r.width,n.left+n.width)-o.width,o.maxTop=Math.min(r.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=r.width-o.width,o.maxTop=r.height-o.height))},renderCropBox:function(){var e=this.options,t=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,e.movable&&e.cropBoxMovable&&Yt(this.face,tt,i.width>=t.width&&i.height>=t.height?Be:Ne),Ft(this.cropBox,Mt({width:i.width,height:i.height},ri({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Kt(this.element,st,this.getData())}},ci={initPreview:function(){var e=this.element,t=this.crossOrigin,i=this.options.preview,r=t?this.crossOriginUrl:this.url,n=e.alt||"The image to preview",o=document.createElement("img");if(t&&(o.crossOrigin=t),o.src=r,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,i){var s=i;"string"==typeof i?s=e.ownerDocument.querySelectorAll(i):i.querySelector&&(s=[i]),this.previews=s,It(s,(function(e){var i=document.createElement("img");Yt(e,it,{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),t&&(i.crossOrigin=t),i.src=r,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',e.innerHTML="",e.appendChild(i)}))}},resetPreview:function(){It(this.previews,(function(e){var t=Xt(e,it);Ft(e,{width:t.width,height:t.height}),e.innerHTML=t.html,function(e,t){if(Et(e[t]))try{delete e[t]}catch(i){e[t]=void 0}else if(e.dataset)try{delete e.dataset[t]}catch(i){e.dataset[t]=void 0}else e.removeAttribute("data-".concat(Vt(t)))}(e,it)}))},preview:function(){var e=this.imageData,t=this.canvasData,i=this.cropBoxData,r=i.width,n=i.height,o=e.width,s=e.height,a=i.left-t.left-e.left,l=i.top-t.top-e.top;this.cropped&&!this.disabled&&(Ft(this.viewBoxImage,Mt({width:o,height:s},ri(Mt({translateX:-a,translateY:-l},e)))),It(this.previews,(function(t){var i=Xt(t,it),d=i.width,c=i.height,p=d,h=c,u=1;r&&(h=n*(u=d/r)),n&&h>c&&(p=r*(u=c/n),h=c),Ft(t,{width:p,height:h}),Ft(t.getElementsByTagName("img")[0],Mt({width:o*u,height:s*u},ri(Mt({translateX:-a*u,translateY:-l*u},e))))})))}},pi={bind:function(){var e=this.element,t=this.options,i=this.cropper;Rt(t.cropstart)&&Jt(e,dt,t.cropstart),Rt(t.cropmove)&&Jt(e,lt,t.cropmove),Rt(t.cropend)&&Jt(e,at,t.cropend),Rt(t.crop)&&Jt(e,st,t.crop),Rt(t.zoom)&&Jt(e,bt,t.zoom),Jt(i,pt,this.onCropStart=this.cropStart.bind(this)),t.zoomable&&t.zoomOnWheel&&Jt(i,gt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleDragModeOnDblclick&&Jt(i,ct,this.onDblclick=this.dblclick.bind(this)),Jt(e.ownerDocument,ht,this.onCropMove=this.cropMove.bind(this)),Jt(e.ownerDocument,ut,this.onCropEnd=this.cropEnd.bind(this)),t.responsive&&Jt(window,mt,this.onResize=this.resize.bind(this))},unbind:function(){var e=this.element,t=this.options,i=this.cropper;Rt(t.cropstart)&&Zt(e,dt,t.cropstart),Rt(t.cropmove)&&Zt(e,lt,t.cropmove),Rt(t.cropend)&&Zt(e,at,t.cropend),Rt(t.crop)&&Zt(e,st,t.crop),Rt(t.zoom)&&Zt(e,bt,t.zoom),Zt(i,pt,this.onCropStart),t.zoomable&&t.zoomOnWheel&&Zt(i,gt,this.onWheel,{passive:!1,capture:!0}),t.toggleDragModeOnDblclick&&Zt(i,ct,this.onDblclick),Zt(e.ownerDocument,ht,this.onCropMove),Zt(e.ownerDocument,ut,this.onCropEnd),t.responsive&&Zt(window,mt,this.onResize)}},hi={resize:function(){if(!this.disabled){var e,t,i=this.options,r=this.container,n=this.containerData,o=r.offsetWidth/n.width,s=r.offsetHeight/n.height,a=Math.abs(o-1)>Math.abs(s-1)?o:s;if(1!==a)i.restore&&(e=this.getCanvasData(),t=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(It(e,(function(t,i){e[i]=t*a}))),this.setCropBoxData(It(t,(function(e,i){t[i]=e*a}))))}},dblclick:function(){var e,t;this.disabled||this.options.dragMode===ot||this.setDragMode((e=this.dragBox,t=$e,(e.classList?e.classList.contains(t):e.className.indexOf(t)>-1)?nt:rt))},wheel:function(e){var t=this,i=Number(this.options.wheelZoomRatio)||.1,r=1;this.disabled||(e.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){t.wheeling=!1}),50),e.deltaY?r=e.deltaY>0?1:-1:e.wheelDelta?r=-e.wheelDelta/120:e.detail&&(r=e.detail>0?1:-1),this.zoom(-r*i,e)))},cropStart:function(e){var t=e.buttons,i=e.button;if(!(this.disabled||("mousedown"===e.type||"pointerdown"===e.type&&"mouse"===e.pointerType)&&(Pt(t)&&1!==t||Pt(i)&&0!==i||e.ctrlKey))){var r,n=this.options,o=this.pointers;e.changedTouches?It(e.changedTouches,(function(e){o[e.identifier]=ni(e)})):o[e.pointerId||0]=ni(e),r=Object.keys(o).length>1&&n.zoomable&&n.zoomOnTouch?Fe:Xt(e.target,tt),_t.test(r)&&!1!==Kt(this.element,dt,{originalEvent:e,action:r})&&(e.preventDefault(),this.action=r,this.cropping=!1,r===Le&&(this.cropping=!0,Ht(this.dragBox,Qe)))}},cropMove:function(e){var t=this.action;if(!this.disabled&&t){var i=this.pointers;e.preventDefault(),!1!==Kt(this.element,lt,{originalEvent:e,action:t})&&(e.changedTouches?It(e.changedTouches,(function(e){Mt(i[e.identifier]||{},ni(e,!0))})):Mt(i[e.pointerId||0]||{},ni(e,!0)),this.change(e))}},cropEnd:function(e){if(!this.disabled){var t=this.action,i=this.pointers;e.changedTouches?It(e.changedTouches,(function(e){delete i[e.identifier]})):delete i[e.pointerId||0],t&&(e.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,Ut(this.dragBox,Qe,this.cropped&&this.options.modal)),Kt(this.element,at,{originalEvent:e,action:t}))}}},ui={change:function(e){var t,i=this.options,r=this.canvasData,n=this.containerData,o=this.cropBoxData,s=this.pointers,a=this.action,l=i.aspectRatio,d=o.left,c=o.top,p=o.width,h=o.height,u=d+p,f=c+h,m=0,g=0,b=n.width,y=n.height,_=!0;!l&&e.shiftKey&&(l=p&&h?p/h:1),this.limited&&(m=o.minLeft,g=o.minTop,b=m+Math.min(n.width,r.width,r.left+r.width),y=g+Math.min(n.height,r.height,r.top+r.height));var v=s[Object.keys(s)[0]],A={x:v.endX-v.startX,y:v.endY-v.startY},w=function(e){switch(e){case He:u+A.x>b&&(A.x=b-u);break;case je:d+A.x<m&&(A.x=m-d);break;case qe:c+A.y<g&&(A.y=g-c);break;case Ue:f+A.y>y&&(A.y=y-f)}};switch(a){case Ne:d+=A.x,c+=A.y;break;case He:if(A.x>=0&&(u>=b||l&&(c<=g||f>=y))){_=!1;break}w(He),(p+=A.x)<0&&(a=je,d-=p=-p),l&&(h=p/l,c+=(o.height-h)/2);break;case qe:if(A.y<=0&&(c<=g||l&&(d<=m||u>=b))){_=!1;break}w(qe),h-=A.y,c+=A.y,h<0&&(a=Ue,c-=h=-h),l&&(p=h*l,d+=(o.width-p)/2);break;case je:if(A.x<=0&&(d<=m||l&&(c<=g||f>=y))){_=!1;break}w(je),p-=A.x,d+=A.x,p<0&&(a=He,d-=p=-p),l&&(h=p/l,c+=(o.height-h)/2);break;case Ue:if(A.y>=0&&(f>=y||l&&(d<=m||u>=b))){_=!1;break}w(Ue),(h+=A.y)<0&&(a=qe,c-=h=-h),l&&(p=h*l,d+=(o.width-p)/2);break;case Ve:if(l){if(A.y<=0&&(c<=g||u>=b)){_=!1;break}w(qe),h-=A.y,c+=A.y,p=h*l}else w(qe),w(He),A.x>=0?u<b?p+=A.x:A.y<=0&&c<=g&&(_=!1):p+=A.x,A.y<=0?c>g&&(h-=A.y,c+=A.y):(h-=A.y,c+=A.y);p<0&&h<0?(a=We,c-=h=-h,d-=p=-p):p<0?(a=Xe,d-=p=-p):h<0&&(a=Ye,c-=h=-h);break;case Xe:if(l){if(A.y<=0&&(c<=g||d<=m)){_=!1;break}w(qe),h-=A.y,c+=A.y,p=h*l,d+=o.width-p}else w(qe),w(je),A.x<=0?d>m?(p-=A.x,d+=A.x):A.y<=0&&c<=g&&(_=!1):(p-=A.x,d+=A.x),A.y<=0?c>g&&(h-=A.y,c+=A.y):(h-=A.y,c+=A.y);p<0&&h<0?(a=Ye,c-=h=-h,d-=p=-p):p<0?(a=Ve,d-=p=-p):h<0&&(a=We,c-=h=-h);break;case We:if(l){if(A.x<=0&&(d<=m||f>=y)){_=!1;break}w(je),p-=A.x,d+=A.x,h=p/l}else w(Ue),w(je),A.x<=0?d>m?(p-=A.x,d+=A.x):A.y>=0&&f>=y&&(_=!1):(p-=A.x,d+=A.x),A.y>=0?f<y&&(h+=A.y):h+=A.y;p<0&&h<0?(a=Ve,c-=h=-h,d-=p=-p):p<0?(a=Ye,d-=p=-p):h<0&&(a=Xe,c-=h=-h);break;case Ye:if(l){if(A.x>=0&&(u>=b||f>=y)){_=!1;break}w(He),h=(p+=A.x)/l}else w(Ue),w(He),A.x>=0?u<b?p+=A.x:A.y>=0&&f>=y&&(_=!1):p+=A.x,A.y>=0?f<y&&(h+=A.y):h+=A.y;p<0&&h<0?(a=Xe,c-=h=-h,d-=p=-p):p<0?(a=We,d-=p=-p):h<0&&(a=Ve,c-=h=-h);break;case Be:this.move(A.x,A.y),_=!1;break;case Fe:this.zoom(function(e){var t=Pe({},e),i=0;return It(e,(function(e,r){delete t[r],It(t,(function(t){var r=Math.abs(e.startX-t.startX),n=Math.abs(e.startY-t.startY),o=Math.abs(e.endX-t.endX),s=Math.abs(e.endY-t.endY),a=Math.sqrt(r*r+n*n),l=(Math.sqrt(o*o+s*s)-a)/a;Math.abs(l)>Math.abs(i)&&(i=l)}))})),i}(s),e),_=!1;break;case Le:if(!A.x||!A.y){_=!1;break}t=Gt(this.cropper),d=v.startX-t.left,c=v.startY-t.top,p=o.minWidth,h=o.minHeight,A.x>0?a=A.y>0?Ye:Ve:A.x<0&&(d-=p,a=A.y>0?We:Xe),A.y<0&&(c-=h),this.cropped||(jt(this.cropBox,Je),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}_&&(o.width=p,o.height=h,o.left=d,o.top=c,this.action=a,this.renderCropBox()),It(s,(function(e){e.startX=e.endX,e.startY=e.endY}))}},fi={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&Ht(this.dragBox,Qe),jt(this.cropBox,Je),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Mt({},this.initialImageData),this.canvasData=Mt({},this.initialCanvasData),this.cropBoxData=Mt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Mt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),jt(this.dragBox,Qe),Ht(this.cropBox,Je)),this},replace:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,It(this.previews,(function(t){t.getElementsByTagName("img")[0].src=e})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,jt(this.cropper,Ze)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,Ht(this.cropper,Ze)),this},destroy:function(){var e=this.element;return e[Me]?(e[Me]=void 0,this.isImg&&this.replaced&&(e.src=this.originalUrl),this.uncreate(),this):this},move:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=this.canvasData,r=i.left,n=i.top;return this.moveTo(Ot(e)?e:r+Number(e),Ot(t)?t:n+Number(t))},moveTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=this.canvasData,r=!1;return e=Number(e),t=Number(t),this.ready&&!this.disabled&&this.options.movable&&(Pt(e)&&(i.left=e,r=!0),Pt(t)&&(i.top=t,r=!0),r&&this.renderCanvas(!0)),this},zoom:function(e,t){var i=this.canvasData;return e=(e=Number(e))<0?1/(1-e):1+e,this.zoomTo(i.width*e/i.naturalWidth,null,t)},zoomTo:function(e,t,i){var r=this.options,n=this.canvasData,o=n.width,s=n.height,a=n.naturalWidth,l=n.naturalHeight;if((e=Number(e))>=0&&this.ready&&!this.disabled&&r.zoomable){var d=a*e,c=l*e;if(!1===Kt(this.element,bt,{ratio:e,oldRatio:o/a,originalEvent:i}))return this;if(i){var p=this.pointers,h=Gt(this.cropper),u=p&&Object.keys(p).length?function(e){var t=0,i=0,r=0;return It(e,(function(e){var n=e.startX,o=e.startY;t+=n,i+=o,r+=1})),{pageX:t/=r,pageY:i/=r}}(p):{pageX:i.pageX,pageY:i.pageY};n.left-=(d-o)*((u.pageX-h.left-n.left)/o),n.top-=(c-s)*((u.pageY-h.top-n.top)/s)}else kt(t)&&Pt(t.x)&&Pt(t.y)?(n.left-=(d-o)*((t.x-n.left)/o),n.top-=(c-s)*((t.y-n.top)/s)):(n.left-=(d-o)/2,n.top-=(c-s)/2);n.width=d,n.height=c,this.renderCanvas(!0)}return this},rotate:function(e){return this.rotateTo((this.imageData.rotate||0)+Number(e))},rotateTo:function(e){return Pt(e=Number(e))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=e%360,this.renderCanvas(!0,!0)),this},scaleX:function(e){var t=this.imageData.scaleY;return this.scale(e,Pt(t)?t:1)},scaleY:function(e){var t=this.imageData.scaleX;return this.scale(Pt(t)?t:1,e)},scale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=this.imageData,r=!1;return e=Number(e),t=Number(t),this.ready&&!this.disabled&&this.options.scalable&&(Pt(e)&&(i.scaleX=e,r=!0),Pt(t)&&(i.scaleY=t,r=!0),r&&this.renderCanvas(!0,!0)),this},getData:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,r=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){e={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var s=r.width/r.naturalWidth;if(It(e,(function(t,i){e[i]=t/s})),t){var a=Math.round(e.y+e.height),l=Math.round(e.x+e.width);e.x=Math.round(e.x),e.y=Math.round(e.y),e.width=l-e.x,e.height=a-e.y}}else e={x:0,y:0,width:0,height:0};return i.rotatable&&(e.rotate=r.rotate||0),i.scalable&&(e.scaleX=r.scaleX||1,e.scaleY=r.scaleY||1),e},setData:function(e){var t=this.options,i=this.imageData,r=this.canvasData,n={};if(this.ready&&!this.disabled&&kt(e)){var o=!1;t.rotatable&&Pt(e.rotate)&&e.rotate!==i.rotate&&(i.rotate=e.rotate,o=!0),t.scalable&&(Pt(e.scaleX)&&e.scaleX!==i.scaleX&&(i.scaleX=e.scaleX,o=!0),Pt(e.scaleY)&&e.scaleY!==i.scaleY&&(i.scaleY=e.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var s=i.width/i.naturalWidth;Pt(e.x)&&(n.left=e.x*s+r.left),Pt(e.y)&&(n.top=e.y*s+r.top),Pt(e.width)&&(n.width=e.width*s),Pt(e.height)&&(n.height=e.height*s),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?Mt({},this.containerData):{}},getImageData:function(){return this.sized?Mt({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,t={};return this.ready&&It(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){t[i]=e[i]})),t},setCanvasData:function(e){var t=this.canvasData,i=t.aspectRatio;return this.ready&&!this.disabled&&kt(e)&&(Pt(e.left)&&(t.left=e.left),Pt(e.top)&&(t.top=e.top),Pt(e.width)?(t.width=e.width,t.height=e.width/i):Pt(e.height)&&(t.height=e.height,t.width=e.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var e,t=this.cropBoxData;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(e){var t,i,r=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&kt(e)&&(Pt(e.left)&&(r.left=e.left),Pt(e.top)&&(r.top=e.top),Pt(e.width)&&e.width!==r.width&&(t=!0,r.width=e.width),Pt(e.height)&&e.height!==r.height&&(i=!0,r.height=e.height),n&&(t?r.height=r.width/n:i&&(r.width=r.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var t=this.canvasData,i=function(e,t,i,r){var n=t.aspectRatio,o=t.naturalWidth,s=t.naturalHeight,a=t.rotate,l=void 0===a?0:a,d=t.scaleX,c=void 0===d?1:d,p=t.scaleY,h=void 0===p?1:p,u=i.aspectRatio,f=i.naturalWidth,m=i.naturalHeight,g=r.fillColor,b=void 0===g?"transparent":g,y=r.imageSmoothingEnabled,_=void 0===y||y,v=r.imageSmoothingQuality,A=void 0===v?"low":v,w=r.maxWidth,x=void 0===w?1/0:w,C=r.maxHeight,P=void 0===C?1/0:C,S=r.minWidth,O=void 0===S?0:S,E=r.minHeight,T=void 0===E?0:E,k=document.createElement("canvas"),R=k.getContext("2d"),z=oi({aspectRatio:u,width:x,height:P}),D=oi({aspectRatio:u,width:O,height:T},"cover"),I=Math.min(z.width,Math.max(D.width,f)),M=Math.min(z.height,Math.max(D.height,m)),N=oi({aspectRatio:n,width:x,height:P}),L=oi({aspectRatio:n,width:O,height:T},"cover"),B=Math.min(N.width,Math.max(L.width,o)),F=Math.min(N.height,Math.max(L.height,s)),H=[-B/2,-F/2,B,F];return k.width=Lt(I),k.height=Lt(M),R.fillStyle=b,R.fillRect(0,0,I,M),R.save(),R.translate(I/2,M/2),R.rotate(l*Math.PI/180),R.scale(c,h),R.imageSmoothingEnabled=_,R.imageSmoothingQuality=A,R.drawImage.apply(R,[e].concat(Te(H.map((function(e){return Math.floor(Lt(e))}))))),R.restore(),k}(this.image,this.imageData,t,e);if(!this.cropped)return i;var r=this.getData(),n=r.x,o=r.y,s=r.width,a=r.height,l=i.width/Math.floor(t.naturalWidth);1!==l&&(n*=l,o*=l,s*=l,a*=l);var d=s/a,c=oi({aspectRatio:d,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),p=oi({aspectRatio:d,width:e.minWidth||0,height:e.minHeight||0},"cover"),h=oi({aspectRatio:d,width:e.width||(1!==l?i.width:s),height:e.height||(1!==l?i.height:a)}),u=h.width,f=h.height;u=Math.min(c.width,Math.max(p.width,u)),f=Math.min(c.height,Math.max(p.height,f));var m=document.createElement("canvas"),g=m.getContext("2d");m.width=Lt(u),m.height=Lt(f),g.fillStyle=e.fillColor||"transparent",g.fillRect(0,0,u,f);var b=e.imageSmoothingEnabled,y=void 0===b||b,_=e.imageSmoothingQuality;g.imageSmoothingEnabled=y,_&&(g.imageSmoothingQuality=_);var v,A,w,x,C,P,S=i.width,O=i.height,E=n,T=o;E<=-s||E>S?(E=0,v=0,w=0,C=0):E<=0?(w=-E,E=0,C=v=Math.min(S,s+E)):E<=S&&(w=0,C=v=Math.min(s,S-E)),v<=0||T<=-a||T>O?(T=0,A=0,x=0,P=0):T<=0?(x=-T,T=0,P=A=Math.min(O,a+T)):T<=O&&(x=0,P=A=Math.min(a,O-T));var k=[E,T,v,A];if(C>0&&P>0){var R=u/s;k.push(w*R,x*R,C*R,P*R)}return g.drawImage.apply(g,[i].concat(Te(k.map((function(e){return Math.floor(Lt(e))}))))),m},setAspectRatio:function(e){var t=this.options;return this.disabled||Ot(e)||(t.aspectRatio=Math.max(0,e)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(e){var t=this.options,i=this.dragBox,r=this.face;if(this.ready&&!this.disabled){var n=e===rt,o=t.movable&&e===nt;e=n||o?e:ot,t.dragMode=e,Yt(i,tt,e),Ut(i,$e,n),Ut(i,et,o),t.cropBoxMovable||(Yt(r,tt,e),Ut(r,$e,n),Ut(r,et,o))}return this}},mi=ze.Cropper,gi=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t||!wt.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=Mt({},xt,kt(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,i,r;return t=e,i=[{key:"init",value:function(){var e,t=this.element,i=t.tagName.toLowerCase();if(!t[Me]){if(t[Me]=this,"img"===i){if(this.isImg=!0,e=t.getAttribute("src")||"",this.originalUrl=e,!e)return;e=t.src}else"canvas"===i&&window.HTMLCanvasElement&&(e=t.toDataURL());this.load(e)}}},{key:"load",value:function(e){var t=this;if(e){this.url=e,this.imageData={};var i=this.element,r=this.options;if(r.rotatable||r.scalable||(r.checkOrientation=!1),r.checkOrientation&&window.ArrayBuffer)if(vt.test(e))At.test(e)?this.read((n=e.replace(ai,""),o=atob(n),s=new ArrayBuffer(o.length),It(a=new Uint8Array(s),(function(e,t){a[t]=o.charCodeAt(t)})),s)):this.clone();else{var n,o,s,a,l=new XMLHttpRequest,d=this.clone.bind(this);this.reloading=!0,this.xhr=l,l.onabort=d,l.onerror=d,l.ontimeout=d,l.onprogress=function(){l.getResponseHeader("content-type")!==yt&&l.abort()},l.onload=function(){t.read(l.response)},l.onloadend=function(){t.reloading=!1,t.xhr=null},r.checkCrossOrigin&&ti(e)&&i.crossOrigin&&(e=ii(e)),l.open("GET",e,!0),l.responseType="arraybuffer",l.withCredentials="use-credentials"===i.crossOrigin,l.send()}else this.clone()}}},{key:"read",value:function(e){var t=this.options,i=this.imageData,r=li(e),n=0,o=1,s=1;if(r>1){this.url=function(e,t){for(var i=[],r=new Uint8Array(e);r.length>0;)i.push(si.apply(null,Dt(r.subarray(0,8192)))),r=r.subarray(8192);return"data:".concat(t,";base64,").concat(btoa(i.join("")))}(e,yt);var a=function(e){var t=0,i=1,r=1;switch(e){case 2:i=-1;break;case 3:t=-180;break;case 4:r=-1;break;case 5:t=90,r=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90}return{rotate:t,scaleX:i,scaleY:r}}(r);n=a.rotate,o=a.scaleX,s=a.scaleY}t.rotatable&&(i.rotate=n),t.scalable&&(i.scaleX=o,i.scaleY=s),this.clone()}},{key:"clone",value:function(){var e=this.element,t=this.url,i=e.crossOrigin,r=t;this.options.checkCrossOrigin&&ti(t)&&(i||(i="anonymous"),r=ii(t)),this.crossOrigin=i,this.crossOriginUrl=r;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=r||t,n.alt=e.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),Ht(n,Ke),e.parentNode.insertBefore(n,e.nextSibling)}},{key:"start",value:function(){var e=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;var i=ze.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ze.navigator.userAgent),r=function(t,i){Mt(e.imageData,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.initialImageData=Mt({},e.imageData),e.sizing=!1,e.sized=!0,e.build()};if(!t.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){r(n.width,n.height),i||o.removeChild(n)},n.src=t.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else r(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var e=this.image;e.onload=null,e.onerror=null,e.parentNode.removeChild(e),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var e=this.element,t=this.options,i=this.image,r=e.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(Me,"-container")),s=o.querySelector(".".concat(Me,"-canvas")),a=o.querySelector(".".concat(Me,"-drag-box")),l=o.querySelector(".".concat(Me,"-crop-box")),d=l.querySelector(".".concat(Me,"-face"));this.container=r,this.cropper=o,this.canvas=s,this.dragBox=a,this.cropBox=l,this.viewBox=o.querySelector(".".concat(Me,"-view-box")),this.face=d,s.appendChild(i),Ht(e,Je),r.insertBefore(o,e.nextSibling),jt(i,Ke),this.initPreview(),this.bind(),t.initialAspectRatio=Math.max(0,t.initialAspectRatio)||NaN,t.aspectRatio=Math.max(0,t.aspectRatio)||NaN,t.viewMode=Math.max(0,Math.min(3,Math.round(t.viewMode)))||0,Ht(l,Je),t.guides||Ht(l.getElementsByClassName("".concat(Me,"-dashed")),Je),t.center||Ht(l.getElementsByClassName("".concat(Me,"-center")),Je),t.background&&Ht(o,"".concat(Me,"-bg")),t.highlight||Ht(d,Ge),t.cropBoxMovable&&(Ht(d,et),Yt(d,tt,Ne)),t.cropBoxResizable||(Ht(l.getElementsByClassName("".concat(Me,"-line")),Je),Ht(l.getElementsByClassName("".concat(Me,"-point")),Je)),this.render(),this.ready=!0,this.setDragMode(t.dragMode),t.autoCrop&&this.crop(),this.setData(t.data),Rt(t.ready)&&Jt(e,ft,t.ready,{once:!0}),Kt(e,ft)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var e=this.cropper.parentNode;e&&e.removeChild(this.cropper),jt(this.element,Je)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],r=[{key:"noConflict",value:function(){return window.Cropper=mi,e}},{key:"setDefaults",value:function(e){Mt(xt,kt(e)&&e)}}],i&&Oe(t.prototype,i),r&&Oe(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();Mt(gi.prototype,di,ci,pi,hi,ui,fi);class bi extends h{constructor(){super(...arguments),this.cropperConfig={},this.hideActions=!1}firstUpdated(){this.fire("crop-start",{},!0)}async crop(e){this._item=e;const t=new FileReader;t.onload=()=>{this.cropArea&&(this.cropArea.src=t.result),this.cropper=new gi(this.cropArea,this.cropperConfig)},e.file&&t.readAsDataURL(e.file)}_cancel(){this.fire("crop-cancel",{},!0)}saveCropArea(){var e,t;const i=null===(e=this.cropper)||void 0===e?void 0:e.getCroppedCanvas();if(!i)throw new Error("Cropper canvas not found");null==i||i.toBlob((e=>{if(!this._item||!e)return;const t=new File([e],`cropped-${this._item.file.name}`,{type:this._item.file.type});this._item.file=t,this.fire("crop-done",this._item)}),null===(t=this._item)||void 0===t?void 0:t.file.type)}renderActions(){return a`
      <div class="actions">
        <exmg-button @click=${this._cancel}>Cancel</exmg-button>
        <exmg-button @click=${this.saveCropArea}>Crop</exmg-button>
      </div>
    `}render(){return a`
      <div class="image-container">
        <img id="image" />
      </div>
      ${this.hideActions?i:this.renderActions()}
    `}}o([e({type:Object})],bi.prototype,"cropperConfig",void 0),o([g("#image")],bi.prototype,"cropArea",void 0),o([e({type:Boolean})],bi.prototype,"hideActions",void 0),o([u()],bi.prototype,"_item",void 0);let yi=class extends bi{};yi.styles=xe,yi=o([l("exmg-upload-crop")],yi);const _i=t`:host{display:flex;width:100%}.description{font-size:.675rem;text-transform:uppercase;opacity:.3;margin-top:8px}.drop{display:flex;width:100%;position:relative;min-height:160px;background-image:url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23E5E5E5FF' stroke-width='4' stroke-dasharray='6%2c 10' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e");border-radius:10px;box-sizing:border-box}.drop-container{flex:1;display:flex;padding:1rem;justify-content:center;align-items:center;flex-direction:column;background-size:cover;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRQAAAEsCAYAAACygD87AAAABGdBTUEAALGPC/xhBQAAAYVpQ0NQSUNDIHByb2ZpbGUAACiRfZE9SMNAGIbftpZKqTjYQcQhhepkQVTEUatQhAqhVmjVweTSP2jSkKS4OAquBQd/FqsOLs66OrgKguAPiKuLk6KLlPhdUmgR4x3HPbz3vS933wH+ZpWpZs84oGqWkUklhVx+VQi9IogwzRhiEjP1OVFMw3N83cPH97sEz/Ku+3P0KQWTAT6BeJbphkW8QTy9aemc94mjrCwpxOfEYwZdkPiR67LLb5xLDvt5ZtTIZuaJo8RCqYvlLmZlQyWeIo4rqkb5/pzLCuctzmq1ztr35C+MFLSVZa7TGkYKi1iCCAEy6qigCgsJ2jVSTGToPOnhH3L8IrlkclXAyLGAGlRIjh/8D3731ixOTrhJkSQQfLHtjxEgtAu0Grb9fWzbrRMg8AxcaR1/rQnMfJLe6GjxI6B/G7i47mjyHnC5Aww+6ZIhOVKAlr9YBN7P6JvywMAtEF5z+9Y+x+kDkKVepW+Ag0NgtETZ6x7v7u3u27817f79AFTxcpu4a/1bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5wUKCyAA+RklzQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHja7d3pcmJJtibQDxCaIiKzym69/wv2bcvKjEkT0D/cvY8LMWoCpLXMsNDAZBCgzXd8b08AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACANzHyEABwZMb1lCSLpRMAAAAHJlAE4JiMk1zV01n9WQsT592/7TRb8fM+fBRCAgAAvLIzDwEAR+QyyZdn/n1arDjNt5z6oDIRQAIAAGwlUATgmJwnmdSvZ/XfUYYV9ZtW1o+y38r7PkRcDh/vktx09wEAAIBKoAjAMZlkCAX/mxLsjevP+n/Xndrvk+0B43JI2YLMRUqwOUryKyVgBAAAoBIoAnAs+jCwb0We7XH5/nq2hY/tPP2pXX6SMsfxNgJFAAB4rlZz92OG+AAEigAckxbqPWdX576Feb7HbbUwsYWMf9a/j/5GAgDA810muUgyrTX6bT09RLh48nxYAuBYLLcov/XKwOWNWGZ52iKt0AEAgP2dJfmaEia2Wv+i1tf3KfPKhYsn/gQDwDHoA8XntESMu6+fs8Jx+T489zoAAOCzu0yZS56lmnpUf34e4eJJEygCcCzafJXsWUiM69+z85QjoON6+YdamNztcX0CRQAAeJlRSqDY/JOyYKCFjJPufMLFEyVQBOBY9IHirisUJ0mu62m89LvzlLaKm5TdmnfZ3OWlqyQBAOCzO8vQ6jyr9fgsye9av59HuPghnmQAOAb7zk+cpMxlua6X7VcUtmBwWs83SvIz20PF12ibBgCAz+yiq+3vlmrwFiwKF0+cQBGAY9GHedsCxdZGcVW/ntdi5aZ+Pa6FzGX9+qoWLz93uA+jHe8DAACwuk5vbjacV7h4wgSKAByLfQLFs5TAcFzP+zvJj6XL3dXvr2tB0tqfZ690HwAAgKd1et/ufLfj5YSLJ/hEA8AxmHRf7xIotr9h97XwWA4KH+rPp7XoaMWNQBEAAN7GpnbnXQkXT4BAEYBjsU+YN+nO/7ChUOl/N87TjVtech8AAIDBPu3Ou3pJuHhTPw/wBgSKABxTAdLsE+Zt2jxlsXT9245UChQBAOB5ntvuvKt9w8XLlLFIN56at3myAeAYtDBvl92V5915zjLMUlw26YqLRbaHhAJFAAB4ntdod97VLuHitN6nO7X96xMoAnAMRtkvzGtFwbgWDRf1+/nSdV7n8azFbUVNH2oqOgAAYPd6/rXbnXe1HC5eJvmj/m6ax51QvBKBIgDHUoC0P/S7rFCcpQxcbrMUv9Z/b1OCwEmSqwxHSRfZvsPzKM9vuwYAgM/srduddzWrdXz/2UJd/0ZPOAAc2r6B4iLJr/p37CIlQPya5Et32XEeh4k3W663XyW5y30AAACK92x33qZfKXmrrn8bAkUAjkEfKM53/KP/kOR7Pe95hgBxeZXh7yQ/dyhq9g01AQCAw7Y7L2vzFFtNf+vpeRsCRQCOQT8/cZ8w7z7J3yntzef179ooJUi8Tzk6uusRUoEiAADs71janZPHm7LcpyxC4I2edAA4tLa6MNl/xsk8ZQXirzxdoTjb8z701ylQBACA7Y613XnbyCNeQKAIwDHYZ4fndV66qnB5hSIAALC9htbu/Mk/wAHAMfw9mn/i+wAAAKdEu/MnfuIB4ND2DfPGtVhYNfNwnuetVhQoAgDAfrQ7f1ICRQCOwS5h3jjlqOM0Q6A4qV+P8zhQnKcckXxIOTp5n+0hoUARAAB2p935ExMoAnAM1oV5o/q7y5Sjn5MMOzlv+9s2rdc1y247Pvf3YeYpAQCAjfZpdx6lBH4Pb1Rra3c+wJMPAIfWwrxFhkBxkhIkXmVYidjvBD3LsCqx31Bl3H3fVjGepwSStylHTletWLRCEQAAdrdru/M4yZda1/9K8jPb25HHe9bl2p3fmUARgEPrw8C+OPmSEgS23y/yeJVhO/UzE9uKxraScZrhaOVZPZ3XQuZmqejpA0UFCAAAbK7ht7U7j2s9fp0hfLxM8jubVylOUsLH7HDedn7tzu9MoAjAMRQjfZh3WU+TpaLgJsNcxHVHKtsKx4eU4LEFiW2FYgsZ/6j//szQDrFqlSQAAPDUtnbnFgpe5fHIohYyztZ8LpimLCy4qDX5bbYHitqdD/QfAAAOqV+hOKoFRPOQEvq1VYn7rBxcZAggb+t1XNWCY9wVN//U8/Q7RgsUAQBgvXXtzsuh4HI3Uj8TfbH08zbuaNpd5iIlJNxEu/MBCBQBOLTRiu8XtXBoYd9LA75FLS7uUlourmvRMk3yZ5IfebxCURECAADr6/d17c7TJN8yjC5a5TyPW5nPM4w7mnTna6sZxxs+D2h3PhCBIgDH4KErBFqRMk3y7wwzEudbToul0yrzDG3O3zLMVfwjj1coChQBjte4vnc/eM8GOIhN7c4PSb5nGDnUAsG+zm81eFKCyes8bovuTevv1u0grd35gP8JOG79ZgRRMAEf0DzlCGXbTKVvf57k8VHKVfr3x3baFj7OUoLFbytuw/sswHGa1A+dV90Hx7v67733b4B3s2l353n3vvw7wwrCPlzsN1252FLvt1WK697ntTsfiEDxMEbZbYv0aR7PHLhJWb7rBQJ8JPMMbRLtCOO4e+/rA8Z176mbfr9sseV3+85qBODtP7O0ILH/0NnmbT3kcbj44H0c4M2MUnKK5mZDvT3LEDAuh4sXXc2/7fZai/Tye7t25wP/ceb9XnTntRCa1f/oq+aCjfM4vT/rPlCfp8z5+uXhBD6YtmLwZ/ee2Z/GW06jPA4hk+0B5CrzrG+nAOB9nacEiZd53C7XPji29/NWM7dw8S5DuDiPcBHgNbWae9F9P8n6nZh3CRenK97n+9q9tUjfrfg7od35QEYegnd5jC8yDBhtL7xW7LRNApaDxEn3gpp3X98n+b+xAynA8nvtcgDZB5GTPA0f+wCyrUz8nccDogF4//fzPkgcLX0ova/181nKgfrRmg+v86wOFwF4mXHK2KDr7j24zVFs+cYutfSou75t4eIiyd95ukrx3xlap/9JWYDFO/7B5u1eZG246HRFMdS01TD9rLD24nnoCqCvGZL3/8YqRYDX+PvXh4+tGPKBE+Aw78utdj5fUTvf1vq3jf+5rvXxpo6rflVMa4lutTUAz3dZ34PPV/zurcLFm5QspNXqkyT/qf8ukvyv9/fDfKDi9YxTEvIWJPbanLA2H3GyVOz0q2RuM7RFz1JWOP5Rz3eXskpR+wYAAKdeO687CD+v9fDPPG1zm9YPs1c73k7btOs+yV9x8AjgpdqoicsV79/Na4aLo5Tdo9ucxKuUFYqJjOQgBIqvp9917mzFi+h3ylHVh3reaX3htUGkqb+7rS+GFiQuuuvv0/e/snr4KQAAnELtfFVPqw7Ct9r5fsPnmLZKcbLD7fUzF3X7ALyeNuPwIm8bLo7zuJtIu/OB2ZTldZwn+XNFMfRQi5XleVyz7sV0Xk+LDEHiquHRLZT8Wl9UX2LHZwAATss4JQi8zvaD8Ju01Yb32RwotvMtMuxKep3Vu4UCsL/+/fhn1oeL/YGkXcPFfnRFfx67Ox+BiYfgVVzm8VDo+5R0/J9sDv36zVnajkSbCptZdzuT7J7qAwDAofWrCvsw8aGrnW+yezvyIsMooeXVMG1O+a8MsxfbbtHj2A0U4K2099/f9T19lqdzy9t7dwsY+w1sdznY00ZlJEOQyTsTKL5cm5nYVif+SNl96C77HfVc7PjCnHQvtlG0PQMAcDqfPdqmK+1D4PdsPwi/rX6eZAgo29zF1iXUZpIv19FjdTTAm3urcPFbhgxm1Zxd3umPOi8zTmk/Pqsvlk2zXl7rBdlWKZ7FKkUAAE6nbr7OMD/877y89XhRP9NM8jhIbKOE+uvW7QNwOK8VLk5SAsVx/dn32GjrIASKL3feFUYPKen44o1fhNM8bu1wdBUAgGO3qDXs+SvWsYvuQ2rb3HC2ph7X7QNwHF4SLrafJdqdD0qg+DJnGdo2RhmOhi7e4cXXH13dZ9YMAAAc8kPka3fbzOtptuftt1WN6miAw/5d2CdcvOh+rt35gASK+2uJeNudrv1nXmTYoWif6xo94z7MUkLMs+627WoEAMApfHA8ZLfN8u1bpQhwXH8jtoWLTdsM10GhAxEo7m6Uob35OsMW6OPuP/OvLf+Z25HQaUoQebWioNp1deOi3od+leLC0wQAwAl8YDxkt80iun0ATuFvxXK42H5+m6FDlAMRKG7XgsQvGZbXnmUIEu8yDH9+2HA943rZ6yRfM8wAuKinyzzenW5bONivUmzDSL2YAAA4dofuttHtA3BaWrh4U9+vb/O2m+GyA4HidtOUALAFfuOu6GhB4m02h4mTlEDyW0p42MLIfslumwnQbmPXF8dVdxsv3SUPAADew6G7bXT7AJzu3w/v10dAoLjZOCUI/FK/bktrW5B4lxIkLrZcx7eUlYmTeh0PKYFhu442F6DNBphmGCy96bpntRCa1MvNIqUHAOD4zVIOtLc69r27bZZvfx7dPgCwM4HiZuMMQWBSBn7+TgnttoV9SQkIr1ICyUmGlY0/63W1ZbptheOoK2paQPiww21cds+no6sAAJyCNsuw1bGH6La5PPDtA8BJEihu1zZOGWVYVbjY4/H9Wi+/SFnZ+D2rVxHO6umsXq5fzbjLKsVxvcxDrFIEAOD4HbrbZnmVom4fANiRQHE3z52v0jZhGacEfT+zecXhvN7OWffctNWQ6yzqZS7q9+OU0BMAAI7dIbttFituXx0NADsYewi2uslwpHKSoS1jl+KoBYNtJswuRzzbTMVFhp3ntvmdIXScdkURAAAcs98ZDrgfoo499O0DwEkSKG7XWpWb6x0ft7aisR1hvc9uR1tnKSsV23VMd7zM7+4y19ktiAQAgEOar6i1R+98+/2qxC/qaADYTqC4m36V4ll2W6XYh4LJfu3l7bJtO/Rdippf3eXO6wkAAI7dcrfNxTvf/q8D3z4AnByB4m6ec+S0beLSViW2jVayw+XOlm57l5WND3m8SvGLpw0AgBOwqtvmM90+AJwcgeLu9p2vssiwS3MLCXdpX55mmJ3Ydn7eVb9K8SJWKQIAcBqW69iLA9++OhoANrDL8+4WKQFsv5vyzQ6XO6unFt6um6U4qoXLtwzB411KkLnrTnfzDMHlqF7u1lMHAMCRW65jRzvW2h/l9gHgpAgU9zNLmZ84ro/dfYZVi6u0+YfTDC3P4wyzEdvvz1LCxKuUwHJUr/fHlutf9XxeZGiZvs/um8EAAMAx1Nptc8PbDKsG38P8wLcPACdDoLifRX3MzjMcufy9w2XSXWZav24hYmvpuK7fjzPMbLzNbmHgWZKvSf7MEEgu6n2787QBAHAC5rVWbqsEk/fttpkd+PYB4GQIFJ9XaPRHLu+yec7hImWV4bg7TTIEi+3ftnLxPiVM/J3tR0SnSf6op4sMbdWt1fkmjqoCAHA6Fl2tfXageraflb7rAX4A+FQEivt7znyVFirOusu0o56jDJu3tJmJ2wqni5QQ8VuGlY/tdu6TfE9pl555ugAAOLFau3XzvOdM8HFKkPm1fkYa1dpcoAgAK5x5CJ7lV4Yjpxcp4eL9lsvMUsLC2wwrEs9q0TSvv7/P+iCx3dZ1hrbmphVa+7RJAwDAsVkk+ZnhoPlV/f6tDpRP6m1cL302mmV7JxIAfFoCxee5S1lF2DZouU7y946XndfL9qsK29HXVUYpbRdf8nieS7uuPkgEAIBTd5tyoP08Q+D34w0+B13X617u2nrIMIIIAFjzh5Tn+ZUS9PVHTvfZkXmx5uumtV1cpwSJvRZK/sz2lZEAAHBKFrXWPq/fX9fvX2OW4jRDkDhe+t19Soj4O1YmAsBGAsXnu6unthnKdZJ/XuF617VdJEPb9K/sF14CAMApuUkJ+Ka1Jm4H8J/rPKXjp9/IMHm8KaINDQFgRwLF53vt+S7b2i5akOhoKQAAH9281r5/1u/bKsV9ZoVvm0F+lyFINIMcAPYgUHyZ15jvsq3tos1vcbQUAIDP5HfKqsKzWjNfZre5hptmkC9SAsRfKYGiIBEAnkGg+DIvme+i7QIAANabpwSI3+r3X7J5NeEuM8hbkAgAvIBA8eX2me+yS9vFz5SVj46WAgDw2f2qtfOk1tsXtf7umUEOAO9MoPhyq+a7LLcot7aL6wwzFxttFwAAsFoLBL/WGvo6Q6BoBjkAHIhA8XUsz3e5qD/TdgEAAC/TVimOM3T7TGMGOQAczMhD8Gq+ZZjvcpcSFmq7AACAl/tXra2T0tGz3PFjBjkAvCOB4uuZJPlPylHSVY+rtgsAAHieaUqoeNZ9jjGDHAAOZOIheDXtSOlZhkBxlHK09GeSf7J5VzoAAGC1eT0tMgSJ35P8iK4fAHh3Vii+rjbX5bx+fRttFwAA8Jr19ig6fgCAD1zoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnZOIhgE9jlOQsyXn9eu4hAQAAAPZ15iGAT+M6yWXKgYRRkpskP5LMPDQAAADArqxQhM/hPMmfKQcRWqB4nuSq/v7BQwQAAADsQqAIH98oJUxsrc6z+u8oyThl1eJ5Sgu01YoAAADARgJF+Piuk3ytX8+T/JXkNsNqxdSvr+r3s5ivCAAAAKwhUISP/xr/V8pKxCT5meRXSovzTUpweFZ/39qgL+t5tUEDAAAATwgU4WP7liEgvE/yd5JF/X6R5C5lteI4JVjUBg0AAABsJFCEj+s8yR8pIeEiyT8poeKyecpqxYf6nqANGgAAAFhLoAgfU9uIZVq/v03yY8tltEEDAAAAWwkU4WO6TvIlJRCcJ/lvdmtd3tYGfVGvRxs0AAAAfFICRfiYr+t/da/vn0l+73kd69qgJylt0Mnq9mkAAADggxMowsezaSOWffVt0NOU1Yqp/96+4HoBAIDHxvUzuhobOHpnHgL4UM5T2p1TC5EfeflmKvOUVY6jlDbqVuicReszAAA816jW1Be1jm/19W2GbiGAoyRQhI9VkHxNCfzSFSKv4TxlhWK77hYo3sURVAAA2Mc4ZRHAda2rWxfQotbYbYPEfzxUwDG/kQEfw1XK0c2krCr8ntcJ+yYpgeL50s8dkAAAgOdZ1M/jo+5no+5z+qXP68Ax8wYFH8MkZXViK0J+5XU2TRmlBIkXK94vzryHAADAk/p5Wmvzb1m9b8E8ZdPEn/XrxYrraB1BAEfJGxR8DF+61/N9yuzE13qPuKhF0boixxxFAAA+u3Yg/o9aI49SwsJRVs81b3PKJymrEUcrru8iZcQQwNGxughO31tsxNIXRecrCpzEUVMAAEhXh8+W6vA2K/FqzWfvFireZPWoonMPK3CsJh4COGmjJH9mWEF4m9dbnXhRi59NhcwsjpoCAPDxa+5prY2/dnXwsnk9TTJsttJ2cl5k9a7N8/rzszzeoCUpIeTv2AQROEICRTht1yntzq2l4r95nRbkcS2YrrJ6dWKzSAkxFTkAAHzUz8z/SmllvkwJFicZgsBlbZXiWfd5e1y/n6+o1UddvX2exysZRykH7x88DcAxvjkCp13ctNfxz5QjmOsKlH30MxInG86TlJmN5igCAHDKNtXMLRAcd9+3UHHTSsVpV4+3lYr3KQfjW619UU/nGWYvLl/XracHODYCRThd31KOkiblqOV/83Sl4GVK6LjuCOo6i+4yrW1jvKbwus/r7CgNAACH+Ez8NSXUa0Hgslmtj8+7Gri1Nd+vucxDhhBxvHSZFiRe1Xq9bYI4qrezyBAsjvJ00QDAUbx5Aqen7SDXio5/8jTUG6fMVzzP0J4xy+4btrTB0g8Zjrwuz3VpBZY5igAAnJq2k/LXDO3Gd3l6kL7VxW2lYltx2Grj5Rp7lOFg/CTDvPP2fdv4cNLV87Naz9/V01l3PTd5nU0XAV6NQBFOs/DZZSOWs5T5iu2IaBskPUoJCXede9haOR66QmrS3ZdFLXoUOQAAnJJxSpg47erlrKmV26YqqzZcGeVx4NgO6PcrD/sVh63GfsgQIt4snabdZdv5AI6GQBFOz64bscxrMTJaKmTanJZ1O82t0o6atmBxnsczXu5ijiIAAKdlUWvrvlY+62rfTSsVW/jYLtNWHraNDVuYOO4u2weItymtzC1AvF+6zUmG8UaLeh6AoyFQhNN7zW7biGW56LmtBUqb19IXKM9pg37IsAt0CxRvIlAEAOD0tHmGTVtluHzwvbUft+6ffp5iu55Nbcy3ebwC8XaHOvy6u93f2b3DCOBd3jyB0/Gle90+ZHWr8yq3tZC57q5jlOHo6c962iVYbJfrVyeaoQgAwClqMxP7OeGTWjO37pw28uesOy23MfcdPX1nTxsbNM9+gWC7bFvleKbmBo6JQBFOx3lKIJhajHzP0wBw1P1+2SIlNLxJmRXTH/FsO0b/yPZd5No8mNTb/xFHSwEAOE1tl+bJUk19Vmvkfm7ieKnebrPG+9N99/VLauQ2p7y1Y19EoAgcES3PcBp23YilhX2twFlXnLQVi/u2QY+T/DuPW65/eXoAADhRi5QD99M1te80r9vGvI82Zqj57ekCjoVAEU7D8kYsf+fpzMJpStjX2iLGtehZd2R0VguftsFKvxt0svoIaFvJmJSjtX/H6kQAAE7/c/Hlmt9t2o25zSrft515V23TGHMUgaOj5RlOo8D5mqG94ldWh33n9TytJWNaX+Ot0Nm1DXpeb2P5/NM8brn+ERuxAABw+vo5im0VYpt9uDwL8T0DvXbb5ymB4nmsUgSOhBWKcPy+Zmh12LQqcNT9vLUytxaNtlpxlzbo+/r18nUvt1x/99QAAPABLFJWKLbPx7/qqa1CfMjrtTE/5zN7P7/81tMFHAMrFOG4tZWGLSj8mfWrAu9qsXNRT+f1NX6ZYTe6tiPzputYxUYsAAB8VMsboCTlIPsx6FdPto4kdThwcFYownFrhUMrHsYZ5risK4ZaS0Y7ijrOEEy21YrJ7kdZx0n+FRuxAADwcfUboIyOqN5tcxTbjPSbHG61JMD/J1CE03idto1W2sDos2xuvZh3v39uG3TzLbu1XAMAwKnqN0AZ5Xg2QFmkdAqd1fvVNogBOCiBIhy/h1pItFCx7cR82RUVm3Zy7neea5u2tBbodqRz3c5005TZia214nvWt0UDAMCpWg7u7rO+K+i9jTPsQr1IWaUIcFACRTgNbaOUUVfkjDPMSnxpG/R9ns5VtBELAACfyVmOdwOU6+4zwLGsngQ+MYEinI55ytHI+1rsTLrX8WVK8PecNuh5ylzE5aLkKmWH6VE9z99Zv5kLAAB8BFd53PZ8DPpdqEfZvMkiwLsQKMLpmdXiZp6Xt0HPUwZOL69utBELAACfzTFvgDLNsFHjLMYQAQcmUITT9Vpt0KuGOtuIBQCAz2ZR6+hpjm8DlH4X6kWOZ/Uk8EkJFOG0vbQN2kYsAADw+DPyZff97wPfl4skX1LCxHH9+UOtzx3wBw7mzEMAH8JtLSquU+YetvkqVylHWVvL8raWjVHK6sRxd72OfgIA8Fm0oK6NFBrn/dqex/Uz+nlKkDjt6vLU+9UWFAgTgYOyQhE+ltYGnQytGru2QSc2YgEA4HN7zw1Q2uiiy1qDf0tZjXiZYaRRr81SP6bZjsAnZYUifDxt5uFNLUwu6s/Pk/y7/vx7Vm/E8rUrXH5FqzMAAJ/LotbA7eD8eYYD9q9hUq+7HfCf5PEqxF5bDHBX70PbWBHg4ASK8HHt2wb9tRY3qYXLTw8hAACftI7+Ur++SDkY/1zb2ph7iww7OLcAcRbtzcAREijCx7ZICQZbUXSdEipOkvyREi5+TwkVr7vL/YhWZwAAPqe2ErCFgZM9auNWa/cBYjuwv6pWn2cYW3SXcmBfgAgcvZGHAD6Vizxug+4LmTZT9SbJXwoZAAA+sf/paua/snmjwtbG3EJEbczAh2eFInwuq9qgWxHUgsUfESYCAPC53eXxLPI+UFxuYz7L+g1PtTEDH5JAET6f1gbdNm257Aqdm9iIBQAAbjNsWHiesgKxbaayqY05ta6+zxAiamMGPhwtz0AriB7iaCkAACRlFeJ/8njl4brPz9qYgU9HoAgAAABPtU0M23ig9vlZGzPw6QkUAQAA4KmzlPFAbaOVfhWiNmbgUxMoAgDHaFrrlFk9AcChPjNPUlqYtTEDdG+OAADHVJtc1VPbPK6tCLnLMO8VAAA4YNEOAHAszpP8K0OYuGyWxwGjwfcAAPDOzjwEAMAROe/qk1nKwc9x9/tJPV2kzK7qd9YUMAIAwDsQKAIA722UMuR+1a6YF93X/6SEhNP682mtXcbd9awKGO/zuEVawAgAAK9IoAgAvLdps/+7qwAABsxJREFUSltzUnbK/CslDBx3tUkLBtumLDcZAsRpykrG8/r9qoDxMgJGAAB4EwJFAOC9tR2ckxL6Lbqft3Bw1e7Oi5RA8CHJ77wsYLyt/woYAQBgTwJFAOC99W3Nt93X5xmCxrs8boVeZVPA2LdIt+tcFTDO8nQF48JTBAAA6wkUAYD3NE4J+pIS3N13vzvvvr57xnWvCxjb6sVVAeNZPV2lhIu/k/zM09WRAABAJVAEAN679mgtyS38S0rwtzw/8aX6gPFXhgBxuUW6BYzjlGDxPmVmo5WKAACwpqgHAHgvfVvzfYbQ7iwl3EtKAPgWKwTbisj7PA0Yr1LapMf1Pv72VAEAwGpjDwEA8I7WtTX3P++DxrfUAsZfGVZEjmJlIgAAbCRQBADes+7o5yeuCxRvD3DfXjq/EQAAPg0tzwDAe9Yd/fzE1tbcdmZOns5PnNbLzOrpLVYPvsX8RgAA+NCFPQDAe1g3P7GFhkkJGuf163HKXMPrPN5g5Tav2xa9fPt2eAYAgA20PAMA72VdW/Nyu/Giq1PaqsYWLn6pp1bDTOrP+92aX3K/tDsDAMAWVigCAO+hn5+43Fa8LtBrrch3SX6mBIZfM+zMPE8JE79laIm+TwkrH7LbCsZRBIoAALAXgSIA8B76tuIW/iWb5xdO6qlvQ150521h4Liray7qv9/rZcb1Oub1tBwyjmN+IgAA7EWgCAC8h35+Yt/WvG5+YQsCR7Veue5ql7sMYeE0JQT8Xn//R0qo+Luep81gHNXrv0tZwThbcfv3MT8RAAC2EigCAO9hXVvxup/3KwcnSa5SQsFFSvA3z7A68S6PVxYuMgSDrT26fT3J4+DwYs3tAwAAawgUAYC3tq6teNP8wtbufJ+y2rBdzyLJTVfHtJWHLWDsA8N2u4sk/9R/RxnCxFGGsHH59gEAgDUEigDAW1s3P3HT/MIWKP5OaVGe15/3O0CfL11umhIS3tfzTTPMT3zI0/mI/fzGWT0PAACwhUARAHhru8xP7NuQ2/zEZFh9uG4zlT4IPK/nu+vqnHb9V/U67zKEk+vmNwIAABsIFAGAt7aurXnT/MJZSmvzQ56GiaMMKxhn9fdtg5Z+xeKqQLEFlJvuFwAAsIFAEQB4S31b8fL8xHXzC+cpYWLf6rysrS7sN2wZZ9iwpf1ukeRn/XfRXV8/v3ERgSIAAOxMoAgAvHWt0bcvt7bibfML51uud54SOE6SfMmwA/RtHs9PbCsdZ/U88+72J9113XuqAABg9yIfAOCt9G3FbbOU5GXzC9tOz/cZgsm2e3M/P3FSz9dmMPat08u3P/dUAQDAbgSKAMBb6gPF2zU/f0678TzDysJRHq8+bL+/y7BicdP90u4MAAB7ECgCAG9lkmFO4vL8xNecX7i8+jD1OmcZNm3pmZ8IAAAvIFAEAN7Kurbi95hfOM/6NmbzEwEA4AXGHgIA4I0stxW3lYJt5mGyegXhW+uDzrYrNAAAsCMrFAGAt7JuTmGbd9haov8nJdi7zRDwvWXIeLHmfgEAADsQKAIAb2HS1RnLbcV39XRZvz+vpy/1vA/dee6z3w7Q24wyzHU0PxEAAJ5BoAgAvIXl+Yl9KDhL8qt+fZ5hnmHqZVrAmLx+wLgcdD54qgAAYD8CRQDgLaxrd25u66kFfC1E7IPIZHXAeJ8hYFwOK3e5X21+o/mJAADwDAJFAOAtjFJailuL8XVKgPeQx/MRZ/V0W79vcxVbiHiWpwHjRYY5iLM8XcG4KSTcFnQCAABbCBQBgNc2yjAjsQ8AFykBYB/+rQsYb+r32wLGST2161/VIj3v7pf5iQAA8AoFPwDAa5ukbLJylcczEnuLlPCvb2GeZf0Oz6OUMHGaEiBO8zRgXL7+vkV6nuTPej2zJP8nWp4BAGBvAkUA4C3rjOX5iJMN9UcfMN5m2IBlU8C4vIJxks0BY2vFvknyl6cIAACeV+gDALyHcUrA2K8wHG+oR+Z52iL9koCxXe4hyfcMbdUAAMAeBIoAwKG0gHF5h+e3CBgv6tcPKUGiHZ4BAOCZBIoAwLF4TsC43CI9z+aAcRRBIgAAvIhAEQA4Vm0DluUdnrcFjHfdSXgIAACvTKAIAJyKVQHjZMP5/zclVAQAAF7RmYcAADgR85TW5tv6/SSrW6STMlvxwUMGAACvzwpFAOCj6Hd4TpJ/PCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALyR/wfLDk4h98c2kgAAAABJRU5ErkJggg==")}.drop-text{font-size:1rem;margin-top:8px;width:85%;overflow:hidden;text-overflow:ellipsis;text-align:center}.drop.dropHover{background-image:url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%230071dc' stroke-width='4' stroke-dasharray='6%2c 10' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e")}`,vi=t=>{class i extends t{constructor(){super(...arguments),this.dragOver=!1}onDragOver(e){e.stopPropagation(),e.preventDefault(),this.dragOver=!0}onDragLeave(e){e.stopPropagation(),e.preventDefault(),this.dragOver=!1}onDrop(){this.dragOver=!1}}return o([e({type:Boolean})],i.prototype,"dragOver",void 0),i};class Ai extends(vi(h)){render(){return a` <div
      class="drop ${D({disabled:!!this.disabled,dropHover:this.dragOver&&!this.disabled})}"
      @dragover=${this.onDragOver}
      @dragleave=${this.onDragLeave}
      @drop=${this.onDrop}
    >
      <div class="drop-container">
        <slot name="drop-icon"></slot>
        <span class="drop-text">
          <slot name="drop-text"></slot>
        </span>
        <span class="description">${this.description}</span>
      </div>
    </div>`}}o([e({type:String})],Ai.prototype,"description",void 0),o([e({type:Boolean})],Ai.prototype,"disabled",void 0);let wi=class extends Ai{};wi.styles=_i,wi=o([l("exmg-upload-drop-area")],wi);class xi extends h{constructor(){super(...arguments),this.files=[],this.accept="",this.maxSize="100mb",this.multiple=!1,this.disabled=!1,this.responseType="json",this.serverType="xhr",this.cropperConfig={},this._cropperConfig={modal:!0,center:!0,dragMode:"move",movable:!0,scalable:!0,guides:!0,zoomOnWheel:!0,cropBoxMovable:!0,wheelZoomRatio:.1},this._isCropping=!1,this.isModeDialog=!1,this._uploaded=!1,this.allowCropping=!1}getValues(){return this.files.filter((e=>"UPLOADED"===e.status)).map((e=>e.url))}_getFiles(e){var t;const{files:i}=null!==(t="drop"===e.type?e.dataTransfer:e.target)&&void 0!==t?t:{};return Array.from(null!=i?i:[])}reset(){this._uploaded=!1,this.files=[],this.cancelActiveCrop()}prepareFiles(e){const t=e.map((e=>({id:(Date.now()+Math.random()).toString(36),file:e,status:"UPLOADING"})));for(const e of t)this._validateFile(e),this.files=[...this.files,e];this.fire("files-changed",{files:this.files},!0),this._uploaded=!0,this.fileElement&&(this.fileElement.value="")}async _handleChange(e){if(e.preventDefault(),this.disabled)return;const t=this._getFiles(e);this.prepareFiles(t)}async _validateFile(e){((e,t)=>{const i=t.split(/^([\d.]+)\s*(b|kb|mb|gb)$/i).filter((e=>e));if(!i)throw new Error("Invalid max size set");const r=["B","KB","MB","GB"].indexOf(i[1].toUpperCase());return+i[0]*Math.pow(1024,r)>e})(e.file.size,this.maxSize)||this._handleError(z.INVALID_SIZE,e),((e,t)=>{var i;const r=new Set(t.split(",")),n=/\.[^.]+$/,o=e.name,s=e.type,a=n.test(o),[l]=a?null!==(i=n.exec(o))&&void 0!==i?i:[]:[void 0];return r.has(s)||l&&r.has(l)})(e.file,this.accept||"")||this._handleError(z.INVALID_TYPE,e),this.maxAmount&&this.files.length>=this.maxAmount&&this._handleError(z.INVALID_AMOUNT,e),!this.multiple&&this.files.length>=1&&this._handleError(z.INVALID_MULTIPLE,e);if(ue(e.file)&&this.fixedResolution){const t=await((e,t)=>{if(2!==t.split("x").length)throw new Error('Incorrect fixed resultion format, should be formatted like "600x400"');const[i,r]=t.split("x"),n=new Image;return new Promise(((t,o)=>{n.onload=()=>{const e=n.naturalWidth===parseInt(i,10)&&n.naturalHeight===parseInt(r,10);t(e),URL.revokeObjectURL(n.src)};const s=URL.createObjectURL(e);n.src=s,n.onerror=()=>{URL.revokeObjectURL(n.src),o(new Error("Error reading aspect ratio"))}}))})(e.file,this.fixedResolution);t||this._handleError(z.INVALID_RESOLUTION,e)}}_handleCropping(e){const t=e.detail;this._isCropping=!0,setTimeout((()=>{var e;return null===(e=this.cropSection)||void 0===e?void 0:e.crop(t)}))}removeFile(e){this.files=this.files.filter((t=>t.id!==e)),this.fire("file-removed",e),this.fire("files-changed",{files:this.files},!0)}_handleRemove(e){const t=e.detail;this.removeFile(t)}async _handleCropDone(e){this._isCropping=!1;const t=e.detail;this.removeFile(null==t?void 0:t.id),this.prepareFiles([t.file]),this.fire("crop-done",e.detail)}cancelActiveCrop(){this._isCropping=!1,this.fire("crop-cancel",{},!0)}saveActiveCrop(){var e;null===(e=this.cropSection)||void 0===e||e.saveCropArea()}_handleError(e,t){t.invalid=!0,t.status="INVALID",t.error=e}openFileSelector(){var e;const t=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelector("#file");t&&t.click()}renderDescription(){const{accept:e,maxSize:t,fixedResolution:i}=this;return`Only ${e?e.replace(/,/g," "):""} files${i?` of resolution ${i} px`:""} that do not exceed ${t} in size`}renderFileItems(){return R(this.files||[],(e=>e.id),(e=>a`<exmg-upload-item
          class="item"
          id=${e.id}
          @edit-image=${this._handleCropping}
          @remove-item=${this._handleRemove}
          uploadUrl=${_(this.uploadUrl)}
          customAdapterPath=${_(this.customAdapterPath)}
          serverType=${this.serverType}
          responseType=${this.responseType}
          ?allowCropping=${!this.fixedResolution&&this.allowCropping}
          .item=${e}
        ></exmg-upload-item>`))}renderUploadCrop(){const{_cropperConfig:e}=this;return a`
      <exmg-upload-crop
        id="crop-dialog"
        ?hideActions=${this.isModeDialog}
        @crop-done=${this._handleCropDone}
        @crop-cancel=${this.cancelActiveCrop}
        .cropperConfig=${e}
      ></exmg-upload-crop>
    `}renderUploadDropArea(){const{disabled:e}=this;return a`
      <exmg-upload-drop-area
        description=${this.renderDescription()}
        ?disabled=${e}
        @browse-files=${this.openFileSelector}
        @remove-file=${this._handleRemove}
        @drop=${this._handleChange}
      >
        <slot slot="drop-icon" name="drop-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24">
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <path
                d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"
              />
            </g>
          </svg>
        </slot>
        <slot slot="drop-text" name="drop-text"
          >Drag and drop, or <a href="#" @click=${this.openFileSelector}>browse</a> your files</slot
        >
      </exmg-upload-drop-area>
    `}render(){const{_isCropping:e,accept:t,disabled:i}=this;return e?this.renderUploadCrop():a`
      <div class="image-upload-wrapper ${D({disabled:!!this.disabled})}">
        ${this.renderUploadDropArea()}

        <form id="form-upload" enctype="multipart/form-data">
          <input
            id="file"
            type="file"
            name="file"
            tabindex="-1"
            accept=${_(t)}
            ?disabled=${i}
            @change=${this._handleChange}
            ?multiple=${this.multiple}
            hidden
          />
        </form>
      </div>

      <!-- Upload Items list -->
      <div class="item-container">${this.renderFileItems()}</div>
    `}}o([e({type:Array})],xi.prototype,"files",void 0),o([e({type:String})],xi.prototype,"accept",void 0),o([e({type:String})],xi.prototype,"maxSize",void 0),o([e({type:Boolean})],xi.prototype,"multiple",void 0),o([e({type:Number})],xi.prototype,"maxAmount",void 0),o([e({type:Boolean})],xi.prototype,"disabled",void 0),o([e({type:String})],xi.prototype,"customAdapterPath",void 0),o([e({type:String})],xi.prototype,"uploadUrl",void 0),o([e({type:String})],xi.prototype,"responseType",void 0),o([e({type:String})],xi.prototype,"serverType",void 0),o([e({type:Object}),oe((function(e){this._cropperConfig=Object.assign(Object.assign({},this._cropperConfig),e)}))],xi.prototype,"cropperConfig",void 0),o([u()],xi.prototype,"_cropperConfig",void 0),o([u()],xi.prototype,"_isCropping",void 0),o([e({type:Boolean})],xi.prototype,"isModeDialog",void 0),o([u()],xi.prototype,"_uploaded",void 0),o([g("#crop-dialog")],xi.prototype,"cropSection",void 0),o([e({type:Boolean})],xi.prototype,"allowCropping",void 0),o([e({type:String})],xi.prototype,"fixedResolution",void 0),o([g("#file")],xi.prototype,"fileElement",void 0),o([g(".item-container")],xi.prototype,"itemContainer",void 0);let Ci=class extends xi{};Ci.styles=y,Ci=o([l("exmg-upload")],Ci);const Pi=t`exmg-button{text-transform:initial;text-transform:none;letter-spacing:.25px;min-width:3.75rem}paper-dialog{border-radius:var(--exmg-dialog-border-radius, 0.5rem);min-width:var(--exmg-dialog-min-width, 31.25rem);box-shadow:var(--shadow-elevation-8dp_-_box-shadow);background:var(--exmg-dialog-background-color, white);color:var(--exmg-dialog-color, #000)}paper-dialog>.actions{margin:1.5rem 0;text-align:right}paper-dialog>header{-webkit-box-flex:0 0 auto;-webkit-flex:0 0 auto;flex:0 0 auto;padding:.25rem 1.5rem 0 1.5rem;display:flex;flex-direction:row}paper-dialog>header>.title{flex:1;flex-basis:.000000001px}paper-dialog>header>paper-icon-button{position:relative;top:-0.5rem}paper-dialog>header>.title{-webkit-flex-shrink:0;flex-shrink:0;color:var(--exmg-dialog-color, #000);font-size:1.25rem;font-weight:500;line-height:1.75rem;margin:0 2rem 1rem 0}paper-dialog{max-width:32rem;box-sizing:border-box}:host([large]) paper-dialog{max-width:50rem;width:100%}paper-dialog>.actions{margin:1.5rem 0 1.5rem}::slotted(hr){border:none;height:1px;background:var(--divider-color);margin:1rem 0 .5rem}:host([submitting]) paper-dialog>.actions{margin:1.5rem 0 1.25rem}p,::slotted(p){font-size:.875rem;line-height:1.25rem;color:var(--exmg-dialog-color, rgba(0, 0, 0, 0.54))}::slotted(label){font-size:.75rem;font-weight:400;height:1.25rem;justify-content:normal;letter-spacing:.12rem;line-height:1.25rem;text-overflow:ellipsis;color:var(--secondary-text-color)}::slotted(p.help){margin-top:-2px;font-size:.8em}.body{margin-top:0px;margin-bottom:1.5rem}paper-dialog>.actions{margin:1.125rem 0 1.125rem}paper-dialog>.actions>*{margin-left:1rem}paper-dialog>.close-button{position:absolute;top:-0.8rem;right:-0.4rem;font-size:1rem;z-index:1;color:var(--mdc-theme-primary)}paper-dialog>.close-button:hover{cursor:pointer;color:var(--secondary-text-color)}:host([submitting]) paper-dialog>.actions{margin:1.125rem 0 .875rem}paper-dialog-scrollable{margin-top:.25rem}.error{display:none;font-size:.875rem;line-height:1.25rem;color:rgba(0,0,0,.54);padding:0}.error>span{display:flex;background-color:#fbe9e7;color:#ff5252;padding:0 0 0 1rem;margin:0 0 .75rem;min-height:3rem;align-items:center;justify-content:center}.error svg{margin-right:.75rem;fill:#ff5252}.error.show{display:block}`
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/,Si=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Oi,Ei;function Ti(e){Oi=(!e||!e.shimcssproperties)&&(Si||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Ei=window.ShadyCSS.cssBuild);const ki=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Oi=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ti(window.ShadyCSS),window.ShadyCSS=void 0):Ti(window.WebComponents&&window.WebComponents.flags);const Ri=Oi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class zi{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Di(e){return Ii(function(e){let t=new zi;t.start=0,t.end=e.length;let i=t;for(let r=0,n=e.length;r<n;r++)if(e[r]===Li){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new zi,i.start=r+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[r]===Bi&&(i.end=r+1,i=i.parent||t);return t}(e=e.replace(Fi.comments,"").replace(Fi.port,"")),e)}function Ii(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let r=e.previous?e.previous.end:e.parent.start;i=t.substring(r,e.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(Fi.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=i.trim();e.atRule=0===n.indexOf(Ui),e.atRule?0===n.indexOf(ji)?e.type=Ni.MEDIA_RULE:n.match(Fi.keyframesRule)&&(e.type=Ni.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Fi.multipleSpaces).pop()):0===n.indexOf(Hi)?e.type=Ni.MIXIN_RULE:e.type=Ni.STYLE_RULE}let r=e.rules;if(r)for(let e,i=0,n=r.length;i<n&&(e=r[i]);i++)Ii(e,t);return e}function Mi(e,t,i=""){let r="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Hi)}(i))for(let e,n=0,o=i.length;n<o&&(e=i[n]);n++)r=Mi(e,t,r);else r=t?e.cssText:function(e){return e=function(e){return e.replace(Fi.customProp,"").replace(Fi.mixinProp,"")}(e),function(e){return e.replace(Fi.mixinApply,"").replace(Fi.varApply,"")}(e)}(e.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+Li+"\n"),i+=r,e.selector&&(i+=Bi+"\n\n")),i}const Ni={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Li="{",Bi="}",Fi={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Hi="--",ji="@media",Ui="@",qi=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Vi=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Xi=/@media\s(.*)/,Yi=new Set,Wi="shady-unscoped";function $i(e){const t=e.textContent;if(!Yi.has(t)){Yi.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Zi(e){return e.hasAttribute(Wi)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ji(e,t){return e?("string"==typeof e&&(e=Di(e)),t&&Gi(e,t),Mi(e,Ri)):""}function Ki(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Di(e.textContent)),e.__cssRules||null}function Gi(e,t,i,r){if(!e)return;let n=!1,o=e.type;if(r&&o===Ni.MEDIA_RULE){let t=e.selector.match(Xi);t&&(window.matchMedia(t[1]).matches||(n=!0))}o===Ni.STYLE_RULE?t(e):i&&o===Ni.KEYFRAMES_RULE?i(e):o===Ni.MIXIN_RULE&&(n=!0);let s=e.rules;if(s&&!n)for(let e,n=0,o=s.length;n<o&&(e=s[n]);n++)Gi(e,t,i,r)}function Qi(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let r=function(e,t){let i=0;for(let r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}(e,i+3),n=e.substring(i+4,r),o=e.substring(0,i),s=Qi(e.substring(r+1),t),a=n.indexOf(",");return-1===a?t(o,n.trim(),"",s):t(o,n.substring(0,a).trim(),n.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;const er="css-build";function tr(e){if(void 0!==Ei)return Ei;if(void 0===e.__cssBuild){const t=e.getAttribute(er);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===er)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function ir(e){return""!==tr(e)}function rr(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function nr(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const or=/;\s*/m,sr=/^\s*(initial)|(inherit)\s*$/,ar=/\s*!important/,lr="_-_";class dr{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let cr=null;class pr{constructor(){this._currentElement=null,this._measureElement=null,this._map=new dr}detectMixin(e){return function(e){const t=Vi.test(e)||qi.test(e);return Vi.lastIndex=0,qi.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const r=i[e];Zi(r)?Si||($i(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Ki(e);return this.transformRules(i,t),e.textContent=Ji(i),i}transformCustomStyle(e){let t=Ki(e);return Gi(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=Ji(t),t}transformRules(e,t){this._currentElement=t,Gi(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(qi,((e,i,r,n)=>this._produceCssProperties(e,i,r,n,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let r=!1;return Gi(t,(t=>{r=r||t===e,r||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))})),i}_consumeCssProperties(e,t){let i=null;for(;i=Vi.exec(e);){let r=i[0],n=i[1],o=i.index,s=o+r.indexOf("@apply"),a=o+r.length,l=e.slice(0,s),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let p=this._atApplyToCssProperties(n,c);e=`${l}${p}${d}`,Vi.lastIndex=o+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(or,"");let i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){let n,o,s;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(n in a)s=t&&t[n],o=[n,": var(",e,lr,n],s&&o.push(",",s.replace(ar,"")),o.push(")"),ar.test(a[n])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=sr.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,r,n=e.split(";"),o={};for(let e,s,a=0;a<n.length;a++)e=n[a],e&&(s=e.split(":"),s.length>1&&(i=s[0].trim(),r=s.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(i,r)),o[i]=r));return o}_invalidateMixinEntry(e){if(cr)for(let t in e.dependants)t!==this._currentElement&&cr(t)}_produceCssProperties(e,t,i,r,n){if(i&&Qi(i,((e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)})),!r)return e;let o=this._consumeCssProperties(""+r,n),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let p,h,u=[],f=!1;for(p in l)h=a[p],void 0===h&&(h="initial"),c&&!(p in c)&&(f=!0),u.push(`${t}${lr}${p}: ${h}`);return f&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(s=`${e};${s}`),`${s}${u.join("; ")};`}}pr.prototype.detectMixin=pr.prototype.detectMixin,pr.prototype.transformStyle=pr.prototype.transformStyle,pr.prototype.transformCustomStyle=pr.prototype.transformCustomStyle,pr.prototype.transformRules=pr.prototype.transformRules,pr.prototype.transformRule=pr.prototype.transformRule,pr.prototype.transformTemplate=pr.prototype.transformTemplate,pr.prototype._separator=lr,Object.defineProperty(pr.prototype,"invalidCallback",{get:()=>cr,set(e){cr=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const hr={},ur="_applyShimCurrentVersion",fr="_applyShimNextVersion",mr="_applyShimValidatingVersion",gr=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function br(e){let t=hr[e];t&&function(e){e[ur]=e[ur]||0,e[mr]=e[mr]||0,e[fr]=(e[fr]||0)+1}(t)}function yr(e){return e[ur]===e[fr]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let _r,vr=null,Ar=window.HTMLImports&&window.HTMLImports.whenReady||null;function wr(e){requestAnimationFrame((function(){Ar?Ar(e):(vr||(vr=new Promise((e=>{_r=e})),"complete"===document.readyState?_r():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&_r()}))),vr.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xr="__seenByShadyCSS",Cr="__shadyCSSCachedStyle";let Pr=null,Sr=null;class Or{constructor(){this.customStyles=[],this.enqueued=!1,wr((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&Sr&&(this.enqueued=!0,wr(Sr))}addCustomStyle(e){e[xr]||(e[xr]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Cr])return e[Cr];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[Cr])continue;const r=this.getStyleForCustomStyle(i);if(r){const e=r.__appliedElement||r;Pr&&Pr(e),i[Cr]=e}}return e}}Or.prototype.addCustomStyle=Or.prototype.addCustomStyle,Or.prototype.getStyleForCustomStyle=Or.prototype.getStyleForCustomStyle,Or.prototype.processStyles=Or.prototype.processStyles,Object.defineProperties(Or.prototype,{transformCallback:{get:()=>Pr,set(e){Pr=e}},validateCallback:{get:()=>Sr,set(e){let t=!1;Sr||(t=!0),Sr=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Er=new pr;class Tr{constructor(){this.customStyleInterface=null,Er.invalidCallback=br}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Er.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),ir(e))return;hr[t]=e;let i=Er.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&Er.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&rr(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}(e),i=hr[t];if((!i||!ir(i))&&i&&!yr(i)){(function(e){return!yr(e)&&e[mr]===e[fr]})(i)||(this.prepareTemplate(i,t),function(e){e[mr]=e[fr],e._validating||(e._validating=!0,gr.then((function(){e[ur]=e[fr],e._validating=!1})))}(i));let r=e.shadowRoot;if(r){let e=r.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=Ji(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Tr;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,r){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>nr(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Ri,nativeShadow:Si,cssBuild:Ei,disableRuntime:ki},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Er,
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
let kr,Rr,zr=/(url\()([^)]*)(\))/g,Dr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Ir(e,t){if(e&&Dr.test(e))return e;if("//"===e)return e;if(void 0===kr){kr=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",kr="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),kr)try{return new URL(e,t).href}catch(t){return e}return Rr||(Rr=document.implementation.createHTMLDocument("temp"),Rr.base=Rr.createElement("base"),Rr.head.appendChild(Rr.base),Rr.anchor=Rr.createElement("a"),Rr.body.appendChild(Rr.anchor)),Rr.base.href=t,Rr.anchor.href=e,Rr.anchor.href||e}function Mr(e,t){return e.replace(zr,(function(e,i,r,n){return i+"'"+Ir(r.replace(/["']/g,""),t)+"'"+n}))}function Nr(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Lr=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Br=Lr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let Fr=window.Polymer&&window.Polymer.rootPath||Nr(document.baseURI||window.location.href),Hr=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,jr=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Ur=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,qr=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Vr=window.Polymer&&window.Polymer.legacyOptimizations||!1,Xr=window.Polymer&&window.Polymer.legacyWarnings||!1,Yr=window.Polymer&&window.Polymer.syncInitialRender||!1,Wr=window.Polymer&&window.Polymer.legacyUndefined||!1,$r=window.Polymer&&window.Polymer.orderedComputed||!1,Zr=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Jr=window.Polymer&&window.Polymer.fastDomIf||!1,Kr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Gr=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Qr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,en=0;const tn=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=en++;return function(r){let n=r.__mixinSet;if(n&&n[i])return r;let o=t,s=o.get(r);if(!s){s=e(r),o.set(r,s);let t=Object.create(s.__mixinSet||n||null);t[i]=!0,s.__mixinSet=t}return s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let rn={},nn={};function on(e,t){rn[e]=nn[e.toLowerCase()]=t}function sn(e){return rn[e]||nn[e.toLowerCase()]}class an extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=sn(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,r){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Ir(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Nr(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Ur&&void 0!==sn(e))throw on(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,on(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}an.prototype.modules=rn,customElements.define("dom-module",an);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ln="link[rel=import][type~=css]",dn="include",cn="shady-unscoped";function pn(e){return an.import(e)}function hn(e){const t=Mr((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function un(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...fn(t[e]));return i}function fn(e){const t=pn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...gn(t));const i=t.querySelector("template");i&&e.push(...mn(i,t.assetpath)),t._styles=e}return t._styles}function mn(e,t){if(!e._styles){const i=[],r=e.content.querySelectorAll("style");for(let e=0;e<r.length;e++){let n=r[e],o=n.getAttribute(dn);o&&i.push(...un(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(n.textContent=Mr(n.textContent,t)),i.push(n)}e._styles=i}return e._styles}function gn(e){const t=[],i=e.querySelectorAll(ln);for(let e=0;e<i.length;e++){let r=i[e];if(r.import){const e=r.import,i=r.hasAttribute(cn);if(i&&!e._unscopedStyle){const t=hn(e);t.setAttribute(cn,""),e._unscopedStyle=t}else e._style||(e._style=hn(e));t.push(i?e._unscopedStyle:e._style)}}return t}function bn(e){let t=pn(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=gn(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const r=mn(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const yn=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _n(e){return e.indexOf(".")>=0}function vn(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function An(e,t){return 0===e.indexOf(t+".")}function wn(e,t){return 0===t.indexOf(e+".")}function xn(e,t,i){return t+i.slice(e.length)}function Cn(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let r=e[i].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function Pn(e){return Array.isArray(e)?Cn(e).split("."):e.toString().split(".")}function Sn(e,t,i){let r=e,n=Pn(t);for(let e=0;e<n.length;e++){if(!r)return;r=r[n[e]]}return i&&(i.path=n.join(".")),r}function On(e,t,i){let r=e,n=Pn(t),o=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(r=r[n[e]],!r)return}r[o]=i}else r[t]=i;return n.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const En={},Tn=/-[a-z]/g,kn=/([A-Z])/g;function Rn(e){return En[e]||(En[e]=e.indexOf("-")<0?e:e.replace(Tn,(e=>e[1].toUpperCase())))}function zn(e){return En[e]||(En[e]=e.replace(kn,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Dn=0,In=0,Mn=[],Nn=0,Ln=!1,Bn=document.createTextNode("");new window.MutationObserver((function(){Ln=!1;const e=Mn.length;for(let t=0;t<e;t++){let e=Mn[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}Mn.splice(0,e),In+=e})).observe(Bn,{characterData:!0});const Fn={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Hn={run:e=>(Ln||(Ln=!0,Bn.textContent=Nn++),Mn.push(e),Dn++),cancel(e){const t=e-In;if(t>=0){if(!Mn[t])throw new Error("invalid async handle: "+e);Mn[t]=null}}},jn=Hn,Un=tn((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,jn.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const r=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=yn(e)),void 0===r?e.removeAttribute(i):e.setAttribute(i,""===r&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),qn={};let Vn=HTMLElement.prototype;for(;Vn;){let e=Object.getOwnPropertyNames(Vn);for(let t=0;t<e.length;t++)qn[e[t]]=!0;Vn=Object.getPrototypeOf(Vn)}const Xn=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;const Yn=tn((e=>{const t=Un(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Rn(e[t]))}static attributeNameForProperty(e){return zn(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e){if(Xn(e))return e;try{return JSON.stringify(e)}catch(e){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!qn[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Wn={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let $n=!1,Zn=!1;function Jn(e){(function(){if(!$n){$n=!0;const e=document.createElement("textarea");e.placeholder="a",Zn=e.placeholder===e.textContent}return Zn})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Kn=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,i,r)=>{const n=i.getAttribute(r);e&&r.startsWith("on-")?t.setAttribute(r,e.createScript(n,r)):t.setAttribute(r,n)}})();function Gn(e){let t=e.getAttribute("is");if(t&&Wn[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:t}=i.attributes[0];Kn(e,i,t),i.removeAttribute(t)}}return e}function Qn(e,t){let i=t.parentInfo&&Qn(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}function eo(e,t,i,r){r.id&&(t[r.id]=i)}function to(e,t,i){if(i.events&&i.events.length)for(let r,n=0,o=i.events;n<o.length&&(r=o[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function io(e,t,i,r){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=r)}const ro=tn((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let r=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,Jn(n),n.firstChild&&this._parseTemplateChildNodes(n,t,i),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let r,n=e.firstChild,o=0;n;n=r){if("template"==n.localName&&(n=Gn(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,r=i.nextSibling,e.removeChild(i),i=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(n,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),n.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let r=e,n=this._parseTemplate(r,t);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let r=!1,n=Array.from(e.attributes);for(let o,s=n.length-1;o=n[s];s--)r=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let o=n.nodeList=new Array(i.length);n.$={};for(let e,r=0,s=i.length;r<s&&(e=i[r]);r++){let i=o[r]=Qn(n,e);eo(0,n.$,i,e),io(0,i,e,t),to(this,i,e)}return n}_addMethodEventListenerToNode(e,t,i,r){let n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));
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
 */let no=0;const oo=[],so={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ao="__computeInfo",lo=/[A-Z]/;function co(e,t,i){let r=e[t];if(r){if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),i))for(let e in r){let t=r[e],i=r[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else r=e[t]={};return r}function po(e,t,i,r,n,o){if(t){let s=!1;const a=no++;for(let l in i){let d=t[n?vn(l):l];if(d)for(let t,c=0,p=d.length;c<p&&(t=d[c]);c++)t.info&&t.info.lastRun===a||n&&!uo(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,r,t.info,n,o),s=!0)}return s}return!1}function ho(e,t,i,r,n,o,s,a){let l=!1,d=t[s?vn(r):r];if(d)for(let t,c=0,p=d.length;c<p&&(t=d[c]);c++)t.info&&t.info.lastRun===i||s&&!uo(r,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,r,n,o,t.info,s,a),l=!0);return l}function uo(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!An(i,e))||!(!t.wildcard||!wn(i,e))}return!0}function fo(e,t,i,r,n){let o="string"==typeof n.method?e[n.method]:n.method,s=n.property;o?o.call(e,e.__data[s],r[s]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function mo(e,t,i){let r=vn(t);if(r!==t){return go(e,zn(r)+"-changed",i[t],t),!0}return!1}function go(e,t,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),yn(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function bo(e,t,i,r,n,o){let s=(o?vn(t):t)!=t?t:null,a=s?Sn(e,s):e.__data[t];s&&void 0===a&&(a=i[t]),go(e,n.eventName,a,s)}function yo(e,t,i,r,n){let o=e.__data[t];Hr&&(o=Hr(o,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,o)}function _o(e,t,i,r){let n=e[so.COMPUTE];if(n)if($r){no++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[so.COMPUTE];let r,{counts:n,ready:o,total:s}=function(e){const t=e[ao],i={},r=e[so.COMPUTE],n=[];let o=0;for(let e in t){const r=t[e];o+=i[e]=r.args.filter((e=>!e.literal)).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||n.push(e);return{counts:i,ready:n,total:o}}(e);for(;r=o.shift();){t.set(r,t.size);const e=i[r];e&&e.forEach((e=>{const t=e.info.methodInfo;--s,0==--n[t]&&o.push(t)}))}if(0!==s){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),s=[];for(let e in t)Ao(e,n,s,o,r);let a;for(;a=s.shift();)wo(e,"",t,i,a)&&Ao(a.methodInfo,n,s,o,r);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;po(e,n,o,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const vo=(e,t,i)=>{let r=0,n=t.length-1,o=-1;for(;r<=n;){const s=r+n>>1,a=i.get(t[s].methodInfo)-i.get(e.methodInfo);if(a<0)r=s+1;else{if(!(a>0)){o=s;break}n=s-1}}o<0&&(o=n+1),t.splice(o,0,e)},Ao=(e,t,i,r,n)=>{const o=t[n?vn(e):e];if(o)for(let t=0;t<o.length;t++){const s=o[t];s.info.lastRun===no||n&&!uo(e,s.trigger)||(s.info.lastRun=no,vo(s.info,i,r))}};function wo(e,t,i,r,n){let o=To(e,t,i,r,n);if(o===oo)return!1;let s=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):(e[s]=o,!1)}function xo(e,t,i,r,n,o,s){i.bindings=i.bindings||[];let a={kind:r,target:n,parts:o,literal:s,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||zn(n)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,Co(e,t,a,r,l)}}function Co(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,s={index:n,binding:i,part:r,evaluator:e};for(let i=0;i<o.length;i++){let r=o[i];"string"==typeof r&&(r=No(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Po,info:s,trigger:r})}}}function Po(e,t,i,r,n,o,s){let a=s[n.index],l=n.binding,d=n.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[t];t=xn(d.source,l.target,t),a._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(a)}else{let s=n.evaluator._evaluateBinding(e,d,t,i,r,o);s!==oo&&function(e,t,i,r,n){n=function(e,t,i,r){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,r),Hr&&(n=Hr(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[so.READ_ONLY]&&t[so.READ_ONLY][r]||t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}(e,a,l,d,s)}}function So(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length);for(let e=0;e<r.length;e++)n[e]=r[e].literal;let o=t.target;i[o]=n,t.literal&&"property"==t.kind&&("className"===o&&(e=yn(e)),e[o]=t.literal)}}function Oo(e,t,i){if(i.listenerEvent){let r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){let o,s=e.detail,a=s&&s.path;a?(r=xn(i,r,a),o=s&&s.value):o=e.currentTarget[i],o=n?!o:o,t[so.READ_ONLY]&&t[so.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,o,!0,Boolean(a))||s&&s.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function Eo(e,t,i,r,n,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:o};for(let n,o=0;o<t.args.length&&(n=t.args[o]);o++)n.literal||e._addPropertyEffect(n.rootProperty,i,{fn:r,info:s,trigger:n});return o&&e._addPropertyEffect(t.methodName,i,{fn:r,info:s}),s}function To(e,t,i,r,n){let o=e._methodHost||e,s=o[n.methodName];if(s){let r=e._marshalArgs(n.args,t,i);return r===oo?oo:s.apply(o,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const ko=[],Ro="(?:[a-zA-Z_$][\\w.:$\\-*]*)",zo="(?:("+Ro+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",Do=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+Ro+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+zo+"(?:,\\s*"+zo+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function Io(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function Mo(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ko};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=No(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function No(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=vn(t),i.structured=_n(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Lo(e,t,i){let r=Sn(e,i);return void 0===r&&(r=t[i]),r}function Bo(e,t,i,r){const n={indexSplices:r};Wr&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),Wr&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function Fo(e,t,i,r,n,o){Bo(e,t,i,[{index:r,addedCount:n,removed:o,object:t,type:"splice"}])}const Ho=tn((e=>{const t=ro(Yn(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return so}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(jo.length){let e=jo[jo.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[so.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==so.READ_ONLY);let r=co(this,t,!0)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){let r=co(this,t,!0)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,so.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,so.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,so.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,so.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||vn(Array.isArray(e)?e[0]:e)!==e){if(!r){let i=Sn(this,e);if(!(e=On(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let r=e.__dataLinkedPaths;if(r){let n;for(let o in r){let s=r[o];wn(o,t)?(n=xn(o,s,t),e._setPendingPropertyOrPath(n,i,!0,!0)):wn(s,t)&&(n=xn(s,o,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=yn(e)),e[t]=i)}_setPendingProperty(e,t,i){let r=this.__dataHasPaths&&_n(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[so.NOTIFY]&&this[so.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[so.READ_ONLY]&&this[so.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let r,n=this.__dataHasPaths;this.__dataHasPaths=!1,_o(this,t,i,n),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),po(this,this[so.REFLECT],t,i,n),po(this,this[so.OBSERVE],t,i,n),r&&function(e,t,i,r,n){let o,s,a=e[so.NOTIFY],l=no++;for(let s in t)t[s]&&(a&&ho(e,a,l,s,i,r,n)||n&&mo(e,s,i))&&(o=!0);o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[so.PROPAGATE]&&po(this,this[so.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,r){const n=(t,r)=>{po(this,e.propertyEffects,t,i,r,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,i,r)};e.runEffects?e.runEffects(n,t,r):n(t,r)}linkPaths(e,t){e=Cn(e),t=Cn(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Cn(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Bo(this,Sn(this,e,i),i.path,t)}get(e,t){return Sn(t||this,e)}set(e,t,i){i?On(i,e,t):this[so.READ_ONLY]&&this[so.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},r=Sn(this,e,i),n=r.length,o=r.push(...t);return t.length&&Fo(this,r,i.path,n,t.length,[]),o}pop(e){let t={path:""},i=Sn(this,e,t),r=Boolean(i.length),n=i.pop();return r&&Fo(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){let n,o={path:""},s=Sn(this,e,o);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?s.splice(t):s.splice(t,i,...r),(r.length||n.length)&&Fo(this,s,o.path,t,r.length,n),n}shift(e){let t={path:""},i=Sn(this,e,t),r=Boolean(i.length),n=i.shift();return r&&Fo(this,i,t.path,0,0,[n]),n}unshift(e,...t){let i={path:""},r=Sn(this,e,i),n=r.unshift(...t);return t.length&&Fo(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){let i;if(1==arguments.length){let r={path:""};t=Sn(this,e,r),i=r.path}else i=Array.isArray(e)?Cn(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,so.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,so.OBSERVE,{fn:fo,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,so.OBSERVE,{fn:fo,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let i=Mo(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Eo(this,i,so.OBSERVE,To,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,so.NOTIFY,{fn:bo,info:{eventName:zn(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,so.REFLECT,{fn:yo,info:{attrName:t}})}_createComputedProperty(e,t,i){let r=Mo(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");const n=Eo(this,r,so.COMPUTE,wo,e,i);co(this,ao)[e]=n}_marshalArgs(e,t,i){const r=this.__data,n=[];for(let o=0,s=e.length;o<s;o++){let{name:s,structured:a,wildcard:l,value:d,literal:c}=e[o];if(!c)if(l){const e=wn(s,t),n=Lo(r,i,e?t:s);d={path:e?t:s,value:n,base:e?Sn(r,s):n}}else d=a?Lo(r,i,s):r[s];if(Wr&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return oo;n[o]=d}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==i;if(!r)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),jo.push(this);let i=super._stampTemplate(e,t);if(jo.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let n=r[t],o=i[t],s=n.bindings;if(s)for(let t=0;t<s.length;t++){let i=s[t];So(o,i),Oo(o,e,i)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:r,parent:n}=t;i?i.nextSibling=r:n&&(n.firstChild=r),r?r.previousSibling=i:n&&(n.lastChild=i),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];yn(yn(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,r){let n=t._parseTemplateNode.call(this,e,i,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Io(t)||" ",xo(this,i,r,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,r,n,o){let s=this._parseBindings(o,i);if(s){let t=n,o="property";lo.test(n)?o="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),o="attribute");let a=Io(s);return a&&"attribute"==o&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(n=Rn(n)),xo(this,i,r,o,n,s,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,r,n,o)}static _parseTemplateNestedTemplate(e,i,r){let n=t._parseTemplateNestedTemplate.call(this,e,i,r);const o=e.parentNode,s=r.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;Zr&&(a||l)&&(o.removeChild(e),(r=r.parentInfo).templateInfo=s,r.noted=!0,n=!1);let d=s.hostProps;if(Jr&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),Zr||(r.parentInfo.noted=!0));else{let e="{";for(let t in d){xo(this,i,r,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return n}static _parseBindings(e,t){let i,r=[],n=0;for(;null!==(i=Do.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});let o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let p=Mo(a),h=[];if(p){let{args:e,methodName:i}=p;for(let t=0;t<e.length;t++){let i=e[t];i.literal||h.push(i)}let r=t.dynamicFns;(r&&r[i]||p.static)&&(h.push(i),p.dynamicFn=!0)}else h.push(a);r.push({source:a,mode:o,negate:s,customEvent:l,signature:p,dependencies:h,event:d}),n=Do.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,o){let s;return s=t.signature?To(e,i,r,0,t.signature):i!=t.source?Sn(e,t.source):o&&_n(i)?Sn(e,i):e.__data[i],t.negate&&(s=!s),s}}})),jo=[];const Uo=tn((e=>{const t=Un(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),qo=window.ShadyCSS&&window.ShadyCSS.cssBuild,Vo=tn((e=>{const t=Uo(Ho(e));function i(e,t,i,r){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,r)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,r[i.observer]),e._addPropertyToAttributeMap(t)}function r(e,t,i,r){if(!qo){const n=t.content.querySelectorAll("style"),o=mn(t),s=function(e){let t=pn(e);return t?gn(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<s.length;i++){let n=s[i];n.textContent=e._processStyleText(n.textContent,r),t.content.insertBefore(n,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],s=n[l];s!==i?(i=i.cloneNode(!0),s.parentNode.insertBefore(i,s)):l++,i.textContent=e._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),Qr&&qo&&Br){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Vr||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!Ur||qr)&&(t=an.import(e,"template"),Ur&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Nr(e.url);else{const e=an.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Fr,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Mr(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;r(this,t,e,i?Ir(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=yn(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Yr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Ir(this.importPath)),Ir(e,t)}static _parseTemplateContent(e,i,r){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,r)}static _addTemplatePropertyEffect(e,i,r){return!Xr||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,r)}}}));
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
class Xo{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Yo.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Yo.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Xo?e._cancelAsync():e=new Xo,e.setConfig(t,i),e}}let Yo=new Set;const Wo=function(e){Yo.add(e)},$o=function(){const e=Boolean(Yo.size);return Yo.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Zo="string"==typeof document.head.style.touchAction,Jo="__polymerGestures",Ko="__polymerGesturesHandled",Go="__polymerGesturesTouchAction",Qo=["mousedown","mousemove","mouseup","click"],es=[0,1,4,2],ts=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function is(e){return Qo.indexOf(e)>-1}let rs=!1;function ns(e){if(!is(e)&&"touchend"!==e)return Zo&&rs&&jr?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){rs=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let os=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const ss=[],as={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ls={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function ds(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let i=e.getRootNode();if(e.id){let r=i.querySelectorAll(`label[for = '${e.id}']`);for(let e=0;e<r.length;e++)t.push(r[e])}}catch(e){}}return t}let cs=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Ko]={skip:!0},"click"===e.type)){let t=!1,r=gs(e);for(let e=0;e<r.length;e++){if(r[e].nodeType===Node.ELEMENT_NODE)if("label"===r[e].localName)ss.push(r[e]);else if(i=r[e],as[i.localName]){let i=ds(r[e]);for(let e=0;e<i.length;e++)t=t||ss.indexOf(i[e])>-1}if(r[e]===us.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function ps(e){let t=os?["click"]:Qo;for(let i,r=0;r<t.length;r++)i=t[r],e?(ss.length=0,document.addEventListener(i,cs,!0)):document.removeEventListener(i,cs,!0)}function hs(e){let t=e.type;if(!is(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!ts&&(t=es[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let us={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function fs(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function ms(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){us.mouse.mouseIgnoreJob||ps(!0),us.mouse.target=gs(e)[0],us.mouse.mouseIgnoreJob=Xo.debounce(us.mouse.mouseIgnoreJob,Fn.after(2500),(function(){ps(),us.mouse.target=null,us.mouse.mouseIgnoreJob=null}))}),!!rs&&{passive:!0});const gs=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],bs={},ys=[];function _s(e){const t=gs(e);return t.length>0?t[0]:e.target}function vs(e){let t,i=e.type,r=e.currentTarget[Jo];if(!r)return;let n=r[i];if(n){if(!e[Ko]&&(e[Ko]={},"touch"===i.slice(0,5))){let t=e.changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(us.touch.id=t.identifier),us.touch.id!==t.identifier)return;Zo||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)us.touch.x=t.clientX,us.touch.y=t.clientY,us.touch.scrollDecided=!1;else if("touchmove"===i){if(us.touch.scrollDecided)return;us.touch.scrollDecided=!0;let i=function(e){let t="auto",i=gs(e);for(let e,r=0;r<i.length;r++)if(e=i[r],e[Go]){t=e[Go];break}return t}(e),r=!1,n=Math.abs(us.touch.x-t.clientX),o=Math.abs(us.touch.y-t.clientY);e.cancelable&&("none"===i?r=!0:"pan-x"===i?r=o>n:"pan-y"===i&&(r=n>o)),r?e.preventDefault():Ss("track")}}(e)}if(t=e[Ko],!t.skip){for(let i,r=0;r<ys.length;r++)i=ys[r],n[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let r,o=0;o<ys.length;o++)r=ys[o],n[r.name]&&!t[r.name]&&(t[r.name]=!0,r[i](e))}}}function As(e,t,i){return!!bs[t]&&(function(e,t,i){let r=bs[t],n=r.deps,o=r.name,s=e[Jo];s||(e[Jo]=s={});for(let t,i,r=0;r<n.length;r++)t=n[r],os&&is(t)&&"click"!==t||(i=s[t],i||(s[t]=i={_count:0}),0===i._count&&e.addEventListener(t,vs,ns(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),r.touchAction&&Cs(e,r.touchAction)}(e,t,i),!0)}function ws(e,t,i){return!!bs[t]&&(function(e,t,i){let r=bs[t],n=r.deps,o=r.name,s=e[Jo];if(s)for(let t,i,r=0;r<n.length;r++)t=n[r],i=s[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,vs,ns(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function xs(e){ys.push(e);for(let t=0;t<e.emits.length;t++)bs[e.emits[t]]=e}function Cs(e,t){Zo&&e instanceof HTMLElement&&Hn.run((()=>{e.style.touchAction=t})),e[Go]=t}function Ps(e,t,i){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,yn(e).dispatchEvent(r),r.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Ss(e){let t=function(e){for(let t,i=0;i<ys.length;i++){t=ys[i];for(let i,r=0;r<t.emits.length;r++)if(i=t.emits[r],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Os(e,t,i,r){t&&Ps(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return Ss(e)}})}function Es(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function Ts(e,t,i){if(!t)return;let r,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,l=0;n&&(r=o.x-n.x,l=o.y-n.y),Ps(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:r,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(e,t),n===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function ks(e,t,i){let r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=_s(i||t);!o||ls[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=_s(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||Ps(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/xs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ms(this.info)},mousedown:function(e){if(!hs(e))return;let t=_s(e),i=this;fs(this.info,(function(e){hs(e)||(Os("up",t,e),ms(i.info))}),(function(e){hs(e)&&Os("up",t,e),ms(i.info)})),Os("down",t,e)},touchstart:function(e){Os("down",_s(e),e.changedTouches[0],e)},touchend:function(e){Os("up",_s(e),e.changedTouches[0],e)}}),xs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ms(this.info)},mousedown:function(e){if(!hs(e))return;let t=_s(e),i=this,r=function(e){let r=e.clientX,n=e.clientY;Es(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Ss("tap"),i.info.addMove({x:r,y:n}),hs(e)||(i.info.state="end",ms(i.info)),t&&Ts(i.info,t,e),i.info.started=!0)};fs(this.info,r,(function(e){i.info.started&&r(e),ms(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=_s(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;Es(this.info,r,n)&&("start"===this.info.state&&Ss("tap"),this.info.addMove({x:r,y:n}),Ts(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=_s(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Ts(this.info,t,i))}}),xs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){hs(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){hs(e)&&ks(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ks(this.info,e.changedTouches[0],e)}});const Rs=tn((e=>class extends e{_addEventListenerToNode(e,t,i){As(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){ws(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),zs=/:host\(:dir\((ltr|rtl)\)\)/g,Ds=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Is=/:dir\((?:ltr|rtl)\)/,Ms=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Ns=[];
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
 */let Ls=null,Bs="";function Fs(){Bs=document.documentElement.getAttribute("dir")}function Hs(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Bs)}}function js(){Fs(),Bs=document.documentElement.getAttribute("dir");for(let e=0;e<Ns.length;e++)Hs(Ns[e])}const Us=tn((e=>{Ms||Ls||(Fs(),Ls=new MutationObserver(js),Ls.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Yn(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Ms&&Is.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(zs,':host([dir="$1"])'),t=t.replace(Ds,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ls&&Ls.takeRecords().length&&js(),Ns.push(this),Hs(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Ns.indexOf(this);e>-1&&Ns.splice(e,1)}}}return i.__activateDir=!1,i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function qs(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Vs(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?qs():window.addEventListener("DOMContentLoaded",qs);const Xs=0,Ys=1,Ws=2,$s=3;function Zs(e,t,i,r,n,o){let s,a=0,l=0,d=Math.min(i-t,o-n);if(0==t&&0==n&&(a=function(e,t,i){for(let r=0;r<i;r++)if(!Ks(e[r],t[r]))return r;return i}(e,r,d)),i==e.length&&o==r.length&&(l=function(e,t,i){let r=e.length,n=t.length,o=0;for(;o<i&&Ks(e[--r],t[--n]);)o++;return o}(e,r,d-a)),n+=a,o-=l,(i-=l)-(t+=a)==0&&o-n==0)return[];if(t==i){for(s=Vs(t,[],0);n<o;)s.removed.push(r[n++]);return[s]}if(n==o)return[Vs(t,[],i-t)];let c=function(e){let t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];for(;t>0||i>0;){if(0==t){n.push(Ws),i--;continue}if(0==i){n.push($s),t--;continue}let o,s=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];o=a<l?a<s?a:s:l<s?l:s,o==s?(s==r?n.push(Xs):(n.push(Ys),r=s),t--,i--):o==a?(n.push($s),t--,r=a):(n.push(Ws),i--,r=l)}return n.reverse(),n}(function(e,t,i,r,n,o){let s=o-n+1,a=i-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<s;i++)for(let o=1;o<a;o++)if(Ks(e[t+o-1],r[n+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,r,n,o));s=void 0;let p=[],h=t,u=n;for(let e=0;e<c.length;e++)switch(c[e]){case Xs:s&&(p.push(s),s=void 0),h++,u++;break;case Ys:s||(s=Vs(h,[],0)),s.addedCount++,h++,s.removed.push(r[u]),u++;break;case Ws:s||(s=Vs(h,[],0)),s.addedCount++,h++;break;case $s:s||(s=Vs(h,[],0)),s.removed.push(r[u]),u++}return s&&p.push(s),p}function Js(e,t){return Zs(e,0,e.length,t,0,t.length)}function Ks(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Gs(e){return"slot"===e.localName}let Qs=class{static getFlattenedNodes(e){const t=yn(e);return Gs(e)?t.assignedNodes({flatten:!0}):Array.from(t.childNodes).map((e=>Gs(e)?yn(e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Gs(this._target)?this._listenSlots([this._target]):yn(this._target).children&&(this._listenSlots(yn(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Gs(this._target)?this._unlistenSlots([this._target]):yn(this._target).children&&(this._unlistenSlots(yn(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Hn.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Js(t,this._effectiveNodes);for(let t,r=0;r<i.length&&(t=i[r]);r++)for(let i,r=0;r<t.removed.length&&(i=t.removed[r]);r++)e.removedNodes.push(i);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let i=r.index;i<r.index+r.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Gs(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Gs(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ea=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=$o()}while(e||t)},ta=Element.prototype,ia=ta.matches||ta.matchesSelector||ta.mozMatchesSelector||ta.msMatchesSelector||ta.oMatchesSelector||ta.webkitMatchesSelector,ra=function(e,t){return ia.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class na{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Qs(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(yn(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=yn(t).parentNode||yn(t).host;return t===this.node}getOwnerRoot(){return yn(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?yn(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=yn(this.node).assignedSlot;for(;t;)e.push(t),t=yn(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return yn(i).importNode(e,t)}getEffectiveChildNodes(){return Qs.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let r,n=0,o=t.length;n<o&&(r=t[n]);n++)r.nodeType===Node.ELEMENT_NODE&&ra(r,e)&&i.push(r);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function oa(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}class sa{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}na.prototype.cloneNode,na.prototype.appendChild,na.prototype.insertBefore,na.prototype.removeChild,na.prototype.replaceChild,na.prototype.setAttribute,na.prototype.removeAttribute,na.prototype.querySelector,na.prototype.querySelectorAll,na.prototype.parentNode,na.prototype.firstChild,na.prototype.lastChild,na.prototype.nextSibling,na.prototype.previousSibling,na.prototype.firstElementChild,na.prototype.lastElementChild,na.prototype.nextElementSibling,na.prototype.previousElementSibling,na.prototype.childNodes,na.prototype.children,na.prototype.classList,na.prototype.textContent,na.prototype.innerHTML;let aa=na;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(na.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=na.prototype[t])})),oa(e.prototype,["classList"]),aa=e,Object.defineProperties(sa.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&la(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const r=i[e];if(la(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}(na.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),oa(na.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}(na.prototype,["textContent","innerHTML","className"]);const la=function(e){if((e=e||document)instanceof aa)return e;if(e instanceof sa)return e;let t=e.__domApi;return t||(t=e instanceof Event?new sa(e):new aa(e),e.__domApi=t),t},da=window.ShadyDOM,ca=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function pa(e,t){return yn(e).getRootNode()===t}
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
const ha="disable-upgrade",ua=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};tn((e=>{const t=Vo(e);let i=ua(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(ha)}_initializeProperties(){this.hasAttribute(ha)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,r){e==ha?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,yn(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,r)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const fa="disable-upgrade";let ma=window.ShadyCSS;const ga=tn((e=>{const t=Rs(Vo(e)),i=qo?t:Us(t),r=ua(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||e===fa)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(Gr&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(Gr&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return Gr&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):r.call(this).concat(fa)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,r){t!==i&&(e==fa?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,yn(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,r),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(Vr&&this.hasAttribute(fa))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Gr&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let r,n=0;n<i.length&&(r=i[n]);n++){let i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=t;let n=i.node||this;return yn(n).dispatchEvent(r),r}listen(e,t,i){e=e||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(e);n||(n={},r.set(e,n));let o=t+i;n[o]||(n[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let r=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,o=r&&r[n];o&&(this._removeEventListenerFromNode(e,t,o),r[n]=null)}setScrollDirection(e,t){Cs(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=yn(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=la(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return la(this).getEffectiveChildNodes()}queryDistributedElements(e){return la(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,r=0;i=e[r];r++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?la(t).getDistributedNodes():[]}getContentChildren(e){let t=this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}));return t}isLightDescendant(e){const t=this;return t!==e&&yn(t).contains(e)&&yn(t).getRootNode()===yn(e).getRootNode()}isLocalDescendant(e){return this.root===yn(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!da||!ca)return null;if(!da.handlesDynamicScoping)return null;const i=ca.ScopingShim;if(!i)return null;const r=i.scopeForNode(e),n=yn(e).getRootNode(),o=e=>{if(!pa(e,n))return;const t=Array.from(da.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!pa(o,n))continue;const s=i.currentScopeForNode(o);s!==r&&(""!==s&&i.unscopeNode(o,s),i.scopeNode(o,r))}};if(o(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return ma.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Xo.debounce(this._debouncers[e],i>0?Fn.after(i):Hn,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Fn.run(e.bind(this),t):~Hn.run(e.bind(this))}cancelAsync(e){e<0?Hn.cancel(~e):Fn.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return ra(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(yn(i).setAttribute(e,""),!0):(yn(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,r){r=r||this,this.transform("translate3d("+e+","+t+","+i+")",r)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=Sn(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o})),ba={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ya={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},_a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ya);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function va(e,t,i,r){!function(e,t,i){const r=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let o=0;o<n.length;o++){let s=n[o];if(!(s in i))if(r)t[s]=e[s];else{let i=Object.getOwnPropertyDescriptor(e,s);i&&(i.configurable=!0,Object.defineProperty(t,s,i))}}}(t,e,r);for(let e in ba)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function Aa(e,t,i){t=t||[];for(let r=e.length-1;r>=0;r--){let n=e[r];n?Array.isArray(n)?Aa(n,t):t.indexOf(n)<0&&(!i||i.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function wa(e,t){for(const i in t){const r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}const xa=ga(HTMLElement);function Ca(e,t,i){let r;const n={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let e,t=0;t<r.length;t++)e=r[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(r)for(let e=0;e<r.length;e++)wa(t,r[e].properties);return wa(t,e.properties),t}static get observers(){let t=[];if(r)for(let e,i=0;i<r.length;i++)e=r[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=n.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Vr&&s(e);const t=Object.getPrototypeOf(this);let i=n.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=n.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=n.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=n.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=n.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=n.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=n.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let r=n.attributeChanged;if(r)for(let n=0;n<r.length;n++)r[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;r=Aa(i,null,e),o.prototype.behaviors=e?e.concat(i):r}const s=t=>{r&&function(e,t,i){for(let r=0;r<t.length;r++)va(e,t[r],i,_a)}(t,r,n),va(t,e,n,ya)};return Vr||s(o.prototype),o.generatedFrom=e,o}const Pa=function(e){let t;return t="function"==typeof e?e:Pa.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};
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
function Sa(e,t,i,r,n){let o;n&&(o="object"==typeof i&&null!==i,o&&(r=e.__dataTemp[t]));let s=r!==i&&(r==r||i==i);return o&&s&&(e.__dataTemp[t]=i),s}Pa.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(xa):xa;return i=Ca(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const Oa=tn((e=>class extends e{_shouldPropertyChange(e,t,i){return Sa(this,e,t,i,!0)}})),Ea=tn((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return Sa(this,e,t,i,this.mutableData)}}));Oa._mutablePropertyChange=Sa;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ta=null;function ka(){return Ta}ka.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ka,writable:!0}});const Ra=Ho(ka),za=Oa(Ra);const Da=Ho(class{});function Ia(e,t){for(let i=0;i<t.length;i++){let r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),yn(yn(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const e=r.__polymerReplaced__;e&&yn(yn(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}class Ma extends Da{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e)}));else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,i)}}_showHideChildren(e){Ia(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Ma.prototype.__dataHost,Ma.prototype.__templatizeOptions,Ma.prototype._methodHost,Ma.prototype.__templatizeOwner,Ma.prototype.__hostProps;const Na=Oa(Ma);function La(e){let t=e.__dataHost;return t&&t._methodHost||t}function Ba(e,t,i){let r=i.mutableData?Na:Ma;Ua.mixin&&(r=Ua.mixin(r));let n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,r){let n=i.hostProps||{};for(let t in r.instanceProps){delete n[t];let i=r.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ja(t,i)})}if(r.forwardHostProp&&t.__dataHost)for(let t in n)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function Fa(e,t,i,r){let n=i.forwardHostProp;if(n&&t.hasHostProps){const o="template"==e.localName;let s=t.templatizeTemplateClass;if(!s){if(o){let e=i.mutableData?za:Ra;class r extends e{}s=t.templatizeTemplateClass=r}else{const i=e.constructor;class r extends i{}s=t.templatizeTemplateClass=r}let a=t.hostProps;for(let e in a)s.prototype._addPropertyEffect("_host_"+e,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Ha(e,n)}),s.prototype._createNotifyingProperty("_host_"+e);Xr&&r&&function(e,t,i){const r=i.constructor._properties,{propertyEffects:n}=e,{instanceProps:o}=t;for(let e in n)if(!(r[e]||o&&o[e])){const t=n[e];for(let i=0;i<t.length;i++){const{part:r}=t[i].info;if(!r.signature||!r.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,r)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),o)!function(e,t){Ta=e,Object.setPrototypeOf(e,t.prototype),new t,Ta=null}(e,s),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,s.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function Ha(e,t){return function(e,i,r){t.call(e.__templatizeOwner,i.substring(6),r[i])}}function ja(e,t){return function(e,i,r){t.call(e.__templatizeOwner,e,i,r[i])}}function Ua(e,t,i){if(Ur&&!La(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let r=(t?t.constructor:Ma)._parseTemplate(e),n=r.templatizeInstanceClass;n||(n=Ba(e,r,i),r.templatizeInstanceClass=n);const o=La(e);Fa(e,r,i,o);let s=class extends n{};return s.prototype._methodHost=o,s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=r.hostProps,s}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let qa=!1;function Va(){if(Vr&&!Lr){if(!qa){qa=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xa=Rs(Ea(Ho(HTMLElement)));customElements.define("dom-bind",class extends Xa{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Ur)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,r){this.mutableData=!0}connectedCallback(){Va()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){yn(yn(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ya=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Wa{constructor(e,t){Ja(e,t);const i=t.reduce(((t,i,r)=>t+$a(i)+e[r+1]),e[0]);this.value=i.toString()}toString(){return this.value}}function $a(e){if(e instanceof Wa)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const Za=function(e,...t){Ja(e,t);const i=document.createElement("template");let r=t.reduce(((t,i,r)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Wa)return $a(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(i)+e[r+1]),e[0]);return Ya&&(r=Ya.createHTML(r)),i.innerHTML=r,i},Ja=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},Ka=Vo(HTMLElement),Ga=Ea(Ka);class Qa extends Ga{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Kr,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Va()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=yn(yn(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Ua(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let r,n=0;n<i.length&&(r=i[n]);n++)r.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((r=this.as)===(n=t)||An(r,n)||wn(r,n)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=i);let n=xn(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(n,i)}var r,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Xo.debounce(this.__renderDebouncer,t>0?Fn.after(t):Hn,e.bind(this)),Wo(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ea()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>{this.__chunkingId=null,this.__continueChunking()}))),this._setRenderedItemCount(this.__instances.length),Kr&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,r)=>this.__filterFn(e[t],i,r)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),r=Math.max(t-i,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const r=this.__itemsIdxToInstIdx={};let n;for(n=0;n<t;n++){let t=this.__instances[n],o=i[n],s=e[o];r[o]=n,t?(t._setPendingProperty(this.as,s),t._setPendingProperty(this.indexAs,n),t._setPendingProperty(this.itemsIndexAs,o),t._flushProperties()):this.__insertInstance(s,n,o)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=yn(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];i.appendChild(r)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(e,t,i){const r=this.__stampInstance(e,t,i);let n=this.__instances[t+1],o=n?n.children[0]:this;return yn(yn(this).parentNode).insertBefore(r.root,o),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);if(n==parseInt(n,10)){let e=r<0?"":i.substring(r+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[n],s=this.__instances[o];if(s){let i=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(i,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=yn(t).parentNode;return null}(this.template,e)}}customElements.define(Qa.is,Qa);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class el extends Ka{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Xo.debounce(this.__renderDebouncer,Hn,(()=>this.__render())),Wo(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=yn(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||yn(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Va()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:yn(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!yn(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=yn(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(yn(this).previousSibling!==t[t.length-1])for(let i,r=0;r<t.length&&(i=t[r]);r++)yn(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){ea()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Kr&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const tl=Jr?class extends el{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Ur&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let r=this.__syncInfo;if(this.if)r&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(r.changedProps,t)),e(t,i);else if(this.__instance)if(r||(r=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=vn(e);r.changedProps[t]=this.__dataHost[t]}else Object.assign(r.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),yn(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Ia(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends el{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Ua(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[vn(e)]=!0))}})),this.__instance=new this.__ctor,yn(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=yn(e[0]).parentNode;if(t){t=yn(t);for(let i,r=0;r<e.length&&(i=e[r]);r++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(tl.is,tl);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let il=tn((e=>{let t=Vo(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=Js(i,r);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let r=e[i];t.forEach(((e,i)=>{e<r.index||(e>=r.index+r.removed.length?t.set(i,e+r.addedCount-r.removed.length):t.set(i,-1))}));for(let e=0;e<r.addedCount;e++){let i=r.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach(((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(r)):i++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,r)=>{t==e++&&this.deselect(r)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})),rl=il(Ka);class nl extends rl{static get is(){return"array-selector"}static get template(){return null}}customElements.define(nl.is,nl);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ol=new Or;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){ol.processStyles(),rr(e,t)},styleElement(e){ol.processStyles()},styleDocument(e){ol.processStyles(),rr(document.body,e)},getComputedStyleValue:(e,t)=>nr(e,t),flushCustomStyles(){},nativeCss:Ri,nativeShadow:Si,cssBuild:Ei,disableRuntime:ki}),window.ShadyCSS.CustomStyleInterface=ol;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const sl="include",al=window.ShadyCSS.CustomStyleInterface;class ll extends HTMLElement{constructor(){super(),this._style=null,al.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(sl);return t&&(e.removeAttribute(sl),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=bn(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ll);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const dl=ga(HTMLElement).prototype,cl=Za`
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
*/cl.setAttribute("style","display: none;"),document.head.appendChild(cl.content);var pl=document.createElement("style");pl.textContent="[hidden] { display: none !important; }",document.head.appendChild(pl);
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
const hl=Za`
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
`;hl.setAttribute("style","display: none;"),document.head.appendChild(hl.content);
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
const ul=Za`
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
if(ul.setAttribute("style","display: none;"),document.head.appendChild(ul.content),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const fl=Za`<custom-style>
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
</custom-style>`;fl.setAttribute("style","display: none;"),document.head.appendChild(fl.content);
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
const ml=Za`
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
</custom-style>`;ml.setAttribute("style","display: none;"),document.head.appendChild(ml.content);
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
const gl=document.createElement("template");gl.setAttribute("style","display: none;"),gl.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(gl.content);
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
const bl={_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let t,r=0;t=e[r];r++){let e=document.createElement(t.name);if(e.isNeonAnimation){let r=null;e.configure||(e.configure=function(e){return null}),r=e.configure(t),i.push({result:r,config:t,neonAnimation:e})}else console.warn(this.is+":",t.name,"not found!")}for(var r=0;r<i.length;r++){let e=i[r].result,n=i[r].config,o=i[r].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(t){e=null,console.warn("Couldnt play","(",n.name,").",t)}e&&t.push({neonAnimation:o,config:n,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var r=this._configureAnimations(i);if(0!=r.length){this._active[e]=r;for(var n=0;n<r.length;n++)r[n].animation.onfinish=function(){this._shouldComplete(r)&&(this._complete(r),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}},yl=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var r;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(r=e?this.animationConfig[e]:this.animationConfig,Array.isArray(r)||(r=[r]),r)for(var n,o=0;n=r[o];o++)if(n.animatable)n.animatable._getAnimationConfigRecursive(n.type||e,t,i);else if(n.id){var s=t[n.id];s?(s.isClone||(t[n.id]=this._cloneConfig(s),s=t[n.id]),this._copyProperties(s,n)):t[n.id]=n}else i.push(n)},getAnimationConfig:function(e){var t={},i=[];for(var r in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[r]);return i}},bl];
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
let _l;const vl={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=la(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let r,n,o,s;this.expandSizingTargetForScrollbars&&(r=this.sizingTarget.offsetWidth,n=this.sizingTarget.offsetHeight,o=this.sizingTarget.clientWidth,s=this.sizingTarget.clientHeight);var a=this._fitInfo.margin,l={width:e.width+a.left+a.right,height:e.height+a.top+a.bottom},d=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,e,t,i),c=d.left+a.left,p=d.top+a.top,h=Math.min(i.right-a.right,c+e.width),u=Math.min(i.bottom-a.bottom,p+e.height);c=Math.max(i.left+a.left,Math.min(c,h-this._fitInfo.sizedBy.minWidth)),p=Math.max(i.top+a.top,Math.min(p,u-this._fitInfo.sizedBy.minHeight));const f=Math.max(h-c,this._fitInfo.sizedBy.minWidth),m=Math.max(u-p,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=f+"px",this.sizingTarget.style.maxHeight=m+"px";const g=c-e.left,b=p-e.top;if(this.style.left=`${g}px`,this.style.top=`${b}px`,this.expandSizingTargetForScrollbars){const e=this.sizingTarget.offsetHeight,t=e-this.sizingTarget.clientHeight-(n-s);if(t>0){const r=i.height-a.top-a.bottom,n=Math.min(r,m+t);this.sizingTarget.style.maxHeight=`${n}px`;const o=this.sizingTarget.offsetHeight,s=o-e;let l;"top"===d.verticalAlign?l=b:"middle"===d.verticalAlign?l=b-s/2:"bottom"===d.verticalAlign&&(l=b-s),l=Math.max(i.top+a.top,Math.min(l,i.bottom-a.bottom-o)),this.style.top=`${l}px`}const l=this.sizingTarget.offsetWidth,c=l-this.sizingTarget.clientWidth-(r-o);if(c>0){const e=(()=>{if(void 0!==_l)return _l;const e=document.createElement("div");Object.assign(e.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const t=document.createElement("div");return t.style.width="200px",t.style.height="200px",e.appendChild(t),document.body.appendChild(e),_l=Math.abs(e.offsetWidth-100)>1?e.offsetWidth-e.clientWidth:0,document.body.removeChild(e),_l})(),t=i.width-a.left-a.right,r=Math.min(t,f+c-e);this.sizingTarget.style.maxWidth=`${r}px`;const n=this.sizingTarget.offsetWidth+e,o=n-l;let s;"left"===d.horizontalAlign?s=g:"center"===d.horizontalAlign?s=g-o/2:"right"===d.horizontalAlign&&(s=g-o),s=Math.max(i.left+a.left,Math.min(s,i.right-a.right-n)),this.style.left=`${s}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,r,n){this.__sizeDimension(e,t,i,r,n)},__sizeDimension:function(e,t,i,r,n){var o=this._fitInfo,s=this.__getNormalizedRect(this.fitInto),a="Width"===n?s.width:s.height,l=t===r,d=l?a-e[r]:e[i],c=o.margin[l?i:r],p="offset"+n,h=this[p]-this.sizingTarget[p];this.sizingTarget.style["max"+n]=a-c-d-h+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var r=i.top-t.top+(i.height-t.height)/2;this.style.top=r+"px"}if(!e.horizontally){var n=i.left-t.left+(i.width-t.width)/2;this.style.left=n+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var r=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),n=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(r)*t.width+Math.abs(n)*t.height},__getPosition:function(e,t,i,r,n,o){var s,a=[{verticalAlign:"top",horizontalAlign:"left",top:n.top+this.verticalOffset,left:n.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:n.top+this.verticalOffset,left:n.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:n.bottom-i.height-this.verticalOffset,left:n.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:n.bottom-i.height-this.verticalOffset,left:n.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,d=a.length;l<d;l++){var c={};for(var p in a[l])c[p]=a[l][p];a.push(c)}a[0].top=a[1].top+=n.height,a[2].top=a[3].top-=n.height,a[4].left=a[6].left+=n.width,a[5].left=a[7].left-=n.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(a.push({verticalAlign:"top",horizontalAlign:"center",top:n.top+this.verticalOffset+(this.noOverlap?n.height:0),left:n.left-r.width/2+n.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:n.bottom-i.height-this.verticalOffset-(this.noOverlap?n.height:0),left:n.left-r.width/2+n.width/2+this.horizontalOffset})),t&&"middle"!==t||(a.push({verticalAlign:"middle",horizontalAlign:"left",top:n.top-r.height/2+n.height/2+this.verticalOffset,left:n.left+this.horizontalOffset+(this.noOverlap?n.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:n.top-r.height/2+n.height/2+this.verticalOffset,left:n.right-i.width-this.horizontalOffset-(this.noOverlap?n.width:0)})),"middle"===t&&"center"===e&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:n.top-r.height/2+n.height/2+this.verticalOffset,left:n.left-r.width/2+n.width/2+this.horizontalOffset});for(l=0;l<a.length;l++){var h=a[l],u=h.verticalAlign===t,f=h.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&u&&f){s=h;break}var m=(!t||u)&&(!e||f);if(this.dynamicAlign||m){if(h.offscreenArea=this.__getOffscreenArea(h,i,o),0===h.offscreenArea&&m){s=h;break}s=s||h;var g=h.offscreenArea-s.offscreenArea;(g<0||0===g&&(u||f))&&(s=h)}}return s}};
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
var Al=new Set;const wl={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Al.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():Lr||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=la(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Al.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Al.delete(this):Al.add(this)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var xl=Element.prototype,Cl=xl.matches||xl.matchesSelector||xl.mozMatchesSelector||xl.msMatchesSelector||xl.oMatchesSelector||xl.webkitMatchesSelector;const Pl=new class{getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}isFocusable(e){return Cl.call(e,"input, select, textarea, button, object")?Cl.call(e,":not([disabled])"):Cl.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&Cl.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}_collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var i=e;if(!this._isVisible(i))return!1;var r,n=this._normalizedTabIndex(i),o=n>0;n>=0&&t.push(i),r="content"===i.localName||"slot"===i.localName?la(i).getDistributedNodes():la(i.root||i).children;for(var s=0;s<r.length;s++)o=this._collectTabbableNodes(r[s],t)||o;return o}_isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}_sortByTabIndex(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,i)),n=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(r,n)}_mergeSortByTabIndex(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}_hasLowerTabOrder(e,t){var i=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return 0===i||0===r?r>i:i>r}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Pa({_template:Za`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&la(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||la(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});
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
var Sl={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Ol={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},El={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Tl=/[a-z0-9*]/,kl=/U\+/,Rl=/^arrow/,zl=/^space(bar)?/,Dl=/^escape$/;function Il(e,t){var i="";if(e){var r=e.toLowerCase();" "===r||zl.test(r)?i="space":Dl.test(r)?i="esc":1==r.length?t&&!Tl.test(r)||(i=r):i=Rl.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return i}function Ml(e,t){return e.key?Il(e.key,t):e.detail&&e.detail.key?Il(e.detail.key,t):(i=e.keyIdentifier,r="",i&&(i in Sl?r=Sl[i]:kl.test(i)?(i=parseInt(i.replace("U+","0x"),16),r=String.fromCharCode(i).toLowerCase()):r=i.toLowerCase()),r||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Ol[e]),t}(e.keyCode)||"");var i,r}function Nl(e,t){return Ml(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Ll(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),r=i[0],n=i[1];return r in El?(e[El[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}Boolean;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Bl=function(e,t){for(var i=Ll(t),r=0;r<i.length;++r)if(Nl(i[r],e))return!0;return!1};const Fl=new class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,As(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&la(e.root).activeElement;)e=la(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var t=this._overlays[e];if(t){var i=this._overlays.length-1,r=this._overlays[i];if(r&&this._shouldBeBehindOverlay(t,r)&&i--,!(e>=i)){var n=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=n&&this._applyOverlayZ(t,n);e<i;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[i]=t}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var i=this._overlays.length,r=this._overlays[i-1],n=Math.max(this._getZ(r),this._minimumZ),o=this._getZ(e);if(r&&this._shouldBeBehindOverlay(e,r)){this._applyOverlayZ(r,n),i--;var s=this._overlays[i-1];n=Math.max(this._getZ(s),this._minimumZ)}o<=n&&this._applyOverlayZ(e,n),this._overlays.splice(i,0,e),this.trackBackdrop()}removeOverlay(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var t=this._minimumZ;if(e){var i=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);i==i&&(t=i)}return t}_setZ(e,t){e.style.zIndex=t}_applyOverlayZ(e,t){this._setZ(e,t+2)}_overlayInPath(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]}_onCaptureClick(e){var t=this._overlays.length-1;if(-1!==t)for(var i,r=la(e).path;(i=this._overlays[t])&&this._overlayInPath(r)!==i&&(i._onCaptureClick(e),i.allowClickThrough);)t--}_onCaptureFocus(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)}_onCaptureKeyDown(e){var t=this.currentOverlay();t&&(Bl(e,"esc")?t._onCaptureEsc(e):Bl(e,"tab")&&t._onCaptureTab(e))}_shouldBeBehindOverlay(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Hl,jl,Ul={pageX:0,pageY:0},ql=null,Vl=[],Xl=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function Yl(e){$l.indexOf(e)>=0||(0===$l.length&&function(){Hl=Hl||Zl.bind(void 0);for(var e=0,t=Xl.length;e<t;e++)document.addEventListener(Xl[e],Hl,{capture:!0,passive:!1})}(),$l.push(e),jl=$l[$l.length-1])}function Wl(e){var t=$l.indexOf(e);-1!==t&&($l.splice(t,1),jl=$l[$l.length-1],0===$l.length&&function(){for(var e=0,t=Xl.length;e<t;e++)document.removeEventListener(Xl[e],Hl,{capture:!0,passive:!1})}())}const $l=[];function Zl(e){if(e.cancelable&&function(e){var t=la(e).rootTarget;"touchmove"!==e.type&&ql!==t&&(ql=t,Vl=function(e){for(var t=[],i=e.indexOf(jl),r=0;r<=i;r++)if(e[r].nodeType===Node.ELEMENT_NODE){var n=e[r],o=n.style;"scroll"!==o.overflow&&"auto"!==o.overflow&&(o=window.getComputedStyle(n)),"scroll"!==o.overflow&&"auto"!==o.overflow||t.push(n)}return t}(la(e).path));if(!Vl.length)return!0;if("touchstart"===e.type)return!1;var i=function(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=Ul.pageX-i.pageX,t.deltaY=Ul.pageY-i.pageY}return t}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(e);return!function(e,t,i){if(!t&&!i)return;for(var r=Math.abs(i)>=Math.abs(t),n=0;n<e.length;n++){var o=e[n];if(r?i<0?o.scrollTop>0:o.scrollTop<o.scrollHeight-o.clientHeight:t<0?o.scrollLeft>0:o.scrollLeft<o.scrollWidth-o.clientWidth)return o}}(Vl,i.deltaX,i.deltaY)}(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];Ul.pageX=t.pageX,Ul.pageY=t.pageY}}const Jl={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:Fl},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||la(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Pl.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=la(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in this._observer&&la(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||Kl(this,e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=la(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,r=t?this.__lastFocusableNode:this.__firstFocusableNode,n=!1;if(i===r)n=!0;else{var o=this._manager.deepActiveElement;n=o===i||o===this}n&&(e.preventDefault(),this._focusedChild=r,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;null!==i[e]&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame(function(){i[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,i){e&&t&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),Yl(this)),this.__addScrollListeners()):(Wl(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],Lr)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||la(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},Kl=(e,t)=>{for(let r=t;r;r=(i=r).assignedSlot||i.parentNode||i.host)if(r===e)return!0;var i;return!1},Gl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=la(e).path,i=0,r=t.indexOf(this);i<r;i++){var n=t[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}};
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
Pa({_template:Za`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[[[vl,wl,Jl],Gl],yl],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}}),
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
Pa({_template:Za`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(Gl)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}}),
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
Pa({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(e,t){this.resolveCompletes=e,this.rejectCompletes=t}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut)return!1;var e=this.xhr.status||0;return 0===e||e>=200&&e<300},send:function(e){var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("progress",function(e){this._setProgress({lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total}),this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this)),t.addEventListener("error",function(t){this._setErrored(!0),this._updateStatus();var i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("timeout",function(t){this._setTimedOut(!0),this._updateStatus();var i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("abort",function(){this._setAborted(!0),this._updateStatus();var t=new Error("Request aborted."),i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("loadend",function(){if(this._updateStatus(),this._setResponse(this.parseResponse()),this.succeeded)this.resolveCompletes(this);else{var t=new Error("The request failed with status code: "+this.xhr.status),i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}}.bind(this)),this.url=e.url;var i=!1!==e.async;t.open(e.method||"GET",e.url,i);var r={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[e.handleAs],n=e.headers||Object.create(null),o=Object.create(null);for(var s in n)o[s.toLowerCase()]=n[s];if(n=o,r&&!n.accept&&(n.accept=r),Object.keys(n).forEach((function(e){/[A-Z]/.test(e)&&dl._error("Headers must be lower case, got",e),t.setRequestHeader(e,n[e])}),this),i){t.timeout=e.timeout;var a=e.handleAs;!e.jsonPrefix&&a||(a="text"),t.responseType=t._responseType=a,e.jsonPrefix&&(t._jsonPrefix=e.jsonPrefix)}t.withCredentials=!!e.withCredentials;var l=this._encodeBodyObject(e.body,n["content-type"]);return t.send(l),this.completes},parseResponse:function(){var e=this.xhr,t=e.responseType||e._responseType,i=!this.xhr.responseType,r=e._jsonPrefix&&e._jsonPrefix.length||0;try{switch(t){case"json":if(i||void 0===e.response)try{return JSON.parse(e.responseText)}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.response;case"xml":return e.responseXML;case"blob":case"document":case"arraybuffer":return e.response;default:if(r)try{return JSON.parse(e.responseText.substring(r))}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.responseText}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0),this.xhr.abort()},_encodeBodyObject:function(e,t){if("string"==typeof e)return e;var i=e;switch(t){case"application/json":return JSON.stringify(i);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(i)}return e},_wwwFormUrlEncode:function(e){if(!e)return"";var t=[];return Object.keys(e).forEach((function(i){t.push(this._wwwFormUrlEncodePiece(i)+"="+this._wwwFormUrlEncodePiece(e[i]))}),this),t.join("&")},_wwwFormUrlEncodePiece:function(e){return null!=e&&e.toString?encodeURIComponent(e.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+"):""},_updateStatus:function(){this._setStatus(this.xhr.status),this._setStatusText(void 0===this.xhr.statusText?"":this.xhr.statusText)}}),
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
Pa({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var e,t,i=[];for(e in this.params)if(t=this.params[e],e=window.encodeURIComponent(e),Array.isArray(t))for(var r=0;r<t.length;r++)i.push(e+"="+window.encodeURIComponent(t[r]));else null!==t?i.push(e+"="+window.encodeURIComponent(t)):i.push(e);return i.join("&")},get requestUrl(){var e=this.queryString,t=this.url||"";if(e){var i=t.indexOf("?")>=0?"&":"?";return t+i+e}return t},get requestHeaders(){var e,t={},i=this.contentType;if(null==i&&"string"==typeof this.body&&(i="application/x-www-form-urlencoded"),i&&(t["content-type"]=i),"object"==typeof this.headers)for(e in this.headers)t[e]=this.headers[e].toString();return t},_onProgressChanged:function(e){this._setLastProgress(e.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var e=document.createElement("iron-request"),t=this.toRequestOptions();return this.push("activeRequests",e),e.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,e)).then(this._discardRequest.bind(this,e)),this.fire("iron-ajax-presend",{request:e,options:t},{bubbles:this.bubbles,cancelable:!0}).defaultPrevented?(e.abort(),e.rejectCompletes(e),e):(this.lastRequest&&this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.send(t),this._setLastProgress(null),this._setLastRequest(e),this._setLoading(!0),this.fire("request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),e)},_handleResponse:function(e){e===this.lastRequest&&(this._setLastResponse(e.response),this._setLastError(null),this._setLoading(!1)),this.fire("response",e,{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-response",e,{bubbles:this.bubbles,composed:!0})},_handleError:function(e,t){this.verbose&&dl._error(t),e===this.lastRequest&&(this._setLastError({request:e,error:t,status:e.xhr.status,statusText:e.xhr.statusText,response:e.xhr.response}),this._setLastResponse(null),this._setLoading(!1)),this.fire("iron-ajax-error",{request:e,error:t},{bubbles:this.bubbles,composed:!0}),this.fire("error",{request:e,error:t},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(e){var t=this.activeRequests.indexOf(e);t>-1&&this.splice("activeRequests",t,1)},_requestOptionsChanged:function(){this.debounce("generate-request",(function(){null!=this.url&&this.auto&&this.generateRequest()}),this.debounceDuration)}}),
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
Pa({_template:Za`
    <style>
      :host {
        display: block;
      }
    </style>

    <!-- This form is used to collect the elements that should be submitted -->
    <slot></slot>

    <!-- This form is used for submission -->
    <form id="helper" action\$="[[action]]" method\$="[[method]]" enctype\$="[[enctype]]"></form>
`,is:"iron-form",properties:{allowRedirect:{type:Boolean,value:!1},headers:{type:Object,value:function(){return{}}},withCredentials:{type:Boolean,value:!1}},attached:function(){this._form||(this._form=la(this).querySelector("form"),this._form?(this._init(),this.async(this._saveInitialValues.bind(this),1)):this._nodeObserver=la(this).observeNodes(function(e){for(var t=0;t<e.addedNodes.length;t++)"FORM"===e.addedNodes[t].tagName&&(this._form=e.addedNodes[t],this._init(),la(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)}.bind(this)))},detached:function(){this._nodeObserver&&(la(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)},_init:function(){this._form.addEventListener("submit",this.submit.bind(this)),this._form.addEventListener("reset",this.reset.bind(this)),this._defaults=this._defaults||new WeakMap,this._saveInitialValues()},saveResetValues:function(){this._saveInitialValues(!0)},_saveInitialValues:function(e){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var r=t[i];if(!this._defaults.has(r)||e){var n={value:r.value};"checked"in r&&(n.checked=r.checked),"invalid"in r&&(n.invalid=r.invalid),this._defaults.set(r,n)}}},validate:function(){if(!this._form)return!1;if(""===this._form.getAttribute("novalidate"))return!0;for(var e,t=this._form.checkValidity(),i=this._getValidatableElements(),r=0;e=i[r],r<i.length;r++){var n=e;n.validate&&(t=!!n.validate()&&t)}return t},submit:function(e){if(e&&e.preventDefault(),this._form)if(this.validate()){this.$.helper.textContent="";var t=this.serializeForm();if(this.allowRedirect){for(var i in t)this.$.helper.appendChild(this._createHiddenElement(i,t[i]));this.$.helper.action=this._form.getAttribute("action"),this.$.helper.method=this._form.getAttribute("method")||"GET",this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.$.helper.submit(),this.fire("iron-form-submit")}else this._makeAjaxRequest(t)}else this.fire("iron-form-invalid")},reset:function(e){if(e&&e.preventDefault(),this._form)if(e&&"reset"===e.type&&e.target===this._form){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var r=t[i];if(this._defaults.has(r)){var n=this._defaults.get(r);for(var o in n)r[o]=n[o]}}this.fire("iron-form-reset")}else this._form.reset()},serializeForm:function(){for(var e=this._getSubmittableElements(),t={},i=0;i<e.length;i++)for(var r=this._serializeElementValues(e[i]),n=0;n<r.length;n++)this._addSerializedElement(t,e[i].name,r[n]);return t},_handleFormResponse:function(e){this.fire("iron-form-response",e.detail)},_handleFormError:function(e){this.fire("iron-form-error",e.detail)},_makeAjaxRequest:function(e){this.request||(this.request=document.createElement("iron-ajax"),this.request.addEventListener("response",this._handleFormResponse.bind(this)),this.request.addEventListener("error",this._handleFormError.bind(this))),this.request.url=this._form.getAttribute("action"),this.request.method=this._form.getAttribute("method")||"GET",this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.request.withCredentials=this.withCredentials,this.request.headers=this.headers,"POST"===this._form.method.toUpperCase()?this.request.body=e:this.request.params=e,this.fire("iron-form-presubmit",{},{cancelable:!0}).defaultPrevented||(this.request.generateRequest(),this.fire("iron-form-submit",e))},_getValidatableElements:function(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function(){return this._findElements(this._form,!1,!1)},_findElements:function(e,t,i,r){r=r||[];for(var n=la(e).querySelectorAll("*"),o=0;o<n.length;o++)i||"slot"!==n[o].localName&&"content"!==n[o].localName?this._searchSubmittable(r,n[o],t):this._searchSubmittableInSlot(r,n[o],t);return r},_searchSubmittableInSlot:function(e,t,i){for(var r=la(t).getDistributedNodes(),n=0;n<r.length;n++)if(r[n].nodeType!==Node.TEXT_NODE){this._searchSubmittable(e,r[n],i);for(var o=la(r[n]).querySelectorAll("*"),s=0;s<o.length;s++)this._searchSubmittable(e,o[s],i)}},_searchSubmittable:function(e,t,i){this._isSubmittable(t,i)?e.push(t):t.root&&this._findElements(t.root,i,!0,e)},_isSubmittable:function(e,t){return!e.disabled&&(t?e.name||"function"==typeof e.validate:e.name)},_serializeElementValues:function(e){var t=e.tagName.toLowerCase();return"button"===t||"input"===t&&("submit"===e.type||"reset"===e.type)?[]:"select"===t?this._serializeSelectValues(e):"input"===t?this._serializeInputValues(e):e._hasIronCheckedElementBehavior&&!e.checked?[]:[e.value]},_serializeSelectValues:function(e){for(var t=[],i=0;i<e.options.length;i++)e.options[i].selected&&t.push(e.options[i].value);return t},_serializeInputValues:function(e){var t=e.type.toLowerCase();return("checkbox"!==t&&"radio"!==t||e.checked)&&"file"!==t?[e.value]:[]},_createHiddenElement:function(e,t){var i=document.createElement("input");return i.setAttribute("type","hidden"),i.setAttribute("name",e),i.setAttribute("value",t),i},_addSerializedElement:function(e,t,i){void 0===e[t]?e[t]=i:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(i))}});const Ql=a`
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
`;class ed extends h{constructor(){super(...arguments),this.title="",this.buttonSaveCopy="Save",this.buttonCropDoneCopy="Done",this.hideCloseButton=!1,this._cropMode=!1,this._hasItems=!1}_getImageUploadElement(){return this.querySelector("exmg-upload")}firstUpdated(){const e=this._getImageUploadElement();e&&(e.isModeDialog=!0)}open(){this._dialogNode&&this._dialogNode.open()}close(){this._dialogNode&&this._dialogNode.close()}_save(){const e=this._getImageUploadElement();if(e){const t=e.getValues();this.fire("upload-save",{urls:t},!0)}}renderHeader(){return a`
      ${this.title?a`
            <header>
              <h2 class="title">${this.title}</h2>
            </header>
          `:a` <div class="top-margin">&nbsp;</div> `}
    `}center(){setTimeout((()=>{var e;return null===(e=this._dialogNode)||void 0===e?void 0:e.center()}),10)}_onCloseDialog(){const e=this._getImageUploadElement();e&&e.reset(),this._cropMode=!1}_startCrop(){this._cropMode=!0,this.center()}_stopCrop(){this._cropMode=!1,this.center()}_cancelActiveCrop(){const e=this._getImageUploadElement();e&&e.cancelActiveCrop()}_saveActiveCrop(){const e=this._getImageUploadElement();e&&e.saveActiveCrop()}renderActions(){return this._cropMode?a`
        <div class="actions">
          <exmg-button @click=${this._cancelActiveCrop}>Back</exmg-button>
          <exmg-button @click=${this._saveActiveCrop}>${this.buttonCropDoneCopy}</exmg-button>
        </div>
      `:a`
      <div class="actions">
        <exmg-button dialog-dismiss @click=${this.close}>Cancel</exmg-button>
        <exmg-button @click=${this._save} ?disabled=${!this._hasItems}>${this.buttonSaveCopy}</exmg-button>
      </div>
    `}_handleFilesChanged(e){this._hasItems=e.detail.files.length>0,this.center()}render(){return a`
      <paper-dialog
        id="dialog"
        scroll-action=${_(this.scrollAction)}
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this._onCloseDialog}"
      >
        ${this.hideCloseButton?a` ${this.renderHeader()} `:a`
              <mwc-icon-button @click=${this.close} class="close-button">${Ql}</mwc-icon-button>
              ${this.renderHeader()}
            `}

        <paper-dialog-scrollable>
          <slot
            @files-changed=${this._handleFilesChanged}
            @crop-cancel=${this._stopCrop}
            @crop-start=${this._startCrop}
          ></slot>
        </paper-dialog-scrollable>

        ${this.renderActions()}
      </paper-dialog>
    `}}o([e({type:String})],ed.prototype,"title",void 0),o([e({type:String})],ed.prototype,"buttonSaveCopy",void 0),o([e({type:String})],ed.prototype,"buttonCropDoneCopy",void 0),o([e({type:Boolean})],ed.prototype,"hideCloseButton",void 0),o([e({type:String,attribute:"scroll-action"})],ed.prototype,"scrollAction",void 0),o([g("#dialog")],ed.prototype,"_dialogNode",void 0),o([u()],ed.prototype,"_cropMode",void 0),o([u()],ed.prototype,"_hasItems",void 0);let td=class extends ed{};td.styles=[Pi],td=o([l("exmg-upload-dialog")],td);export{Pa as P,D as a,g as i,_ as l,oe as o,u as t};
