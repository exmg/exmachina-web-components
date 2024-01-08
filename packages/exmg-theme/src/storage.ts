import { STORAGE_KEY_THEME } from './config.js';

// Load the theme string from localStorage.
const loadfromStorage = () => {
  const theme = localStorage.getItem(STORAGE_KEY_THEME);
  return theme;
};

// Saves the theme string to localStorage.
const saveToStorage = (theme: string) => {
  localStorage.setItem(STORAGE_KEY_THEME, theme);
};

export { loadfromStorage, saveToStorage };
