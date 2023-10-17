<<<<<<< HEAD
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@exmg/exmg-button/exmg-button.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
import '@polymer/paper-input/paper-input.js';
import '@exmg/exmg-paper-combobox/exmg-paper-combobox.js';
import '@polymer/paper-item/paper-item.js';
import '@exmg/exmg-form/exmg-form.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import { ExmgFormDrawer } from '@exmg/exmg-form-drawer/exmg-form-drawer.js';
=======
import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import './exmg-form-drawer-standard.js';
import './user-update-drawer.js';
import { Tabs } from '@material/web/tabs/lib/tabs.js';
import { UserData, UserUpdateDrawer } from './user-update-drawer.js';
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

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
<<<<<<< HEAD
  @property({ type: Boolean })
  opened = false;

  @property({ type: Boolean })
  shouldFail = false;

  @property({ type: Boolean })
  keepOpenedOnSubmitSuccess = false;

  @property({ type: Boolean })
  resetFormOnSubmitSuccess = false;

  @property({ type: Boolean })
  noCancelOnOutsideClick = false;

  @property({ type: Boolean })
  submitBtnHidden = false;

  @property({ type: Boolean })
  disableStickyHeader = true;

  @property({ type: String })
  markdownValue?: string = '123';

  @query('exmg-form-drawer')
  form?: ExmgFormDrawer;

  handleOpenedChanged(e: CustomEvent) {
    this.opened = e.detail.value;
  }

  openDialog() {
    this.opened = true;
    setTimeout(() => (this.markdownValue = 'ssdasdasdas'), 10);
  }

  openAndResetDialog() {
    this.form!.reset();
    this.opened = true;
  }

  handleShouldFailChange(e: CustomEvent) {
    this.shouldFail = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleKeepOpenedOnSubmitSuccess(e: CustomEvent) {
    this.keepOpenedOnSubmitSuccess = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleResetFormOnSubmitSuccess(e: CustomEvent) {
    this.resetFormOnSubmitSuccess = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleNoCancelOnOutsideClick(e: CustomEvent) {
    this.noCancelOnOutsideClick = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleDisableStickyHeaderClick(e: CustomEvent) {
    this.disableStickyHeader = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  onSubmit() {
    setTimeout(() => {
      if (this.shouldFail) {
        this.form!.handleError('Internal error occurred');
      } else {
        this.form!.done();
=======
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
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
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
<<<<<<< HEAD
      <style>
        exmg-form-drawer {
          --mdc-theme-primary: #0071dc;
        }
      </style>
      <div style="padding: 20px">
        <input type="button" @click="${this.openDialog}" value="Open dialog" /><input
          type="button"
          @click="${this.openAndResetDialog}"
          value="Open dialog (reset form)"
        />
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="shouldFail"
            ?checked="${this.shouldFail}"
            @change="${this.handleShouldFailChange}"
          />
          Should Fail
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="keepOpenedOnSubmitSuccess"
            ?checked="${this.keepOpenedOnSubmitSuccess}"
            @change="${this.handleKeepOpenedOnSubmitSuccess}"
          />
          Keep opened on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="resetFormOnSubmitSuccess"
            ?checked="${this.resetFormOnSubmitSuccess}"
            @change="${this.handleResetFormOnSubmitSuccess}"
          />
          Reset form on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="noCancelOnOutsideClick"
            ?checked="${this.noCancelOnOutsideClick}"
            @change="${this.handleNoCancelOnOutsideClick}"
          />
          No cancel on outside click
        </label>

        <br /><br />
        <label>
          <input
            type="checkbox"
            name="hodeSubmitButton"
            @change="${() => (this.submitBtnHidden = !this.submitBtnHidden)}"
          />
          Hide submit button
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="noCancelOnOutsideClick"
            ?checked="${this.disableStickyHeader}"
            @change="${this.handleDisableStickyHeaderClick}"
          />
          Disable sticky header
        </label>
      </div>
      <exmg-form-drawer
        ?opened="${this.opened}"
        reset-form-on-submit-success
        @exmg-drawer-opened-changed="${this.handleOpenedChanged}"
        submit-btn-title="Create"
        ?submit-btn-hidden=${this.submitBtnHidden}
        ?disable-sticky-header=${this.disableStickyHeader}
        @submit="${this.onSubmit}"
      >
        <span slot="title">New event</span>
        <exmg-paper-combobox label="Type" name="type" selected="0" always-float-label>
          <paper-item>Trivia</paper-item>
          <paper-item>Other</paper-item>
        </exmg-paper-combobox>
        <paper-input
          name="question"
          label="Question"
          value="Who's Dylan Hartigan's favorite artist?"
          required
        ></paper-input>
        <paper-input name="answer_a" label="Answer A" value="Beyoncé"></paper-input>
        <paper-input name="answer_b" label="Answer B" value="Eminem"></paper-input>
        <paper-input name="answer_c" label="Answer C" value="Ariana Grande"></paper-input>
        <exmg-markdown-editor
          name="markdownContentBody"
          split-view
          show-helper-label
          height="340"
          .markdown=${this.markdownValue}
        ></exmg-markdown-editor>
      </exmg-form-drawer>
=======
      <md-tabs .selected="${this.selectedTab}" @change=${this._handleChange}>
        <md-tab> Normal </md-tab>
        <md-tab> Extends base class </md-tab>
      </md-tabs>

      <main>${this.renderContent()}</main>
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
    `;
  }
}
