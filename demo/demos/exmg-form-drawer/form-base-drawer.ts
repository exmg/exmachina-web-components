import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@exmg/exmg-button/exmg-button.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import './user-update-drawer.js';
import { UserUpdateDrawer } from './user-update-drawer.js';

@customElement('exmg-base-drawer-demo')
export class BaseDrawer extends LitElement {
  @query('#userDrawer')
  userDrawer?: UserUpdateDrawer;

  render() {
    return html`
        <exmg-button
          @click=${() =>
            this.userDrawer!.show({
              firstname: 'John',
              lastname: 'Doe',
              company: 'Ex Machina Group',
              amount: 5,
              email: 'test@example.com',
              phone: '+1234567890',
            })}
          >Open User Drawer</exmg-button
        >
      </div>

      <user-update-drawer id="userDrawer"></user-update-drawer>
    `;
  }
}
