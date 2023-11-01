import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { ExmgDialogUpload } from '@exmg/exmg-upload/exmg-dialog-upload.js';
import { MarkdownEditorElement } from '@exmg/exmg-markdown-editor/src/exmg-markdown-editor.js';
import demoStyles from './demo-common-css.js';

import './exmg-markdown-editor-custom-demo.js'

import '@exmg/exmg-markdown-editor/src/exmg-markdown-editor.js';
import '@exmg/exmg-upload/exmg-dialog-upload.js';
import '@exmg/exmg-upload/exmg-upload.js';

@customElement('exmg-markdown-editor-demo')
export class DemoSimpleGridTable extends LitElement {
  styles = [demoStyles];

  @query('exmg-dialog-upload') imageUploadDialog?: ExmgDialogUpload;
  @query('#upload') uploadImageMardown?: MarkdownEditorElement;

  markdown = `
# Markdown syntax guide

## Headers	

# This is a Heading h1
## This is a Heading h2
### This is a Heading h3

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](http://placekitten.com/g/200/300 "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Center columns | Right columns |
| ------------- |:-------------: |--------------:|
| left foo      | right foo      | right foo     |
| left bar      | right bar      | right foo     |
| left baz      | right baz      | right foo     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`;

  handleImageUpload() {
    if (this.imageUploadDialog) {
      this.imageUploadDialog.toggleShow();
    }
  }

  handleDialogError (e: CustomEvent) {
    console.log('Errr', e);

  }

  handleDialogSubmit (e: CustomEvent) {
    this.uploadImageMardown && this.uploadImageMardown.handleInsertImage(e.detail.url);
    this.imageUploadDialog && this.imageUploadDialog.toggleShow();
  }

  protected render() {
    return html`
      <div class="centered">
        <h1>Markdown Editor</h1>
        <exmg-markdown-editor markdown=${this.markdown}></exmg-markdown-editor>
      </div>
      <div class="centered">
        <h1>Markdown Editor with custom CSS for rendered HTML</h1>
        <exmg-markdown-editor markdown=${this.markdown}>
          <div slot="preview"></div>
        </exmg-markdown-editor>
      </div>
      <div class="centered">
        <h1>Markdown Editor with custom image upload</h1>
        <exmg-markdown-editor id="upload" upload markdown=${this.markdown} @insert-image=${this.handleImageUpload}>
        </exmg-markdown-editor>
        <exmg-dialog-upload @dialog-error=${this.handleDialogError} @dialog-submit=${this.handleDialogSubmit}>
          <exmg-upload maxSize="1mb" accept=".jpg,.jpeg,.png,.webp,.svg" serverType="local" allowCropping></exmg-upload>
        </exmg-dialog-upload>
      </div>
      <div class="centered">
        <h1>Markdown Editor with custom actions and toolbar</h1>
        <exmg-markdown-editor-custom-demo markdown=${`${'-- Underline --'}\n${this.markdown}`}>
        </exmg-markdown-editor-custom-demo>
      </div>
    `;
  }
}
