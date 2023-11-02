import { EditorConfiguration } from 'codemirror';
import { MarkedOptions } from 'marked';

export const defaultConfiguration: EditorConfiguration = {
  mode: 'markdown',
  tabSize: 2,
  indentUnit: 2,
  indentWithTabs: true,
  lineNumbers: false,
  autofocus: false,
  lineWrapping: true,
};

export const markedConfiguration: MarkedOptions = {
  breaks: false,
  pedantic: false,
};
