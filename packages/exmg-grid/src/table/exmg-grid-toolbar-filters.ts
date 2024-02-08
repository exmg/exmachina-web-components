import { ExmgElement } from '@exmg/lit-base';
import { html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/button/text-button.js';
import { Menu } from '@material/web/menu/menu.js';

export interface FilterItem {
  label: string;
  value: string;
}

interface Token {
  id: number | string;
  text: string;
}

export interface EventSelectPayload {
  value: string;
  item: Element;
  token: Token;
}

@customElement('exmg-grid-toolbar-filters')
export class ExmgGridToolbarFilters extends ExmgElement {
  /**
   * Gets or sets the selected element. The default is to use the index of the item.
   * @type {string}
   */
  @property({ type: String })
  selected?: string;

  @property({ type: Array })
  items: FilterItem[] = [];

  @query('md-menu')
  menu?: Menu;

  /**
   * Set to true to disable this input.
   */
  @property({ type: Boolean })
  disabled = false;

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  selectedLabel() {
    const item = this.items?.find((i) => i.value === this.selected);
    return item ? item.label : 'No Filter Selected';
  }

  _handleMenuClick(value: string) {
    if (this.selected !== value) {
      this.selected = value;
      this.fire('exmg-grid-toolbar-filter-changed', { value });
    }
  }

  render() {
    return html`
      <span style="position: relative;">
        <md-text-button
          id="filterBtn"
          aria-controls="menu"
          @click=${() => this.menu!.show()}
          ?disabled=${this.disabled}
          trailing-icon
          >${this.selectedLabel()} <md-icon slot="icon">expand_more</md-icon></md-text-button
        >
        <md-menu id="menu" menu-corner="start-start" anchor="filterBtn" role="listbox" aria-label="Filter options">
          ${this.items?.map(
            (i) =>
              html`<md-menu-item
                type="option"
                id="${i.value}"
                ?selected=${i.value === this.selected}
                @click=${() => this._handleMenuClick(i.value)}
              >
                <div slot="headline">${i.label}</div></md-menu-item
              >`,
          )}
        </md-menu>
      </span>
    `;
  }
}
