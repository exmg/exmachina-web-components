import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import './exmg-drawer.js';
import '@exmg/exmg-button/exmg-filled-button.js';
import '@material/web/button/text-button.js';
import { ExmgElement } from '@exmg/lit-base';

const serializeForm = (form) => {
  const obj = {};
  const formData = new FormData(form);
  for (const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj;
};

export class ExmgFormDrawerBase extends ExmgElement {
  /**
   * Opened state of the form-drawer
   * @type {Boolean}
   */
  @property({ type: Boolean })
  opened = false;

  /**
   * The title of the 'submit' button
   * @type {String}
   */
  @property({ type: String, attribute: 'submit-btn-title' })
  submitBtnTitle = 'Submit';

  /**
   * Whether or not to hide the submit button
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'submit-btn-hidden' })
  submitBtnHidden = false;

  /**
   * Title of the cancel button
   * @type {String}
   */
  @property({ type: String, attribute: 'cancel-btn-title' })
  cancelBtnTitle = 'Cancel';

  /**
   * Whether or not to keep the form drawer opened on submit success
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'keep-opened-on-submit-success' })
  keepOpenedOnSubmitSuccess = false;

  /**
   * No cancel on outside click
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'no-cancel-on-outside-click' })
  noCancelOnOutsideClick = false;

  /**
   * Disable sticky header in drawer
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'disable-sticky-header' })
  disableStickyHeader = false;

  /**
   * Internall used to show button spinner.
   */
  @property({ type: Boolean }) submitting = false;

  @state() private formValid = false;

  boundHandleBlur?: (e: Event) => void;

  /**
   * Scroll action of the drawer
   * @type {'lock' | 'refit' | 'cancel' | undefined}
   */
  @property({ type: String, attribute: 'scroll-action' })
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

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

  /**
   * Opens and shows the drawer.
   */
  show() {
    this.opened = true;
  }

  /**
   * Closes the drawer.
   */
  close() {
    this.opened = false;
  }

  /**
   * Opens and shows the dialog if it is closed; otherwise closes it.
   */
  toggleShow() {
    if (this.opened) {
      this.close();
    } else {
      this.show();
    }
  }

  protected async _checkFormValidity() {
    await this.updateComplete;
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

  reset() {
    const form = this.getForm();
    form!.reset();
  }

  /**
   * Action method that needs to be implemented
   * @param {CustomEvent} e
   */
  doAction?(formData: unknown): Promise<void> | void;

  protected async handleSubmit() {
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
        this.errorMessage = error instanceof Error ? error.message : 'Unkbnown error';
        this.fire('dialog-error', { message: this.errorMessage }, true);
      } finally {
        this.submitting = false;
        if (!this.keepOpenedOnSubmitSuccess) {
          this.opened = false;
        }
      }
    } else {
      this.fire('dialog-submit', data, true);
    }
  }

  private handleCancelBtnClick() {
    this.getForm()!.reset();
    this.close();
  }

  showError(message: string) {
    this.errorMessage = message;
  }

  /**
   * Method should be overriden to render form content
   */
  protected renderFormContent() {
    return html`<slot></slot>`;
  }

  protected renderError() {
    return html`<div class="error"><div>${this.errorMessage}</div></div>`;
  }

  protected render() {
    return html`
      <exmg-drawer
        ?opened="${this.opened}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        scroll-action=${ifDefined(this.scrollAction)}
        style="max-width: ${this.style.maxWidth || '547px'}"
      >
        <div class="header">
          <slot name="title" class="title">${this.title}</slot>
          <div class="header-buttons">
            <md-text-button slot="footer" dialogFocus @click=${() => this.handleCancelBtnClick()}
              >${this.cancelBtnTitle}</md-text-button
            >
            ${this.submitBtnHidden
              ? ''
              : html` <exmg-filled-button
                  slot="footer"
                  @click=${this.handleSubmit}
                  ?disabled=${this.submitting || !this.formValid}
                  ?loading=${this.submitting}
                  >${this.submitBtnTitle}</exmg-filled-button
                >`}
          </div>
        </div>
        ${this.errorMessage ? this.renderError() : nothing}
        <div class="form-elements">${this.renderFormContent()}</div>
      </exmg-drawer>
    `;
  }
}
