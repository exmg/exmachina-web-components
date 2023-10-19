import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style as tableStyles } from '@exmg/exmg-grid/src/styles/exmg-grid-styles-css.js';
import { style as demoStyles } from './demo-common-css.js';

import './exmg-complex-grid-with-slotted-toolbar.js';
import './exmg-complex-grid-with-sortable-rows.js';
import './exmg-complex-grid.js';
import './exmg-grid-base-toolbar-demo.js';
import './exmg-grid-pagination-demo.js';
import './exmg-grid-smart-toolbar-demo.js';
import './exmg-grid-toolbar-demo.js';
import './search-toolbar-demo.js';
import '../../src/theme/color-pallet.js';
import { ExmgBaseGridDemo } from './exmg-grid-base.js';

@customElement('exmg-grid-demo')
export class ExmgGridDemo extends ExmgBaseGridDemo {
  // language=CSS
  static styles = [
    tableStyles,
    demoStyles,
    css`
      :host {
        display: block;
        max-width: 1000px;
      }
      .expandable-toggle {
        cursor: pointer;
      }
      h1 {
        color: var(--md-sys-color-on-surface);
        padding-top: 1.5rem;
      }
    `,
  ];

  protected render() {
    return html`
      <h1>Complex Grid With Toolbar</h1>
      <demo-complex-grid-with-slotted-toolbar></demo-complex-grid-with-slotted-toolbar>

      <h1>Complex Grid With Sortable Row</h1>
      <demo-complex-grid-sortable></demo-complex-grid-sortable>

      <h1>Complex Grid</h1>
      <demo-complex-grid></demo-complex-grid>

      <!-- <h1>Base Toolbar</h1>
      <exmg-grid-base-toolbar-demo></exmg-grid-base-toolbar-demo>

      <h1>Pagination</h1>
      <exmg-grid-pagination-demo></exmg-grid-pagination-demo> -->

      <!-- <h1>Smart Toolbar</h1>
      <exmg-grid-smart-toolbar-demo></exmg-grid-smart-toolbar-demo> -->

      <h1>Searchbar</h1>
      <search-toolbar-demo></search-toolbar-demo>

      <color-pallet></color-pallet>
    `;
  }
}
