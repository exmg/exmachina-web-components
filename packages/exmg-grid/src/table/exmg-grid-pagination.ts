import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base/index.js';
import { repeat } from 'lit/directives/repeat.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@polymer/paper-item/paper-item.js';
import './exmg-grid-toolbar-combobox.js';
import { style } from '../styles/exmg-grid-pagination-styles-css.js';

/**
 * ### Styling
 * The following custom properties  are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--exmg-theme-table-pagination-bg-color` | pagination background color | `var(--mdc-theme-surface, #ffffff);`
 * `--exmg-theme-table-pagination-color` | pagination foreground (mostly text) color | `var(--mdc-theme-on-surface, #02182b);`
 */
@customElement('exmg-grid-pagination')
export class ExmgGridPagination extends ExmgElement {
  static styles = [style];

  @property({ type: String, attribute: 'page-size-label' })
  pageSizeLabel = 'Rows per page:';

  @property({ type: Array, attribute: 'page-size-options' })
  pageSizeOptions: number[] = [10, 20, 30];

  @property({ type: Number, attribute: 'page-size' })
  pageSize: number = this.pageSizeOptions[0];

  @property({ type: Number, attribute: 'page-index' })
  pageIndex = 0;

  @property({ type: Number, attribute: 'item-count' })
  itemCount = 0;

  private renderPageSizeLabel() {
    return html` ${this.pageSizeLabel} `;
  }

  private renderPageSizeOptions() {
    return html`
      <exmg-grid-toolbar-combobox
        id="pageSizeOptions"
        attr-for-selected="data-id"
        selected="${this.pageSize}"
        @exmg-combobox-select="${this.handleOnPageSizeChanged}"
        style="display: inline-block;min-width: 0;"
      >
        ${repeat(
          this.pageSizeOptions,
          (item) => item,
          (item) => html` <paper-item data-id="${item}">${item}</paper-item> `,
        )}
      </exmg-grid-toolbar-combobox>
    `;
  }

  private renderPageRangeLabel() {
    if (this.itemCount > 0) {
      return html`
        <span>
          ${this.pageIndex * this.pageSize + 1}- ${Math.min((this.pageIndex + 1) * this.pageSize, this.itemCount)} of
          ${this.itemCount}
        </span>
      `;
    }

    return html` <span>${this.pageIndex * this.pageSize + 1}-${(this.pageIndex + 1) * this.pageSize}</span> `;
  }

  private renderPageRangeActions() {
    return html` ${this.renderPrevPage()} ${this.renderNextPage()} `;
  }

  private renderPrevPage() {
    const enabled = this.pageIndex > 0;

    return html`
      <md-icon-button
        id="prevPageBtn"
        ?disabled="${!enabled}"
        class="actions"
        title="Previous page"
        @click="${enabled ? this.handleOnClickPrev : undefined}"
        ><md-icon>navigate_before</md-icon></md-icon-button
      >
    `;
  }

  private renderNextPage() {
    const enabled = this.itemCount && this.itemCount > (this.pageIndex + 1) * this.pageSize;

    return html`
      <md-icon-button
        id="nextPageBtn"
        ?disabled="${!enabled}"
        class="actions"
        title="Next page"
        @click="${enabled ? this.handleOnClickNext : undefined}"
        ><md-icon>navigate_next</md-icon></md-icon-button
      >
    `;
  }

  private fireEventPageChanged(page: number) {
    this.dispatchEvent(
      new CustomEvent('exmg-grid-pagination-page-changed', { bubbles: true, composed: true, detail: { page } }),
    );
  }

  private handleOnClickPrev(e: Event) {
    e.preventDefault();
    this.pageIndex = this.pageIndex - 1;
    this.fireEventPageChanged(this.pageIndex);
    return false;
  }

  private handleOnClickNext(e: Event) {
    e.preventDefault();
    this.pageIndex = this.pageIndex + 1;
    this.fireEventPageChanged(this.pageIndex);

    return false;
  }

  private handleOnPageSizeChanged(e: CustomEvent) {
    const { value } = e.detail;

    if (typeof value !== 'undefined') {
      this.pageSize = parseInt(value, 10);
      this.pageIndex = 0;

      this.dispatchEvent(
        new CustomEvent('exmg-grid-pagination-page-size-changed', {
          bubbles: true,
          composed: true,
          detail: { pageSize: this.pageSize, page: this.pageIndex },
        }),
      );
    }
  }

  protected render() {
    // tslint:disable:max-line-length
    return html`
      <style>
        :host {
          --paper-item-focused: {
            background-color: var(
              --exmg-theme-table-toolbar-filter-item-active-bg-color,
              var(--exmg-theme-table-on-surface-low, var(--md-sys-color-surface))
            );
          }
          --paper-item-selected: {
            background-color: var(
              --exmg-theme-table-toolbar-filter-item-active-bg-color,
              var(--exmg-theme-table-on-surface-low, var(--md-sys-color-surface))
            );
          }
          --paper-button-ink-color: var(
            --exmg-theme-table-toolbar-filter-item-active-bg-color,
            var(--md-sys-color-surface)
          );

          --exmg-paper-combobox-selected-item-color: var(
            --exmg-theme-table-pagination-color,
            var(--md-sys-color-on-surface)
          );
          --exmg-paper-combobox-selected-item-bg-color: var(--exmg-theme-table-pagination-bg-color, transparent);
          --exmg-paper-combobox-dropdown-button-color: var(
            --exmg-theme-table-pagination-color,
            var(--md-sys-color-on-surface)
          );
          --exmg-paper-combobox-dropdown-button-bg-color: var(--exmg-theme-table-pagination-bg-color, transparent);
          --exmg-paper-combobox-dropdown-list-color: var(
            --exmg-theme-table-pagination-color,
            var(--md-sys-color-on-surface)
          );
          --exmg-paper-combobox-dropdown-list-bg-color: var(
            --exmg-theme-table-pagination-bg-color,
            var(--md-sys-color-surface)
          );

          md-icon-button {
            fill: var(--md-sys-color-on-surface);
          }
          exmg-grid-toolbar-combobox {
            --exmg-paper-combobox-background-color: var(--exmg-theme-table-pagination-bg-color);
          }
        }
      </style>
      <div class="wrapper">
        <div class="page-size">
          <div class="page-size-label">${this.renderPageSizeLabel()}</div>
          <div class="page-size-options">${this.renderPageSizeOptions()}</div>
        </div>
        <div class="page-range">
          <div class="page-range-label">${this.renderPageRangeLabel()}</div>
          <div class="page-range-actions">${this.renderPageRangeActions()}</div>
        </div>
        <div></div>
      </div>
    `;
    // tslint:enable:max-line-length
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-grid-pagination': ExmgGridPagination;
  }
}
