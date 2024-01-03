import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

import '@exmg/exmg-button/exmg-text-button.js';
import '@material/web/button/text-button.js';
import '@material/web/divider/divider.js';

import { ExmgElement } from '@exmg/lit-base';
import { classMap } from 'lit/directives/class-map.js';

export const CLOSE_ACTION = 'close';

const serializeForm = (form) => {
  var obj = {};
  var formData = new FormData(form);
  for (var key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj;
};

export class ExmgFormBase extends ExmgElement {
  /**
   * Submit button copy
   */
  @property({ type: String }) submitBtn = 'Save';

  /**
   * Cancel button copy
   */
  @property({ type: String }) cancelBtn = 'Cancel';

  /**
   * Internall used to show button spinner.
   */
  @property({ type: Boolean }) public submitting = false;

  @state() private formValid = false;

  boundHandleBlur?: (e: Event) => void;

  @property({ type: Boolean }) hasAsideContent = false;

  @property({ type: String }) errorMessage?: string | null;

  protected getForm() {
    return this.shadowRoot!.querySelector('form');
  }

  protected _handleBlur(e: Event) {
    // @ts-ignore
    typeof e.target.reportValidity === 'function' && e.target.reportValidity();

    this._checkFormValidity();
  }

  protected firstUpdated() {
    const form = this.getForm();

    this.boundHandleBlur = this._handleBlur.bind(this);
    form!.addEventListener('blur', this.boundHandleBlur, true);
  }

  disconnectedCallback() {
    const form = this.getForm();
    this.boundHandleBlur && form!.addEventListener('blur', this.boundHandleBlur, true);
    super.disconnectedCallback();
  }

  protected _checkFormValidity() {
    const form = this.getForm();

    const formElements = form?.elements;
    let allValid = true;

    for (const el of formElements || []) {
      // @ts-ignore
      const isValid = typeof el.reportValidity === 'function' && el.checkValidity();
      if (!isValid) {
        allValid = false;
      }
    }

    this.formValid = allValid;
  }

  /**
   * Action method that needs to be implemented
   * @param {CustomEvent} e
   */
  doAction?(formData: unknown): Promise<void> | void;

  protected async handleSubmit() {
    this.errorMessage = null;
    const form = this.getForm();

    // Return when there are invalid fields
    if (!this.formValid) {
      return;
    }

    // Serialize form data
    const data = serializeForm(form!);

    if (this.doAction) {
      try {
        this.submitting = true;
        await this.doAction(data);
      } catch (error) {
        this.showError(error instanceof Error ? error.message : 'Unknown error');
        this.fire('dialog-error', { message: error instanceof Error ? error.message : 'Unknown error' }, true);
      } finally {
        this.submitting = false;
      }
    } else {
      this.fire('dialog-submit', data, true);
    }
  }

  showError(message: string) {
    this.errorMessage = message;
  }

  protected renderToolbar() {
    return html`<slot name="toolbar"></slot>`;
  }

  protected renderFormContent() {
    return html`<slot></slot>`;
  }

  protected renderAside() {
    return html`<slot name="aside" @slotchange="${this.handleAsideSlotChange}"></slot>`;
  }

  handleAsideSlotChange(e: CustomEvent) {
    const slot = e.target;
    // @ts-ignore
    const nodes = slot.assignedNodes({ flatten: true });
    this.hasAsideContent = nodes.length > 0;
  }

  protected renderError() {
    return html`<div class="form-error"><div>${this.errorMessage}</div></div>`;
  }

  protected render() {
    return html` <div class="toolbar-container">${this.renderToolbar()}</div>
      ${this.errorMessage ? this.renderError() : nothing}
      <div class="container">
        <div class="content">${this.renderFormContent()}</div>
        <div class="aside ${classMap({ empty: !this.hasAsideContent })}">${this.renderAside()}</div>
      </div>
      <div class="divider"><md-divider></md-divider></div>
      <div class="actions">
        <md-text-button slot="footer" dialogFocus @click=${() => this.fire('form-cancel')}
          >${this.cancelBtn}</md-text-button
        >
        <exmg-text-button
          slot="footer"
          @click=${this.handleSubmit}
          ?disabled=${this.submitting || !this.formValid}
          ?loading=${this.submitting}
          >${this.submitBtn}</exmg-text-button
        >
      </div>`;
  }
}
