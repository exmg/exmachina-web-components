import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import { ColorMode, ThemeUtils, ThemeChangeDarkModeEvent } from '@exmg/exmg-theme';

@customElement('dark-light-toggle')
export class DarkLightToggle extends LitElement {
  /**
   * The currently selected color mode.
   */
  @state() selectedColorMode: ColorMode | null = null;

  static styles = [
    css`
      :host {
        display: block;
        margin: 1rem auto;
      }

      md-icon-button {
        outline: 1px solid var(--md-sys-color-outline);
        border-radius: 50%;
      }
    `,
  ];

  async firstUpdated() {
    if (!this.selectedColorMode) {
      this.selectedColorMode = ThemeUtils.getCurrentMode();
    }
  }

  private onColorModeSelection() {
    this.selectedColorMode = this.selectedColorMode === 'dark' ? 'light' : 'dark';
    this.dispatchEvent(new ThemeChangeDarkModeEvent(this.selectedColorMode));
  }

  render() {
    return html`
      <md-icon-button @click=${this.onColorModeSelection} data-value="light"
        ><md-icon>${this.selectedColorMode === 'dark' ? 'light_mode' : 'dark_mode'}</md-icon></md-icon-button
      >
    `;
  }
}
