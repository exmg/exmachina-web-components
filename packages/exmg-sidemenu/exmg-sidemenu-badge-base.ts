import { html } from 'lit';
import { ExmgElement } from '@exmg/lit-base/index.js';

export class ExmgSidemenuBadgeBase extends ExmgElement {
  render() {
    return html`
      <div class="badge">
        <span><slot></slot></span>
      </div>
    `;
  }
}
