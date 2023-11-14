import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './settings-example-item-1.js';
import './settings-example-item-2.js';

@customElement('settings-example-list')
export class SettingsExampleList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        min-width: 840px;
      }
      .settings > * {
        width: 100%;
        margin-bottom: 2px;
      }
    `,
  ];

  render() {
    return html`
      <div class="settings">
        <settings-example-item-2></settings-example-item-2>
        <settings-example-item-1></settings-example-item-1>
      </div>
    `;
  }
}
