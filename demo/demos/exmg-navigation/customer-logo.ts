import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ColorMode, ThemeUtils } from '@exmg/exmg-theme';
import { ThemeMixin } from '@exmg/exmg-theme';

@customElement('customer-logo')
export class CustomerLogo extends ThemeMixin(LitElement) {
  /**
   * The currently selected color mode.
   */
  @state() selectedColorMode: ColorMode | null = null;

  static styles = [
    css`
      :host {
        display: block;
        margin: 1rem 1rem 0rem;
      }
    `,
  ];

  async firstUpdated() {
    if (!this.selectedColorMode) {
      this.selectedColorMode = ThemeUtils.getCurrentMode();
    }
  }

  render() {
    if (!this.selectedColorMode) return nothing;
    return html`<img src="/demo/demos/exmg-navigation/logo-small-${this.isDarkMode() ? 'dark' : 'light'}.svg" />`;
  }
}
