import { HTMLTemplateResult } from 'lit';

/** Toolbar Types */

export type ToolbarItem = {
  name: string;
  icon: string;
};

export type ToolbarIcons = {
  [k: string]: HTMLTemplateResult;
};

/** Editor Types */

export type MarkdownActions = {
  [key: string]: Function;
};
