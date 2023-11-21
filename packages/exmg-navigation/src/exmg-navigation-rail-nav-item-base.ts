import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { itemHover } from './exmg-navigation-signals.js';

export class ExmgNavigationRailNavItemBase extends LitElement {
  @property({ type: String })
  icon = '';

  @property({ type: String })
  label?: string;

  constructor() {
    super();
    this.setAttribute('role', 'link');

    // Bind methods to ensure the correct 'this' context
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);

    // Add event listeners in the constructor
    this.addEventListener('mouseenter', this.hoverIn);
    this.addEventListener('mouseleave', this.hoverOut);
  }

  hoverIn() {
    itemHover.value = true;
  }

  hoverOut() {
    itemHover.value = false;
  }

  render() {
    return html`<span class="symbols">${this.icon}</span>
      <div class="label">${this.label}</div>`;
  }
}
