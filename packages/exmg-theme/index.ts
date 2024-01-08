export { initTheme } from './src/index.js';
export { ThemeChangeColorEvent, ThemeChangeDarkModeEvent, ColorMode } from './src/types.js';
import {
  changeColor,
  changeColorAndMode,
  changeColorMode,
  getCurrentMode,
  getCurrentSeedColor,
  getCurrentThemeString,
  getLastSavedAutoColorMode,
  isModeDark,
} from './src/theme.js';
import { hctFromHex, hexFromHct } from './src/material-color-helpers.js';

export const ThemeUtils = {
  changeColor,
  changeColorAndMode,
  changeColorMode,
  getCurrentMode,
  getCurrentSeedColor,
  getCurrentThemeString,
  getLastSavedAutoColorMode,
  isModeDark,
  hctFromHex,
  hexFromHct,
};

export { ThemeMixin } from './src/theme-mixin.js';
export { themeCurrentMode } from './src/theme-signals.js';
