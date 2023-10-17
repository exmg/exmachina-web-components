import { html } from 'lit';
<<<<<<< HEAD
import { customElement, property, query } from 'lit/decorators.js';
import { ExmgFormDrawer } from '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import { FormDrawerBase } from './form-drawer-base.js';
import { EditorElement } from '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
=======
import { customElement, property } from 'lit/decorators.js';
import { ExmgFormDrawerBase, formDrawerStyles } from '@exmg/exmg-form-drawer';
import { ifDefined } from 'lit/directives/if-defined.js';
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface UserData {
  firstname: string;
  lastname: string;
  company?: string;
  amount?: number;
  email: string;
  phone: string;
}

@customElement('user-update-drawer')
<<<<<<< HEAD
export class UserUpdateDrawer extends FormDrawerBase<UserData> {
  @property({ type: String, attribute: 'update-title' })
  updateTitle = 'Update User';
=======
export class UserUpdateDrawer extends ExmgFormDrawerBase {
  static override styles = [formDrawerStyles];
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

  title = 'Create User';

  @property({ type: Object })
  user?: UserData;

  public async show(user?: UserData) {
    this.user = user;
    this.opened = true;
    this.title = this.isEditMode() ? 'Update User' : 'Create User';

    this._checkFormValidity();
  }

  isEditMode() {
    return !!this.user;
  }

  async doAction(formData: unknown) {
    // Simulate slow connection
    await sleep(1000);

    if (this.isEditMode()) {
      console.log('Item updates', formData);
    } else {
      console.log('Item created', formData);
    }
  }

<<<<<<< HEAD
  render() {
    return this.renderDrawer(html`
      <paper-input
        name="from"
        label="From *"
        value=${itemValue(this.item, 'from')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="fromName"
        label="From Name *"
        value=${itemValue(this.item, 'fromName')}
        required
        auto-validate
      ></paper-input>

      <exmg-markdown-editor
        id="markdownEditor"
        name="markdownContentBody"
        split-view
        show-helper-label
        height="340"
        .markdown=${this.item!.fromName}
      ></exmg-markdown-editor>

      <paper-input
        name="replyTo"
        label="Reply To *"
        value=${itemValue(this.item, 'replyTo')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="subject"
        label="Subject *"
        value=${itemValue(this.item, 'subject')}
        required
        auto-validate
      ></paper-input>
      <paper-input
        name="from"
        label="From *"
        value=${itemValue(this.item, 'from')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="fromName"
        label="From Name *"
        value=${itemValue(this.item, 'fromName')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="replyTo"
        label="Reply To *"
        value=${itemValue(this.item, 'replyTo')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="subject"
        label="Subject *"
        value=${itemValue(this.item, 'subject')}
        required
        auto-validate
      ></paper-input>
      <paper-textarea
        name="contentHtml"
        label="Html Content *"
        value=${itemValue(this.item, 'contentHtml')}
        rows="6"
        required
        auto-validate
      ></paper-textarea>

      <paper-textarea
        name="contentPlain"
        label="Text Content"
        value=${itemValue(this.item, 'contentPlain')}
        rows="6"
      ></paper-textarea>
      <paper-textarea
        name="contentHtml"
        label="Html Content *"
        value=${itemValue(this.item, 'contentHtml')}
        rows="6"
        required
        auto-validate
      ></paper-textarea>

      <paper-textarea
        name="contentPlain"
        label="Text Content"
        value=${itemValue(this.item, 'contentPlain')}
        rows="6"
      ></paper-textarea>
    `);
=======
  protected override renderFormContent() {
    return html`
      <form>
        <div class="row">
          <md-outlined-text-field
            name="firstname"
            dialogFocus
            label="First Name"
            value=${ifDefined(this.user?.firstname)}
            required
          ></md-outlined-text-field>
          <md-outlined-text-field
            name="lastname"
            label="Last Name"
            value=${ifDefined(this.user?.lastname)}
            required
          ></md-outlined-text-field>
        </div>
        <div class="row">
          <md-outlined-text-field
            name="company"
            label="Company"
            value=${ifDefined(this.user?.company)}
          ></md-outlined-text-field>
          <md-outlined-text-field
            name="amount"
            label="Amount"
            type="number"
            min="0"
            max="10"
            value=${ifDefined(this.user?.amount)}
          ></md-outlined-text-field>
        </div>
        <md-outlined-text-field
          name="email"
          label="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          value=${ifDefined(this.user?.email)}
          required
        ></md-outlined-text-field>
        <md-outlined-text-field
          name="phone"
          label="Phone"
          value=${ifDefined(this.user?.phone)}
          required
        ></md-outlined-text-field>
      </form>
    `;
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
  }
}
