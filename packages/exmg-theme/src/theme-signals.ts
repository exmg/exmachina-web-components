import { signal } from '@lit-labs/preact-signals';
import { ColorMode } from './types.js';

export const themeCurrentMode = signal<ColorMode>('light');
