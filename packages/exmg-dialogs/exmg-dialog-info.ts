import {html, LitElement} from 'lit';
import {property, customElement, query} from 'lit/decorators.js'
import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@exmg/exmg-button/exmg-button';
import '@polymer/iron-form';
import '@material/mwc-icon-button';
import {style} from './styles/exmg-dialog-styles-css';
import {PaperDialogElement} from '@polymer/paper-dialog';
import {closeIcon} from './exmg-dialog-icons';

@customElement('exmg-dialog-info')
export class ExmgInfoDialog extends LitElement {
  /**
   * Title of the dialog
   */
  @property({type: String})
  public title = '';

  /**
   * Copy for done button
   */
  @property({type: String, attribute: 'button-copy'})
  private buttonCopy = '';

  /**
   * Hide close button ?
   */
  @property({type: Boolean, attribute: 'hide-close-button'})
  private hideCloseButton = false;

  /**
   * Show close button as unelevated
   */
  @property({type: Boolean, attribute: 'button-unelevated'})
  private buttonUnelevated?: boolean = false;

  @query('#dialog')
  private dialogNode?: PaperDialogElement;

  static styles = [style];

  public open() {
    if (this.dialogNode) {
      this.dialogNode.open();
    }
  }

  public close() {
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
      ${!!this.title
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
      <paper-dialog id="dialog" with-backdrop no-cancel-on-outside-click>
        ${this.hideCloseButton
          ? html` ${this.renderHeader()} `
          : html`
              <mwc-icon-button @click=${this.close} class="close-button"
                >${closeIcon}</mwc-icon-button
              >
              ${this.renderHeader()}
            `}

        <paper-dialog-scrollable>
          <slot></slot>
        </paper-dialog-scrollable>
        <div class="actions">
          <exmg-button
            id="doneBtn"
            @click=${this.done}
            ?unelevated=${this.buttonUnelevated}
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `;
  }
}
