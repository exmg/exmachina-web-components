import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import './exmg-form-drawer-standard.js';
import './user-update-drawer.js';
import { Tabs } from '@material/web/tabs/lib/tabs.js';
import { UserData, UserUpdateDrawer } from './user-update-drawer.js';

const user: UserData = {
  firstname: 'John',
  lastname: 'Doe',
  company: 'Ex Machina Group',
  amount: 5,
  email: 'test@example.com',
  phone: '+1234567890',
};

@customElement('exmg-form-drawer-demo')
export class Drawer extends LitElement {
  @query('md-tabs')
  tabs?: Tabs;

  @state()
  selectedTab = 0;

  @query('user-update-drawer')
  form?: UserUpdateDrawer;

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
      case 0:
        return html`<exmg-form-drawer-standard></exmg-form-drawer-standard> `;
      default:
        return html`
          <md-text-button @click=${() => this.form!.show()}>Open Create</md-text-button>
          <md-text-button @click="${() => this.form!.show(user)}">Open Update</md-text-button
          ><user-update-drawer></user-update-drawer>
        `;
    }
  }
  render() {
    return html`
      <md-tabs .selected="${this.selectedTab}" @change=${this._handleChange}>
        <md-tab> Normal </md-tab>
        <md-tab> Extends base class </md-tab>
      </md-tabs>

      <main>${this.renderContent()}</main>
    `;
  }
}
