import {TemplateResult} from 'lit';

export interface MenuItem {
  path: string;
  iconPath?: string;
  icon?: TemplateResult;
  title: string;
  badge?: number | boolean;
}

export interface MenuGroupItem {
  title: string;
  items: MenuItem[];
}

export type MenuItemOrGroupItem = MenuItem | MenuGroupItem;

export function isItemGroup(i: MenuItemOrGroupItem): i is MenuGroupItem {
  return !!(i as MenuGroupItem).items;
}
