import { html, css } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base/index.js';
import { classMap } from 'lit/directives/class-map.js';
import { async, debounce } from '@exmg/lit-base/index.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/focus/md-focus-ring.js';

@customElement('exmg-toolbar-search')
export class ToolbarSearch extends ExmgElement {
  @state()
  _isSearch = false;

  @property({ type: String })
  filterValue?: string | null;

  @property({ type: String })
  placeHolder = 'Search';

  @query('#searchInput')
  search?: HTMLInputElement;

  static styles = [
    css`
      :host {
        display: block;
        color: var(--md-sys-color-on-surface-variant);
        background-color: var(--md-sys-color-surface-container-low);
        border-radius: var(--exmg-toolbar-search-border-radius, var(--exmg-surface-border-radius, 16px));
      }
      :host > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 48px;
      }
      h2 {
        max-width: 936px;
        width: 100%;
        margin: 20px auto;
      }
      input {
        width: 100%;
        caret-color: var(--md-sys-color-on-surface);
        color: var(--md-sys-color-on-surface);
      }
      md-icon {
        margin: 0 8px 0 16px;
        fill: var(--md-sys-color-on-surface);
        cursor: pointer;
      }
      :host > div > svg {
        margin-right: 10px;
      }
      ::slotted(*) {
        margin: 14px 12px;
      }
      span.interactive-content {
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;

        text-overflow: ellipsis;
        letter-spacing: 0.005em;
        box-sizing: border-box;

        font-weight: 400;
        cursor: pointer;
        flex: 1;
      }
      .search {
        display: absolute;
        background: none;
        /* outline-color: rgb(77, 144, 254);
        outline-offset: 1px;
        outline-style: auto;
        outline-width: 1px; */
      }
      .search > div {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
      }
      .search input {
        font-size: 14px;
        margin: 15px 0px;
        padding: 2px;
        border: 0px;
        width: 100%;
        outline: none;
        background: none;
        box-sizing: border-box;
      }
      .clear-button {
        position: absolute;
        right: 0;
        background: transparent;
        border: none !important;
        font-size: 0;
        margin-right: 1rem;
      }

      md-focus-ring {
        --md-focus-ring-shape: 16px;
      }
    `,
  ];
  private _debouncer: any;

  render() {
    const classMapValues = {
      search: this._isSearch,
    };
    return html`
      <div class=${classMap(classMapValues)} @click=${this._showSearch}>
        ${this._isSearch
          ? html`
              <div style="position: relative">
                <md-focus-ring style="--md-focus-ring-shape: 8px" for="searchInput"></md-focus-ring>
                <md-icon>search</md-icon>
                <input
                  id="searchInput"
                  placeholder=${this.placeHolder}
                  value=${this.filterValue ? this.filterValue : ''}
                  onfocus="let value = this.value; this.value = null; this.value = value"
                  @keyup=${this._handleKeyUp}
                  @blur=${this._handleInputBlur}
                />
                ${this.filterValue
                  ? html`
                      <md-icon-button class="clear-button" @click=${this._handleClear}
                        ><md-icon>close</md-icon></md-icon-button
                      >
                    `
                  : html``}
              </div>
            `
          : html`
              <md-icon>search</md-icon>
              <span class="interactive-content">${this._getValue()}</span>
              <slot></slot>
            `}
      </div>
    `;
  }
  _getValue() {
    return this.filterValue || this.placeHolder;
  }

  _handleClear(e: CustomEvent) {
    e.preventDefault();
    this.filterValue = null;
    this.search!.value = '';
    this._notifyChange();
  }

  _handleKeyUp(e: KeyboardEvent) {
    const input: HTMLInputElement = e.target as HTMLInputElement;

    if (this.filterValue !== input.value) {
      this.filterValue = input.value;
      this._notifyChange();
    }

    if (e.keyCode === 27) {
      this._hideSearch();
    }
  }

  _notifyChange() {
    this._debouncer = debounce.Debouncer.debounce(this._debouncer, async.timeOut.after(200), () => {
      this.dispatchEvent(
        new CustomEvent('exmg-grid-toolbar-search-changed', {
          bubbles: false,
          composed: true,
          detail: { value: this.filterValue },
        }),
      );
    });
  }

  _handleInputBlur() {
    this._hideSearch();
  }
  _hideSearch() {
    this._isSearch = false;
  }
  _showSearch() {
    if (this._isSearch) return;
    this._isSearch = true;
    setTimeout(() => this.shadowRoot!.querySelector<HTMLInputElement>('#searchInput')!.focus(), 200);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-toolbar-search': ToolbarSearch;
  }
}
