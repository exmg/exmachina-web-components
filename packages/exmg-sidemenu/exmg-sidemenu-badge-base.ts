import { html, LitElement } from 'lit';

export class ExmgSidemenuBadgeBase extends LitElement {
  render() {
    return html`
      <div class="badge">
        <span><slot></slot></span>
      </div>
    `;
  }
}
