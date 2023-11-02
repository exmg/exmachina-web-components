import { customElement } from 'lit/decorators.js';
import { MarkdownEditorElementBase } from './exmg-markdown-editor-base.js';

import { style as codeMirrorStyles } from './styles/exmg-markdown-codemirror-css.js';
import { style as markdownEditorStyles } from './styles/exmg-markdown-editor-css.js';

/**
 * Markdown WYSIWYG editor element.
 * This editor element is a wrapper element for the markdown-element which will enable editing
 * the markdown data. See [marked-element](https://www.webcomponents.org/element/PolymerElements/marked-element/)
 * for more details on how to use this element.
 *
 * ```
 * <exmg-markdown-editor markdown="# Header 1"></exmg-markdown-editor>
 * ```
 *
 * ## Custom Toolbar
 * Add attribute toolbar-buttons to adjust the toolbar buttons. The array values should match
 * the _toolbarButtons item name values.
 *
 * ```html
 * <exmg-markdown-editor toolbar-buttons='["strong","italic","strikethrough","|","quote","hr","table"]'></exmg-markdown-editor>
 * ```
 *
 * ### Styling
 *
 * The preview panel markdown output can be styled from outside th element. See the demo/styling.html example
 * on how to do this. In this demo the github-markdown-css project is used for styling the html output.
 *
 * The HTML output will we inserted into the element slot and will have a container div arround it
 * with the class preview-html:
 *
 * ```
 * <exmg-markdown-editor markdown="# Header 1">
 *  <div class="preview-body"><h1>Header 1</h1></div>
 * </exmg-markdown-editor>
 * ```
 *
 * `<exmg-markdown-editor>` provides the following custom properties and mixins
 *  for styling:
 *
 *  Custom property | Description | Default
 *  ----------------|-------------|----------
 *  `--exmg-markdown-editor-border` | Border Color | `#ddd`
 *  `--exmg-markdown-editor-background-color` | Editor Background Color | `white`
 *  `--exmg-markdown-editor-fullscreen-top-offset` | Top offset in fullscreen mode | `0px`
 *  `--exmg-markdown-editor-toolbar-background` | Toolbar background color | `#fafafa`
 *  `--exmg-markdown-editor-toolbar-label-background` | Toolbar label background color | `#fafafa`
 *  `--exmg-markdown-editor-label-color` | Toolbar text color | `54% black`
 *  `--exmg-markdown-editor-toolbar-color` | Toolbar text color | `87% black`
 *  `--exmg-markdown-editor-toolbar-color-disabled` | Toolbar text color disabled | `54% black`
 *  `--exmg-markdown-editor-preview-background` | Preview background color | `white`
 *  `--exmg-markdown-editor-toolbar-button-background-hover` | Toolbar icon border color | `#fafafa`
 *  `--exmg-markdown-editor-toolbar-seperator-color` | Toolbar seperator color | `#ddd`
 *  `--exmg-markdown-editor-code-hover` | Editor code part hover background color | `white`
 *  `--exmg-markdown-editor-code-color` | Editor code color | `black`
 *  `--exmg-markdown-editor-code-background` | Editor code background | `white`
 *
 *  # Events:
 *  - value-change - where detail is current markdown value
 *  - exmg-markdown-editor-fullscreen where detail is boolean with current fullscreen state
 *  - exmg-markdown-editor-paste-table thrown when app should display a dialog to paste Excel Table
 *  - exmg-markdown-editor-image-open when image-ext button is clicked. Can be used to insert external images
 *
 * @customElement
 * @group Exmg Core Elements
 * @element exmg-markdown-editor
 * @demo demo/index.html
 * @memberof Exmg
 * @extends ExmgElement
 * @summary Markdown editor element
 */
@customElement('exmg-markdown-editor')
export class MarkdownEditorElement extends MarkdownEditorElementBase {
  static styles = [markdownEditorStyles, codeMirrorStyles];
  override getPreviewElement() {
    const slot = this.querySelector('*[slot=preview]');
    return slot ? slot : this.shadowRoot!.querySelector('#preview');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor': MarkdownEditorElement;
  }
}
