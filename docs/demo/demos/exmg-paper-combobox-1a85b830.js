import{l as e,m as t,I as i,P as s,h as n,n as o,N as a,p as r,_ as l,e as h,i as c,k as p,b as d}from"./exmg-form-drawer-d21b21bf.js";import{i as u,s as m,x as v}from"./lit-element-775ec931.js";import{I as b,a as y}from"./paper-input-9a5ebbc3.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class f{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const g={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new f(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&e(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var t=e(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var i=this.indexOf(e);return-1===i?null:i}var s=e[t(this.attrForSelected)];return null!=s?s:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return e(t).observeNodes((function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var s=i.indexOf(t);if(s>=0){var n=this._indexToValue(s);return void this._itemActivate(n,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}},_={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(e){return this._indexToValue(this.indexOf(e))}),this).filter((function(e){return null!=e}),this)):g._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter((function(e){return null!=e}));this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map((function(e){return this._valueToItem(e)}),this)}},w={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),_.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))}),this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,i=this._searchText||"",s=(i+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,n=0;t=this.items[n];n++)if(!t.hasAttribute("disabled")){var o=this.attrForItemTitle||"textContent",a=(t[o]||t.getAttribute(o)||"").trim();if(!(a.length<s)&&a.slice(0,s).toLocaleLowerCase()==i){this._setFocusedItem(t);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var t=this.items.length,i=Number(this.indexOf(this.focusedItem)),s=1;s<t+1;s++){var n=this.items[(i-s+t)%t];if(!n.hasAttribute("disabled")){var o=e(n).getOwnerRoot()||document;if(this._setFocusedItem(n),e(o).activeElement==n)return}}},_focusNext:function(){for(var t=this.items.length,i=Number(this.indexOf(this.focusedItem)),s=1;s<t+1;s++){var n=this.items[(i+s)%t];if(!n.hasAttribute("disabled")){var o=e(n).getOwnerRoot()||document;if(this._setFocusedItem(n),e(o).activeElement==n)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),g._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");w._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),w._shiftTabPressed=!1}),1)},_onFocus:function(t){if(!w._shiftTabPressed){var i=e(t).rootTarget;(i===this||void 0===i.tabIndex||this.isLightDescendant(i))&&(this._defaultFocusAsync=this.async((function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()})))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){g._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1};
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
s({_template:n`
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
`,is:"paper-listbox",behaviors:[[[g,_],i,w]],hostAttributes:{role:"listbox"}});
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
const x={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var i=t.detail.keyboardEvent,s=e(i).localTarget;this.isLightDescendant(s)||(i.preventDefault(),i.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var i=t.detail.keyboardEvent,s=e(i).localTarget;this.isLightDescendant(s)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},S=[i,x];
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var A={distance:function(e,t,i,s){var n=e-i,o=t-s;return Math.sqrt(n*n+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function k(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function I(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),e(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}k.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=A.distance(e,t,0,0),s=A.distance(e,t,this.width,0),n=A.distance(e,t,0,this.height),o=A.distance(e,t,this.width,this.height);return Math.max(i,s,n,o)}},I.MAX_RADIUS=300,I.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=A.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?A.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),I.MAX_RADIUS)+5,s=1.1-i/I.MAX_RADIUS*.2,n=this.mouseInteractionSeconds/s,o=i*(1-Math.pow(80,-n));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,I.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,I.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new k(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=A.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=A.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=A.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=A.now())},remove:function(){e(e(this.waveContainer).parentNode).removeChild(this.waveContainer)}},s({_template:n`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[i],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==e(this).parentNode.nodeType?this.keyEventTarget=e(this).getOwnerRoot().host:this.keyEventTarget=e(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new I(this);return e(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});
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
const E={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){x._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var i=this._rippleContainer||this.root;if(i&&e(i).appendChild(this._ripple),t){var s=e(this._rippleContainer||this),n=e(t).rootTarget;s.deepContains(n)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},C={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=E._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}};
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
s({is:"paper-icon-button",_template:n`
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
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[[S,b,E,C]],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var i=this.getAttribute("aria-label");i&&t!=i||this.setAttribute("aria-label",e)}}),
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
s({_template:n`
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
`,is:"iron-dropdown",behaviors:[b,i,o,a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=e(this.$.content).getDistributedNodes(),i=0,s=t.length;i<s;i++)if(t[i].nodeType===Node.ELEMENT_NODE)return t[i]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),r._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):r._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):r._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():r._applyFocus.apply(this,arguments)}});
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
const F=n`
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
</dom-module>`;F.setAttribute("style","display: none;"),document.head.appendChild(F.content);
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
const T={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){x._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){x._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},D=[S,b,E,T],O=n`
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

  <slot></slot>`;O.setAttribute("strip-whitespace",""),s({_template:O,is:"paper-button",behaviors:[D],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?T._calculateElevation.apply(this):this._setElevation(0)}});const M=document.createElement("div");M.setAttribute("style","display: none;"),M.innerHTML='<iron-iconset-svg name="exmg-paper-combobox-icons" size="24">\n<svg>\n  <defs>\n    <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n  </defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(M);const R=e=>{let t;return i=>{clearTimeout(t),i&&(t=window.setTimeout(i,e))}};let V=class extends m{constructor(){super(),this.attrForSelected="",this.maxWidthMenuList=200,this.autoValidate=!1,this.autofocus=!1,this.disabled=!1,this.searchDisabled=!1,this.errorMessage="",this.alwaysFloatLabel=!1,this.required=!1,this.inputValue="",this.invalid=!1,this.inputFocused=!1,this.noFloatLabel=!1,this.opened=!1,this.dynamicAlign=!1,this.horizontalAlign="right",this.verticalAlign="top",this.verticalOffset="4",this.horizontalOffset="4",this.previousInsideClick=!1,this.ignoreFocus=!1,this.isAnyItemActive=!0,this.isElementInitialized=!1,this.observers=this.getObservers(),this.keyDownBackspaceDebounce=R(200),this.inputChangeDebounce=R(300),this._onKeyUp=this.onKeyUp.bind(this),this._onClick=this.onClick.bind(this),this._onIronResize=this.onIronResize.bind(this)}get value(){return this.selected}set value(e){this.selected=e}getObservers(){return{inputValue:()=>this.observeInputChange(),selectedItem:()=>this.observeSelectedItem(),selectedValue:()=>this.observeSelectedValue(),selected:()=>this.observeSelected()}}executeObservers(e){Object.entries(this.observers).forEach((([t,i])=>{i&&e.has(t)&&i(e)}))}observeInputChange(){this.inputElement&&this.inputWidthHelperElement&&(this.inputElement.style.width=`${this.inputWidthHelperElement.offsetWidth+10}px`),this.isElementInitialized||(this.isAnyItemActive=this.filterItems()),this.isElementInitialized&&this.menuElement&&this.inputChangeDebounce((()=>{this.isAnyItemActive=this.filterItems(),this.onIronResize(),y(this,(()=>this.menuElement.notifyResize())),!this.menuElement.opened&&this.isAnyItemActive&&this.inputValue?(this.menuElement.open(),y(this,(()=>this.focus()))):this.menuElement.opened&&!this.isAnyItemActive&&this.menuElement.close()}))}observeSelectedValue(){this.selected=this.selectedValue}observeSelected(){this.selectedValue!==this.selected&&(this.ignoreFocus=!0),this.selectedValue=this.selected}observeSelectedItem(){if(!this.selectedItem)return void(this.token=void 0);const e=this.getSelectedItemKey(this.selectedItem);if(void 0===e)return this.selectedValue=void 0,this.selectedItem=void 0,void(this.token=void 0);const t=this.selectedItemSelector?this.selectedItem.querySelector(this.selectedItemSelector):this.selectedItem,i=t&&t.textContent||"";this.token={id:e,text:i}}open(){this.opened=!0}close(){this.opened=!1}toggle(){this.opened=!this.opened}filterItems(){const e=this.querySelectorAll("paper-item, paper-icon-item"),t=!!this.inputValue&&this.inputValue.length>0,i=t?this.inputValue.toLowerCase().trim():"";let s=!1;return e.forEach((e=>{t&&e.textContent&&-1===e.textContent.toLowerCase().indexOf(i)?e.setAttribute("hidden",""):(s=!0,e.removeAttribute("hidden"))})),s}indexOf(e){return this.listBox&&this.listBox.items?this.listBox.items.indexOf(e):-1}getSelectedItemKey(e){if(this.attrForSelected)return e.getAttribute(this.attrForSelected)||void 0;const t=this.indexOf(e);return-1===t?void 0:t}hasSelectedItem(){return!!this.selectedItem}focus(){this.inputElement&&this.inputElement.focus()}computeAlwaysFloatLabel(){return!!this.alwaysFloatLabel||(!!this.token||this.inputFocused)}resetInput(){this.autoValidate&&this.validate(),this.inputValue="",this.inputElement.value="",this.ignoreFocus?this.ignoreFocus=!1:this.focus()}validate(){return this.invalid=!this.disabled&&this.required&&!this.hasSelectedItem(),!this.invalid}onKeyUp(e){switch("string"!=typeof this.inputValue&&(this.inputValue=""),e.code||e.keyCode){case 13:case"Enter":case"NumpadEnter":e.ctrlKey||e.stopPropagation();break;case 8:case"Backspace":case 127:case"Delete":this.menuElement.opened||this.keyDownBackspaceDebounce((()=>{!this.menuElement.opened&&this.isAnyItemActive&&(this.menuElement.open(),y(this,(()=>this.focus())))})),this.selectedValue=void 0,this.selectedItem=void 0;break;case 40:case"ArrowDown":!this.menuElement.opened&&this.isAnyItemActive&&this.menuElement.open(),y(this,(()=>this.listBox.focus()));break;case 27:case"Escape":e.preventDefault(),this.menuElement.close(),y(this,(()=>this.focus()))}}onClick(e){const t=-1!==e.composedPath().findIndex((e=>e===this));(this.autoValidate&&this.previousInsideClick&&!t||this.token)&&this.validate(),this.previousInsideClick=t}onContainerTap(e){e.preventDefault(),this.menuElement.open(),y(this,(()=>this.focus()))}onItemSelected(e){if(e.stopPropagation(),this.selected&&!this.selectedItem&&(this.selectedItem=e.detail.item),this.selected!==this.getSelectedItemKey(e.detail.item)){this.selectedItem=e.detail.item,this.selected=this.getSelectedItemKey(this.selectedItem);const t={value:this.selected,item:this.selectedItem,token:this.token};this.dispatchEvent(new CustomEvent("change",{detail:t,composed:!0,bubbles:!0}))}this.resetInput()}onItemDeselected(e){e.stopPropagation(),this.selectedItem=void 0,this.selected=void 0,this.dispatchEvent(new CustomEvent("change",{detail:{},composed:!0,bubbles:!0})),this.resetInput()}onItemActivated(e){this.selected===e.detail.selected&&(this.ignoreFocus=!1,y(this,(()=>this.resetInput()))),this.opened=!1}onInputValueChange(e){this.searchDisabled||(this.inputValue=e.target.value)}onInputFocusChanged(e){this.inputFocused=e.detail.value}onTokenClick(){this.focus()}initializeElement(){this.inputWidthHelperElement&&(((e,t)=>{const i=window.getComputedStyle(e,null);Array.from(i).forEach((e=>t.style.setProperty(e,i.getPropertyValue(e),i.getPropertyPriority(e))))})(this.inputElement,this.inputWidthHelperElement),this.inputWidthHelperElement.style.position="absolute",this.inputWidthHelperElement.style.top="-999px",this.inputWidthHelperElement.style.left="0",this.inputWidthHelperElement.style.padding="0",this.inputWidthHelperElement.style.width="auto",this.inputWidthHelperElement.style.whiteSpace="pre"),this.inputElement.addEventListener("keyup",this._onKeyUp),this.autoValidate&&window.addEventListener("click",this._onClick),this.addEventListener("iron-resize",this._onIronResize);const e=this.shadowRoot.querySelector(".container");e&&(this.menuElement.positionTarget=e)}onIronResize(){const e=this.shadowRoot.querySelector(".dropdown-content"),{left:t}=e.getBoundingClientRect(),{scrollWidth:i}=e,s=(...e)=>Math.max(...e);if(i>0&&i<this.maxWidthMenuList){const i=document.documentElement.clientWidth-t;e.style.maxWidth=`${((...e)=>Math.min(...e))(s(i,100),this.maxWidthMenuList)}px`}const{top:n}=e.getBoundingClientRect(),{scrollHeight:o}=e;if(o>0){const t=document.documentElement.clientHeight-n;e.style.maxHeight=`${s(t-10,100)}px`}}shouldFireEvent(e){const t=["selected","selectedItem"].some((t=>e.has(t)&&e.get(t)!==this[t])),{id:i}=this.token||{};return t&&i===this.selected}async firstUpdated(){this.initializeElement(),await this.updateComplete,this.isElementInitialized=!0}updated(e){if(this.executeObservers(e),this.shouldFireEvent(e))if(void 0!==this.selected){const e={value:this.selected,item:this.selectedItem,token:this.token};this.dispatchEvent(new CustomEvent("exmg-combobox-select",{detail:e,composed:!0,bubbles:!0}))}else this.dispatchEvent(new CustomEvent("exmg-combobox-deselect",{composed:!0,bubbles:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.inputElement&&this.inputElement.removeEventListener("keyup",this._onKeyUp),this.removeEventListener("iron-resize",this._onIronResize),this.autoValidate&&window.removeEventListener("click",this._onClick),this.inputChangeDebounce(),this.keyDownBackspaceDebounce()}render(){return v` ${this.getTemplate()} `}getTemplate(){const e=this.querySelector('*[slot="prefix"]'),t=e?e.offsetWidth:0;return v`
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
          ${this.selected&&this.noFloatLabel?"":v`
                <label slot="label" class="${e?"with-prefix":""}" ?hidden="${!this.label}" aria-hidden="true"
                  >${this.label}</label
                >
              `}
          <iron-input bind-value="${this.inputValue}" slot="input">
            <slot name="prefix"></slot>
            <span class="${p({tokens:!0,selected:!!this.token})}">
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
    `}renderTokenButton(){return this.token?v`
      <paper-button tabindex="-1" @click="${this.onTokenClick}">
        <span>${this.token.text}</span>
      </paper-button>
    `:null}};V.styles=[u`
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
    `],l([h({type:String,attribute:"attr-for-selected"})],V.prototype,"attrForSelected",void 0),l([h({type:String,attribute:"selected-item-selector"})],V.prototype,"selectedItemSelector",void 0),l([h({type:Object,attribute:"selected-item"})],V.prototype,"selectedItem",void 0),l([h({type:String})],V.prototype,"selected",void 0),l([h({type:Number,attribute:"max-width-menu-list"})],V.prototype,"maxWidthMenuList",void 0),l([h({type:String})],V.prototype,"selectedValue",void 0),l([h({type:String})],V.prototype,"label",void 0),l([h({type:Boolean,attribute:"auto-validate"})],V.prototype,"autoValidate",void 0),l([h({type:Boolean})],V.prototype,"autofocus",void 0),l([h({type:Boolean})],V.prototype,"disabled",void 0),l([h({type:Boolean})],V.prototype,"searchDisabled",void 0),l([h({type:String,attribute:"error-message"})],V.prototype,"errorMessage",void 0),l([h({type:Boolean,attribute:"always-float-label"})],V.prototype,"alwaysFloatLabel",void 0),l([h({type:Boolean})],V.prototype,"required",void 0),l([h({type:String})],V.prototype,"name",void 0),l([h({type:String,attribute:"input-value"})],V.prototype,"inputValue",void 0),l([h({type:Object})],V.prototype,"token",void 0),l([h({type:Boolean})],V.prototype,"invalid",void 0),l([h({type:Boolean,attribute:"input-focused"})],V.prototype,"inputFocused",void 0),l([h({type:Boolean,attribute:"no-float-label"})],V.prototype,"noFloatLabel",void 0),l([h({type:Boolean})],V.prototype,"opened",void 0),l([h({type:Boolean,attribute:"dynamic-align"})],V.prototype,"dynamicAlign",void 0),l([h({type:String,attribute:"horizontal-align"})],V.prototype,"horizontalAlign",void 0),l([h({type:String,attribute:"vertical-align"})],V.prototype,"verticalAlign",void 0),l([h({type:String,attribute:"vertical-offset"})],V.prototype,"verticalOffset",void 0),l([h({type:String,attribute:"horizontal-offset"})],V.prototype,"horizontalOffset",void 0),l([c("#listbox")],V.prototype,"listBox",void 0),l([c("#inputValue")],V.prototype,"inputElement",void 0),l([c("#inputWidthHelper")],V.prototype,"inputWidthHelperElement",void 0),l([c("#menu")],V.prototype,"menuElement",void 0),V=l([d("exmg-paper-combobox")],V);export{S as I};
