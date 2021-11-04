import {html} from 'lit';
import {ExmgElement} from '@exmg/exmg-base';

export class ExmgSidemenuBadgeBase extends ExmgElement {
  render() {
    return html`
      <div class="badge">
        <span><slot></slot></span>
      </div>
    `;
  }
}
