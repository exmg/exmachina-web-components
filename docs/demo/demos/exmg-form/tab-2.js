import{i as e,_ as t,e as i,s as n,x as o,a as s}from"../query-assigned-elements-3c47ed19.js";import{a,c as r,P as l,I as h,d,b as p,e as c}from"../exmg-markdown-editor-519175fd.js";import{P as u,h as m,d as f,c as g,u as b,f as v,i as y,o as _}from"../exmg-form-6b163fa7.js";import{I as x,P as w,c as I,a as C}from"../paper-inky-focus-behavior-1c7717e8.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
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
var S;null===(S=window.HTMLSlotElement)||void 0===S||S.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),
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
u({_template:m`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" autocapitalize$="[[autocapitalize]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[a,r],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=a.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=f(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}}),
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
u({_template:m`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[l,h],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}});
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
const k=document.createElement("template");k.setAttribute("style","display: none;"),k.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(k.content);
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
u({_template:m`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[[x,r,{hostAttributes:{role:"option",tabindex:"0"}}]]});
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
class E{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const z={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new E(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&f(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=f(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var i=e[g(this.attrForSelected)];return null!=i?i:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return f(e).observeNodes((function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var n=i.indexOf(t);if(n>=0){var o=this._indexToValue(n);return void this._itemActivate(o,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}},T={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(e){return this._indexToValue(this.indexOf(e))}),this).filter((function(e){return null!=e}),this)):z._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter((function(e){return null!=e}));this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map((function(e){return this._valueToItem(e)}),this)}},O={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),T.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))}),this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,i=this._searchText||"",n=(i+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,o=0;t=this.items[o];o++)if(!t.hasAttribute("disabled")){var s=this.attrForItemTitle||"textContent",a=(t[s]||t.getAttribute(s)||"").trim();if(!(a.length<n)&&a.slice(0,n).toLocaleLowerCase()==i){this._setFocusedItem(t);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t-i+e)%e];if(!n.hasAttribute("disabled")){var o=f(n).getOwnerRoot()||document;if(this._setFocusedItem(n),f(o).activeElement==n)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var n=this.items[(t+i)%e];if(!n.hasAttribute("disabled")){var o=f(n).getOwnerRoot()||document;if(this._setFocusedItem(n),f(o).activeElement==n)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),z._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");O._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),O._shiftTabPressed=!1}),1)},_onFocus:function(e){if(!O._shiftTabPressed){var t=f(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async((function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()})))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){z._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1};
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
let F;
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
u({_template:m`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[[[z,T],d,O]],hostAttributes:{role:"listbox"}}),
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
u({is:"paper-icon-button",_template:m`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[w],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var i=this.getAttribute("aria-label");i&&t!=i||this.setAttribute("aria-label",e)}});const N={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var e=f(this).parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(e=e.host),e},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var e=window.getComputedStyle(this),t=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==e.top?"top":"auto"!==e.bottom?"bottom":null,horizontally:"auto"!==e.left?"left":"auto"!==e.right?"right":null},sizedBy:{height:"none"!==t.maxHeight,width:"none"!==t.maxWidth,minWidth:parseInt(t.minWidth,10)||0,minHeight:parseInt(t.minHeight,10)||0},margin:{top:parseInt(e.marginTop,10)||0,right:parseInt(e.marginRight,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0}}}},resetFit:function(){var e=this._fitInfo||{};for(var t in e.sizerInlineStyle)this.sizingTarget.style[t]=e.sizerInlineStyle[t];for(var t in e.inlineStyle)this.style[t]=e.inlineStyle[t];this._fitInfo=null},refit:function(){var e=this.sizingTarget.scrollLeft,t=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=e,this.sizingTarget.scrollTop=t},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var e=this.getBoundingClientRect(),t=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,o,s,a;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,o=this.sizingTarget.offsetHeight,s=this.sizingTarget.clientWidth,a=this.sizingTarget.clientHeight);var r=this._fitInfo.margin,l={width:e.width+r.left+r.right,height:e.height+r.top+r.bottom},h=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,e,t,i),d=h.left+r.left,p=h.top+r.top,c=Math.min(i.right-r.right,d+e.width),u=Math.min(i.bottom-r.bottom,p+e.height);d=Math.max(i.left+r.left,Math.min(d,c-this._fitInfo.sizedBy.minWidth)),p=Math.max(i.top+r.top,Math.min(p,u-this._fitInfo.sizedBy.minHeight));const m=Math.max(c-d,this._fitInfo.sizedBy.minWidth),f=Math.max(u-p,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=m+"px",this.sizingTarget.style.maxHeight=f+"px";const g=d-e.left,b=p-e.top;if(this.style.left=`${g}px`,this.style.top=`${b}px`,this.expandSizingTargetForScrollbars){const e=this.sizingTarget.offsetHeight,t=e-this.sizingTarget.clientHeight-(o-a);if(t>0){const n=i.height-r.top-r.bottom,o=Math.min(n,f+t);this.sizingTarget.style.maxHeight=`${o}px`;const s=this.sizingTarget.offsetHeight,a=s-e;let l;"top"===h.verticalAlign?l=b:"middle"===h.verticalAlign?l=b-a/2:"bottom"===h.verticalAlign&&(l=b-a),l=Math.max(i.top+r.top,Math.min(l,i.bottom-r.bottom-s)),this.style.top=`${l}px`}const l=this.sizingTarget.offsetWidth,d=l-this.sizingTarget.clientWidth-(n-s);if(d>0){const e=(()=>{if(void 0!==F)return F;const e=document.createElement("div");Object.assign(e.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const t=document.createElement("div");return t.style.width="200px",t.style.height="200px",e.appendChild(t),document.body.appendChild(e),F=Math.abs(e.offsetWidth-100)>1?e.offsetWidth-e.clientWidth:0,document.body.removeChild(e),F})(),t=i.width-r.left-r.right,n=Math.min(t,m+d-e);this.sizingTarget.style.maxWidth=`${n}px`;const o=this.sizingTarget.offsetWidth+e,s=o-l;let a;"left"===h.horizontalAlign?a=g:"center"===h.horizontalAlign?a=g-s/2:"right"===h.horizontalAlign&&(a=g-s),a=Math.max(i.left+r.left,Math.min(a,i.right-r.right-o)),this.style.left=`${a}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo;e.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),e.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var t=this.getBoundingClientRect();e.sizedBy.height||this.__sizeDimension(t,e.positionedBy.vertically,"top","bottom","Height"),e.sizedBy.width||this.__sizeDimension(t,e.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(e,t,i,n,o){this.__sizeDimension(e,t,i,n,o)},__sizeDimension:function(e,t,i,n,o){var s=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),r="Width"===o?a.width:a.height,l=t===n,h=l?r-e[n]:e[i],d=s.margin[l?i:n],p="offset"+o,c=this[p]-this.sizingTarget[p];this.sizingTarget.style["max"+o]=r-d-h-c+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var e=this._fitInfo.positionedBy;if(!e.vertically||!e.horizontally){this.style.position="fixed",e.vertically||(this.style.top="0px"),e.horizontally||(this.style.left="0px");var t=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!e.vertically){var n=i.top-t.top+(i.height-t.height)/2;this.style.top=n+"px"}if(!e.horizontally){var o=i.left-t.left+(i.width-t.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(e){return e===document.documentElement||e===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect()},__getOffscreenArea:function(e,t,i){var n=Math.min(0,e.top)+Math.min(0,i.bottom-(e.top+t.height)),o=Math.min(0,e.left)+Math.min(0,i.right-(e.left+t.width));return Math.abs(n)*t.width+Math.abs(o)*t.height},__getPosition:function(e,t,i,n,o,s){var a,r=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,h=r.length;l<h;l++){var d={};for(var p in r[l])d[p]=r[l][p];r.push(d)}r[0].top=r[1].top+=o.height,r[2].top=r[3].top-=o.height,r[4].left=r[6].left+=o.width,r[5].left=r[7].left-=o.width}t="auto"===t?null:t,(e="auto"===e?null:e)&&"center"!==e||(r.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),r.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),t&&"middle"!==t||(r.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),r.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),"middle"===t&&"center"===e&&r.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});for(l=0;l<r.length;l++){var c=r[l],u=c.verticalAlign===t,m=c.horizontalAlign===e;if(!this.dynamicAlign&&!this.noOverlap&&u&&m){a=c;break}var f=(!t||u)&&(!e||m);if(this.dynamicAlign||f){if(c.offscreenArea=this.__getOffscreenArea(c,i,s),0===c.offscreenArea&&f){a=c;break}a=a||c;var g=c.offscreenArea-a.offscreenArea;(g<0||0===g&&(u||m))&&(a=c)}}return a}};
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
var B=new Set;const R={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(B.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():b||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=f(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(B.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?B.delete(this):B.add(this)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var $=Element.prototype,V=$.matches||$.matchesSelector||$.mozMatchesSelector||$.msMatchesSelector||$.oMatchesSelector||$.webkitMatchesSelector;const L=new class{getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}isFocusable(e){return V.call(e,"input, select, textarea, button, object")?V.call(e,":not([disabled])"):V.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&V.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}_collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var i=e;if(!this._isVisible(i))return!1;var n,o=this._normalizedTabIndex(i),s=o>0;o>=0&&t.push(i),n="content"===i.localName||"slot"===i.localName?f(i).getDistributedNodes():f(i.root||i).children;for(var a=0;a<n.length;a++)s=this._collectTabbableNodes(n[a],t)||s;return s}_isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}_sortByTabIndex(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),o=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,o)}_mergeSortByTabIndex(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}_hasLowerTabOrder(e,t){var i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/u({_template:m`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&f(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||f(this.parentNode).removeChild(this)},_onTransitionend:function(e){e&&e.target===this&&this.complete()},_openedChanged:function(e){if(e)this.prepare();else{var t=window.getComputedStyle(this);"0s"!==t.transitionDuration&&0!=t.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});const M=new
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
class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,v(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for(e&&e instanceof Element!=!1||(e=document.body);e.root&&f(e.root).activeElement;)e=f(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var t=this._overlays[e];if(t){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(t,n)&&i--,!(e>=i)){var o=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(t)<=o&&this._applyOverlayZ(t,o);e<i;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[i]=t}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var t=this._overlays.indexOf(e);if(t>=0)return this._bringOverlayAtIndexToFront(t),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],o=Math.max(this._getZ(n),this._minimumZ),s=this._getZ(e);if(n&&this._shouldBeBehindOverlay(e,n)){this._applyOverlayZ(n,o),i--;var a=this._overlays[i-1];o=Math.max(this._getZ(a),this._minimumZ)}s<=o&&this._applyOverlayZ(e,o),this._overlays.splice(i,0,e),this.trackBackdrop()}removeOverlay(e){var t=this._overlays.indexOf(e);-1!==t&&(this._overlays.splice(t,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();(e||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],t=0;t<this._overlays.length;t++)this._overlays[t].withBackdrop&&e.push(this._overlays[t]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var t=this._minimumZ;if(e){var i=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);i==i&&(t=i)}return t}_setZ(e,t){e.style.zIndex=t}_applyOverlayZ(e,t){this._setZ(e,t+2)}_overlayInPath(e){e=e||[];for(var t=0;t<e.length;t++)if(e[t]._manager===this)return e[t]}_onCaptureClick(e){var t=this._overlays.length-1;if(-1!==t)for(var i,n=f(e).path;(i=this._overlays[t])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(e),i.allowClickThrough);)t--}_onCaptureFocus(e){var t=this.currentOverlay();t&&t._onCaptureFocus(e)}_onCaptureKeyDown(e){var t=this.currentOverlay();t&&(d.keyboardEventMatchesKeys(e,"esc")?t._onCaptureEsc(e):d.keyboardEventMatchesKeys(e,"tab")&&t._onCaptureTab(e))}_shouldBeBehindOverlay(e,t){return!e.alwaysOnTop&&t.alwaysOnTop}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var D,P,W={pageX:0,pageY:0},H=null,K=[],q=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function j(e){Z.indexOf(e)>=0||(0===Z.length&&function(){D=D||Y.bind(void 0);for(var e=0,t=q.length;e<t;e++)document.addEventListener(q[e],D,{capture:!0,passive:!1})}(),Z.push(e),P=Z[Z.length-1])}function U(e){var t=Z.indexOf(e);-1!==t&&(Z.splice(t,1),P=Z[Z.length-1],0===Z.length&&function(){for(var e=0,t=q.length;e<t;e++)document.removeEventListener(q[e],D,{capture:!0,passive:!1})}())}const Z=[];function Y(e){if(e.cancelable&&function(e){var t=f(e).rootTarget;"touchmove"!==e.type&&H!==t&&(H=t,K=function(e){for(var t=[],i=e.indexOf(P),n=0;n<=i;n++)if(e[n].nodeType===Node.ELEMENT_NODE){var o=e[n],s=o.style;"scroll"!==s.overflow&&"auto"!==s.overflow&&(s=window.getComputedStyle(o)),"scroll"!==s.overflow&&"auto"!==s.overflow||t.push(o)}return t}(f(e).path));if(!K.length)return!0;if("touchstart"===e.type)return!1;var i=function(e){var t={deltaX:e.deltaX,deltaY:e.deltaY};if("deltaX"in e);else if("wheelDeltaX"in e&&"wheelDeltaY"in e)t.deltaX=-e.wheelDeltaX,t.deltaY=-e.wheelDeltaY;else if("wheelDelta"in e)t.deltaX=0,t.deltaY=-e.wheelDelta;else if("axis"in e)t.deltaX=1===e.axis?e.detail:0,t.deltaY=2===e.axis?e.detail:0;else if(e.targetTouches){var i=e.targetTouches[0];t.deltaX=W.pageX-i.pageX,t.deltaY=W.pageY-i.pageY}return t}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(e);return!function(e,t,i){if(!t&&!i)return;for(var n=Math.abs(i)>=Math.abs(t),o=0;o<e.length;o++){var s=e[o];if(n?i<0?s.scrollTop>0:s.scrollTop<s.scrollHeight-s.clientHeight:t<0?s.scrollLeft>0:s.scrollLeft<s.scrollWidth-s.clientWidth)return s}}(K,i.deltaX,i.deltaY)}(e)&&e.preventDefault(),e.targetTouches){var t=e.targetTouches[0];W.pageX=t.pageX,W.pageY=t.pageY}}const X={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:M},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||f(this).querySelector("[autofocus]")||this},get _focusableNodes(){return L.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=f(this).observeNodes(this._onNodesChange)},detached:function(){for(var e in this._observer&&f(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[e]&&cancelAnimationFrame(this.__rafs[e]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(e){this.fire("iron-overlay-canceled",e,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(e){e?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._manager.deepActiveElement;(e===document.body||G(this,e))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(e){this.noCancelOnOutsideClick||this.cancel(e)},_onCaptureFocus:function(e){if(this.withBackdrop){var t=f(e).path;-1===t.indexOf(this)?(e.stopPropagation(),this._applyFocus()):this._focusedChild=t[0]}},_onCaptureEsc:function(e){this.noCancelOnEscKey||this.cancel(e)},_onCaptureTab:function(e){if(this.withBackdrop){this.__ensureFirstLastFocusables();var t=e.shiftKey,i=t?this.__firstFocusableNode:this.__lastFocusableNode,n=t?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var s=this._manager.deepActiveElement;o=s===i||s===this}o&&(e.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var e=this._focusableNodes;this.__firstFocusableNode=e[0],this.__lastFocusableNode=e[e.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(e,t){var i=this.__rafs;null!==i[e]&&cancelAnimationFrame(i[e]),i[e]=requestAnimationFrame(function(){i[e]=null,t.call(this)}.bind(this))},__updateScrollObservers:function(e,t,i){e&&t&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),j(this)),this.__addScrollListeners()):(U(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],b)for(var e=this;e;)e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host&&this.__rootNodes.push(e),e=e.host||e.assignedSlot||e.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(e){e.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(e){return"lock"===e||"refit"===e||"cancel"===e},__onCaptureScroll:function(e){if(!(this.__isAnimating||f(e).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(e)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},G=(e,t)=>{for(let n=t;n;n=(i=n).assignedSlot||i.parentNode||i.host)if(n===e)return!0;var i;return!1},J={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,t){for(var i in t)e[i]=t[i]},_cloneConfig:function(e){var t={isClone:!0};return this._copyProperties(t,e),t},_getAnimationConfigRecursive:function(e,t,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=e?this.animationConfig[e]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,s=0;o=n[s];s++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,t,i);else if(o.id){var a=t[o.id];a?(a.isClone||(t[o.id]=this._cloneConfig(a),a=t[o.id]),this._copyProperties(a,o)):t[o.id]=o}else i.push(o)},getAnimationConfig:function(e){var t={},i=[];for(var n in this._getAnimationConfigRecursive(e,t,i),t)i.push(t[n]);return i}},Q={_configureAnimations:function(e){var t=[],i=[];if(e.length>0)for(let t,n=0;t=e[n];n++){let e=document.createElement(t.name);if(e.isNeonAnimation){let n=null;e.configure||(e.configure=function(e){return null}),n=e.configure(t),i.push({result:n,config:t,neonAnimation:e})}else console.warn(this.is+":",t.name,"not found!")}for(var n=0;n<i.length;n++){let e=i[n].result,o=i[n].config,s=i[n].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(t){e=null,console.warn("Couldnt play","(",o.name,").",t)}e&&t.push({neonAnimation:s,config:o,animation:e})}return t},_shouldComplete:function(e){for(var t=!0,i=0;i<e.length;i++)if("finished"!=e[i].animation.playState){t=!1;break}return t},_complete:function(e){for(var t=0;t<e.length;t++)e[t].neonAnimation.complete(e[t].config);for(t=0;t<e.length;t++)e[t].animation.cancel()},playAnimation:function(e,t){var i=this.getAnimationConfig(e);if(i){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var n=this._configureAnimations(i);if(0!=n.length){this._active[e]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[e],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var t=this._active[e];for(var i in t)t[i].animation.cancel()}this._active={}}};
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
u({_template:m`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[r,d,[N,R,X],[J,Q]],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=f(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),X._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):X._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):X._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():X._applyFocus.apply(this,arguments)}});
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
const ee=m`
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
</custom-style>`;ee.setAttribute("style","display: none;"),document.head.appendChild(ee.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const te=m`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;te.setAttribute("style","display: none;"),document.head.appendChild(te.content);
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
const ie={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){I._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){I._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},ne=[x,r,C,ie],oe=m`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;oe.setAttribute("strip-whitespace",""),u({_template:oe,is:"paper-button",behaviors:[ne],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?ie._calculateElevation.apply(this):this._setElevation(0)}});const se=document.createElement("div");se.setAttribute("style","display: none;"),se.innerHTML='<iron-iconset-svg name="exmg-paper-combobox-icons" size="24">\n<svg>\n  <defs>\n    <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n  </defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(se);const ae=e=>{let t;return i=>{clearTimeout(t),i&&(t=window.setTimeout(i,e))}};let re=class extends n{constructor(){super(),this.attrForSelected="",this.maxWidthMenuList=200,this.autoValidate=!1,this.autofocus=!1,this.disabled=!1,this.searchDisabled=!1,this.errorMessage="",this.alwaysFloatLabel=!1,this.required=!1,this.inputValue="",this.invalid=!1,this.inputFocused=!1,this.noFloatLabel=!1,this.opened=!1,this.dynamicAlign=!1,this.horizontalAlign="right",this.verticalAlign="top",this.verticalOffset="4",this.horizontalOffset="4",this.previousInsideClick=!1,this.ignoreFocus=!1,this.isAnyItemActive=!0,this.isElementInitialized=!1,this.observers=this.getObservers(),this.keyDownBackspaceDebounce=ae(200),this.inputChangeDebounce=ae(300),this._onKeyUp=this.onKeyUp.bind(this),this._onClick=this.onClick.bind(this),this._onIronResize=this.onIronResize.bind(this)}get value(){return this.selected}set value(e){this.selected=e}getObservers(){return{inputValue:()=>this.observeInputChange(),selectedItem:()=>this.observeSelectedItem(),selectedValue:()=>this.observeSelectedValue(),selected:()=>this.observeSelected()}}executeObservers(e){Object.entries(this.observers).forEach((([t,i])=>{i&&e.has(t)&&i(e)}))}observeInputChange(){this.inputElement&&this.inputWidthHelperElement&&(this.inputElement.style.width=`${this.inputWidthHelperElement.offsetWidth+10}px`),this.isElementInitialized||(this.isAnyItemActive=this.filterItems()),this.isElementInitialized&&this.menuElement&&this.inputChangeDebounce((()=>{this.isAnyItemActive=this.filterItems(),this.onIronResize(),p(this,(()=>this.menuElement.notifyResize())),!this.menuElement.opened&&this.isAnyItemActive&&this.inputValue?(this.menuElement.open(),p(this,(()=>this.focus()))):this.menuElement.opened&&!this.isAnyItemActive&&this.menuElement.close()}))}observeSelectedValue(){this.selected=this.selectedValue}observeSelected(){this.selectedValue!==this.selected&&(this.ignoreFocus=!0),this.selectedValue=this.selected}observeSelectedItem(){if(!this.selectedItem)return void(this.token=void 0);const e=this.getSelectedItemKey(this.selectedItem);if(void 0===e)return this.selectedValue=void 0,this.selectedItem=void 0,void(this.token=void 0);const t=this.selectedItemSelector?this.selectedItem.querySelector(this.selectedItemSelector):this.selectedItem,i=t&&t.textContent||"";this.token={id:e,text:i}}open(){this.opened=!0}close(){this.opened=!1}toggle(){this.opened=!this.opened}filterItems(){const e=this.querySelectorAll("paper-item, paper-icon-item"),t=!!this.inputValue&&this.inputValue.length>0,i=t?this.inputValue.toLowerCase().trim():"";let n=!1;return e.forEach((e=>{t&&e.textContent&&-1===e.textContent.toLowerCase().indexOf(i)?e.setAttribute("hidden",""):(n=!0,e.removeAttribute("hidden"))})),n}indexOf(e){return this.listBox&&this.listBox.items?this.listBox.items.indexOf(e):-1}getSelectedItemKey(e){if(this.attrForSelected)return e.getAttribute(this.attrForSelected)||void 0;const t=this.indexOf(e);return-1===t?void 0:t}hasSelectedItem(){return!!this.selectedItem}focus(){this.inputElement&&this.inputElement.focus()}computeAlwaysFloatLabel(){return!!this.alwaysFloatLabel||(!!this.token||this.inputFocused)}resetInput(){this.autoValidate&&this.validate(),this.inputValue="",this.inputElement.value="",this.ignoreFocus?this.ignoreFocus=!1:this.focus()}validate(){return this.invalid=!this.disabled&&this.required&&!this.hasSelectedItem(),!this.invalid}onKeyUp(e){switch("string"!=typeof this.inputValue&&(this.inputValue=""),e.code||e.keyCode){case 13:case"Enter":case"NumpadEnter":e.ctrlKey||e.stopPropagation();break;case 8:case"Backspace":case 127:case"Delete":this.menuElement.opened||this.keyDownBackspaceDebounce((()=>{!this.menuElement.opened&&this.isAnyItemActive&&(this.menuElement.open(),p(this,(()=>this.focus())))})),this.selectedValue=void 0,this.selectedItem=void 0;break;case 40:case"ArrowDown":!this.menuElement.opened&&this.isAnyItemActive&&this.menuElement.open(),p(this,(()=>this.listBox.focus()));break;case 27:case"Escape":e.preventDefault(),this.menuElement.close(),p(this,(()=>this.focus()))}}onClick(e){const t=-1!==e.composedPath().findIndex((e=>e===this));(this.autoValidate&&this.previousInsideClick&&!t||this.token)&&this.validate(),this.previousInsideClick=t}onContainerTap(e){e.preventDefault(),this.menuElement.open(),p(this,(()=>this.focus()))}onItemSelected(e){if(e.stopPropagation(),this.selected&&!this.selectedItem&&(this.selectedItem=e.detail.item),this.selected!==this.getSelectedItemKey(e.detail.item)){this.selectedItem=e.detail.item,this.selected=this.getSelectedItemKey(this.selectedItem);const t={value:this.selected,item:this.selectedItem,token:this.token};this.dispatchEvent(new CustomEvent("change",{detail:t,composed:!0,bubbles:!0}))}this.resetInput()}onItemDeselected(e){e.stopPropagation(),this.selectedItem=void 0,this.selected=void 0,this.dispatchEvent(new CustomEvent("change",{detail:{},composed:!0,bubbles:!0})),this.resetInput()}onItemActivated(e){this.selected===e.detail.selected&&(this.ignoreFocus=!1,p(this,(()=>this.resetInput()))),this.opened=!1}onInputValueChange(e){this.searchDisabled||(this.inputValue=e.target.value)}onInputFocusChanged(e){this.inputFocused=e.detail.value}onTokenClick(){this.focus()}initializeElement(){this.inputWidthHelperElement&&(((e,t)=>{const i=window.getComputedStyle(e,null);Array.from(i).forEach((e=>t.style.setProperty(e,i.getPropertyValue(e),i.getPropertyPriority(e))))})(this.inputElement,this.inputWidthHelperElement),this.inputWidthHelperElement.style.position="absolute",this.inputWidthHelperElement.style.top="-999px",this.inputWidthHelperElement.style.left="0",this.inputWidthHelperElement.style.padding="0",this.inputWidthHelperElement.style.width="auto",this.inputWidthHelperElement.style.whiteSpace="pre"),this.inputElement.addEventListener("keyup",this._onKeyUp),this.autoValidate&&window.addEventListener("click",this._onClick),this.addEventListener("iron-resize",this._onIronResize);const e=this.shadowRoot.querySelector(".container");e&&(this.menuElement.positionTarget=e)}onIronResize(){const e=this.shadowRoot.querySelector(".dropdown-content"),{left:t}=e.getBoundingClientRect(),{scrollWidth:i}=e,n=(...e)=>Math.max(...e);if(i>0&&i<this.maxWidthMenuList){const i=document.documentElement.clientWidth-t;e.style.maxWidth=`${((...e)=>Math.min(...e))(n(i,100),this.maxWidthMenuList)}px`}const{top:o}=e.getBoundingClientRect(),{scrollHeight:s}=e;if(s>0){const t=document.documentElement.clientHeight-o;e.style.maxHeight=`${n(t-10,100)}px`}}shouldFireEvent(e){const t=["selected","selectedItem"].some((t=>e.has(t)&&e.get(t)!==this[t])),{id:i}=this.token||{};return t&&i===this.selected}async firstUpdated(){this.initializeElement(),await this.updateComplete,this.isElementInitialized=!0}updated(e){if(this.executeObservers(e),this.shouldFireEvent(e))if(void 0!==this.selected){const e={value:this.selected,item:this.selectedItem,token:this.token};this.dispatchEvent(new CustomEvent("exmg-combobox-select",{detail:e,composed:!0,bubbles:!0}))}else this.dispatchEvent(new CustomEvent("exmg-combobox-deselect",{composed:!0,bubbles:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.inputElement&&this.inputElement.removeEventListener("keyup",this._onKeyUp),this.removeEventListener("iron-resize",this._onIronResize),this.autoValidate&&window.removeEventListener("click",this._onClick),this.inputChangeDebounce(),this.keyDownBackspaceDebounce()}render(){return o` ${this.getTemplate()} `}getTemplate(){const e=this.querySelector('*[slot="prefix"]'),t=e?e.offsetWidth:0;return o`
      <style>
        label.with-prefix {
          padding-left: ${t}px;
        }
      </style>
      <div class="container">
        <paper-input-container
          ?no-label-float="${this.noFloatLabel}"
          ?always-float-label="${this.computeAlwaysFloatLabel()}"
          @tap="${this.onContainerTap}"
          ?disabled="${this.disabled}"
          ?focused="${this.inputFocused}"
          @focused-changed="${this.onInputFocusChanged}"
          ?invalid="${this.invalid}"
          id="paperInputContainer"
        >
          ${this.selected&&this.noFloatLabel?"":o`
                <label slot="label" class="${e?"with-prefix":""}" ?hidden="${!this.label}" aria-hidden="true"
                  >${this.label}</label
                >
              `}
          <iron-input bind-value="${this.inputValue}" slot="input">
            <slot name="prefix"></slot>
            <span class="${_({tokens:!0,selected:!!this.token})}">
              ${this.renderTokenButton()}
              <input
                id="inputValue"
                aria-labelledby="label"
                value="${this.inputValue}"
                @input="${this.onInputValueChange}"
                ?readonly="${this.searchDisabled}"
                ?autofocus="${this.autofocus}"
                autocomplete="off"
                ?disabled="${this.disabled}"
              />
            </span>
            <slot name="suffix"></slot>
          </iron-input>
          <paper-input-error slot="add-on" aria-live="assertive">${this.errorMessage}</paper-input-error>
        </paper-input-container>

        <span id="inputWidthHelper">${this.inputValue} </span>
        <paper-icon-button
          id="menuButton"
          ?disabled="${this.disabled}"
          icon="exmg-paper-combobox-icons:arrow-drop-down"
          @click=${()=>this.toggle()}
        ></paper-icon-button>
        <iron-dropdown
          id="menu"
          @opened-changed=${e=>this.opened=e.detail.value}
          ?opened="${this.opened}"
          no-overlap
          restore-focus-on-close
          close-on-activate
          ?dynamic-align=${this.dynamicAlign}
          horizontal-align=${this.horizontalAlign}
          vertical-offset=${this.verticalOffset}
          horizontal-offset=${this.horizontalOffset}
          vertical-align=${this.verticalAlign}
        >
          <paper-listbox
            id="listbox"
            slot="dropdown-content"
            selectable="paper-item:not([hidden]),paper-icon-item:not([hidden])"
            attr-for-selected="${this.attrForSelected}"
            .selected="${this.selectedValue}"
            class="dropdown-content"
            @iron-activate="${this.onItemActivated}"
            @iron-select="${this.onItemSelected}"
            @iron-deselect="${this.onItemDeselected}"
          >
            <slot></slot>
          </paper-listbox>
        </iron-dropdown>
      </div>
    `}renderTokenButton(){return this.token?o`
      <paper-button tabindex="-1" @click="${this.onTokenClick}">
        <span>${this.token.text}</span>
      </paper-button>
    `:null}};re.styles=[e`
      :host {
        display: block;
        min-width: 167px;
        --paper-button-color: var(--exmg-paper-combobox-selected-item-color, #000);
        --paper-button-bg-color: var(--exmg-paper-combobox-selected-item-bg-color, #fff);
        --paper-icon-button-ink-color: var(--exmg-paper-combobox-dropdown-button-color, #000);
        --paper-icon-button-ink-bg-color: var(--exmg-paper-combobox-dropdown-button-bg-color, transparent);
        --paper-listbox-color: var(--exmg-paper-combobox-dropdown-list-color, #000);
        --paper-listbox-background-color: var(--exmg-paper-combobox-dropdown-list-bg-color, #fff);
      }
      paper-icon-button {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        background-color: var(--paper-icon-button-ink-bg-color);
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
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      paper-input-container {
        flex: 1;
        flex-basis: 0.000000001px;
        height: 56px;
        box-sizing: border-box;
      }
      .tokens {
        margin-right: 6px;
        min-height: 24px;
        position: relative;
        width: 100%;
        white-space: nowrap;
      }
      .tokens paper-button {
        margin: 0;
        padding: 0 4px;
        height: 22px;
        font-size: 16px;
        min-width: initial;
        max-width: 100%;
      }
      .tokens paper-button span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tokens.selected input {
        color: transparent;
        width: 1px !important;
      }
      #inputValue {
        font: inherit;
        outline: none;
        box-shadow: none;
        background: transparent;
        border: none;
        width: auto;
        max-width: 100%;
      }
      paper-icon-button {
        margin: 0;
      }
      paper-button {
        padding: 0;
        color: var(--paper-button-color);
        background-color: var(--paper-button-bg-color);
        text-transform: capitalize;
      }
      .container {
        flex: 1;
        flex-basis: 0.000000001px;
      }
      iron-input {
        line-height: 22px;
        height: 24px;
      }
      iron-dropdown {
        box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));
        max-width: var(--exmg-paper-combobox-dropdown-list-max-width, 400px);
      }
      #menuButton[disabled] {
        opacity: 0.33;
      }
    `],t([i({type:String,attribute:"attr-for-selected"})],re.prototype,"attrForSelected",void 0),t([i({type:String,attribute:"selected-item-selector"})],re.prototype,"selectedItemSelector",void 0),t([i({type:Object,attribute:"selected-item"})],re.prototype,"selectedItem",void 0),t([i({type:String})],re.prototype,"selected",void 0),t([i({type:Number,attribute:"max-width-menu-list"})],re.prototype,"maxWidthMenuList",void 0),t([i({type:String})],re.prototype,"selectedValue",void 0),t([i({type:String})],re.prototype,"label",void 0),t([i({type:Boolean,attribute:"auto-validate"})],re.prototype,"autoValidate",void 0),t([i({type:Boolean})],re.prototype,"autofocus",void 0),t([i({type:Boolean})],re.prototype,"disabled",void 0),t([i({type:Boolean})],re.prototype,"searchDisabled",void 0),t([i({type:String,attribute:"error-message"})],re.prototype,"errorMessage",void 0),t([i({type:Boolean,attribute:"always-float-label"})],re.prototype,"alwaysFloatLabel",void 0),t([i({type:Boolean})],re.prototype,"required",void 0),t([i({type:String})],re.prototype,"name",void 0),t([i({type:String,attribute:"input-value"})],re.prototype,"inputValue",void 0),t([i({type:Object})],re.prototype,"token",void 0),t([i({type:Boolean})],re.prototype,"invalid",void 0),t([i({type:Boolean,attribute:"input-focused"})],re.prototype,"inputFocused",void 0),t([i({type:Boolean,attribute:"no-float-label"})],re.prototype,"noFloatLabel",void 0),t([i({type:Boolean})],re.prototype,"opened",void 0),t([i({type:Boolean,attribute:"dynamic-align"})],re.prototype,"dynamicAlign",void 0),t([i({type:String,attribute:"horizontal-align"})],re.prototype,"horizontalAlign",void 0),t([i({type:String,attribute:"vertical-align"})],re.prototype,"verticalAlign",void 0),t([i({type:String,attribute:"vertical-offset"})],re.prototype,"verticalOffset",void 0),t([i({type:String,attribute:"horizontal-offset"})],re.prototype,"horizontalOffset",void 0),t([y("#listbox")],re.prototype,"listBox",void 0),t([y("#inputValue")],re.prototype,"inputElement",void 0),t([y("#inputWidthHelper")],re.prototype,"inputWidthHelperElement",void 0),t([y("#menu")],re.prototype,"menuElement",void 0),re=t([s("exmg-paper-combobox")],re);
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
const le={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,i){for(var n,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],s=0;n=o[s];s++)e.style[n]=i;e.style[t]=i},complete:function(e){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/u({is:"fade-in-animation",behaviors:[le],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),
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
u({is:"fade-out-animation",behaviors:[le],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}}),
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
u({is:"paper-menu-grow-height-animation",_template:null,behaviors:[le],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(e)),this._effect}}),u({is:"paper-menu-grow-width-animation",_template:null,behaviors:[le],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(e)),this._effect}}),u({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[le],configure:function(e){var t=e.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(e)),this._effect}}),u({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[le],configure:function(e){var t=e.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});
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
var he={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const de=u({_template:m`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[d,r],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:he.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:he.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:he.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=f(this.$.content).getDistributedNodes(),t=0,i=e.length;t<i;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){r._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,i=this.$.trigger;f(t).path.indexOf(i)>-1&&e.preventDefault()}});Object.keys(he).forEach((function(e){de[e]=he[e]}));const pe=document.createElement("div");pe.setAttribute("style","display: none;"),pe.innerHTML='<iron-iconset-svg name="exmg-paper-token-input-icons" size="24">\n<svg>\n  <defs>\n    <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n    <g id="clear">\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">\n    </path>\n    </g>\n  </defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(pe);let ce=class extends n{constructor(){super(),this.selectedValues=[],this.autoValidate=!1,this.autofocus=!1,this.disabled=!1,this.alwaysFloatLabel=!1,this.allowMultiLine=!1,this.required=!1,this.inputValue="",this.invalid=!1,this.inputFocused=!1,this.disableCloseOnActivate=!1,this.opened=!1,this.previousClickWasInside=!1,this._onIronInputKeyUp=this.onIronInputKeyUp.bind(this),this._onWindowClick=this.onWindowClick.bind(this)}indexOfItem(e){return this.listBoxNode.items?(this.listBoxNode.items||[]).indexOf(e):-1}indexOfValue(e){return this.listBoxNode.items.map((e=>this.getPaperItemValue(e))).indexOf(e)}getStringSelectedValues(){return this.selectedValues.map((e=>"number"==typeof e?e.toString():(e||"").toString()))}get value(){return[...this.selectedValues]}set value(e){this.selectedValues=[...e]}onWindowClick(e){const t=!!e.composedPath().find((e=>e===this));this.autoValidate&&!t&&this.previousClickWasInside&&this.validate(),this.previousClickWasInside=t}onIronInputKeyUp(e){switch(e.code||e.keyCode){case 13:case"Enter":case"NumpadEnter":e.ctrlKey||e.stopPropagation();break;case 8:case"Backspace":!this.inputValue&&this.listBoxNode.selectIndex(this.indexOfValue(this.selectedValues[this.selectedValues.length-1])),this.requestUpdate(),this.focusInputValue();break;case 40:case"ArrowDown":this.menuElement.open(),this.listBoxNode.focus();break;case 27:case"Escape":case 9:case"Tab":break;default:this.menuElement.open(),p(this,(()=>this.focusInputValue()))}}onIronInputValueChanged(e){this.inputValue=e.target.value||"",this.inputValueNode.style.width=`${this.inputWidthHelperNode.offsetWidth+10}px`,this.filterItems()}onPaperMenuVisibilityChanged(e){this.opened=e.detail.value}onInputContainerButtonTap(e){return()=>{this.selectedValues.splice(this.selectedValues.indexOf(e),1),this.focusInputValue()}}onInputContainerTap(e){e.preventDefault(),this.menuElement.open(),p(this,(()=>this.focusInputValue()))}onInputFocusChanged(e){this.inputFocused=e.detail.value}onPaperListBoxItemSelect(e){if(e.stopPropagation(),this.maxTokens&&this.selectedValues.length>=this.maxTokens)e.stopPropagation();else{const t=this.getPaperItemValue(e.detail.item);-1===this.selectedValues.indexOf(t)&&(this.selectedValues.push(t),this.emitItemSelectEvent(t,e.detail.item),this.resetInput())}this.requestUpdate()}onPaperListBoxItemDeselect(e){const t=this.getPaperItemValue(e.detail.item);-1!==this.selectedValues.indexOf(t)&&this.selectedValues.splice(this.selectedValues.indexOf(t),1),this.emitItemDeselectEvent(t,e.detail.item),this.resetInput()}emitItemSelectEvent(e,t){this.dispatchEvent(new CustomEvent("exmg-token-input-select",{detail:{value:e,item:t},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{...this.value},bubbles:!0,composed:!0}))}emitItemDeselectEvent(e,t){this.dispatchEvent(new CustomEvent("exmg-token-input-deselect",{detail:{value:e,item:t},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{...this.value},bubbles:!0,composed:!0}))}filterItems(){const e=this.querySelectorAll("paper-item");for(let t=0;t<e.length;t+=1)this.inputValue.length>0&&-1===(e[t].textContent||"").toLowerCase().indexOf(this.inputValue.toLowerCase())?e[t].setAttribute("hidden",""):e[t].removeAttribute("hidden")}getPaperItemValue(e){return this.attrForSelected?e.getAttribute(this.attrForSelected)||void 0:this.indexOfItem(e)}focusInputValue(){this.inputValueNode.focus()}computeAlwaysFloatLabel(){return!!this.alwaysFloatLabel||(this.hasSelectedValues()||this.inputValue||this.inputFocused)}resetInput(){this.autoValidate&&this.validate(),this.inputValue="",this.filterItems(),this.focusInputValue()}validate(){return this.invalid=this.required&&!this.hasSelectedValues(),!this.invalid}hasSelectedValues(){return this.selectedValues&&this.selectedValues.length>0}getSelectedItems(){return this.listBoxNode?this.listBoxNode.items.map((e=>{const t=this.getPaperItemValue(e);return{id:this.getPaperItemValue(e),text:(this.selectedItemSelector?e.querySelector(this.selectedItemSelector).textContent:e.textContent)||"",sortWeight:this.selectedValues.indexOf(t)}})).filter((e=>this.selectedValues.includes(e.id))).sort(((e,t)=>e.sortWeight-t.sortWeight)):[]}disconnectedCallback(){this.inputValueNode&&this.inputValueNode.removeEventListener("keyup",this._onIronInputKeyUp),this.autoValidate&&window.removeEventListener("click",this._onWindowClick),super.disconnectedCallback()}update(e){e.has("selectedValues")&&this.attrForSelected&&(this.selectedValues=this.getStringSelectedValues()),super.update(e)}firstUpdated(){this.inputValueNode.addEventListener("keyup",this._onIronInputKeyUp),this.inputWidthHelperNode&&(this.inputWidthHelperNode.style.cssText=window.getComputedStyle(this.inputValueNode,null).cssText,this.inputWidthHelperNode.style.position="absolute",this.inputWidthHelperNode.style.top="-999px",this.inputWidthHelperNode.style.left="0",this.inputWidthHelperNode.style.padding="0",this.inputWidthHelperNode.style.width="auto",this.inputWidthHelperNode.style.whiteSpace="pre"),this.autoValidate&&window.addEventListener("click",this._onWindowClick)}render(){return o`
      <!--suppress CssUnresolvedCustomPropertySet, CssUnresolvedCustomProperty -->
      <style>
        :host {
          display: block;
          display: flex;
          flex-direction: row;
        }

        paper-input-container {
          flex: 1;
          flex-basis: 0.000000001px;
          overflow: auto;
        }

        .tokens {
          margin-right: 6px;
          min-height: 24px;
          position: relative;
          width: 100%;
          white-space: ${this.allowMultiLine?"unset":"nowrap"};
        }

        .tokens paper-button {
          background: var(--exmg-paper-token-input-badge-color, var(--primary-color));
          margin: 2px 0;
          color: var(--exmg-paper-token-input-badge-text-color, white);
          text-transform: none;
          height: 18px;
          font-size: 12px;
          line-height: 13px;
          min-width: initial;
          max-width: 100%;
        }

        .tokens paper-button span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .tokens paper-button iron-icon {
          height: 16px;
          width: 16px;
        }

        #inputValue {
          font: inherit;
          outline: none;
          box-shadow: none;
          background: transparent;
          border: none;
          width: auto;
          max-width: 100%;
          min-width: 1.8em;
        }

        paper-menu-button {
          padding: 8px 0;
        }
        paper-icon-button {
          margin: 8px 0;
        }

        .container {
          flex: 1;
          flex-basis: 0.000000001px;
        }

        iron-input {
          width: 1.8rem;
        }
      </style>

      <paper-input-container
        ?always-float-label="${this.computeAlwaysFloatLabel()}"
        @tap=${this.onInputContainerTap}
        @focused-changed="${this.onInputFocusChanged}"
        ?disabled="${this.disabled}"
        ?focused="${this.inputFocused}"
        ?invalid="${this.invalid}"
      >
        <label slot="label" ?hidden="${!this.label}" aria-hidden="${!this.label}">${this.label}</label>

        <div slot="input" class="paper-input-input" bind-value="${this.inputValue}">
          <span class="tokens">
            ${c(this.getSelectedItems(),(e=>e.id),(e=>o`
                <paper-button tabindex="-1" @tap="${this.onInputContainerButtonTap(e.id)}">
                  <span>${e.text}</span>
                  <iron-icon icon="exmg-paper-token-input-icons:clear"></iron-icon>
                </paper-button>
              `))}

            <iron-input bind-value="${this.inputValue}">
              <input
                id="inputValue"
                aria-labelledby="label"
                value="${this.inputValue}"
                @input="${this.onIronInputValueChanged}"
                ?autofocus="${this.autofocus}"
                autocomplete="off"
                ?disabled="${this.disabled}"
              />
            </iron-input>
          </span>
        </div>

        ${this.errorMessage?o` <paper-input-error slot="add-on" aria-live="assertive">${this.errorMessage}</paper-input-error> `:""}
      </paper-input-container>

      <span id="inputWidthHelper">${this.inputValue}</span>
      <paper-menu-button
        id="menu"
        ?close-on-activate=${!this.disableCloseOnActivate}
        ?opened="${this.opened}"
        @opened-changed="${this.onPaperMenuVisibilityChanged}"
        vertical-offset="60"
        horizontal-align="right"
        dynamic-align="true"
        restore-focus-on-close=""
        ?disabled="${this.disabled}"
      >
        <paper-icon-button
          icon="exmg-paper-token-input-icons:arrow-drop-down"
          ?data-opened="${this.opened}"
          slot="dropdown-trigger"
        ></paper-icon-button>
        <paper-listbox
          id="listbox"
          attr-for-selected="${this.attrForSelected||""}"
          selectable="paper-item:not([hidden]),paper-icon-item:not([hidden])"
          .selectedValues="${[...this.selectedValues]}"
          slot="dropdown-content"
          @iron-select="${this.onPaperListBoxItemSelect}"
          @iron-deselect="${this.onPaperListBoxItemDeselect}"
          multi
        >
          <slot></slot>
        </paper-listbox>
      </paper-menu-button>
    `}};t([i({type:String,attribute:"attr-for-selected"})],ce.prototype,"attrForSelected",void 0),t([i({type:String,attribute:"selected-item-selector"})],ce.prototype,"selectedItemSelector",void 0),t([i({type:Array,attribute:"selected-values"})],ce.prototype,"selectedValues",void 0),t([i({type:String})],ce.prototype,"label",void 0),t([i({type:String})],ce.prototype,"name",void 0),t([i({type:Boolean,attribute:"auto-validate"})],ce.prototype,"autoValidate",void 0),t([i({type:Boolean})],ce.prototype,"autofocus",void 0),t([i({type:Boolean})],ce.prototype,"disabled",void 0),t([i({type:String,attribute:"error-message"})],ce.prototype,"errorMessage",void 0),t([i({type:Boolean})],ce.prototype,"alwaysFloatLabel",void 0),t([i({type:Boolean,attribute:"allow-multiline"})],ce.prototype,"allowMultiLine",void 0),t([i({type:Number,attribute:"max-tokens"})],ce.prototype,"maxTokens",void 0),t([i({type:Boolean})],ce.prototype,"required",void 0),t([i({type:String})],ce.prototype,"inputValue",void 0),t([i({type:Boolean})],ce.prototype,"invalid",void 0),t([i({type:Boolean})],ce.prototype,"inputFocused",void 0),t([i({type:Boolean,attribute:"disable-close-on-activate"})],ce.prototype,"disableCloseOnActivate",void 0),t([i({type:Boolean})],ce.prototype,"opened",void 0),t([y("#listbox")],ce.prototype,"listBoxNode",void 0),t([y("#inputValue")],ce.prototype,"inputValueNode",void 0),t([y("#inputWidthHelper")],ce.prototype,"inputWidthHelperNode",void 0),t([y("#menu")],ce.prototype,"menuElement",void 0),ce=t([s("exmg-paper-token-input")],ce);let ue=class extends n{constructor(){super(...arguments),this.dirty=!1}render(){return o`
      <i>Form Dirty: ${this.dirty}</i>
      <exmg-form @submit="${this.onSubmit}" @cancel="${this.onCancel}" @dirty-change=${this._handleDirty} id="form1">
        <paper-input name="value1" label="text input" required></paper-input>
        <paper-input name="value2" label="text input" value="pre-filled"></paper-input>
        <paper-input label="password input" type="password"></paper-input>
        <paper-input label="disabled input" disabled value="batman"></paper-input>
        <paper-input name="name" label="Summary" required always-float-label></paper-input>
        <paper-input name="estimate" label="Estimates" type="number" always-float-label style="max-width:180px;"></paper-input>

        <paper-textarea label="autoresizing textarea input"></paper-textarea>

        <exmg-paper-combobox label="Project" name="combobox" style="max-width:280px;" always-float-label required>
          <paper-item>PlayToTV</paper-item>
          <paper-item>Website</paper-item>
        </exmg-paper-combobox>
        <p class="help">Some issue types are unavailable due to incompatible field configuration and/or workflow associations.</p>
        <hr />
        <p class="help">Start typing to get a list of possible matches.</p>
        <exmg-paper-token-input name="tokens" label="Components" always-float-label>
          <paper-item>javascript</paper-item>
          <paper-item>css</paper-item>
        </exmg-paper-token-input>
        <p class="help">Start typing to get a list of possible matches or press down to select.</p>
        <p class="help">Estimated time needed to resolve this issue in hours.</p>
        <label>Message</label>
        <exmg-markdown-editor name="markdown" required>
          <marked-element markdown="# Hello Word!">
            <div slot="markdown-html"></div>
          </marked-element>
        </exmg-markdown-editor>
      </exmg-form>
    `}onSubmit(e){setTimeout((()=>{this.resetForm1()}),1500)}_handleDirty(e){this.dirty=e.detail.dirty}onCancel(e){}displayFormDirty(e){const t=e.target;t.handleError(`You changed a value, form is dirty: ${t.isDirty}`)}validateForm1(){this.shadowRoot.querySelector("#form1").validate()}resetForm1(){this.shadowRoot.querySelector("#form1").reset()}};t([function(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):A(e,t)}({type:Boolean})],ue.prototype,"dirty",void 0),ue=t([(e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t))("tab-2")],ue);export{ue as Tab2El};
