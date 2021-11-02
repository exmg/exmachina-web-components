import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import '@exmg/exmg-button';
import '@exmg/exmg-form-drawer';
import '../exmg-markdown-editor.js';
import {ExmgFormDrawer} from '@exmg/exmg-form-drawer/exmg-form-drawer.js';

@customElement('exmg-drawer-demo')
export class Drawer extends LitElement {
  @property({type: Boolean}) opened = false;
  @property({type: Boolean}) shouldFail = false;
  @property({type: Boolean}) keepOpenedOnSubmitSuccess = false;
  @property({type: Boolean}) resetFormOnSubmitSuccess = false;
  @property({type: Boolean}) noCancelOnOutsideClick = false;
  @property({type: Boolean}) submitBtnHidden = false;

  @property({type: String})
  markdownValue?: string = '123';

  @query('exmg-form-drawer') form?: ExmgFormDrawer;

  handleOpenedChanged(e: CustomEvent) {
    this.opened = e.detail.value;
  }

  openDialog() {
    this.opened = true;
    //setTimeout(() => (this.markdownValue = 'ssdasdasdas'), 1000);
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

  onSubmit() {
    console.log('onSubmit');
    setTimeout(() => {
      if (this.shouldFail) {
        this.form!.error('Internal error occurred');
      } else {
        this.form!.done();
      }
    }, 1000);
  }

  onCancel(event: CustomEvent) {
    console.log('cancel', event);
  }

  render() {
    return html`
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
          <input type="checkbox" name="shouldFail" value="${this.shouldFail}" @change="${this.handleShouldFailChange}" />
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
        <br /><br />
        <label>
          <input type="checkbox" name="hodeSubmitButton" @change="${() => (this.submitBtnHidden = !this.submitBtnHidden)}" />
          Hide submit button
        </label>
      </div>

      <exmg-form-drawer
        ?opened="${this.opened}"
        reset-form-on-submit-success
        @exmg-drawer-opened-changed="${this.handleOpenedChanged}"
        submit-btn-title="Create"
        ?submit-btn-hidden=${this.submitBtnHidden}
        @submit="${this.onSubmit}"
      >
        <span slot="title">New event</span>
        <exmg-markdown-editor name="markdownContentBody" split-view show-helper-label height="340" markdown=${this.markdownValue}>
        </exmg-markdown-editor>
      </exmg-form-drawer>
    `;
  }
}
