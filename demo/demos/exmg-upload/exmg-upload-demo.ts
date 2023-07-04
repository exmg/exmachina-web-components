import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/tab.js';

import './exmg-upload-dialog-demo.js';
import './exmg-upload-default-demo.js';
import './exmg-upload-custom-demo.js';
import './exmg-upload-customize-demo.js';
import './exmg-upload-image-demo.js';
import './exmg-input-demo.js';
import { Tabs } from '@material/web/tabs/lib/tabs.js';

@customElement('exmg-upload-demo')
export class ExmgUploadDemo extends LitElement {
  @query('md-tabs')
  tabs?: Tabs;

  @state()
  selectedTab = 0;

  static styles = [
    css`
      :host {
        display: block;
      }
      main {
        margin-top: 3rem;
      }
    `,
  ];

  _handleChange() {
    this.selectedTab = this.tabs?.selected ?? 0;
  }

  renderContent() {
    switch (this.selectedTab) {
      case 1:
        return html`<exmg-upload-dialog-demo></exmg-upload-dialog-demo>`;
      case 2:
        return html`<exmg-upload-custom-demo></exmg-upload-custom-demo>`;
      case 3:
        return html`<exmg-upload-image-demo></exmg-upload-image-demo>`;
      case 4:
        return html`<exmg-upload-customize-demo></exmg-upload-customize-demo>`;
      case 5:
        return html`<exmg-input-demo></exmg-input-demo>`;
      default:
        return html`<exmg-upload-default-demo></exmg-upload-default-demo>`;
    }
  }

  render() {
    return html`
      <div class="centered">
        <md-tabs .selected="${this.selectedTab}" @change=${this._handleChange}>
          <md-tab> Configurable upload </md-tab>
          <md-tab> Dialog example </md-tab>
          <md-tab> Custom upload adapter </md-tab>
          <md-tab> Image features </md-tab>
          <md-tab> Customize upload </md-tab>
          <md-tab> Input upload </md-tab>
        </md-tabs>

        <main>${this.renderContent()}</main>
      </div>
    `;
  }
}
