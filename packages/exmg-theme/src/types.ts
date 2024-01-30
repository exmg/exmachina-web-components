// eslint-disable-next-line
export type WithStylesheet = typeof globalThis & { [stylesheetName: string]: CSSStyleSheet | undefined };
export type ColorMode = 'light' | 'dark' | 'auto';

/**
 * A theme mapping of token name (not custom property name) to stringified CSS
 * value.
 */
export interface Theme {
  [tokenName: string]: string;
}

/**
 * Requests the global theme listener change the theme due to a color change.
 */
export class ThemeChangeColorEvent extends Event {
  /**
   * @param color The new source color to apply.
   */
  constructor(public color: string) {
    super('theme-change-color', { bubbles: true, composed: true });
  }
}

/**
 * Requests the global theme listener change the theme due to a dark mode
 * change.
 */
export class ThemeChangeDarkModeEvent extends Event {
  /**
   * @param mode The new color mode to apply.
   */
  constructor(public mode: 'light' | 'dark' | 'auto') {
    super('theme-change-mode', { bubbles: true, composed: true });
  }
}
