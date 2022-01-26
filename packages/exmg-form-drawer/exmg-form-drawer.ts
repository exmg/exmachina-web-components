import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import '@polymer/neon-animation/animations/slide-from-right-animation.js';
import '@polymer/neon-animation/animations/slide-right-animation.js';
import '@polymer/paper-dialog/paper-dialog.js';
import './exmg-drawer.js';
import {style} from './styles/exmg-form-drawer-styles-css.js';
import '@exmg/exmg-form/exmg-form.js';
import {ExmgForm} from '@exmg/exmg-form/exmg-form.js';
import '@exmg/exmg-button/exmg-button.js';

/**
 * ### Styling
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--mdc-theme-primary` | primary color for drawer header buttons |
 * `--exmg-form-drawer-header-separator-color` | color of drawer header separator | `var(--mdc-theme-on-surface, rgba(#02182b, 0.1))`
 */
@customElement('exmg-form-drawer' as any)
export class ExmgFormDrawer extends LitElement {
  @property({type: Boolean})
  opened = false;

  @property({type: String, attribute: 'submit-btn-title'})
  submitBtnTitle = 'Submit';

  @property({type: Boolean, attribute: 'submit-btn-hidden'})
  submitBtnHidden = false;

  @property({type: String, attribute: 'cancel-btn-title'})
  cancelBtnTitle = 'Cancel';

  @property({type: Boolean, attribute: 'keep-opened-on-submit-success'})
  keepOpenedOnSubmitSuccess = false;

  @property({type: Boolean, attribute: 'reset-form-on-submit-success'})
  resetFormOnSubmitSuccess = false;

  @property({type: Boolean, attribute: 'autofocus-on-open'})
  autofocusOnOpen = false;

  @property({type: Boolean, attribute: 'no-cancel-on-outside-click'})
  noCancelOnOutsideClick = false;

  @property({type: Boolean, attribute: 'disable-sticky-header'})
  disableStickyHeader = false;

  @property({type: Boolean, reflect: true})
  submitting = false;

  @query('exmg-form')
  private form?: ExmgForm;

  done() {
    this.submitting = false;

    if (!this.keepOpenedOnSubmitSuccess) {
      this.opened = false;
    }

    if (this.resetFormOnSubmitSuccess) {
      this.form!.reset();
    }

    this.form!.done();
  }

  close() {
    this.opened = false;
  }

  submit() {
    if (this.form && this.form.validate()) {
      this.form.submit();
    }
  }

  validate() {
    if (this.form) {
      this.form.validate();
    }
  }

  serializeForm(): {[key: string]: any} | undefined {
    if (this.form) {
      return this.form.serializeForm();
    }

    return;
  }

  reset() {
    if (this.form) {
      this.form.reset();
    }
    this.submitting = false;
  }

  /**
   * 
   * @deprecated handleError method should be used
   */
  error(errorMessage: string) {
    this.submitting = false;
    this.form!.error(errorMessage);
  }

  handleError(errorMessage: string) {
    this.submitting = false;
    this.form!.error(errorMessage);
  }

  private _handleOpenChanged(e: CustomEvent<{value: boolean}>) {
    setTimeout(() => {
      if (e.detail.value && this.autofocusOnOpen) {
        const firstChild = this.querySelector<HTMLInputElement>('*[name]');
        firstChild && firstChild.focus();
      }
    }, 150);
  }

  private handleSubmitBtnClick() {
    this.form!.submit();
  }

  private handleCancelBtnClick() {
    this.form!.reset();
    this.close();
  }

  static styles = [style];

  render() {
    // language=html
    return html`
      <exmg-drawer
        ?opened="${this.opened}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        @exmg-drawer-opened-changed=${this._handleOpenChanged}
        style="max-width: ${this.style.maxWidth || '547px'}"
      >
        <div class="header">
          <slot name="title" class="title"></slot>
          <div class="header-buttons">
            <exmg-button title="${this.cancelBtnTitle}" @click="${this.handleCancelBtnClick}"> ${this.cancelBtnTitle} </exmg-button>
            ${this.submitBtnHidden
              ? ''
              : html`
                  <exmg-button
                    unelevated
                    ?loading="${this.submitting}"
                    ?disabled="${this.submitting}"
                    title="${this.submitBtnTitle}"
                    @click="${this.handleSubmitBtnClick}"
                  >
                    ${this.submitBtnTitle}
                  </exmg-button>
                `}
          </div>
        </div>
        <div class="form-elements">
          <exmg-form @submit="${() => (this.submitting = true)}" hide-submit-button hide-reset-button bubbles>
            <slot></slot>
          </exmg-form>
        </div>
      </exmg-drawer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-form-drawer': ExmgFormDrawer;
  }
}