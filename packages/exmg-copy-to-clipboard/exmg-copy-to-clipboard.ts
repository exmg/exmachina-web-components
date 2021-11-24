import {html} from 'lit';
import {customElement, state, property, query} from 'lit/decorators.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';
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
  value?: string;

  @state()
  private isCopySupported = false;

  @state()
  protected bubbles = false;

  @query('#clipboard')
  clipboard?: HTMLElement;

  private htmlElement?: HTMLElement;

  private handleCopy: (p0: Event) => void;

  private _observer?: MutationObserver;

  static styles = [style];

  constructor() {
    super();
    this.isCopySupported = !!document.queryCommandSupported('copy');
    this.handleCopy = this.handleCopyAction.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    // Create an observer instance linked to the callback function
    this._observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
         this.addClickListener();
        }
      }
    });

    // Start observing the target node for configured mutations
    this._observer.observe(this, {attributes: true, childList: true, subtree: false});
  }

  firstUpdated() {
    this.addClickListener();
    if (!this.isCopySupported && this.htmlElement) {
      this.htmlElement.style.display = 'none';
      this.dispatchEvent(new CustomEvent('copy-not-supported', {bubbles: this.bubbles, composed: true}));
    }
  }

  disconnectedCallback() {
    this.htmlElement?.removeEventListener('click', this.handleCopy);
    this._observer?.disconnect();
    super.disconnectedCallback();
  }

  addClickListener() {
    this.htmlElement?.removeEventListener('click', this.handleCopy);
    const elements = this.querySelectorAll('*');

    this.htmlElement = elements[0] as HTMLElement;
    this.htmlElement?.addEventListener('click', this.handleCopy);
  }

  /**
   * Copy the given value to the clipboard
   */
  private copyToClipboard() {
    const clipboardNode: HTMLElement | null | undefined = this.shadowRoot ? this.clipboard : null;

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
  handleCopyAction(e: Event) {
    this.copyToClipboard();
    e.stopPropagation();
  }

  render() {
    return html`
      <slot></slot>
      <span id="clipboard">${this.value}</span>
    `;
  }
}
