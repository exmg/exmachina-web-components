import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';

import { BreadcrumbItem } from './types.js';
import { ExmgElement } from '@exmg/lit-base/index.js';

export const arrowSeparator = html`
  <svg height="24" viewBox="0 0 24 24" width="24" preserveAspectRatio="xMidYMid meet">
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
  </svg>
`;

export class ExmgBreadcrumbsBase extends ExmgElement {
  /**
   * The items displayed by the breadcrumbs
   * @type {Array}
   */
  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  /**
   * Whether or not to display the arrow seperator
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'arrow-separator', reflect: true })
  arrowSeperator = false;

  protected renderItems() {
    const lastIndex = this.items?.length - 1;
    return repeat(
      this.items || [],
      ({ href, content }) => `${href}${content}`,
      ({ href, content }, index) => {
        return html`
          <li class="${classMap({ arrowSeperator: this.arrowSeperator })}">
            <a href=${href} aria-current=${index === lastIndex ? 'page' : 'false'}>${content}</a>
            ${this.arrowSeperator && index !== lastIndex ? arrowSeparator : nothing}
          </li>
        `;
      },
    );
  }

  render() {
    return html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol>
          ${this.renderItems()}
        </ol>
      </nav>
    `;
  }
}
