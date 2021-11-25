import {html} from 'lit';
import {property, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';

import {arrowSeparator} from './exmg-breadcrumbs-icons.js';
import {BreadcrumbItem} from './types.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';

type GenericPropertyValues<T, V = unknown> = Map<T, V>;
type Props = Exclude<keyof ExmgBreadcrumbsBase, number | symbol>;

type SmartPropertyValue = GenericPropertyValues<Props>;

export class ExmgBreadcrumbsBase extends ExmgElement {
  @property({type: Array})
  items: BreadcrumbItem[] = [];

  @property({type: Number})
  limit?: number;

  /**
   * If true then css var `--breadcrumbs-item-separator-background-url` should be provided. It will be set as
   * background image of separator.
   */
  @property({type: Boolean, attribute: 'has-custom-separator', reflect: true})
  hasCustomSeparator?: boolean;

  @property({type: String, attribute: 'separator-text'})
  separatorText?: string;

  @state()
  private preparedItems?: BreadcrumbItem[] = [];

  private renderSeparator(currentIndex: number, lastIndex: number) {
    if (currentIndex === lastIndex) {
      return null;
    }

    if (this.hasCustomSeparator) {
      return html`
        <span class="separator"></span>
      `;
    }

    return html`
      <span class="separator">${this.separatorText || arrowSeparator}</span>
    `;
  }

  protected renderItems() {
    const lastIndex = this.preparedItems!.length - 1;
    return repeat(
      this.preparedItems!,
      ({href, content}) => `${href}${content}`,
      ({href, content, disabled, selected}, index) => {
        return html`
          <div class="breadcrumb-item">
            <a href=${href} ?inactive="${!selected}" ?disabled="${disabled}">${content}</a>
            ${this.renderSeparator(index, lastIndex)}
          </div>
        `;
      },
    );
  }

  protected prepareItems(): void {
    let preparedItems = this.items.map((item) => {
      const {href, disabled} = item;
      const isDisabled = !href || !!disabled;

      return {
        ...item,
        href: isDisabled ? 'javascript:void(0);' : href,
        disabled: isDisabled,
      };
    });

    if (this.limit && this.limit < preparedItems.length) {
      const headLength = Math.floor(this.limit / 2);
      const tailLength = this.limit - headLength;
      preparedItems = preparedItems.filter((_, index: number) => index < headLength || index > tailLength);
    }

    this.preparedItems = preparedItems;
  }

  update(changedProperties: SmartPropertyValue) {
    if (changedProperties.has('items') || changedProperties.has('limit')) {
      this.prepareItems();
    }

    super.update(changedProperties);
  }

  render() {
    return html`
      <div class="container">
        ${this.renderItems()}
      </div>
    `;
  }
}
