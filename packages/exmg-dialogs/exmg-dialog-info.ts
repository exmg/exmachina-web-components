import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@exmg/exmg-button/exmg-button';
import '@polymer/iron-form';
import '@material/mwc-icon-button';
import { style } from './styles/exmg-dialog-styles-css.js';
import { PaperDialogElement } from '@polymer/paper-dialog';
import { closeIcon } from './exmg-dialog-icons.js';

/**
 * exmg-dialog-info
 *
 * Dialog element useful to display information.
 *
 * @customElement exmg-dialog-info
 * @extends LitElement
 */
@customElement('exmg-dialog-info')
export class ExmgInfoDialog extends LitElement {
  /**
   * Title of the dialog
   * @type {String}
   */
  @property({ type: String })
  title = '';

  /**
   * Copy for done button
   * @type {String}
   */
  @property({ type: String, attribute: 'button-copy' })
  buttonCopy = '';

  /**
   * Hide close button ?
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'hide-close-button' })
  hideCloseButton = false;

  /**
   * Show close button as unelevated
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'button-unelevated' })
  buttonUnelevated?: boolean = false;

  /**
   * Sets the action for scroll behaviour within the dialog
   * @type {String}
   */
  @property({ type: String, attribute: 'scroll-action' })
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

  @query('#dialog')
  private dialogNode?: PaperDialogElement;

  static styles = [style];

  /**
   * Opens the dialog node
   * @public
   */
  open() {
    if (this.dialogNode) {
      this.dialogNode.open();
    }
  }

  /**
   * Closes the dialog node
   * @public
   */
  close() {
    if (this.dialogNode) {
      this.dialogNode.close();
    }
  }

  /**
   * @fires done
   */
  done() {
    // dispatch event 'done'
    this.dispatchEvent(new CustomEvent('done'));
  }

  renderHeader() {
    return html`
      ${this.title
        ? html`
            <header>
              <h2 class="title">${this.title}</h2>
            </header>
          `
        : html` <div class="top-margin">&nbsp;</div> `}
    `;
  }

  /**
   * @protected
   */
  protected render() {
    return html`
      <paper-dialog id="dialog" scroll-action=${ifDefined(this.scrollAction)} with-backdrop no-cancel-on-outside-click>
        ${this.hideCloseButton
          ? html` ${this.renderHeader()} `
          : html`
              <mwc-icon-button @click=${this.close} class="close-button">${closeIcon}</mwc-icon-button>
              ${this.renderHeader()}
            `}

        <paper-dialog-scrollable>
          <slot></slot>
        </paper-dialog-scrollable>
        <div class="actions">
          <exmg-button id="doneBtn" @click=${this.done} ?unelevated=${this.buttonUnelevated}
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-info': ExmgInfoDialog;
  }
}
