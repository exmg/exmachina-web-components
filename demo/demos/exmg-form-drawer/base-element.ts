import { LitElement } from 'lit';

export class BaseElement extends LitElement {
  protected bubbles = false;

  protected fire<T>(eventName: string, detail?: T, bubbles?: boolean) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: bubbles || this.bubbles,
        composed: true,
        detail,
      }),
    );
  }
}
