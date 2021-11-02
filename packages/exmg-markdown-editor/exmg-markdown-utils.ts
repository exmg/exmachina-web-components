import {Editor, KeyMap} from 'codemirror';
import {ToolBarOption} from './exmg-custom-types.js';

const isMac = /Mac/.test(navigator.platform);
export const convertShortcut = (name: string): string => {
  return isMac ? name : name.replace('Cmd', 'Ctrl');
};
export const insertBlocks = {
  hr: '---',
  link: (text?: string): string =>
    `[${text !== '' ? text : 'Link description'}](${
      (window.markdownEditorConfig && window.markdownEditorConfig.urlPlaceholder) || 'https://www.exmachinagroup.com/'
    })`,
  image: (text?: string): string =>
    `![${text !== '' ? text : 'Image'}](${
      (window.markdownEditorConfig && window.markdownEditorConfig.imagePlaceholder) ||
      'https://pbs.twimg.com/profile_images/748525267153477632/5BistsD7_400x400.jpg'
    })`,
  table: '| Column 1 | Column 2 |\n| -------- | -------- |\n| Text     | Text     |',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const debounce = (time: number) => {
  let timer: number;

  return (cb?: unknown): void => {
    clearTimeout(timer);
    if (cb) {
      timer = window.setTimeout(cb as TimerHandler, time);
    }
  };
};

export const ENTER_KEY_CODE = 13;

/* initialize key map */
export const KEY_MAPS: KeyMap = {
  Tab: (codeMirror: Editor) => {
    const ranges = codeMirror.getDoc().listSelections();
    const pos = ranges[0].head;
    const eolState = codeMirror.getStateAfter(pos.line);
    const inList = eolState.list !== false;

    if (inList) {
      codeMirror.execCommand('indentMore');
      return;
    }

    if (codeMirror.getOption('indentWithTabs')) {
      codeMirror.execCommand('insertTab');
    } else {
      const tabSize = codeMirror!.getOption('tabSize') || 2;
      const spaces = Array(tabSize + 1).join(' ');
      codeMirror.getDoc().replaceSelection(spaces);
    }
  },
  'Shift-Tab': (codeMirror: Editor) => {
    const ranges = codeMirror.getDoc().listSelections();
    const pos = ranges[0].head;
    const eolState = codeMirror.getStateAfter(pos.line);
    const inList = eolState.list !== false;

    if (codeMirror && inList) {
      codeMirror.execCommand('indentLess');
      return;
    }

    if (codeMirror.getOption('indentWithTabs')) {
      codeMirror.execCommand('insertTab');
    } else {
      const tabSize = codeMirror!.getOption('tabSize') || 2;
      const spaces = Array(tabSize + 1).join(' ');
      codeMirror.getDoc().replaceSelection(spaces);
    }
  },
};

export const SHORTCUTS = {
  undo: 'Cmd-Z',
  redo: 'Cmd-Y',
  strong: 'Cmd-B',
  italic: 'Cmd-I',
  quote: "Cmd-'",
  'unordered-list': 'Cmd-Alt-L',
  'ordered-list': 'Cmd-L',
  'split-view': 'F9',
  fullscreen: 'F11',
};

export const DEFAULT_TOOLBAR_OPTIONS: ToolBarOption[] = [
  'undo',
  'redo',
  '|',
  'header_one',
  'header_two',
  'header_three',
  'strong',
  'italic',
  'strikethrough',
  '|',
  'link',
  'image',
  '|',
  'quote',
  'hr',
  'table',
  'table-paste',
  'code',
  '|',
  'unordered-list',
  'ordered-list',
  '|',
  'fullscreen',
  'split-view',
];
