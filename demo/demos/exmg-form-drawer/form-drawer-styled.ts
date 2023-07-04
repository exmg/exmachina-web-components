import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@exmg/exmg-button/exmg-filled-button.js';
import '@polymer/paper-input/paper-input.js';
import '@exmg/exmg-paper-combobox/exmg-paper-combobox.js';
import '@exmg/exmg-form/exmg-form.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';

@customElement('exmg-drawer-demo-styled')
export class Drawer extends LitElement {
  @property({ type: Boolean }) opened = false;
  @property({ type: Boolean }) shouldFail = false;
  @property({ type: Boolean }) keepOpenedOnSubmitSuccess = false;
  @property({ type: Boolean }) resetFormOnSubmitSuccess = false;
  @property({ type: Boolean }) noCancelOnOutsideClick = false;

  handleOpenedChanged(e: CustomEvent) {
    this.opened = e.detail.value;
  }

  openDialog() {
    this.opened = true;
  }

  handleShouldFailChange(e: Event) {
    this.shouldFail = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleKeepOpenedOnSubmitSuccess(e: Event) {
    this.keepOpenedOnSubmitSuccess = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleResetFormOnSubmitSuccess(e: Event) {
    this.resetFormOnSubmitSuccess = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleNoCancelOnOutsideClick(e: Event) {
    this.noCancelOnOutsideClick = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  onSubmit(event: any) {
    setTimeout((_: any) => {
      if (this.shouldFail) {
        event.path[0].error('Internal error occurred');
      } else {
        event.path[0].done();
      }
    }, 1000);
  }

  onCancel(event: any) {
    // eslint-disable-next-line no-console
    console.log('cancel', event);
  }

  render() {
    // language=html
    return html`
      <style>
        exmg-form-drawer {
          --mdc-theme-primary: green;
          --mdc-theme-surface: black;
          --mdc-theme-on-surface: white;
        }
      </style>
      <div style="padding: 20px">
        <input type="button" @click="${this.openDialog}" value="Open dialog" />
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="shouldFail"
            value="${this.shouldFail}"
            @change="${this.handleShouldFailChange}"
          />
          Should Fail
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="keepOpenedOnSubmitSuccess"
            value="${this.keepOpenedOnSubmitSuccess}"
            @change="${this.handleKeepOpenedOnSubmitSuccess}"
          />
          Keep opened on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="resetFormOnSubmitSuccess"
            value="${this.resetFormOnSubmitSuccess}"
            @change="${this.handleResetFormOnSubmitSuccess}"
          />
          Reset form on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="noCancelOnOutsideClick"
            value="${this.noCancelOnOutsideClick}"
            @change="${this.handleNoCancelOnOutsideClick}"
          />
          No cancel on outside click
        </label>
      </div>
      <exmg-form-drawer
        ?opened="${this.opened}"
        ?keep-opened-on-submit-success="${this.keepOpenedOnSubmitSuccess}"
        ?reset-form-on-submit-success="${this.resetFormOnSubmitSuccess}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        @exmg-drawer-opened-changed="${this.handleOpenedChanged}"
        autofocus-on-open
        submit-btn-title="Create"
        @submit="${this.onSubmit}"
        @cancel="${this.onCancel}"
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
        <br />
        <exmg-filled-button unelevated> + Add answer </exmg-filled-button>
      </exmg-form-drawer>
    `;
  }
}
