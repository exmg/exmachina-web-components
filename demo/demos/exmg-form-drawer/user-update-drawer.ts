import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ExmgFormDrawer } from '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import { FormDrawerBase } from './form-drawer-base.js';
import { EditorElement } from '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';

interface UserData {
  from: string;
  fromName: string;
  replyTo: string;
  subject: string;
  contentHtml: string;
  contentPlain: string;
}

export const itemValue = <T>(prop: T | null | undefined, propertName: keyof T): unknown => {
  return prop ? (prop[propertName] !== undefined && prop[propertName] !== null ? prop[propertName] : '') : '';
};

@customElement('user-update-drawer')
export class UserUpdateDrawer extends FormDrawerBase<UserData> {
  @property({ type: String, attribute: 'update-title' })
  updateTitle = 'Update User';

  @query('#markdownEditor')
  markdownEditor?: EditorElement;

  itemChanged() {
    // eslint-disable-next-line no-console
    console.log('item changed');
  }

  openChanged(opened: boolean) {
    setTimeout(() => opened && this.markdownEditor!.refresh(), 0);
  }

  async updateItem(e: CustomEvent<UserData>): Promise<void> {
    const target = e.target as ExmgFormDrawer;

    try {
      console.log('payload', e.detail);
      this.fire('update-user');

      target.done();
    } catch (error) {
      // @ts-ignore
      target.error(`${error.message}`);
    }
  }

  render() {
    return this.renderDrawer(html`
      <paper-input
        name="from"
        label="From *"
        value=${itemValue(this.item, 'from')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="fromName"
        label="From Name *"
        value=${itemValue(this.item, 'fromName')}
        required
        auto-validate
      ></paper-input>

      <exmg-markdown-editor
        id="markdownEditor"
        name="markdownContentBody"
        split-view
        show-helper-label
        height="340"
        .markdown=${this.item!.fromName}
      ></exmg-markdown-editor>

      <paper-input
        name="replyTo"
        label="Reply To *"
        value=${itemValue(this.item, 'replyTo')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="subject"
        label="Subject *"
        value=${itemValue(this.item, 'subject')}
        required
        auto-validate
      ></paper-input>
      <paper-input
        name="from"
        label="From *"
        value=${itemValue(this.item, 'from')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="fromName"
        label="From Name *"
        value=${itemValue(this.item, 'fromName')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="replyTo"
        label="Reply To *"
        value=${itemValue(this.item, 'replyTo')}
        required
        auto-validate
      ></paper-input>

      <paper-input
        name="subject"
        label="Subject *"
        value=${itemValue(this.item, 'subject')}
        required
        auto-validate
      ></paper-input>
      <paper-textarea
        name="contentHtml"
        label="Html Content *"
        value=${itemValue(this.item, 'contentHtml')}
        rows="6"
        required
        auto-validate
      ></paper-textarea>

      <paper-textarea
        name="contentPlain"
        label="Text Content"
        value=${itemValue(this.item, 'contentPlain')}
        rows="6"
      ></paper-textarea>
      <paper-textarea
        name="contentHtml"
        label="Html Content *"
        value=${itemValue(this.item, 'contentHtml')}
        rows="6"
        required
        auto-validate
      ></paper-textarea>

      <paper-textarea
        name="contentPlain"
        label="Text Content"
        value=${itemValue(this.item, 'contentPlain')}
        rows="6"
      ></paper-textarea>
    `);
  }
}
