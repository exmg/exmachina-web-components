import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';

import {FlattenedNodesObserver} from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import {addListener, removeListener} from '@polymer/polymer/lib/utils/gestures.js';
import {style} from './styles/exmg-copy-to-clipboard-styles-css.js';

/**
 * `<exmg-copy-to-clipboard>` Helper element to create icon/buttons that
 * lets the user copy content to the clipboard. Just wrap it arround
 * the button or icon and set the value that needs to be copied.
 *
 * ```html
 *  <exmg-copy-to-clipboard value="mark@test.com">
 *    <paper-icon-button icon="content-copy"></paper-icon-button>
 *  </exmg-copy-to-clipboard>
 * ```
 */
@customElement('exmg-copy-to-clipboard')
export class ExmgCopyToClipboard extends ExmgElement {
  @property({type: String})
  private value?: string;

  @property({type: Boolean})
  private isCopySupported = !!document.queryCommandSupported('copy');

  @property({type: Boolean})
  protected bubbles = false;

  private observer?: FlattenedNodesObserver;
  private htmlElement?: HTMLElement;

  private handleCopy: (p0: Event) => void;

  static styles = [style];

  constructor() {
    super();
    this.handleCopy = this.handleCopyAction.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.observer = new FlattenedNodesObserver(this, () => {
      this.initSlottedElement();
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    if (this.htmlElement) {
      removeListener(this.htmlElement, 'tap', this.handleCopy);
    }

    super.disconnectedCallback();
  }

  /**
   * initializes the slotted content and adds a event listener to the html element provided
   */
  private initSlottedElement(): void {
    this.htmlElement = (FlattenedNodesObserver.getFlattenedNodes(this) || []).filter((n: Node) => n.nodeType === Node.ELEMENT_NODE)[0];
    if (this.htmlElement) {
      addListener(this.htmlElement, 'tap', this.handleCopy);
    }
  }

  /**
   * Copy the given value to the clipboard
   */
  private copyToClipboard(): void {
    const clipboardNode: HTMLElement | null = this.shadowRoot ? this.shadowRoot.querySelector('#clipboard') : null;

    if (!clipboardNode) {
      return;
    }

    clipboardNode.style.display = 'block';

    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(clipboardNode);

    selection!.removeAllRanges();
    selection!.addRange(range);

    try {
      document.execCommand('copy');
      this.dispatchEvent(
        new CustomEvent('exmg-copy-to-clipboard-copied', {
          detail: this.value,
          bubbles: this.bubbles,
          composed: true,
        }),
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('copy to clipboard failed', err);
    }

    selection!.removeAllRanges();
    clipboardNode.style.display = 'none';
  }

  /**
   * Handle button tap event and trigger the actual copy to clipboard
   */
  private handleCopyAction(e: Event) {
    this.copyToClipboard();
    e.stopPropagation();
  }

  protected firstUpdated() {
    if (!this.isCopySupported && this.htmlElement) {
      this.htmlElement.style.display = 'none';
      this.dispatchEvent(new CustomEvent('copy-not-supported', {bubbles: this.bubbles, composed: true}));
    }
  }

  render() {
    return html`
      <slot></slot>
      <span id="clipboard">${this.value}</span>
    `;
  }
}
