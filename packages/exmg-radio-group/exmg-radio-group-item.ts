import { FormElement } from '@material/mwc-base/form-element.js';
import { observer } from '@exmg/lit-base/index.js';
import { html } from 'lit';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { MDCFoundation } from '@material/base';
import { styles } from '@material/mwc-radio/mwc-radio.css.js';
import foundation from '@material/radio/foundation.js';
import { SelectionController } from './exmg-selection-controller.js';
import { style as exmgRadioGroupItemStyles } from './styles/exmg-radio-group-item-styles-css.js';

export interface RadioFoundation extends MDCFoundation {
  setDisabled(disabled: boolean): void;
}

export declare const RadioFoundationBase: {
  prototype: RadioFoundation;
  new (adapter: Record<string, any>): RadioFoundation;
};

@customElement('exmg-radio-group-item')
export class ExmgRadioGroupItem extends FormElement {
  @query('.mdc-radio')
  protected mdcRoot!: HTMLElement;

  @query('input')
  protected formElement!: HTMLInputElement;

  /**
   * Marks the item as checked
   * @type {Boolean}
   */
  @property({ type: Boolean, reflect: true })
  @observer(function (this: ExmgRadioGroupItem, checked: boolean) {
    this.formElement.checked = checked;
  })
  checked = false;

  /**
   * Marks the item as disabled
   * @type {Boolean}
   */
  @property({ type: Boolean, reflect: true })
  @observer(function (this: ExmgRadioGroupItem, disabled: boolean) {
    this.mdcFoundation.setDisabled(disabled);
  })
  disabled = false;

  /**
   * Set value of item
   * @type {String}
   */
  @property({ type: String })
  @observer(function (this: ExmgRadioGroupItem, value: string) {
    this.formElement.value = value;
  })
  value = '';

  /**
   * Set name of item
   * @type {String}
   */
  @property({ type: String })
  name = '';

  /**
   * Enable radio button for selecting
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'enable-radio-button' })
  enableRadioButton = false;

  protected mdcFoundationClass: typeof RadioFoundationBase = foundation as unknown as typeof RadioFoundationBase;

  protected mdcFoundation!: RadioFoundation;

  private readonly selectionController?: SelectionController;

  constructor() {
    super();
    // Selection Controller is only needed for native ShadowDOM
    if (!(window as any)['ShadyDOM'] || !(window as any)['ShadyDOM']['inUse']) {
      this.selectionController = SelectionController.getController(this.parentNode!);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.selectionController) {
      this.selectionController.register(this);
    }
  }

  disconnectedCallback() {
    if (this.selectionController) {
      this.selectionController.unregister(this);
    }
    super.disconnectedCallback();
  }

  focusNative() {
    this.formElement.focus();
  }

  static styles = [styles, exmgRadioGroupItemStyles];

  protected createAdapter(): Record<string, any> {
    return {
      setNativeControlDisabled: (disabled: boolean) => {
        this.formElement.disabled = disabled;
      },
    };
  }

  private changeHandler() {
    this.checked = this.formElement.checked;
    if (this.selectionController) {
      this.selectionController.update(this);
      this.dispatchEvent(
        new CustomEvent('exmg-radio-group-item-changed', {
          detail: { value: this.value },
          composed: false,
          bubbles: true,
        }),
      );
    }
  }

  setFormData() {
    return;
  }

  render() {
    return html`
      <label class="item ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}">
        <div class="mdc-radio" ?hidden="${!this.enableRadioButton}">
          <input
            class="mdc-radio__native-control"
            type="radio"
            name="${this.name}"
            .checked="${this.checked}"
            .value="${this.value}"
            @change="${this.changeHandler}"
          />
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
        </div>
        <div class="description">
          <slot></slot>
          <slot class="title" name="title"></slot>
          <slot class="body" name="body"></slot>
        </div>
      </label>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    if (this.selectionController) {
      this.selectionController.update(this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-radio-group-item': ExmgRadioGroupItem;
  }
}
