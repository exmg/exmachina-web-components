import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@polymer/neon-animation/animations/slide-from-right-animation.js';
import '@polymer/neon-animation/animations/slide-right-animation.js';
import '@polymer/paper-dialog/paper-dialog.js';
import { style } from './styles/exmg-drawer-styles-css.js';

/**
 * ### Styling
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--exmg-drawer-max-width` | max width of drawer | `max width from style attribute or 547px`
 * `--exmg-drawer-color` | drawer text color | `var(--mdc-theme-on-surface, #02182b))`
 * `--exmg-drawer-bg-color` | drawer background color | `var(--mdc-theme-surface, #ffffff))`
 */
@customElement('exmg-drawer')
export class ExmgDrawer extends LitElement {
  /**
   * The opened state of the drawer
   * @type {Boolean}
   */
  @property({ type: Boolean })
  opened = false;

  /**
   * Prevent cancel on outside click or not
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'no-cancel-on-outside-click' })
  noCancelOnOutsideClick = false;

  /**
   * Scroll action of the drawer
   * @type {'lock' | 'refit' | 'cancel' | undefined}
   */
  @property({ type: String, attribute: 'scroll-action' })
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

  handleOpenedChanged(e: CustomEvent) {
    this.opened = e.detail.value;

    this.dispatchEvent(
      new CustomEvent('exmg-drawer-opened-changed', {
        bubbles: true,
        composed: true,
        detail: {
          value: e.detail.value,
        },
      }),
    );
  }

  openDialog() {
    this.opened = true;
  }

  static styles = [style];

  render() {
    return html`
      <style>
        paper-dialog {
          max-width: var(--exmg-drawer-max-width, ${this.style.maxWidth || '547px'});
        }
      </style>
      <paper-dialog
        scroll-action=${ifDefined(this.scrollAction)}
        ?opened="${this.opened}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        @opened-changed="${this.handleOpenedChanged}"
        entry-animation="slide-from-right-animation"
        exit-animation="slide-right-animation"
        with-backdrop
      >
        <slot></slot>
      </paper-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-drawer': ExmgDrawer;
  }
}
