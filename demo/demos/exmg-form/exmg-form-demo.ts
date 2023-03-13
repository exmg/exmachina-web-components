import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';

import './tab-1.js';
import './tab-2.js';
import './tab-3.js';

@customElement('form-demo')
export class FormDemo extends LitElement {
  @property({type: Number})
  private activeTabIndex = 1;

  renderTab() {
    switch (this.activeTabIndex) {
      case 0:
        return html` <tab-1></tab-1> `;
      case 1:
        return html` <tab-2></tab-2> `;
      case 2:
        return html` <tab-3></tab-3> `;
    }
    return html` unknown `;
  }

  render() {
    return html`
      <mwc-tab-bar activeIndex="1" @MDCTabBar:activated=${(e: CustomEvent<{index: number}>) => (this.activeTabIndex = e.detail.index)}>
        <mwc-tab label="one"></mwc-tab>
        <mwc-tab label="two"></mwc-tab>
        <mwc-tab label="three"></mwc-tab>
      </mwc-tab-bar>

      <main>${this.renderTab()}</main>
    `;
  }
}
