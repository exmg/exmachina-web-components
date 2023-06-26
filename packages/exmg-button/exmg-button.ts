import { html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { MdFilledButton } from '@material/web/button/filled-button.js';
import '@material/web/circularprogress/circular-progress.js';
import { style } from './styles/exmg-button-styles-css.js';
/**
 * exmg-button
 *
 * Material button including loading (spinner) animation when loading attribute is set to element.
 * This button extends the material @material/mwc-button.
 *
 * @customElement exmg-button
 * @extends ButtonBase
 */
@customElement('exmg-button')
export class ExmgButton extends MdFilledButton {
  /**
   * Whether or not the button is in loading state
   * @type {Boolean}
   */
  @property({ type: Boolean })
  loading = false;

  /**
   * Whether or not the button is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  static styles = [style];

  protected override render() {
    const isLoading = this.loading;
    const isDisabled = this.disabled;
    return html`
      <md-filled-button ?disabled=${isDisabled}>
        ${isLoading ? html` <md-circular-progress indeterminate></md-circular-progress>` : html`<slot></slot>`}
      </md-filled-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-button': ExmgButton;
  }
}
