import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
import '@polymer/paper-input/paper-input.js';
import '@exmg/exmg-paper-combobox/exmg-paper-combobox.js';
import '@polymer/paper-item/paper-item.js';
import '@exmg/exmg-form/exmg-form.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import { ExmgFormDrawer } from '@exmg/exmg-form-drawer/exmg-form-drawer.js';

@customElement('exmg-form-drawer-standard')
export class Drawer extends LitElement {
  static styles = [
    css`
      :host {
        font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: 15px;
        --mdc-theme-primary: var(--md-sys-color-primary);
        --mdc-theme-on-primary: var(--md-sys-color-on-primary);
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
    `,
  ];

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
      }
    }, 1000);
  }

  onCancel(event: CustomEvent) {
    // eslint-disable-next-line no-console
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
    `;
  }
}
