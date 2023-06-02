import{P as e,h as t,d as n,c as i,g as r,j as a,k as o,l,n as s,p as u,t as p,i as c,E as d,o as h}from"./exmg-form-6b163fa7.js";import{Z as f,T as g,i as b,_ as m,e as D,x as y,a as v}from"./query-assigned-elements-3c47ed19.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let x=!1,k=[],w=[];function C(){x=!0,requestAnimationFrame((function(){x=!1,function(e){for(;e.length;)A(e.shift())}(k),setTimeout((function(){!function(e){for(let t=0,n=e.length;t<n;t++)A(e.shift())}(w)}))}))}function A(e){const t=e[0],n=e[1],i=e[2];try{n.apply(t,i)}catch(e){setTimeout((()=>{throw e}))}}function E(e,t,n){x||C(),w.push([e,t,n])}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _=e({_template:t`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){_.instance||(_.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});_.instance=null,_.requestAvailability=function(){_.instance||(_.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(_.instance):document.addEventListener("load",(function(){document.body.appendChild(_.instance)}))};
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
class F{constructor(e){F[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return F.types[e]&&F.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=F.types[t]=F.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=F.types[this.type];return e?Object.keys(e).map((function(e){return B[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}F[" "]=function(){},F.types={};var B=F.types;e({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new F({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new F({type:this.type,key:e}).value}});
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
let z=null;const S={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){z=new F({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return z&&z.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};
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
if(e({_template:t`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[S],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){_.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=n(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(n(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else if("number"===this.inputElement.type)e=/[0-9.,e-]/;return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,n=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&n)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var n=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(n)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+n+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=S.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const M=t`<custom-style>
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
</custom-style>`;M.setAttribute("style","display: none;"),document.head.appendChild(M.content);
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
const $={attached:function(){this.fire("addon-attached")},update:function(e){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/e({_template:t`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[$],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});
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
const I=t`
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
</custom-style>`;I.setAttribute("style","display: none;"),document.head.appendChild(I.content);var L=document.createElement("style");L.textContent="[hidden] { display: none !important; }",document.head.appendChild(L);
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
const T=t`
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
`;T.setAttribute("style","display: none;"),document.head.appendChild(T.content);
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
const V=t`
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
</custom-style>`;V.setAttribute("style","display: none;"),document.head.appendChild(V.content);
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
const H=t`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;H.setAttribute("style","display: none;"),document.head.appendChild(H.content),e({_template:t`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return i(this.attrForValue)},get _inputElement(){return n(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,n=0;t=this._addons[n];n++)t.update(e)},_computeInputContentClass:function(e,t,n,i,r){var a="input-content";if(e)r&&(a+=" label-is-hidden"),i&&(a+=" is-invalid");else{var o=this.querySelector("label");t||r?(a+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",i?a+=" is-invalid":n&&(a+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),i&&(a+=" is-invalid"))}return n&&(a+=" focused"),a},_computeUnderlineClass:function(e,t){var n="underline";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n},_computeAddOnContentClass:function(e,t){var n="add-on-content";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n}}),
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
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[$],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});
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
const R={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var O={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},N={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},j={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},K=/[a-z0-9*]/,q=/U\+/,P=/^arrow/,Z=/^space(bar)?/,U=/^escape$/;function W(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||Z.test(i)?n="space":U.test(i)?n="esc":1==i.length?t&&!K.test(i)||(n=i):n=P.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function G(e,t){return e.key?W(e.key,t):e.detail&&e.detail.key?W(e.detail.key,t):(n=e.keyIdentifier,i="",n&&(n in O?i=O[n]:q.test(n)?(n=parseInt(n.replace("U+","0x"),16),i=String.fromCharCode(n).toLowerCase()):i=n.toLowerCase()),i||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):N[e]),t}(e.keyCode)||"");var n,i}function Y(e,t){return G(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Q(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],r=n[1];return i in j?(e[j[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const X={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=Q(t),i=0;i<n.length;++i)if(Y(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(e,t){Q(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],r=e[n][1];if(Y(i,t)&&(this._triggerKeyHandler(i,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var r=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&n.preventDefault()}},J={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},ee={NextLabelID:1,NextAddonID:1,NextInputID:1},te={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!r&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=n(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+ee.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){J._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=n(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+ee.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+ee.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},ne=[J,X,te];
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
e({is:"paper-input",_template:t`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[ne,R],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:ie}=f,re=()=>document.createComment(""),ae=(e,t,n)=>{var i;const r=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=r.insertBefore(re(),a),i=r.insertBefore(re(),a);n=new ie(t,i,e,e.options)}else{const t=n._$AB.nextSibling,o=n._$AM,l=o!==e;if(l){let t;null===(i=n._$AQ)||void 0===i||i.call(n,e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==o._$AU&&n._$AP(t)}if(t!==a||l){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;r.insertBefore(e,a),e=t}}}return n},oe=(e,t,n=e)=>(e._$AI(t,n),e),le={},se=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let n=e._$AA;const i=e._$AB.nextSibling;for(;n!==i;){const e=n.nextSibling;n.remove(),n=e}},ue=(e,t,n)=>{const i=new Map;for(let r=t;r<=n;r++)i.set(e[r],r);return i},pe=a(class extends o{constructor(e){if(super(e),e.type!==l.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;void 0===n?n=t:void 0!==t&&(i=t);const r=[],a=[];let o=0;for(const t of e)r[o]=i?i(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){var r;const a=(e=>e._$AH)(e),{values:o,keys:l}=this.dt(t,n,i);if(!Array.isArray(a))return this.ht=l,o;const s=null!==(r=this.ht)&&void 0!==r?r:this.ht=[],u=[];let p,c,d=0,h=a.length-1,f=0,b=o.length-1;for(;d<=h&&f<=b;)if(null===a[d])d++;else if(null===a[h])h--;else if(s[d]===l[f])u[f]=oe(a[d],o[f]),d++,f++;else if(s[h]===l[b])u[b]=oe(a[h],o[b]),h--,b--;else if(s[d]===l[b])u[b]=oe(a[d],o[b]),ae(e,u[b+1],a[d]),d++,b--;else if(s[h]===l[f])u[f]=oe(a[h],o[f]),ae(e,a[d],a[h]),h--,f++;else if(void 0===p&&(p=ue(l,f,b),c=ue(s,d,h)),p.has(s[d]))if(p.has(s[h])){const t=c.get(l[f]),n=void 0!==t?a[t]:null;if(null===n){const t=ae(e,a[d]);oe(t,o[f]),u[f]=t}else u[f]=oe(n,o[f]),ae(e,a[d],n),a[t]=null;f++}else se(a[h]),h--;else se(a[d]),d++;for(;f<=b;){const t=ae(e,u[b+1]);oe(t,o[f]),u[f++]=t}for(;d<=h;){const e=a[d++];null!==e&&se(e)}return this.ht=l,((e,t=le)=>{e._$AH=t})(e,u),g}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce,de;
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
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&n(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,n(this.root).appendChild(this._img))}}),ce=void 0,de=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i={exports:{}};function r(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}i.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:r,changeDefaults:function(e){i.exports.defaults=e}};var a=/[&<>"']/,o=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,s=/[<>"']|&(?!#?\w+;)/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(e){return u[e]},c=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function d(e){return e.replace(c,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var h=/(^|[^\[])\^/g,f=/[^\w:]/g,g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,b={},m=/^[^:]+:\/*[^/]*$/,D=/^([^:]+:)[\s\S]*$/,y=/^([^:]+:\/*[^/]*)[\s\S]*$/;function v(e,t){b[" "+e]||(m.test(e)?b[" "+e]=e+"/":b[" "+e]=x(e,"/",!0));var n=-1===(e=b[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(D,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(y,"$1")+t:e+t}function x(e,t,n){var i=e.length;if(0===i)return"";for(var r=0;r<i;){var a=e.charAt(i-r-1);if(a!==t||n){if(a===t||!n)break;r++}else r++}return e.substr(0,i-r)}var k=function(e,t){if(t){if(a.test(e))return e.replace(o,p)}else if(l.test(e))return e.replace(s,p);return e},w=d,C=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,i){return i=(i=i.source||i).replace(h,"$1"),e=e.replace(t,i),n},getRegex:function(){return new RegExp(e,t)}};return n},A=function(e,t,n){if(e){var i;try{i=decodeURIComponent(d(n)).replace(f,"").toLowerCase()}catch(e){return null}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return null}t&&!g.test(n)&&(n=v(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},E={exec:function(){}},_=function(e){for(var t,n,i=1;i<arguments.length;i++)for(n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},F=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var i=!1,r=t;--r>=0&&"\\"===n[r];)i=!i;return i?"|":" |"})).split(/ \|/),i=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n},B=x,z=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,i=0,r=0;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&--i<0)return r;return-1},S=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},M=function(e,t){if(t<1)return"";for(var n="";t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e},$=i.exports.defaults,I=B,L=F,T=k,V=z;function H(e,t,n){var i=t.href,r=t.title?T(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:i,title:r,text:a}:{type:"image",raw:n,href:i,title:r,text:T(a)}}var R=function(){function e(e){this.options=e||$}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e){var t=this.rules.block.code.exec(e);if(t){var n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:I(n,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],i=function(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var i=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=i.length?e.slice(i.length):e})).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();if(/#$/.test(n)){var i=I(n,"#");this.options.pedantic?n=i.trim():i&&!/ $/.test(i)||(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n}}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:L(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=L(n.cells[i],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){var n,i,r,a,o,l,s,u,p,c=t[0],d=t[2],h=d.length>1,f={type:"list",raw:c,ordered:h,start:h?+d.slice(0,-1):"",loose:!1,items:[]},g=t[0].match(this.rules.block.item),b=!1,m=g.length;r=this.rules.block.listItemStart.exec(g[0]);for(var D=0;D<m;D++){if(c=n=g[D],this.options.pedantic||(p=n.match(new RegExp("\\n\\s*\\n {0,"+(r[0].length-1)+"}\\S")))&&(o=n.length-p.index+g.slice(D+1).join("\n").length,f.raw=f.raw.substring(0,f.raw.length-o),c=n=n.substring(0,p.index),m=D+1),D!==m-1){if(a=this.rules.block.listItemStart.exec(g[D+1]),this.options.pedantic?a[1].length>r[1].length:a[1].length>=r[0].length||a[1].length>3){g.splice(D,2,g[D]+(!this.options.pedantic&&a[1].length<r[0].length&&!g[D].match(/\n$/)?"":"\n")+g[D+1]),D--,m--;continue}(!this.options.pedantic||this.options.smartLists?a[2][a[2].length-1]!==d[d.length-1]:h===(1===a[2].length))&&(o=g.slice(D+1).join("\n").length,f.raw=f.raw.substring(0,f.raw.length-o),D=m-1),r=a}i=n.length,~(n=n.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(i-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+i+"}","gm"),"")),n=I(n,"\n"),D!==m-1&&(c+="\n"),l=b||/\n\n(?!\s*$)/.test(c),D!==m-1&&(b="\n\n"===c.slice(-2),l||(l=b)),l&&(f.loose=!0),this.options.gfm&&(u=void 0,(s=/^\[[ xX]\] /.test(n))&&(u=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:c,task:s,checked:u,loose:l,text:n})}return f}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):T(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:L(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=L(n.cells[i].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e){var t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:T(t[1])}},t.tag=function(e,t,n){var i=this.rules.inline.tag.exec(e);if(i)return!t&&/^<a /i.test(i[0])?t=!0:t&&/^<\/a>/i.test(i[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):T(i[0]):i[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;var i=I(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{var r=V(t[2],"()");if(r>-1){var a=(0===t[0].indexOf("!")?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}var o=t[2],l="";if(this.options.pedantic){var s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);s&&(o=s[1],l=s[3])}else l=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(n)?o.slice(1):o.slice(1,-1)),H(t,{href:o?o.replace(this.rules.inline._escapes,"$1"):o,title:l?l.replace(this.rules.inline._escapes,"$1"):l},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var i=(n[2]||n[1]).replace(/\s+/g," ");if(!(i=t[i.toLowerCase()])||!i.href){var r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return H(n,i,n[0])}},t.emStrong=function(e,t,n){void 0===n&&(n="");var i=this.rules.inline.emStrong.lDelim.exec(e);if(i&&(!i[3]||!n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var r=i[1]||i[2]||"";if(!r||r&&(""===n||this.rules.inline.punctuation.exec(n))){var a,o,l=i[0].length-1,s=l,u=0,p="*"===i[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+l);null!=(i=p.exec(t));)if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6])if(o=a.length,i[3]||i[4])s+=o;else if(!((i[5]||i[6])&&l%3)||(l+o)%3){if(!((s-=o)>0))return o=Math.min(o,o+s+u),Math.min(l,o)%2?{type:"em",raw:e.slice(0,l+i.index+o+1),text:e.slice(1,l+i.index+o)}:{type:"strong",raw:e.slice(0,l+i.index+o+1),text:e.slice(2,l+i.index+o-1)}}else u+=o}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=T(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}},t.autolink=function(e,t){var n,i,r=this.rules.inline.autolink.exec(e);if(r)return i="@"===r[2]?"mailto:"+(n=T(this.options.mangle?t(r[1]):r[1])):n=T(r[1]),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var i,r;if("@"===n[2])r="mailto:"+(i=T(this.options.mangle?t(n[0]):n[0]));else{var a;do{a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(a!==n[0]);i=T(n[0]),r="www."===n[1]?"http://"+i:i}return{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}},t.inlineText=function(e,t,n){var i,r=this.rules.inline.text.exec(e);if(r)return i=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):T(r[0]):r[0]:T(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:i}},e}(),O=E,N=C,j=_,K={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:O,table:O,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};K.def=N(K.def).replace("label",K._label).replace("title",K._title).getRegex(),K.bullet=/(?:[*+-]|\d{1,9}[.)])/,K.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,K.item=N(K.item,"gm").replace(/bull/g,K.bullet).getRegex(),K.listItemStart=N(/^( *)(bull) */).replace("bull",K.bullet).getRegex(),K.list=N(K.list).replace(/bull/g,K.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+K.def.source+")").getRegex(),K._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",K._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,K.html=N(K.html,"i").replace("comment",K._comment).replace("tag",K._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),K.paragraph=N(K._paragraph).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",K._tag).getRegex(),K.blockquote=N(K.blockquote).replace("paragraph",K.paragraph).getRegex(),K.normal=j({},K),K.gfm=j({},K.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),K.gfm.nptable=N(K.gfm.nptable).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",K._tag).getRegex(),K.gfm.table=N(K.gfm.table).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",K._tag).getRegex(),K.pedantic=j({},K.normal,{html:N("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",K._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:O,paragraph:N(K.normal._paragraph).replace("hr",K.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",K.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:O,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:O,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};q.punctuation=N(q.punctuation).replace(/punctuation/g,q._punctuation).getRegex(),q.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,q.escapedEmSt=/\\\*|\\_/g,q._comment=N(K._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),q.emStrong.lDelim=N(q.emStrong.lDelim).replace(/punct/g,q._punctuation).getRegex(),q.emStrong.rDelimAst=N(q.emStrong.rDelimAst,"g").replace(/punct/g,q._punctuation).getRegex(),q.emStrong.rDelimUnd=N(q.emStrong.rDelimUnd,"g").replace(/punct/g,q._punctuation).getRegex(),q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,q.autolink=N(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex(),q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,q.tag=N(q.tag).replace("comment",q._comment).replace("attribute",q._attribute).getRegex(),q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,q._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,q.link=N(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex(),q.reflink=N(q.reflink).replace("label",q._label).getRegex(),q.reflinkSearch=N(q.reflinkSearch,"g").replace("reflink",q.reflink).replace("nolink",q.nolink).getRegex(),q.normal=j({},q),q.pedantic=j({},q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:N(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()}),q.gfm=j({},q.normal,{escape:N(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),q.gfm.url=N(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex(),q.breaks=j({},q.gfm,{br:N(q.br).replace("{2,}","*").getRegex(),text:N(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var P={block:K,inline:q},Z=R,U=i.exports.defaults,W=P.block,G=P.inline,Y=M;function Q(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function X(e){var t,n,i="",r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),i+="&#"+n+";";return i}var J=function(){function t(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||U,this.options.tokenizer=this.options.tokenizer||new Z,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:W.normal,inline:G.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=G.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=G.breaks:t.inline=G.gfm),this.tokenizer.rules=t}t.lex=function(e,n){return new t(n).lex(e)},t.lexInline=function(e,n){return new t(n).inlineTokens(e)};var n,i,r,a=t.prototype;return a.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},a.blockTokens=function(e,t,n){var i,r,a,o,l,s,u=this;for(void 0===t&&(t=[]),void 0===n&&(n=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((function(n){return!!(i=n.call(u,e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)}))))if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),i.type&&t.push(i);else if(i=this.tokenizer.code(e))e=e.substring(i.raw.length),(o=t[t.length-1])&&"paragraph"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text):t.push(i);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.nptable(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),i.tokens=this.blockTokens(i.text,[],n),t.push(i);else if(i=this.tokenizer.list(e)){for(e=e.substring(i.raw.length),a=i.items.length,r=0;r<a;r++)i.items[r].tokens=this.blockTokens(i.items[r].text,[],!1);t.push(i)}else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(n&&(i=this.tokenizer.def(e)))e=e.substring(i.raw.length),this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else if(l=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var t=1/0,n=e.slice(1),i=void 0;u.options.extensions.startBlock.forEach((function(e){"number"==typeof(i=e.call(this,n))&&i>=0&&(t=Math.min(t,i))})),t<1/0&&t>=0&&(l=e.substring(0,t+1))}(),n&&(i=this.tokenizer.paragraph(l)))o=t[t.length-1],s&&"paragraph"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text):t.push(i),s=l.length!==e.length,e=e.substring(i.raw.length);else if(i=this.tokenizer.text(e))e=e.substring(i.raw.length),(o=t[t.length-1])&&"text"===o.type?(o.raw+="\n"+i.raw,o.text+="\n"+i.text):t.push(i);else if(e){var p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}throw new Error(p)}return t},a.inline=function(e){var t,n,i,r,a,o,l=e.length;for(t=0;t<l;t++)switch((o=e[t]).type){case"paragraph":case"text":case"heading":o.tokens=[],this.inlineTokens(o.text,o.tokens);break;case"table":for(o.tokens={header:[],cells:[]},r=o.header.length,n=0;n<r;n++)o.tokens.header[n]=[],this.inlineTokens(o.header[n],o.tokens.header[n]);for(r=o.cells.length,n=0;n<r;n++)for(a=o.cells[n],o.tokens.cells[n]=[],i=0;i<a.length;i++)o.tokens.cells[n][i]=[],this.inlineTokens(a[i],o.tokens.cells[n][i]);break;case"blockquote":this.inline(o.tokens);break;case"list":for(r=o.items.length,n=0;n<r;n++)this.inline(o.items[n].tokens)}return e},a.inlineTokens=function(e,t,n,i){var r,a,o,l=this;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===i&&(i=!1);var s,u,p,c=e;if(this.tokens.links){var d=Object.keys(this.tokens.links);if(d.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(c));)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,s.index)+"["+Y("a",s[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(c));)c=c.slice(0,s.index)+"["+Y("a",s[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(c));)c=c.slice(0,s.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(u||(p=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((function(n){return!!(r=n.call(l,e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,n,i))e=e.substring(r.raw.length),n=r.inLink,i=r.inRawBlock,(a=t[t.length-1])&&"text"===r.type&&"text"===a.type?(a.raw+=r.raw,a.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,i)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),a=t[t.length-1],"link"===r.type?(r.tokens=this.inlineTokens(r.text,[],!0,i),t.push(r)):a&&"text"===r.type&&"text"===a.type?(a.raw+=r.raw,a.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,c,p))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,i),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,i),t.push(r);else if(r=this.tokenizer.autolink(e,X))e=e.substring(r.raw.length),t.push(r);else if(n||!(r=this.tokenizer.url(e,X))){if(o=e,this.options.extensions&&this.options.extensions.startInline&&function(){var t=1/0,n=e.slice(1),i=void 0;l.options.extensions.startInline.forEach((function(e){"number"==typeof(i=e.call(this,n))&&i>=0&&(t=Math.min(t,i))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}(),r=this.tokenizer.inlineText(o,i,Q))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(p=r.raw.slice(-1)),u=!0,(a=t[t.length-1])&&"text"===a.type?(a.raw+=r.raw,a.text+=r.text):t.push(r);else if(e){var h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else e=e.substring(r.raw.length),t.push(r);return t},n=t,r=[{key:"rules",get:function(){return{block:W,inline:G}}}],(i=null)&&e(n.prototype,i),r&&e(n,r),t}(),ee=i.exports.defaults,te=A,ne=k,ie=function(){function e(e){this.options=e||ee}var t=e.prototype;return t.code=function(e,t,n){var i=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,i);null!=r&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+"\n",i?'<pre><code class="'+this.options.langPrefix+ne(i,!0)+'">'+(n?e:ne(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:ne(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var i=t?"ol":"ul";return"<"+i+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+i+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=te(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<a href="'+ne(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=te(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),re=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),ae=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do{n=e+"-"+ ++i}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),oe=ie,le=re,se=ae,ue=i.exports.defaults,pe=w,ce=function(){function e(e){this.options=e||ue,this.options.renderer=this.options.renderer||new oe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new le,this.slugger=new se}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var n,i,r,a,o,l,s,u,p,c,d,h,f,g,b,m,D,y,v,x="",k=e.length;for(n=0;n<k;n++)if(c=e[n],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[c.type])||!1===(v=this.options.extensions.renderers[c.type].call(this,c))&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type))switch(c.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(c.tokens),c.depth,pe(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(u="",s="",a=c.header.length,i=0;i<a;i++)s+=this.renderer.tablecell(this.parseInline(c.tokens.header[i]),{header:!0,align:c.align[i]});for(u+=this.renderer.tablerow(s),p="",a=c.cells.length,i=0;i<a;i++){for(s="",o=(l=c.tokens.cells[i]).length,r=0;r<o;r++)s+=this.renderer.tablecell(this.parseInline(l[r]),{header:!1,align:c.align[r]});p+=this.renderer.tablerow(s)}x+=this.renderer.table(u,p);continue;case"blockquote":p=this.parse(c.tokens),x+=this.renderer.blockquote(p);continue;case"list":for(d=c.ordered,h=c.start,f=c.loose,a=c.items.length,p="",i=0;i<a;i++)m=(b=c.items[i]).checked,D=b.task,g="",b.task&&(y=this.renderer.checkbox(m),f?b.tokens.length>0&&"text"===b.tokens[0].type?(b.tokens[0].text=y+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=y+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:y}):g+=y),g+=this.parse(b.tokens,f),p+=this.renderer.listitem(g,D,m);x+=this.renderer.list(p,d,h);continue;case"html":x+=this.renderer.html(c.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(p=c.tokens?this.parseInline(c.tokens):c.text;n+1<k&&"text"===e[n+1].type;)p+="\n"+((c=e[++n]).tokens?this.parseInline(c.tokens):c.text);x+=t?this.renderer.paragraph(p):p;continue;default:var w='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}else x+=v||"";return x},t.parseInline=function(e,t){t=t||this.renderer;var n,i,r,a="",o=e.length;for(n=0;n<o;n++)if(i=e[n],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type])||!1===(r=this.options.extensions.renderers[i.type].call(this,i))&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))switch(i.type){case"escape":case"text":a+=t.text(i.text);break;case"html":a+=t.html(i.text);break;case"link":a+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":a+=t.image(i.href,i.title,i.text);break;case"strong":a+=t.strong(this.parseInline(i.tokens,t));break;case"em":a+=t.em(this.parseInline(i.tokens,t));break;case"codespan":a+=t.codespan(i.text);break;case"br":a+=t.br();break;case"del":a+=t.del(this.parseInline(i.tokens,t));break;default:var l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}else a+=r||"";return a},e}(),de=J,he=ce,fe=R,ge=ie,be=re,me=ae,De=_,ye=S,ve=k,xe=i.exports.getDefaults,ke=i.exports.changeDefaults,we=i.exports.defaults;function Ce(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=De({},Ce.defaults,t||{}),ye(t),n){var i,r=t.highlight;try{i=de.lex(e,t)}catch(e){return n(e)}var a=function(e){var a;if(!e)try{t.walkTokens&&Ce.walkTokens(i,t.walkTokens),a=he.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,a)};if(!r||r.length<3)return a();if(delete t.highlight,!i.length)return a();var o=0;return Ce.walkTokens(i,(function(e){"code"===e.type&&(o++,setTimeout((function(){r(e.text,e.lang,(function(t,n){if(t)return a(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0==--o&&a()}))}),0))})),void(0===o&&a())}try{var l=de.lex(e,t);return t.walkTokens&&Ce.walkTokens(l,t.walkTokens),he.parse(l,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ve(e.message+"",!0)+"</pre>";throw e}}return Ce.options=Ce.setOptions=function(e){return De(Ce.defaults,e),ke(Ce.defaults),Ce},Ce.getDefaults=xe,Ce.defaults=we,Ce.use=function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r,a=De.apply(void 0,[{}].concat(n)),o=Ce.defaults.extensions||{renderers:{},childTokens:{}};n.forEach((function(t){if(t.extensions&&(r=!0,t.extensions.forEach((function(e){if(!e.name)throw new Error("extension name required");if(e.renderer){var t=o.renderers?o.renderers[e.name]:null;o.renderers[e.name]=t?function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=e.renderer.apply(this,i);return!1===a&&(a=t.apply(this,i)),a}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");o[e.level]?o[e.level].unshift(e.tokenizer):o[e.level]=[e.tokenizer],e.start&&("block"===e.level?o.startBlock?o.startBlock.push(e.start):o.startBlock=[e.start]:"inline"===e.level&&(o.startInline?o.startInline.push(e.start):o.startInline=[e.start]))}e.childTokens&&(o.childTokens[e.name]=e.childTokens)}))),t.renderer&&function(){var e=Ce.defaults.renderer||new ge,n=function(n){var i=e[n];e[n]=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var l=t.renderer[n].apply(e,a);return!1===l&&(l=i.apply(e,a)),l}};for(var i in t.renderer)n(i);a.renderer=e}(),t.tokenizer&&function(){var e=Ce.defaults.tokenizer||new fe,n=function(n){var i=e[n];e[n]=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var l=t.tokenizer[n].apply(e,a);return!1===l&&(l=i.apply(e,a)),l}};for(var i in t.tokenizer)n(i);a.tokenizer=e}(),t.walkTokens){var n=Ce.defaults.walkTokens;a.walkTokens=function(i){t.walkTokens.call(e,i),n&&n(i)}}r&&(a.extensions=o),Ce.setOptions(a)}))},Ce.walkTokens=function(e,t){for(var i,r=function(){var e=i.value;switch(t(e),e.type){case"table":for(var r,a=n(e.tokens.header);!(r=a()).done;){var o=r.value;Ce.walkTokens(o,t)}for(var l,s=n(e.tokens.cells);!(l=s()).done;)for(var u,p=n(l.value);!(u=p()).done;){var c=u.value;Ce.walkTokens(c,t)}break;case"list":Ce.walkTokens(e.items,t);break;default:Ce.defaults.extensions&&Ce.defaults.extensions.childTokens&&Ce.defaults.extensions.childTokens[e.type]?Ce.defaults.extensions.childTokens[e.type].forEach((function(n){Ce.walkTokens(e[n],t)})):e.tokens&&Ce.walkTokens(e.tokens,t)}},a=n(e);!(i=a()).done;)r()},Ce.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=De({},Ce.defaults,t||{}),ye(t);try{var n=de.lexInline(e,t);return t.walkTokens&&Ce.walkTokens(n,t.walkTokens),he.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ve(e.message+"",!0)+"</pre>";throw e}},Ce.Parser=he,Ce.parser=he.parse,Ce.Renderer=ge,Ce.TextRenderer=be,Ce.Lexer=de,Ce.lexer=de.lex,Ce.Tokenizer=fe,Ce.Slugger=me,Ce.parse=Ce,Ce},"object"==typeof exports&&"undefined"!=typeof module?module.exports=de():"function"==typeof define&&define.amd?define(de):(ce="undefined"!=typeof globalThis?globalThis:ce||self).marked=de();var he=Object.freeze({__proto__:null});window.marked||(window.marked=he)
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,e({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new F({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var r=n(e.root||e);return r.insertBefore(i,r.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(n(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return n(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,n){if(e){var i=e.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=i.getAttribute("viewBox")||"0 0 "+t+" "+t,o="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&i.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",a),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=o,r.appendChild(i).removeAttribute("id"),r}return null}});const fe=document.createElement("div");fe.setAttribute("style","display: none;"),fe.innerHTML='<iron-iconset-svg name="exmg-markdown-editor-icons" size="24">\n  <svg>\n    <defs>\n      <g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>\n      <g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>\n      <g id="format-bold"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></g>\n      <g id="format-italic"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path></g>\n      <g id="format-list-bulleted"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path></g>\n      <g id="format-list-numbered"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></g>\n      <g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>\n      <g id="image"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>\n      <g id="format-quote"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></g>\n      <g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>\n      <g id="trending-flat"><path d="M22 14h18v-2H3v2z"></path></g>\n      <g id="header-one"><path d="M11.5 13H5v5a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 3 0v5h6.5V5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-5zm8.5 6h-1.2v-6.535l-1.8.627v-1.046L19.82 11H20v8z"/></g>\n      <g id="header-two"><path d="M11.5 13H5v5a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 3 0v5h6.5V5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-5zm7.142 4.948H22V19h-4.87v-.917l2.353-2.8c.203-.234.367-.45.497-.634a3.77 3.77 0 0 0 .316-.51c.079-.154.13-.296.163-.431a1.762 1.762 0 0 0-.028-.898 1.244 1.244 0 0 0-.209-.4.967.967 0 0 0-.333-.265 1.057 1.057 0 0 0-.457-.093c-.203 0-.39.037-.541.111a1.074 1.074 0 0 0-.384.302c-.096.129-.175.283-.226.461a2.298 2.298 0 0 0-.073.536H17c.006-.327.056-.634.158-.924.107-.307.265-.572.474-.8a2.14 2.14 0 0 1 .768-.541A2.66 2.66 0 0 1 19.444 11c.36 0 .682.05.97.148.277.104.52.246.711.437.192.184.339.412.44.683.102.27.153.572.153.898 0 .24-.034.486-.107.726-.074.24-.175.48-.305.72s-.282.48-.463.72c-.18.24-.372.486-.587.726l-1.614 1.89z"/></g>\n      <g id="header-three"><path d="M11.5 13H5v5a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 3 0v5h6.5V5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-5zm9.815 2.217c.165.125.292.269.393.427.102.164.171.335.222.499.045.184.07.374.07.565 0 .361-.063.69-.19.972a1.997 1.997 0 0 1-.533.722 2.185 2.185 0 0 1-.8.447c-.31.098-.64.151-1.002.151-.33 0-.641-.046-.94-.138a2.334 2.334 0 0 1-.786-.414 1.982 1.982 0 0 1-.546-.69 2.158 2.158 0 0 1-.203-.952h1.263c0 .171.031.329.089.473.057.145.14.263.247.368.108.105.235.184.387.236a1.4 1.4 0 0 0 .508.086c.387 0 .698-.105.92-.322.222-.217.336-.525.336-.933a1.55 1.55 0 0 0-.102-.571 1 1 0 0 0-.279-.4 1.174 1.174 0 0 0-.438-.23 2.212 2.212 0 0 0-.577-.073h-.749V14.41h.743c.215 0 .406-.026.564-.086.16-.059.292-.137.4-.243a.966.966 0 0 0 .241-.374c.051-.144.076-.309.076-.486 0-.374-.088-.663-.279-.867-.19-.204-.476-.309-.863-.309-.171 0-.323.027-.463.08-.14.052-.26.124-.368.216a.998.998 0 0 0-.241.341 1.127 1.127 0 0 0-.089.454H17.07c0-.302.057-.591.184-.848.114-.262.285-.486.495-.676.21-.19.463-.342.761-.453.292-.105.616-.158.965-.158.355 0 .685.046.97.131.299.092.552.237.762.42.216.191.38.421.495.697.12.276.177.598.177.959 0 .158-.019.322-.07.48-.044.164-.12.315-.215.466a2.005 2.005 0 0 1-.87.748c.235.086.432.191.59.316z"/></g>\n      <g id="text-fields"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></g>\n      <g id="grid-on"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></g>\n      <g id="format-strikethrough"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path></g>\n      <g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>\n      <g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>\n      <g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>\n      <g id="format-indent-in"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></g>\n      <g id="format-indent-out"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></g>\n      <g id="paste-table" transform="scale(0.9, 0.9)"><path d="M22,4 C23.1,4 24,4.9 24,6 L24,6 L24,22 C24,23.1 23.1,24 22,24 L22,24 L6,24 C4.9,24 4,23.1 4,22 L4,22 L4,6 C4,4.9 4.9,4 6,4 L6,4 Z M10,18 L6,18 L6,21 C6,21.55 6.45,22 7,22 L7,22 L10,22 L10,18 Z M16,18 L12,18 L12,22 L16,22 L16,18 Z M22,18 L18,18 L18,22 L21,22 C21.55,22 22,21.55 22,21 L22,21 L22,18 Z M13,0 C13.55,0 14,0.45 14,1 C14,1.55 13.55,2 13,2 L13,2 L3,2 C2.45,2 2,2.45 2,3 L2,3 L2,15 C2,15.55 1.55,16 1,16 C0.45,16 0,15.55 0,15 L0,15 L0,2 C0,0.9 0.9,0 2,0 L2,0 Z M10,12 L6,12 L6,16 L10,16 L10,12 Z M16,12 L12,12 L12,16 L16,16 L16,12 Z M22,12 L18,12 L18,16 L22,16 L22,12 Z M10,6 L7,6 C6.45,6 6,6.45 6,7 L6,7 L6,10 L10,10 L10,6 Z M16,6 L12,6 L12,10 L16,10 L16,6 Z M21,6 L18,6 L18,10 L22,10 L22,7 C22,6.45 21.55,6 21,6 L21,6 Z"></path></g>\n    </defs>\n  </svg>\n</iron-iconset-svg>',document.head.appendChild(fe);const ge=b`.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:0}.CodeMirror pre{padding:0 4px}.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0 !important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-moz-keyframes blink{50%{background-color:rgba(0,0,0,0)}}@-webkit-keyframes blink{50%{background-color:rgba(0,0,0,0)}}@keyframes blink{50%{background-color:rgba(0,0,0,0)}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:bold}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:blue}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3,.cm-s-default .cm-type{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta{color:#555}.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error{color:red}.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll !important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative;box-sizing:border-box}.CodeMirror-sizer{position:relative;border-right:30px solid rgba(0,0,0,0)}.CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none !important;border:none !important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:rgba(0,0,0,0)}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:rgba(0,0,0,0)}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:rgba(0,0,0,0);font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-sizer,.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}:host{display:block;border:1px solid var(--exmg-markdown-editor-border, #ddd);font-family:"Roboto","Noto",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;line-height:20px}:host([invalid]){border:1px solid red}#editor{overflow:hidden}.labels{position:relative;width:calc(100% + 20px);height:30px;display:none;top:8px;margin:0px -10px;color:var(--exmg-markdown-editor-label-color, rgba(0, 0, 0, 0.54));background:var(--exmg-markdown-editor-toolbar-label-background, #fafafa);border-top:1px solid var(--exmg-markdown-editor-border, #ddd)}.labels>*{box-sizing:border-box;display:inline-block;height:30px;flex:1 1 0%;line-height:30px;font-size:12px;font-weight:500;padding:0px 8px}.labels>.preview{padding-left:0}::slotted(*){display:none;overflow:auto}:host([show-helper-label]) .labels{display:flex}.preview-html{overflow:scroll;background-color:#fff}:host([show-helper-label]) .preview-html{padding-top:0px;margin-top:0px}:host([split-view]) ::slotted(*){display:block;background:var(--exmg-markdown-editor-preview-background, white);padding:16px}.container{box-sizing:border-box;background:var(--exmg-markdown-editor-background-color, #f1f1f1);display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}:host([fullscreen]) .container{position:fixed !important;top:calc(50px + var(--exmg-markdown-editor-fullscreen-top-offset, 0px));left:0;right:0;bottom:0;z-index:9;margin-top:3px}:host([fullscreen][show-helper-label]) .container{margin-top:33px}.container>*{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px}.container>.preview-html{display:none}:host([split-view]) .container>*{display:block}:host([line-numbers]) .container #editor{padding:0}.CodeMirror{height:calc(100% - 16px) !important;min-height:300px;font:inherit;z-index:1;padding:16px;padding-bottom:0;background:var(--exmg-markdown-editor-code-background, #f9f9f9)}:host([show-helper-label]) .CodeMirror-scroll{margin-top:15px}.CodeMirror:not(.CodeMirror-focused):hover{background:var(--exmg-markdown-editor-code-hover, white);cursor:text}.CodeMirror-focused{box-shadow:inset 0 0 0 2px Highlight;box-shadow:inset 0 0 0 2px -webkit-focus-ring-color;overflow:hidden;background:#fff}.toolbar{position:relative;padding:8px 10px;border-bottom:1px solid var(--exmg-markdown-editor-border, #ddd);background:var(--exmg-markdown-editor-toolbar-background, #fafafa);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}:host([fullscreen]) .toolbar{width:100%;box-sizing:border-box;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding:10px 10px;position:fixed;top:calc(0px + var(--exmg-markdown-editor-fullscreen-top-offset, 0px));left:0;z-index:12}.toolbar .items{display:flex;flex-wrap:wrap}.toolbar a{display:inline-block;text-align:center;text-decoration:none;margin:0;border-radius:4px;color:var(--exmg-markdown-editor-toolbar-color, rgba(0, 0, 0, 0.87));border:1px solid rgba(0,0,0,0);cursor:pointer}.toolbar a iron-icon,.toolbar a mwc-icon{margin:4px;width:22px;height:22px}.toolbar a[disabled]{color:var(--exmg-markdown-editor-toolbar-color-disabled, rgba(0, 0, 0, 0.54))}.toolbar a:hover{background:var(--exmg-markdown-editor-toolbar-button-background-hover, #fafafa)}.toolbar .seperator{margin:0 8px;border-left:1px solid var(--exmg-markdown-editor-toolbar-seperator-color, #ddd);align-self:center;height:22px}`,be=/Mac/.test(navigator.platform),me="---",De=e=>`[${""!==e?e:"Link description"}](${window.markdownEditorConfig&&window.markdownEditorConfig.urlPlaceholder||"https://www.exmachinagroup.com/"})`,ye=e=>`![${""!==e?e:"Image"}](${window.markdownEditorConfig&&window.markdownEditorConfig.imagePlaceholder||"https://pbs.twimg.com/profile_images/748525267153477632/5BistsD7_400x400.jpg"})`,ve="| Column 1 | Column 2 |\n| -------- | -------- |\n| Text     | Text     |",xe={Tab:e=>{const t=e.getDoc().listSelections()[0].head;if(!1!==e.getStateAfter(t.line).list)e.execCommand("indentMore");else if(e.getOption("indentWithTabs"))e.execCommand("insertTab");else{const t=e.getOption("tabSize")||2,n=Array(t+1).join(" ");e.getDoc().replaceSelection(n)}},"Shift-Tab":e=>{const t=e.getDoc().listSelections()[0].head,n=!1!==e.getStateAfter(t.line).list;if(e&&n)e.execCommand("indentLess");else if(e.getOption("indentWithTabs"))e.execCommand("insertTab");else{const t=e.getOption("tabSize")||2,n=Array(t+1).join(" ");e.getDoc().replaceSelection(n)}}},ke={undo:"Cmd-Z",redo:"Cmd-Y",strong:"Cmd-B",italic:"Cmd-I",quote:"Cmd-'","unordered-list":"Cmd-Alt-L","ordered-list":"Cmd-L","split-view":"F9",fullscreen:"F11"},we=["undo","redo","|","header_one","header_two","header_three","strong","italic","strikethrough","|","link","image","|","quote","hr","table","table-paste","code","|","unordered-list","ordered-list","|","fullscreen","split-view"],Ce=[{name:"undo",icon:"undo",className:"btn-undo",title:"Undo"},{name:"redo",icon:"redo",className:"btn-redo",title:"Redo"},{name:"header_one",icon:"exmg-markdown-editor-icons:header-one",type:"line",token:"#",className:"btn-header",title:"Header 1"},{name:"header_two",icon:"exmg-markdown-editor-icons:header-two",type:"line",token:"##",className:"btn-header",title:"Header 2"},{name:"header_three",icon:"exmg-markdown-editor-icons:header-three",type:"line",token:"###",className:"btn-header",title:"Header 3"},{name:"strong",icon:"format_bold",type:"block",token:"**",className:"btn-bold",title:"Bold"},{name:"italic",icon:"format_italic",type:"block",token:"*",className:"btn-italic",title:"Italic"},{name:"strikethrough",icon:"format_strikethrough",type:"block",token:"~~",className:"btn-strikethrough",title:"Strikethrough"},{name:"indent-in",icon:"format_indent_increase",type:"line",token:">",className:"btn-indent-in",title:"Indent increase"},{name:"indent-out",icon:"format_indent_decrease",type:"line",token:">",className:"btn-indent-out",title:"Indent decrease"},{name:"quote",icon:"format_quote",type:"line",token:">",className:"btn-quote-left",title:"Quote"},{name:"hr",icon:"horizontal_rule",className:"btn-horizontal-rule",title:"Horizontal Rule"},{name:"code",icon:"code",className:"btn-code",title:"Code"},{name:"table",icon:"grid_on",className:"btn-table",title:"Table"},{name:"table-paste",icon:"table_view",className:"btn-table-paste",title:"Paste Table"},{name:"link",icon:"link",className:"btn-link",title:"Link"},{name:"image",icon:"image",className:"btn-image",title:"Image"},{name:"image-ext",icon:"image",className:"btn-image",title:"Image"},{name:"unordered-list",icon:"format_list_bulleted",type:"line",token:"*",className:"btn-list-ul",title:"Generic List"},{name:"ordered-list",icon:"format_list_numbered",className:"btn-list-ol",title:"Numbered List"},{name:"fullscreen",icon:"fullscreen",className:"btn-fullscreen",title:"Fullscreen"},{name:"split-view",icon:"exmg-markdown-editor-icons:chrome-reader-mode",className:"btn-split-view",title:"Split View"}];let Ae=class extends d{constructor(){super(),this.autoFocus=!1,this.height=void 0,this.lineNumbers=!1,this.indentWithTabs=!0,this.showHelperLabel=!1,this.splitView=!1,this.fullscreen=!1,this.toolbarButtons=we,this.required=!1,this.invalid=!1,this.bubbles=!1,this.toolbarButtonsConfig=Ce,this.shortcuts=ke,this.normalizedToolBarConfig=new Map,this.dispatchMarkdownUpdatedDebounce=(e=>{let t;return n=>{clearTimeout(t),n&&(t=window.setTimeout(n,e))}})(300),this.isElementInitialized=!1,this._onKeyPressed=this.onKeyPressed.bind(this),this.addEventListener("keyup",this._onKeyPressed)}validate(){return this.invalid=this.required&&!this.markdown,!this.invalid}get value(){return(this.markdown||"").replace(/([^\r]|^)\n/g,"$1\n")}focus(){this.codeMirrorEditor&&(this.refresh(),this.codeMirrorEditor.focus())}refresh(){this.codeMirrorEditor&&this.codeMirrorEditor.refresh()}update(e){var t,n;if(e.has("toolbarButtonsConfig")){const e=new Map,i=null!==(n=null===(t=window.markdownEditorConfig)||void 0===t?void 0:t.customToolBarButtons)&&void 0!==n?n:[];([...this.toolbarButtonsConfig,...i]||[]).forEach((t=>e.set(t.name,t))),this.normalizedToolBarConfig=e}super.update(e)}async firstUpdated(){await this.updateComplete,this.setupEditor(),this.isElementInitialized=!0,this.renderHTML()}fire(e,t,n){return this.dispatchEvent(new CustomEvent(e,{bubbles:n||this.bubbles,composed:!0,detail:t}))}_highlight(e,t){return this.fire("syntax-highlight",{code:e,lang:t}),e}renderHTML(){var e,t;if(!this.markdown)return void(this.innerHTML="");const n={highlight:this._highlight.bind(this),breaks:!1,sanitize:!1,pedantic:!1,smartypants:!1},i=(null===(e=window.markdownEditorConfig)||void 0===e?void 0:e.renderer)||void 0,r=(null===(t=window.markdownEditorConfig)||void 0===t?void 0:t.extensions)||[];window.marked.use({renderer:i,extensions:r}),this.innerHTML=`<div class="preview-body">${window.marked(this.markdown,n)}</div>`,this.focus(),this.fire("html-render-complete",{})}getToolbar(e=[]){return[...e].map((e=>"|"===e?{}:this.normalizedToolBarConfig.get(e)||{}))}updateDocHistory(){if(!this.codeMirrorEditor)return;const{undo:e,redo:t}=this.codeMirrorEditor.getDoc().historySize(),n=this.shadowRoot.querySelector(".btn-undo");n&&(e>0?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled"));const i=this.shadowRoot.querySelector(".btn-redo");i&&(t>0?i.removeAttribute("disabled"):i.setAttribute("disabled","disabled"))}toggleFullscreen(e){e&&e.preventDefault(),this.fullscreen=!this.fullscreen}toggleSplitView(e){e&&e.preventDefault(),this.splitView=!this.splitView}setupEditor(){const e=Object.assign(Object.assign({},xe),{Esc:e=>{e.getOption("fullScreen")&&(this.fullscreen=!1)}});Object.keys(this.shortcuts).forEach((t=>{const n=this.normalizedToolBarConfig.get(t);var i;n&&this.shortcuts[t]&&(e[(i=this.shortcuts[t],be?i:i.replace("Cmd","Ctrl"))]=()=>this.action(n))}));const t={mode:"markdown",value:this.markdown||"",tabSize:2,indentUnit:2,indentWithTabs:this.indentWithTabs,lineNumbers:this.lineNumbers,autofocus:this.autoFocus,extraKeys:e,lineWrapping:!0},n=window.CodeMirror(this.editorElement,t);return n.on("change",(e=>{this.markdown!==e.getValue()&&(this.markdown=e.getValue())})),E(this,(()=>this.updateDocHistory())),this.codeMirrorEditor=n,n}replaceRangeLine(e,t){this.codeMirrorEditor.getDoc().replaceRange(e,{line:t,ch:0},{line:t,ch:99999999999999})}insertAtCursor(e,t,n){this.codeMirrorEditor.getDoc().replaceSelection(e,"start");const i=this.codeMirrorEditor.getDoc().getCursor();i.ch+=t||0,this.codeMirrorEditor.getDoc().setSelection(i,{line:i.line,ch:i.ch+(n||e.length)}),this.codeMirrorEditor.focus()}hasType(e,t){if(e.includes(t))return!0;const n=[{key:"code",value:"comment"},{key:"inline-code",value:"comment"}].find((e=>e.key===t));return!!n&&e.includes(n.value)}processBlock(e,t,n=!1){const i=this.codeMirrorEditor,r=this.getStates(),a=i.getDoc().getCursor("start"),o=i.getDoc().getCursor("end"),l=a.line!==o.line,s=i.getDoc().getSelection(),u=""===s;if(this.hasType(r,e)){const e=Object.assign(Object.assign({},a),{ch:a.ch-t.length}),n=Object.assign(Object.assign({},o),{ch:o.ch+t.length});i.getDoc().setSelection(e,n),i.getDoc().replaceSelection(s),a.ch=e.ch}else{const r=t+("code"===e?"\n":"")+(u?`${e} text`:s)+("code"===e?"\n":"")+t;i.getDoc().replaceSelection(r),n?(a.line+=1,o.line+=1):(a.ch+=t.length,l||(o.ch+=u?`${e} text`.length+t.length:t.length))}i.getDoc().setSelection(a,o),i.focus()}processLine(e,t){const n=this.codeMirrorEditor,i=n.getDoc().getCursor("start"),r=n.getDoc().getCursor("end");let a=0;for(let o=i.line;o<=r.line;o+=1){const l=Object.assign(Object.assign({},i),{line:o,ch:0,sticky:"after"}),s=this.getStates(l);let u=n.getDoc().getLine(o);const p=s.includes(e);switch(e){case"header_one":case"header_two":case"header_three":{const e=/(^[#]+)/.exec(u);if(null===e){u=`${t} ${u}`;const e=t.length+1;i.ch!==r.ch||(i.ch+=e),r.ch+=e}else t&&e[0]===t?u=u.substring(t.length+1):t&&e[0].length!==t.length&&(u=u.substring(e[0].length+1),u=`${t} ${u}`);break}case"quote":case"indent-in":case"unordered-list":u=p?u.substring(2):`${t} ${u}`,i.ch+=p?-2:2,r.ch+=p?-2:2;break;case"indent-out":u=s.includes("quote")?u.substring(2):`${t} ${u}`,i.ch+=p?-2:2,r.ch+=p?-2:2;break;case"ordered-list":u=p?u.substring(3):`${a+1}. ${u}`,i.ch+=p?-3:3,r.ch+=p?-3:3}this.replaceRangeLine(u,o),a+=1}n.getDoc().setSelection(i,r),n.focus()}isSelectionInline(){const e=this.codeMirrorEditor,t=e.getDoc().getCursor("start"),n=e.getDoc().getCursor("end"),i=e.getDoc().getLine(t.line).length;return t.line===n.line&&n.ch-t.ch!==i}getSelectedText(){return this.codeMirrorEditor.getDoc().getSelection()}getStates(e){const t=this.codeMirrorEditor,n=e||Object.assign({},t.getDoc().getCursor("start"));"after"===n.sticky&&(n.ch=1);const i=t.getTokenAt(n);if("~"===i.string&&(i.type="strikethrough"),!i.type)return[];const r=i.type.split(" ");if(r.includes("variable-2")){const e=t.getDoc().getLine(n.line),i=r.indexOf("variable-2");r[i]=/^\s*\d+\.\s/.test(e)?"ordered-list":"unordered-list"}return r}action(e){if(e.type){if(!e.token)return console.error(`A custom option - ${e.name} - for the ExmgMarkdownEditor is set without a token.`,e);switch(e.type){case"block":return this.processBlock(e.name,e.token);case"line":return this.processLine(e.name,e.token)}}else switch(e.name){case"undo":return this.undo();case"redo":return this.redo();case"code":return this.toggleCode();case"table":return this.insertTable();case"table-paste":return this.pasteTable();case"link":return this.insertLink();case"image":return this.insertImage();case"hr":return this.toggleHorizontalRule();case"image-ext":return this.insertImageExt();case"fullscreen":return this.toggleFullscreen();case"split-view":return this.toggleSplitView();case"ordered-list":return this.processLine("ordered-list");default:return console.error(`A custom option - ${e.name} - for the ExmgMarkdownEditor is set without a type.`,e)}}toggleHorizontalRule(){const e=this.codeMirrorEditor,t=e.getDoc().getCursor("start"),n=e.getDoc().getLine(t.line).trim().length,i=0===t.ch&&0===n,r=i?"\n":"\n\n";this.insertAtCursor(r+me+r),t.line+=i?1:2,e.getDoc().setSelection(t,t),e.focus()}insertLink(){const e=this.getSelectedText();this.insertAtCursor(De(e),2,8)}insertImageExt(){this.fire("exmg-markdown-editor-image-open")}insertImage(){const e=this.getSelectedText();this.insertAtCursor(ye(e),2,8)}insertTable(){this.insertAtCursor(ve,2,8)}pasteTable(){this.fire("exmg-markdown-editor-paste-table")}insertMarkdown(e){this.insertAtCursor(e)}insertTableAtCursor(e){const t=e.split(/[\n\u0085\u2028\u2029]|\r\n?/g).map((function(e){return e.split("\t")})),n=t[0].map((function(e,n){return((e,t)=>Math.max.apply(null,e.map((function(e){return e[t].length}))))(t,n)})),i=t.map((function(e){return"| "+e.map((function(e,t){return e+Array(n[t]-e.length+1).join(" ")})).join(" | ")+" |"}));i.splice(1,0,"|"+n.map((function(e,t){return Array(n[t]+3).join("-")})).join("|")+"|");const r=i.join("\n");this.insertAtCursor(r)}toggleCode(e){e&&e.preventDefault(),this.isSelectionInline()?this.processBlock("inline-code",""):this.processBlock("code","",!0)}undo(e){e&&e.preventDefault(),this.codeMirrorEditor.getDoc().undo(),this.codeMirrorEditor.focus()}redo(e){e&&e.preventDefault(),this.codeMirrorEditor.getDoc().redo(),this.codeMirrorEditor.focus()}onKeyPressed(e){switch(e.code||e.keyCode){case 13:case"Enter":case"NumpadEnter":e.ctrlKey||e.stopPropagation()}}render(){const e={fullscreen:this.fullscreen,labels:!0};return y`
      <div id="toolbar" class="toolbar">
        <div class="items">
          ${pe(this.getToolbar(this.toolbarButtons),((e,t)=>e.name?e.name:`empty_${t}`),(e=>{var t;if(e.name){const n=e.icon.indexOf("exmg-markdown-editor-icons:")<0;return y`
                  <a
                    href="#"
                    title=${e.title}
                    class=${null!==(t=e.className)&&void 0!==t?t:""}
                    @click=${t=>{t.preventDefault(),this.action(e)}}
                  >
                    ${n?y`<mwc-icon>${e.icon}</mwc-icon>`:y`<iron-icon icon="${e.icon}"></iron-icon>`}
                  </a>
                `}return y` <span class="seperator"></span> `}))}
        </div>
        <div class=${h(e)}>
          ${this.showHelperLabel?y`
                <div>EDITOR</div>
                ${this.splitView?y` <div class="preview">PREVIEW</div> `:""}
              `:""}
        </div>
      </div>
      <div class="container" style="height: ${this.height&&!this.fullscreen?`${this.height}px`:"inherit"};">
        <div id="editor"></div>
        <div id="preview" class="preview-html"><slot></slot></div>
      </div>
    `}};Ae.styles=[ge],m([D({type:Boolean,attribute:"auto-focus"})],Ae.prototype,"autoFocus",void 0),m([D({type:Number,attribute:"height"})],Ae.prototype,"height",void 0),m([D({type:Boolean,attribute:"line-numbers"})],Ae.prototype,"lineNumbers",void 0),m([D({type:Boolean,attribute:"indent-with-tabs"})],Ae.prototype,"indentWithTabs",void 0),m([D({type:String}),u((function(e){this.codeMirrorEditor&&this.codeMirrorEditor.getValue()!==e&&this.codeMirrorEditor.setValue(e||""),this.dispatchMarkdownUpdatedDebounce((()=>{this.fire("value-change",this.value),this.fire("change",this.value)})),this.renderHTML(),this.updateDocHistory()}))],Ae.prototype,"markdown",void 0),m([D({type:Boolean,attribute:"show-helper-label"})],Ae.prototype,"showHelperLabel",void 0),m([D({type:Boolean,reflect:!0,attribute:"split-view"})],Ae.prototype,"splitView",void 0),m([D({type:Boolean,reflect:!0,attribute:"fullscreen"}),u((function(e){this.codeMirrorEditor&&(this.codeMirrorEditor.setOption("fullScreen",e),this.isElementInitialized&&this.fire("exmg-markdown-editor-fullscreen",!!e))}))],Ae.prototype,"fullscreen",void 0),m([D({type:Array,attribute:"toolbar-buttons"})],Ae.prototype,"toolbarButtons",void 0),m([D({type:String})],Ae.prototype,"name",void 0),m([D({type:Boolean,attribute:"required"})],Ae.prototype,"required",void 0),m([D({type:Boolean,reflect:!0,attribute:"invalid"})],Ae.prototype,"invalid",void 0),m([p()],Ae.prototype,"toolbarButtonsConfig",void 0),m([D({type:Object,attribute:"shortcuts"})],Ae.prototype,"shortcuts",void 0),m([c("#editor")],Ae.prototype,"editorElement",void 0),Ae=m([v("exmg-markdown-editor")],Ae);export{R as I,ne as P,S as a,E as b,J as c,X as d,pe as e};
