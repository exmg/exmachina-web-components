import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@exmg/exmg-button/exmg-button.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
import '@polymer/paper-input/paper-input.js';
import '@exmg/exmg-paper-combobox/exmg-paper-combobox.js';
import '@polymer/paper-item/paper-item.js';
import '@exmg/exmg-form/exmg-form.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import './form-drawer-styled.js';
import './exmg-form-drawer-standard.js';
import './user-update-drawer.js';

@customElement('exmg-form-drawer-demo')
export class Drawer extends LitElement {
  static styles = [
    css`
      :host {
        font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: 15px;
        --mdc-theme-primary: var(--md-sys-color-primary);
        --mdc-theme-on-primary: var(--md-sys-color-on-primary);
      }
      exmg-button[unelevated] {
        --exmg-spinner-stroke-width: 2px;
        --exmg-spinner-color: '#eee';
      }
      h3 {
        color: var(--md-sys-color-on-surface);
      }
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .main > div {
        width: 100%;
        border-bottom: 1px solid #666;
      }
      div > * {
        padding: 8px;
      }

      exmg-button[progress] {
        --exmg-button-progress-color: red;
        --exmg-button-progress-direction: ltr;
      }
    `,
  ];

  @property({type: Number})
  private activeTabIndex = 1;

  renderTab() {
    switch (this.activeTabIndex) {
      case 0:
        return html` <exmg-form-drawer-standard></exmg-form-drawer-standard> `;
      case 1:
        return html` <exmg-drawer-demo-styled></exmg-drawer-demo-styled> `;
      case 2:
        return html` <user-update-drawer></user-update-drawer> `;
    }
    return html` unknown `;
  }

  render() {
    return html`
      <mwc-tab-bar
        activeIndex="1"
        @MDCTabBar:activated=${(e: CustomEvent<{index: number}>) => (this.activeTabIndex = e.detail.index)}
      >
        <mwc-tab label="one"></mwc-tab>
        <mwc-tab label="two"></mwc-tab>
        <mwc-tab label="three"></mwc-tab>
      </mwc-tab-bar>

      <main>${this.renderTab()}</main>
    `;
  }
}
