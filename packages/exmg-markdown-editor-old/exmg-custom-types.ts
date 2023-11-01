// it just create better type definition than lit-element type PropertyValues

import { EditorElement } from './exmg-markdown-editor.js';

// now editor should show what kind of field names are allowed
export type GenericPropertyValues<T extends PropertyKey, V = unknown> = Map<T, V>;

export type ToolBarOption =
  | 'undo'
  | 'redo'
  | '|'
  | 'header_one'
  | 'header_two'
  | 'header_three'
  | 'strong'
  | 'italic'
  | 'strikethrough'
  | 'quote'
  | 'hr'
  | 'table'
  | 'table-paste'
  | 'code'
  | 'unordered-list'
  | 'ordered-list'
  | 'link'
  | 'image'
  | 'image-ext'
  | 'fullscreen'
  | 'split-view'
  | 'indent-in'
  | 'indent-out'
  | string;

/**
 * Object to add custom buttons to the Toolbar
 * @property name: Name of the custom item
 * @property type: Codemirror type of processed strings. Block is for some characters, line is for a line or more.
 * @property token: Artefact shown in the editor indicating the custom action. ¡Must match expected token in an extension if the block needs to be processed in HTML!
 * @property icon: Material Icon name
 * @property className: Class given to the toolbar button
 * @property title: Title of the button, will be visible
 */
export interface ToolBarConfigItem extends Object {
  name: ToolBarOption;
  type?: 'block' | 'line';
  token?: string;
  icon: string;
  className?: string;
  title: string;
}

export const isToolBarConfigItem = (item: Record<string, any>): item is ToolBarConfigItem =>
  // eslint-disable-next-line
  item.hasOwnProperty('name');

export type PrivateProps = 'toolbarButtonsConfig';

export type Props = Exclude<keyof EditorElement, number | symbol> | PrivateProps;

export type ChangedProps = GenericPropertyValues<Props>;

export interface Position {
  ch: number;
  line: number;
  sticky?: string;
}

export interface MarkdownElement extends HTMLElement {
  markdown?: string;
}

declare global {
  interface Window {
    marked: MarkdownElement;
    markdownEditorConfig?: {
      urlPlaceholder?: string;
      imagePlaceholder?: string;
      extensions?: any[];
      customToolBarButtons?: ToolBarConfigItem[];
      renderer?: unknown;
    };
  }
}
