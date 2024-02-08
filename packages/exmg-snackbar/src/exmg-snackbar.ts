import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SnackbarBase } from '@material/mwc-snackbar/mwc-snackbar-base.js';
import { accessibleSnackbarLabel } from '@material/mwc-snackbar/accessible-snackbar-label-directive.js';
import { style as newStyles } from './styles/exmg-snackbar-styles-css.js';
import { styles } from '@material/mwc-snackbar/mwc-snackbar.css.js';

@customElement('exmg-snackbar')
export class ExmgSnackbar extends SnackbarBase {
  /**
   * Sets the Snackbar variant, options from MWC
   * @type {String}
   */
  @property({ type: String })
  variant: 'positive' | 'negative' | 'info' | null = null;

  @property({ type: Number })
  xOffset: number = 0;

  @property({ type: Number })
  yOffset: number = 0;

  static styles = [styles, newStyles];

  protected override render() {
    const classes = {
      'mdc-snackbar--stacked': this.stacked,
      'mdc-snackbar--leading': this.leading,
      'mdc-snackbar--positive': this.variant === 'positive',
      'mdc-snackbar--negative': this.variant === 'negative',
      'mdc-snackbar--info': this.variant === 'info',
    };
    return html` <div
      class="mdc-snackbar ${classMap(classes)}"
      style="left:${this.xOffset}px; bottom:${this.yOffset}px;"
      @keydown="${this._handleKeydown}"
    >
      <div class="mdc-snackbar__surface">
        <slot name="icon"></slot>
        ${accessibleSnackbarLabel(this.labelText, this.open)}
        <div class="mdc-snackbar__actions">
          <slot name="action" @click="${this._handleActionClick}"></slot>
          <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-snackbar': ExmgSnackbar;
  }
}
