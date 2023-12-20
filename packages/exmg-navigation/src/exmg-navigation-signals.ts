import { signal } from '@lit-labs/preact-signals';

export const navigationItemHover = signal(false);
export const navigationDrawerHover = signal(false);
export const navigationDrawerOpen = signal(false);
export const navigationActiveHasSubmenu = signal<{ [k: string]: boolean }>({});
export const navigationRailSelected = signal<string | null>(null);
export const navigationSubSelected = signal<string | null>(null);
export const navigationRailActive = signal<string | null>(null);
export const navigationRailHidden = signal(false);
export const navigationDrawerPersistent = signal(false);
