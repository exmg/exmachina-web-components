import{P as e,h as t,S as o,L as n,J as i,_ as a,c as r,o as s,e as l}from"../exmg-grid-toolbar-combobox-baa33540.js";import{i as d,x as c}from"../lit-element-88bb347a.js";import{s as p,E as g,D as m,a as h}from"../exmg-grid-demo-7d9a615b.js";import"../exmg-grid-pagination-1f0cd0d8.js";import"../exmg-grid-smart-toolbar-81c2118a.js";import{style as u}from"./demo-common-css.js";import{createIcon as f}from"./exmg-icons.js";import"../exmg-grid-toolbar-c5491d70.js";import"../exmg-grid-base-toolbar-c8af6158.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const b={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var t in e.timing)this.animationTiming[t]=e.timing[t];return this.animationTiming},setPrefixedProperty:function(e,t,o){for(var n,i={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],a=0;n=i[a];a++)e.style[n]=o;e.style[t]=o},complete:function(e){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/e({is:"fade-in-animation",behaviors:[b],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),
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
e({is:"fade-out-animation",behaviors:[b],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}}),
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
e({is:"paper-menu-grow-height-animation",_template:null,behaviors:[b],configure:function(e){var t=e.node,o=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:o/2+"px"},{height:o+"px"}],this.timingFromConfig(e)),this._effect}}),e({is:"paper-menu-grow-width-animation",_template:null,behaviors:[b],configure:function(e){var t=e.node,o=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:o/2+"px"},{width:o+"px"}],this.timingFromConfig(e)),this._effect}}),e({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[b],configure:function(e){var t=e.node,o=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:o+"px"},{width:o-o/20+"px"}],this.timingFromConfig(e)),this._effect}}),e({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[b],configure:function(e){var t=e.node,o=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:o+"px",transform:"translateY(0)"},{height:o/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});
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
var w={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const x=e({_template:t`
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
`,is:"paper-menu-button",behaviors:[o,n],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:w.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:w.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:w.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=i(this.$.content).getDistributedNodes(),t=0,o=e.length;t<o;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,t){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){n._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var t=e.detail,o=this.$.trigger;i(t).path.indexOf(o)>-1&&e.preventDefault()}});Object.keys(w).forEach((function(e){x[e]=w[e]}));let y=class extends g{constructor(){super(),this.selectedRowIds=this.items.slice(0,3).map((({id:e})=>e.toString())).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:!0})),{}),this.expandedRowIds=this.items.slice(3,5).map((({id:e})=>e.toString())).reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:!0})),{})}moreMenu(){return c`
      <paper-menu-button dynamic-align>
        <mwc-icon-button class="ignore-select" icon="more_vert" slot="dropdown-trigger"></mwc-icon-button>
        <paper-listbox slot="dropdown-content">
          <paper-item>Edit 1</paper-item>
          <paper-item>Edit 2</paper-item>
        </paper-listbox>
      </paper-menu-button>
    `}renderTableBody(){return r(this.items,(({id:e})=>e),(e=>c`
          <tr data-row-key="${e.id}">
            <td class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></td>
            <td>#${e.id}</td>
            <td>${e.month}</td>
            <td class="grid-col-number">${e.year}</td>
            <td class="grid-col-number">${e.amount}</td>
            <td class="grid-cell-visible-on-hover"><span class="expandable-toggle">${f}</span></td>
            <td class="grid-col no-ellipsis">${this.moreMenu()}</td>
          </tr>
          <tr class="grid-row-detail" data-row-detail-key="${e.id}">
            <td data-auto-colspan>
              <p>Here is expanded content for row id <b>${e.id}</b></p>
              <button class="demo-button" @click="${()=>this.collapseRow(e.id.toString())}">Done</button>
            </td>
          </tr>
        `))}render(){return c`
      <div>
        <button class="demo-button" @click="${this.toggleMonthColumn}">Toggle Month</button>
        <button class="demo-button" @click="${this.toggleYearColumn}">Toggle Year</button>
        <button class="demo-button" @click="${this.refreshTable}">Refresh Table</button>
        <button class="demo-button" @click="${this.expandFirstRows}">Expand first Rows</button>
        <button class="demo-button" @click="${this.collapseFirstRows}">Collapse first Rows</button>
        <button class="demo-button" @click="${this.selectFirstRows}">Select first rows</button>
        <button class="demo-button" @click="${this.unSelectFirstRows}">Unselect first rows</button>
        <button class="demo-button" @click="${()=>this.dark=!this.dark}">Toggle Dark Theme</button>
      </div>
      <h1>Complex table with sortable columns</h1>
      <h2>Current theme ${this.theme}</h2>
      <ul>
        <li>default sort column</li>
        <li>preselected rows</li>
        <li>expanded rows</li>
        <li>fixed table layout - squeeze content and ellipsis overflow</li>
      </ul>
      <exmg-grid
        data-theme="${this.theme}"
        .items="${this.items}"
        .hiddenColumnNames="${this.hiddenColumns}"
        .expandedRowIds="${this.expandedRowIds}"
        .selectedRowIds="${this.selectedRowIds}"
        selectable-checkbox-selector=".selectable-checkbox"
        rows-selectable
        disable-row-click-selection
        expandable-toggle-selector=".expandable-toggle"
        @exmg-grid-selected-rows-change="${this.onSelectedRowsChange}"
        default-sort-column="${m}"
        default-sort-direction="${h}"
        ?sortable="${!0}"
        @exmg-grid-sort-change="${this.onSortChange}"
        table-layout="fixed"
        class=${s({dark:this.dark})}
      >
        <exmg-grid-smart-toolbar
          slot="toolbar"
          amount-of-selected-items="${this.selectedRows.length}"
          .actions="${this.actions}"
          description="Income table"
          .filters="${this.filters}"
          ?show-column-filter="${!0}"
          .columnFilterColumns="${this.columns}"
          @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
          @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
          @exmg-grid-toolbar-setting-changed="${this.onSettingChanged}"
        ></exmg-grid-smart-toolbar>
        <table>
          <thead>
            <tr class="grid-columns">
              <th class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></th>
              <th><span>ID</span></th>
              <th style="width: 60%" data-column-key="month" data-sort>
                <span>Month with quite long name which should stay on one line</span>
              </th>
              <th class="grid-col-number" data-column-key="year" data-sort>
                <span>Year with quite short name with one line inside inside span tag</span>
              </th>
              <th class="grid-col-number" data-column-key="amount" data-sort=""><span>Income</span></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody class="grid-data">
            ${this.renderTableBody()}
          </tbody>
        </table>
        <exmg-grid-pagination
          slot="pagination"
          page-index=${this.pageIndex}
          page-size=${this.pageSize}
          .pageSizeOptions="${[10,20,30,50,100]}"
          item-count="${this.getTotalCount()}"
          @exmg-grid-pagination-page-changed="${this.onPageChange}"
          @exmg-grid-pagination-page-size-changed="${this.onPageSizeChange}"
        >
        </exmg-grid-pagination>
      </exmg-grid>
    `}};y.styles=[p,u,d`
      .expandable-toggle {
        cursor: pointer;
      }
    `],y=a([l("demo-complex-grid")],y);export{y as ExmgComplexGrid};
