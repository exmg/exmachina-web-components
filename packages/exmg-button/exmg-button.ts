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
   * Whether or not the button is in loading state
   * @type {Boolean}
   */
  @property({ type: Boolean })
  elevated = true;

  /**
   * Whether or not the button is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * The URL that the link button points to.
   */
  @property() href?: string;

  /**
   * Where to display the linked `href` URL for a link button. Common options
   * include `_blank` to open in a new tab.
   */
  @property() target?: string;

  /**
   * Whether to render the icon at the inline end of the label rather than the
   * inline start.
   *
   * _Note:_ Link buttons cannot have trailing icons.
   */
  @property({ type: Boolean, attribute: 'trailing-icon' }) trailingIcon = false;

  /**
   * Whether to display the icon or not.
   */
  @property({ type: Boolean, attribute: 'has-icon' }) hasIcon = false;

  /**
   * Whether `preventDefault()` should be called on the underlying button.
   * Useful for preventing certain native functionalities like preventing form
   * submissions.
   */
  @property({ type: Boolean }) preventClickDefault = false;

  /**
   * Specifies the type of button, used for controlling forms. When type
   * is `submit`, the containing form is submitted; when it is `reset` the
   * form is reset.
   */
  @property() type: '' | 'submit' | 'reset' = '';

  static styles = [style];

  protected override render() {
    // Link buttons may not be disabled
    const isLoading = this.loading;
    const isDisabled = this.disabled && !this.href;
    // Needed for closure conformance
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
