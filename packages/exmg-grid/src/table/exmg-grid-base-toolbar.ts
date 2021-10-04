import {html, LitElement, TemplateResult} from 'lit';
import {property} from 'lit/decorators/property.js';
import {customElement} from 'lit/decorators/custom-element.js';
import {style} from '../styles/exmg-grid-base-toolbar-styles-css.js';

/**
 * ### Styling
 * The following custom properties  are available for styling:
 *
 */
@customElement('exmg-grid-base-toolbar')
export class ExmgGridBaseToolbar extends LitElement {
  static styles = [style];

  @property({type: Number})
  private actionsCount = 0;

  @property({type: Number})
  private settingsCount = 0;

  @property({type: Boolean, reflect: true})
  private active = false;

  @property({type: Boolean})
  disableSeperator = false;

  private observer?: MutationObserver;

  private getChildElementCount(selector: string): number {
    const element = this.querySelector(selector);
    return element ? element.childElementCount : 0;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.observer = new MutationObserver((mutationsList) => {
      setTimeout(() => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            this.actionsCount = this.getChildElementCount('div[slot=actions]');
            this.settingsCount = this.getChildElementCount('div[slot=settings]');
            this.active = this.actionsCount > 0;
          }
        }
      }, 60);
    });

    this.actionsCount = this.getChildElementCount('div[slot=actions]');
    this.settingsCount = this.getChildElementCount('div[slot=settings]');
    this.active = this.actionsCount > 0;
    this.observer!.observe(this, {attributes: false, childList: true, subtree: true});
  }

  disconnectedCallback(): void {
    this.observer!.disconnect();
  }

  render(): TemplateResult {
    return html`
      <div class="wrapper ${this.active ? 'active' : ''}">
        ${this.actionsCount > 0
          ? html`
              <div class="actions">
                <slot name="actions"></slot>
              </div>
            `
          : ''}
        <div class="seperator ${this.actionsCount > 0 && !this.disableSeperator ? 'with-action-separator' : ''}">&nbsp;</div>
        <div class="description">
          <slot name="description"></slot>
        </div>
        <div class="filters">
          <slot name="filters"></slot>
        </div>
        <div class="settings ${this.settingsCount > 0 ? 'has-settings' : ''}">
          <slot name="settings"></slot>
        </div>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    `;
  }
}
