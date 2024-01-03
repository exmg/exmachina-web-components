import { LitElement, html } from 'lit';

export class ExmgNavigationRailNavBase extends LitElement {
  render() {
    return html`<nav aria-label="Main">
      <slot></slot>
    </nav>`;
  }
}
