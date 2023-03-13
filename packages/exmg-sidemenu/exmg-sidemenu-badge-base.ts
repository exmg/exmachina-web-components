import {html} from 'lit';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';

export class ExmgSidemenuBadgeBase extends ExmgElement {
  render() {
    return html`
      <div class="badge">
        <span><slot></slot></span>
      </div>
    `;
  }
}
