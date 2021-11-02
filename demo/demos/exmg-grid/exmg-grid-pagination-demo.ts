import {html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '@exmg/exmg-grid/src/table/exmg-grid-pagination.js';

@customElement('exmg-grid-pagination-demo')
export class ExmgGridSmartToolbarDemo extends LitElement {
  @state()
  private pageIndex = 0;

  @state()
  private pageSize = 20;

  @state()
  private itemCount = 50;

  private onGridPageSizeChanged() {
    // console.log('onGridPageSizeChanged', e.detail);
  }

  private onGridPageChanged() {
    // console.log('onGridPageChanged', e.detail);
  }

  render() {
    return html`
      <style>
        :host {
          --mdc-theme-primary: #0070db;
          --mdc-theme-surface: #fff;
          --mdc-theme-on-surface: #091e2e;

          padding: 10px;
          display: block;
          background-color: #f6f6f6;
        }
      </style>
      <exmg-grid-pagination
        page-index=${this.pageIndex}
        page-size=${this.pageSize}
        item-count="${this.itemCount}"
        @exmg-grid-pagination-page-size-changed="${this.onGridPageSizeChanged}"
        @exmg-grid-pagination-page-changed="${this.onGridPageChanged}"
      >
      </exmg-grid-pagination>
    `;
  }
}
