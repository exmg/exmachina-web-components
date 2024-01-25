import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('dropdown-container')
export class DropdownContainer extends LitElement {
  @property({ type: String })
  dropdownTitle = 'Select items';

  static styles = [
    css`
      :host {
        display: block;
        padding: 0 1rem 0.5rem;
      }
      .label {
        margin-bottom: 0.5rem;
      }
      .items {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
      }
    `,
  ];

  render() {
    return html`<div class="container">
      <div class="label">${this.dropdownTitle}</div>
      <div class="items"><slot></slot></div>
    </div>`;
  }
}
