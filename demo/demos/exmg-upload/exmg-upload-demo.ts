import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { Tabs } from '@material/web/tabs/internal/tabs.js';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';

import './exmg-upload-dialog-demo.js';
import './exmg-upload-default-demo.js';
import './exmg-upload-custom-demo.js';
import './exmg-upload-customize-demo.js';
import './exmg-upload-image-demo.js';
import './exmg-input-demo.js';

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
    this.selectedTab = this.tabs?.activeTabIndex ?? 0;
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
          <md-primary-tab> Configurable upload </md-primary-tab>
          <md-primary-tab> Dialog example </md-primary-tab>
          <md-primary-tab> Custom upload adapter </md-primary-tab>
          <md-primary-tab> Image features </md-primary-tab>
          <md-primary-tab> Customize upload </md-primary-tab>
          <md-primary-tab> Input upload </md-primary-tab>
        </md-tabs>

        <main>${this.renderContent()}</main>
      </div>
    `;
  }
}
