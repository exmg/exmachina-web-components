import { Editor, KeyMap } from 'codemirror';
import { ToolBarConfigItem, ToolBarOption } from './exmg-custom-types.js';

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
      // eslint-disable-next-line
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

export const defaultToolBarConfig: ToolBarConfigItem[] = [
  {
    name: 'undo',
    icon: 'undo',
    className: 'btn-undo',
    title: 'Undo',
  },
  {
    name: 'redo',
    icon: 'redo',
    className: 'btn-redo',
    title: 'Redo',
  },
  {
    name: 'header_one',
    icon: 'exmg-markdown-editor-icons:header-one',
    type: 'line',
    token: '#',
    className: 'btn-header',
    title: 'Header 1',
  },
  {
    name: 'header_two',
    icon: 'exmg-markdown-editor-icons:header-two',
    type: 'line',
    token: '##',
    className: 'btn-header',
    title: 'Header 2',
  },
  {
    name: 'header_three',
    icon: 'exmg-markdown-editor-icons:header-three',
    type: 'line',
    token: '###',
    className: 'btn-header',
    title: 'Header 3',
  },
  {
    name: 'strong',
    icon: 'format_bold',
    type: 'block',
    token: '**',
    className: 'btn-bold',
    title: 'Bold',
  },
  {
    name: 'italic',
    icon: 'format_italic',
    type: 'block',
    token: '*',
    className: 'btn-italic',
    title: 'Italic',
  },
  {
    name: 'strikethrough',
    icon: 'format_strikethrough',
    type: 'block',
    token: '~~',
    className: 'btn-strikethrough',
    title: 'Strikethrough',
  },
  {
    name: 'indent-in',
    icon: 'format_indent_increase',
    type: 'line',
    token: '>',
    className: 'btn-indent-in',
    title: 'Indent increase',
  },
  {
    name: 'indent-out',
    icon: 'format_indent_decrease',
    type: 'line',
    token: '>',
    className: 'btn-indent-out',
    title: 'Indent decrease',
  },
  {
    name: 'quote',
    icon: 'format_quote',
    type: 'line',
    token: '>',
    className: 'btn-quote-left',
    title: 'Quote',
  },
  {
    name: 'hr',
    icon: 'horizontal_rule',
    className: 'btn-horizontal-rule',
    title: 'Horizontal Rule',
  },
  {
    name: 'code',
    icon: 'code',
    className: 'btn-code',
    title: 'Code',
  },
  {
    name: 'table',
    icon: 'grid_on',
    className: 'btn-table',
    title: 'Table',
  },
  {
    name: 'table-paste',
    icon: 'table_view',
    className: 'btn-table-paste',
    title: 'Paste Table',
  },
  {
    name: 'link',
    icon: 'link',
    className: 'btn-link',
    title: 'Link',
  },
  {
    name: 'image',
    icon: 'image',
    className: 'btn-image',
    title: 'Image',
  },
  {
    name: 'image-ext',
    icon: 'image',
    className: 'btn-image',
    title: 'Image',
  },
  {
    name: 'unordered-list',
    icon: 'format_list_bulleted',
    type: 'line',
    token: '*',
    className: 'btn-list-ul',
    title: 'Generic List',
  },
  {
    name: 'ordered-list',
    icon: 'format_list_numbered',
    className: 'btn-list-ol',
    title: 'Numbered List',
  },
  {
    name: 'fullscreen',
    icon: 'fullscreen',
    className: 'btn-fullscreen',
    title: 'Fullscreen',
  },
  {
    name: 'split-view',
    icon: 'exmg-markdown-editor-icons:chrome-reader-mode',
    className: 'btn-split-view',
    title: 'Split View',
  },
];
