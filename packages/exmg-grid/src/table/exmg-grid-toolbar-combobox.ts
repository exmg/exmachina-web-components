import { html, css } from 'lit';
import { ExmgElement } from '@exmg/lit-base/index.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@polymer/paper-listbox/paper-listbox.js';
import '@material/mwc-icon-button/mwc-icon-button.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import { IronDropdownElement } from '@polymer/iron-dropdown/iron-dropdown.js';

import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-input/paper-input-error.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input-container.js';
import '@polymer/paper-styles/paper-styles.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

import { PaperListboxElement } from '@polymer/paper-listbox/paper-listbox.js';

const copyElementStyle = (source: HTMLElement, target: HTMLElement) => {
  const computedStyle = window.getComputedStyle(source, null);
  Array.from(computedStyle).forEach((key) =>
    target.style.setProperty(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key)),
  );
};
type GenericPropertyValues<T, V = unknown> = Map<T, V>;

interface Token {
  id: number | string;
  text: string;
}

export interface EventSelectPayload {
  value: number | string;
  item: Element;
  token: Token;
}

type PrivateProps = 'inputValue' | 'selectedValue';
type Props = Exclude<keyof PaperGridTooolbarComboboxElement, number | symbol> | PrivateProps;

type ChangedProps = GenericPropertyValues<Props>;

const BACKSPACE = 8;
const ARROW_DOWN = 40;
const DELETE = 127;
const ESC = 27;
const ENTER_KEY_CODE = 13;

const debounce = (time: number) => {
  let timer: number;

  // eslint-disable-next-line @typescript-eslint/ban-types
  return (cb?: Function) => {
    clearTimeout(timer);
    if (cb) {
      timer = window.setTimeout(cb, time);
    }
  };
};

@customElement('exmg-grid-toolbar-combobox')
export class PaperGridTooolbarComboboxElement extends ExmgElement {
  /**
   * If you want to use an attribute value or property of an element for
   * `selected` instead of the index, set this to the name of the attribute
   * or property. Hyphenated values are converted to camel case when used to
   * look up the property of a selectable element. Camel cased values are
   * *not* converted to hyphenated values for attribute lookup. It's
   * recommended that you provide the hyphenated form of the name so that
   * selection works in both cases. (Use `attr-or-property-name` instead of
   * `attrOrPropertyName`.)
   */
  @property({ type: String, attribute: 'attr-for-selected' }) attrForSelected = '';

  /**
   * By default the textContent of the paper-item/paper-icon-item or paper-item-body
   * will be used for display in badge after selection. In case of icon and body
   * you probably want an alternative. The selector can be used to be a bit more
   * specific on which element can be used for display purposes.
   */
  @property({ type: String, attribute: 'selected-item-selector' }) selectedItemSelector?: string;

  /**
   * Returns currently selected item.
   * @type {?Object}
   */
  @property({ type: Object, attribute: 'selected-item' })
  selectedItem?: Element;

  /**
   * Gets or sets the selected element. The default is to use the index of the item.
   * @type {string|number}
   */
  @property({ type: String })
  selected?: string | number;

  /**
   * Set custom max width of menu list with items
   * @type {number}
   */
  @property({ type: Number, attribute: 'max-width-menu-list' })
  maxWidthMenuList = 200;

  @state()
  private selectedValue?: string | number;

  /**
   * The label for this input.
   */
  @property({ type: String }) label?: string;

  /**
   * Set to true to auto-validate the input value.
   */
  @property({ type: Boolean, attribute: 'auto-validate' })
  autoValidate = false;

  @property({ type: Boolean })
  autofocus = false;

  /**
   * Set to true to disable this input.
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * The error message to display when the input is invalid.
   */
  @property({ type: String, attribute: 'error-message' })
  errorMessage?: string = '';

  @property({ type: Boolean, attribute: 'always-float-label' })
  alwaysFloatLabel = false;

  /**
   * Set to true to mark the input as required. If you're using PaperInputBehavior to
   * implement your own paper-input-like element, bind this to
   * the `<input is="iron-input">`'s `required` property.
   */
  @property({ type: Boolean }) required = false;

  @property({ type: String }) name?: string;

  /**
   * This field will be bind to the actual input field.
   */
  @property({ type: String, attribute: 'input-value' })
  inputValue = '';

  @state()
  private token?: Token;

  /**
   * Invalid is true if validation fails and is passed on.
   */
  @property({ type: Boolean })
  invalid = false;

  /**
   * Focus input field if value has been set on element.
   */
  @property({ type: Boolean, attribute: 'input-focused' })
  inputFocused = false;

  @property({ type: Boolean, attribute: 'no-float-label' })
  noFloatLabel = false;

  /**
   * Is menu button state open
   */
  @property({ type: Boolean })
  opened = false;

  @property({ type: Boolean, attribute: 'dynamic-align' })
  dynamicAlign = false;

  @property({ type: String, attribute: 'horizontal-align' })
  horizontalAlign = 'right';

  @property({ type: String, attribute: 'vertical-align' })
  verticalAlign = 'top';

  @property({ type: String, attribute: 'vertical-offset' })
  verticalOffset = '4';

  @property({ type: String, attribute: 'horizontal-offset' })
  horizontalOffset = '4';

  @query('#listbox')
  private listBox?: PaperListboxElement;

  @query('#inputValue')
  private inputElement?: HTMLInputElement;

  @query('#inputWidthHelper')
  private inputWidthHelperElement?: HTMLElement;

  @query('#menu')
  private menuElement?: IronDropdownElement;

  private previousInsideClick = false;

  private ignoreFocus = false;

  private isAnyItemActive = true;

  private isElementInitialized = false;

  // eslint-disable-next-line @typescript-eslint/ban-types
  private readonly observers: { [K in Props]?: Function } = this.getObservers();

  // eslint-disable-next-line @typescript-eslint/ban-types
  private readonly keyDownBackspaceDebounce: (cb?: Function) => void = debounce(200);

  // eslint-disable-next-line @typescript-eslint/ban-types
  private readonly inputChangeDebounce: (cb?: Function) => void = debounce(300);

  private _onKeyUp: any;
  private _onClick: any;
  private _onIronResize: any;

  static styles = [
    css`
      :host {
        display: block;
        min-width: 167px;
        padding-left: 8px;
        background-color: var(--exmg-paper-combobox-background-color);
        --paper-button-color: var(--exmg-paper-combobox-selected-item-color, #000);
        --paper-button-bg-color: var(--exmg-paper-combobox-selected-item-bg-color, #fff);
        --paper-listbox-color: var(--exmg-paper-combobox-dropdown-list-color, #000);
        --paper-listbox-background-color: var(--exmg-paper-combobox-dropdown-list-bg-color, #fff);
      }
      mwc-icon-button {
        color: var(--primary-color, #000);
        background-color: var(--paper-icon-button-ink-bg-color);
      }
      :host([focused]) {
        outline: none;
      }
      :host([hidden]) {
        display: none !important;
      }
      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      paper-input-container {
        flex: 1;
        flex-basis: 0.000000001px;
        box-sizing: border-box;
      }
      .tokens {
        margin-right: 6px;
        min-height: 24px;
        position: relative;
        width: 100%;
        white-space: nowrap;
      }
      .tokens paper-button {
        margin: 0;
        padding: 0 4px;
        height: 22px;
        font-size: 16px;
        min-width: initial;
        max-width: 100%;
      }
      .tokens paper-button span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tokens.selected input {
        color: transparent;
        width: 1px !important;
      }
      #inputValue {
        font: inherit;
        outline: none;
        box-shadow: none;
        background: transparent;
        border: none;
        width: auto;
        max-width: 100%;
      }
      paper-button {
        padding: 0;
        color: var(--paper-button-color);
        background-color: var(--paper-button-bg-color);
        text-transform: capitalize;
      }
      .container {
        flex: 1;
        flex-basis: 0.000000001px;
      }
      iron-input {
        line-height: 22px;
      }
      iron-dropdown {
        box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));
        max-width: var(--exmg-paper-combobox-dropdown-list-max-width, 400px);
      }
    `,
  ];

  constructor() {
    super();
    this._onKeyUp = this.onKeyUp.bind(this);
    this._onClick = this.onClick.bind(this);
    this._onIronResize = this.onIronResize.bind(this);
  }

  get value(): string | number | undefined {
    return this.selected;
  }

  set value(value: string | number | undefined) {
    this.selected = value;
  }

  /** *************** OBSERVERS *******************/

  /**
   * Register observed properties and actions to perform
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  private getObservers(): { [K in Props]?: Function } {
    return {
      inputValue: () => this.observeInputChange(),
      selectedItem: () => this.observeSelectedItem(),
      selectedValue: () => this.observeSelectedValue(),
      selected: () => this.observeSelected(),
    };
  }

  private executeObservers(changedProperties: ChangedProps) {
    Object.entries(this.observers).forEach(([key, cb]) => {
      if (cb && changedProperties.has(key as Props)) {
        cb(changedProperties);
      }
    });
  }

  private observeInputChange() {
    if (this.inputElement && this.inputWidthHelperElement) {
      this.inputElement.style.width = `${this.inputWidthHelperElement.offsetWidth + 10}px`;
    }

    if (!this.isElementInitialized) {
      this.isAnyItemActive = this.filterItems();
    }

    if (this.isElementInitialized && this.menuElement) {
      this.inputChangeDebounce(() => {
        this.isAnyItemActive = this.filterItems();
        this.onIronResize();

        afterNextRender(this, () => this.menuElement!.notifyResize());

        if (!this.menuElement!.opened && this.isAnyItemActive && !!this.inputValue) {
          this.menuElement!.open();

          afterNextRender(this, () => this.focus());
        } else if (this.menuElement!.opened && !this.isAnyItemActive) {
          this.menuElement!.close();
        }
      });
    }
  }

  private observeSelectedValue() {
    this.selected = this.selectedValue;
  }

  private observeSelected() {
    if (this.selectedValue !== this.selected) {
      this.ignoreFocus = true;
    }

    this.selectedValue = this.selected;
  }

  private observeSelectedItem() {
    if (!this.selectedItem) {
      this.token = undefined;
      return;
    }
    const id = this.getSelectedItemKey(this.selectedItem);
    if (typeof id === 'undefined') {
      this.selectedValue = undefined;
      this.selectedItem = undefined;
      this.token = undefined;
      return;
    }

    const content: Element | null = this.selectedItemSelector
      ? this.selectedItem.querySelector(this.selectedItemSelector)
      : this.selectedItem;

    const text = (content && content.textContent) || '';

    this.token = { id, text };
  }

  /**
   * Opens the combo-box.
   */
  open() {
    this.opened = true;
  }

  /**
   * Closes the combo-box.
   */
  close() {
    this.opened = false;
  }

  /**
   * Toggles the combo-box/
   */
  toggle() {
    this.opened = !this.opened;
  }

  filterItems() {
    // eslint-disable-next-line
    const items: NodeListOf<HTMLElement> = this.querySelectorAll('paper-item, paper-icon-item');
    const hasFilterPhrase = !!this.inputValue && this.inputValue.length > 0;
    const phrase = hasFilterPhrase ? this.inputValue.toLowerCase().trim() : '';
    let isAnyItemActive = false;

    items.forEach((item) => {
      if (hasFilterPhrase && item.textContent && item.textContent.toLowerCase().indexOf(phrase) === -1) {
        item.setAttribute('hidden', '');
      } else {
        isAnyItemActive = true;
        item.removeAttribute('hidden');
      }
    });

    return isAnyItemActive;
  }

  indexOf(item: Element): number {
    return this.listBox && this.listBox.items ? this.listBox.items.indexOf(item) : -1;
  }

  private getSelectedItemKey(selectedItem: Element): number | string | undefined {
    if (this.attrForSelected) {
      return selectedItem.getAttribute(this.attrForSelected) || undefined;
    }

    const index = this.indexOf(selectedItem);

    return index === -1 ? undefined : index;
  }

  private hasSelectedItem() {
    return !!this.selectedItem;
  }

  /**
   * this method can be used to set the focus of the element
   */
  focus() {
    this.inputElement!.focus();
  }

  private resetInput() {
    if (this.autoValidate) {
      this.validate();
    }

    this.inputValue = '';
    this.inputElement!.value = '';
    if (this.ignoreFocus) {
      this.ignoreFocus = false;
    } else {
      this.focus();
    }
  }

  /**
   * Returns true if `value` is valid.
   * @return {boolean} True if the value is valid.
   */
  validate() {
    this.invalid = !this.disabled && this.required && !this.hasSelectedItem();
    return !this.invalid;
  }

  /** ********** EVENT HANDLERS *************/
  private onKeyUp(e: KeyboardEvent) {
    if (typeof this.inputValue !== 'string') {
      this.inputValue = '';
    }

    switch (e.code || e.keyCode) {
      case ENTER_KEY_CODE:
      case 'Enter':
      case 'NumpadEnter':
        if (!e.ctrlKey) {
          e.stopPropagation();
        }
        break;
      case BACKSPACE:
      case 'Backspace':
      case DELETE:
      case 'Delete':
        if (!this.menuElement!.opened) {
          this.keyDownBackspaceDebounce(() => {
            if (!this.menuElement!.opened && this.isAnyItemActive) {
              this.menuElement!.open();
              afterNextRender(this, () => this.focus());
            }
          });
        }

        this.selectedValue = undefined;
        this.selectedItem = undefined;
        break;
      case ARROW_DOWN:
      case 'ArrowDown':
        if (!this.menuElement!.opened && this.isAnyItemActive) {
          this.menuElement!.open();
        }
        afterNextRender(this, () => this.listBox!.focus());
        break;
      case ESC:
      case 'Escape':
        e.preventDefault();
        this.menuElement!.close();
        afterNextRender(this, () => this.focus());
    }
  }

  private onClick(e: Event) {
    const inside = e.composedPath().findIndex((path) => path === this) !== -1;

    // Detect outside element click for auto validate input
    if ((this.autoValidate && this.previousInsideClick && !inside) || this.token) {
      this.validate();
    }

    this.previousInsideClick = inside;
  }

  private onContainerTap(e: Event) {
    e.preventDefault();
    this.menuElement!.open();
    afterNextRender(this, () => this.focus());
  }

  private onItemSelected(e: CustomEvent<{ item: Element }>) {
    e.stopPropagation();

    if (this.selected && !this.selectedItem) {
      this.selectedItem = e.detail.item;
    }
    if (this.selected !== this.getSelectedItemKey(e.detail.item)) {
      this.selectedItem = e.detail.item;
      this.selected = this.getSelectedItemKey(this.selectedItem);
      const payload: EventSelectPayload = {
        value: this.selected!,
        item: this.selectedItem!,
        token: this.token!,
      };
      this.dispatchEvent(new CustomEvent('change', { detail: payload, composed: true, bubbles: true }));
    }
    this.resetInput();
  }

  private onItemDeselected(e: Event) {
    e.stopPropagation();
    this.selectedItem = undefined;
    this.selected = undefined;

    this.dispatchEvent(new CustomEvent('change', { detail: {}, composed: true, bubbles: true }));
    this.resetInput();
  }

  private onItemActivated(e: CustomEvent<{ selected: string | number }>) {
    // when user select same item then don't receive iron-select event but we still want to
    // prepare input
    if (this.selected === e.detail.selected) {
      this.ignoreFocus = false;
      afterNextRender(this, () => this.resetInput());
    }

    this.opened = false;
  }

  private onInputValueChange(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value;
  }

  private onInputFocusChanged(event: CustomEvent) {
    this.inputFocused = event.detail.value;
  }

  private onTokenClick() {
    this.focus();
  }

  private initializeElement() {
    /* Initialize the input helper span element for determining the actual width of the input
     * text. This width will be used to create a dynamic width on the input field
     */
    if (this.inputWidthHelperElement) {
      copyElementStyle(this.inputElement!, this.inputWidthHelperElement);
      this.inputWidthHelperElement.style.position = 'absolute';
      this.inputWidthHelperElement.style.top = '-999px';
      this.inputWidthHelperElement.style.left = '0';
      this.inputWidthHelperElement.style.padding = '0';
      this.inputWidthHelperElement.style.width = 'auto';
      this.inputWidthHelperElement.style.whiteSpace = 'pre';
    }

    this.inputElement!.addEventListener('keyup', this._onKeyUp);

    if (this.autoValidate) {
      window.addEventListener('click', this._onClick);
    }

    this.addEventListener('iron-resize', this._onIronResize);

    const el = this.shadowRoot!.querySelector<Element>('.container');
    if (el) {
      this.menuElement!.positionTarget = el;
    }
  }

  /**
   * Fix menu content width and height
   */
  private onIronResize() {
    const element: HTMLElement = this.shadowRoot!.querySelector<HTMLElement>('.dropdown-content')!;

    const { left: elementLeft } = element.getBoundingClientRect();
    const { scrollWidth: elementScrollWidth } = element;
    const getGreater = (...values: number[]): number => Math.max(...values);
    const getLower = (...values: number[]): number => Math.min(...values);

    if (elementScrollWidth > 0 && elementScrollWidth < this.maxWidthMenuList) {
      const elementMaximumWidthFromRight = document.documentElement!.clientWidth - elementLeft;
      element.style.maxWidth = `${getLower(getGreater(elementMaximumWidthFromRight, 100), this.maxWidthMenuList)}px`;
    }

    const { top: elementTop } = element.getBoundingClientRect();
    const { scrollHeight: elementScrollHeight } = element;
    if (elementScrollHeight > 0) {
      const elementMaximumHeightToBottom = document.documentElement!.clientHeight - elementTop;
      element.style.maxHeight = `${getGreater(elementMaximumHeightToBottom - 10, 100)}px`;
    }
  }

  private shouldFireEvent(changedProperties: GenericPropertyValues<keyof this | PrivateProps>) {
    const props: (keyof this | PrivateProps)[] = ['selected', 'selectedItem'];
    const anyPropChanged = props.some(
      (it: keyof this | PrivateProps) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        changedProperties.has(it) && changedProperties.get(it) !== this[it],
    );

    const { id = undefined } = this.token || {};
    return anyPropChanged && id === this.selected;
  }

  /** ***  LIT ELEMENT HOOKS ******/

  protected async firstUpdated(): Promise<void> {
    this.initializeElement();
    await this.updateComplete;
    this.isElementInitialized = true;
  }

  protected updated(changedProperties: ChangedProps) {
    this.executeObservers(changedProperties);
    if (this.shouldFireEvent(changedProperties)) {
      if (typeof this.selected !== 'undefined') {
        const payload: EventSelectPayload = {
          value: this.selected!,
          item: this.selectedItem!,
          token: this.token!,
        };

        this.dispatchEvent(new CustomEvent('exmg-combobox-select', { detail: payload, composed: true, bubbles: true }));
      } else {
        this.dispatchEvent(new CustomEvent('exmg-combobox-deselect', { composed: true, bubbles: true }));
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.inputElement && this.inputElement.removeEventListener('keyup', this._onKeyUp);
    this.removeEventListener('iron-resize', this._onIronResize);
    if (this.autoValidate) {
      window.removeEventListener('click', this._onClick);
    }
    this.inputChangeDebounce();
    this.keyDownBackspaceDebounce();
  }

  protected render() {
    return html` ${this.getTemplate()} `;
  }

  private getTemplate() {
    // noinspection CssUnresolvedCustomPropertySet
    const eltPrefix = this.querySelector<HTMLElement>('*[slot="prefix"]');
    const labelPaddingLeft = eltPrefix ? eltPrefix.offsetWidth : 0;
    return html`
      <style>
        label.with-prefix {
          padding-left: ${labelPaddingLeft}px;
        }
      </style>
      <div class="container">
        <paper-input-container
          no-label-float
          @tap="${this.onContainerTap}"
          ?disabled="${this.disabled}"
          ?focused="${this.inputFocused}"
          @focused-changed="${this.onInputFocusChanged}"
          ?invalid="${this.invalid}"
          id="paperInputContainer"
        >
          <iron-input bind-value="${this.inputValue}" slot="input">
            <slot name="prefix"></slot>
            <span class="${classMap({ tokens: true, selected: !!this.token })}">
              ${this.renderTokenButton()}
              <input
                id="inputValue"
                aria-labelledby="label"
                value="${this.inputValue}"
                @input="${this.onInputValueChange}"
                ?autofocus="${this.autofocus}"
                autocomplete="off"
                ?disabled="${this.disabled}"
              />
            </span>
            <slot name="suffix"></slot>
          </iron-input>
          <paper-input-error slot="add-on" aria-live="assertive">${this.errorMessage}</paper-input-error>
        </paper-input-container>

        <span id="inputWidthHelper">${this.inputValue} </span>
        <mwc-icon-button ?disabled="${this.disabled}" @click=${() => this.toggle()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </mwc-icon-button>
        <iron-dropdown
          id="menu"
          @opened-changed=${(e: CustomEvent<{ value: boolean }>) => (this.opened = e.detail.value)}
          ?opened="${this.opened}"
          no-overlap
          restore-focus-on-close
          close-on-activate
          ?dynamic-align=${this.dynamicAlign}
          horizontal-align=${this.horizontalAlign}
          vertical-offset=${this.verticalOffset}
          horizontal-offset=${this.horizontalOffset}
          vertical-align=${this.verticalAlign}
        >
          <paper-listbox
            id="listbox"
            slot="dropdown-content"
            selectable="paper-item:not([hidden]),paper-icon-item:not([hidden])"
            attr-for-selected="${this.attrForSelected}"
            selected="${ifDefined(this.selectedValue)}"
            class="dropdown-content"
            @iron-activate="${this.onItemActivated}"
            @iron-select="${this.onItemSelected}"
            @iron-deselect="${this.onItemDeselected}"
          >
            <slot></slot>
          </paper-listbox>
        </iron-dropdown>
      </div>
    `;
  }

  private renderTokenButton() {
    if (!this.token) {
      return null;
    }
    return html`
      <paper-button tabindex="-1" @click="${this.onTokenClick}">
        <span>${this.token!.text}</span>
      </paper-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-grid-toolbar-combobox': PaperGridTooolbarComboboxElement;
  }
}
