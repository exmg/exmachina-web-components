import { html, nothing } from 'lit';
import { property } from 'lit/decorators/property.js';
import { MdFilledButton } from '@material/web/button/filled-button.js';
import '@material/web/circularprogress/circular-progress.js';

export class ExmgFilledButtonBase extends MdFilledButton {
  /**
   * Whether or not the button is in loading state
   * @type {Boolean}
   */
  @property({ type: Boolean, reflect: true }) loading = false;

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
   * Specifies the type of button, used for controlling forms. When type
   * is `submit`, the containing form is submitted; when it is `reset` the
   * form is reset.
   */
  @property() type: '' | 'submit' | 'reset' = '';

  protected override render() {
    const { loading, disabled, type, target, href } = this;

    return html`
      <md-filled-button .disabled=${disabled} .type=${type} .href=${href} .target=${target} loading=${loading}>
        <slot class="label"></slot>
        ${loading ? html`<md-circular-progress indeterminate></md-circular-progress>` : nothing}
      </md-filled-button>
    `;
  }
}
