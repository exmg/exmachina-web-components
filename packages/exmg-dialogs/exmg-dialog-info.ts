import {html} from 'lit';
import {property} from 'lit/decorators/property.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {customElement} from 'lit/decorators/custom-element.js';
import {query} from 'lit/decorators/query.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@exmg/exmg-button/exmg-button';
import '@polymer/iron-form';
import '@material/mwc-icon-button';
import {style} from './styles/exmg-dialog-styles-css.js';
import {PaperDialogElement} from '@polymer/paper-dialog';
import {closeIcon} from './exmg-dialog-icons';

@customElement('exmg-dialog-info')
export class ExmgInfoDialog extends ExmgElement {
  /**
   * Title of the dialog
   */
  @property({type: String})
  title = '';

  /**
   * Copy for done button
   */
  @property({type: String, attribute: 'button-copy'})
  buttonCopy = '';

  /**
   * Hide close button ?
   */
  @property({type: Boolean, attribute: 'hide-close-button'})
  hideCloseButton = false;

  /**
   * Show close button as unelevated
   */
  @property({type: Boolean, attribute: 'button-unelevated'})
  buttonUnelevated?: boolean = false;

  @property({type: String, attribute: 'scroll-action'})
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

  @query('#dialog')
  private dialogNode?: PaperDialogElement;

  static styles = [style];

  open() {
    if (this.dialogNode) {
      this.dialogNode.open();
    }
  }

  close() {
    if (this.dialogNode) {
      this.dialogNode.close();
    }
  }

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
