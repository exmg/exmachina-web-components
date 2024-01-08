import { DEFAULT_THEME_COLOR } from './config.js';
import { applyTheme } from './material-color-helpers.js';
import { loadfromStorage } from './storage.js';

import {
  changeColor,
  changeColorAndMode,
  changeColorMode,
  getCurrentMode,
  getCurrentSeedColor,
  getCurrentThemeString,
  getLastSavedAutoColorMode,
  isModeDark,
} from './theme.js';
import { ThemeChangeColorEvent, ThemeChangeDarkModeEvent, ColorMode } from './types.js';

/**
 * Determines whether to update the theme on page navigation if the mode is
 * 'auto'.
 *
 * This is necessary in the edge case where the user has set color mode to
 * 'auto', and the system mode is A. They navigate away from the catalog, and
 * over time the system mode changes to B. When they navigate back to the
 * catalog, the mode may be 'auto', but color theme with mode A is saved instead
 * of B.
 */
function determinePageNavigationAutoMode() {
  if (getCurrentMode() !== 'auto') {
    return;
  }

  const actualColorMode = isModeDark('auto', false) ? 'dark' : 'light';
  const lastSavedAutoColorMode = getLastSavedAutoColorMode();

  if (actualColorMode !== lastSavedAutoColorMode) {
    // Recalculate auto mode with the same theme color.
    changeColorMode('auto');
  }
}

function setupListeners() {
  document.body.addEventListener('theme-change-color', (event) => {
    changeColor(event.color);
  });

  document.body.addEventListener('theme-change-mode', (event) => {
    changeColorMode(event.mode);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getCurrentMode() !== 'auto') {
      return;
    }

    changeColor(getCurrentSeedColor()!);
  });
}

// Initializes the theme by applying the theme string from localStorage.
export const initTheme = (config?: { themeColor?: string; colorMode?: ColorMode }) => {
  const { themeColor, colorMode } = config || {};
  const theme = loadfromStorage();

  // Applies the theme string to the document if available.
  if (theme) {
    applyTheme(document, theme);
  }

  setupListeners();

  if (!getCurrentThemeString()) {
    changeColorAndMode(themeColor || DEFAULT_THEME_COLOR, colorMode || 'auto');
  }

  determinePageNavigationAutoMode();
};

declare global {
  interface HTMLElementEventMap {
    'theme-change-color': ThemeChangeColorEvent;
    'theme-change-mode': ThemeChangeDarkModeEvent;
  }
}
