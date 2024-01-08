# @exmg/exmg-theme

This package is designed for the easy integration and management of material theming. It offers a streamlined process to implement dynamic themes in web components.

[Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-tooltip)

## Getting Started: Installation

To incorporate @exmg/exmg-theme into your project, use the following command:

```sh
npm install @exmg/exmg-theme
```

## Example Initialisation

In your main JavaScript file, add the following snippet to initialize the theme. This setup either loads existing theme variables from local storage or generates new ones based on the specified color settings.

Default Initialisation Parameters:

```
import { initTheme } from '@exmg/exmg-theme';

initTheme({ themeColor: 'blue', colorMode: 'dark' });
```

## Modifying the Theme Color

To change the theme color dynamically, use the following code:

```
this.dispatchEvent(new ThemeChangeDarkModeEvent('light'));
```

## Responsive Theme Adjustments

React to changes in theme color or mode using the following implementation:

```
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ColorMode, ThemeUtils, ThemeMixin } from '@exmg/exmg-theme';

@customElement('customer-logo')
export class CustomerLogo extends ThemeMixin(LitElement) {
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

```
