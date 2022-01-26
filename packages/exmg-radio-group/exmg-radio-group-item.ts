import {FormElement} from '@material/mwc-base/form-element.js';
import {observer} from '@exmg/exmg-base/observer/observer.js';
import {html} from 'lit';
import {query} from 'lit/decorators/query.js';
import {property} from 'lit/decorators/property.js';
import {customElement} from 'lit/decorators/custom-element.js';
import {eventOptions} from 'lit/decorators/event-options.js';
import {MDCFoundation} from '@material/base';
import {styles} from '@material/mwc-radio/mwc-radio.css';
import {RippleHandlers} from '@material/mwc-ripple/ripple-handlers.js';
import foundation from '@material/radio/foundation';
import {SelectionController} from './exmg-selection-controller';
import {style as exmgRadioGroupItemStyles} from './styles/exmg-radio-group-item-styles-css.js';
import '@material/mwc-ripple';

export interface RadioFoundation extends MDCFoundation {
  setDisabled(disabled: boolean): void;
}

export declare const RadioFoundation: {
  prototype: RadioFoundation;
  new (adapter: Record<string, any>): RadioFoundation;
};

@customElement('exmg-radio-group-item')
export class ExmgRadioGroupItem extends FormElement {
  @query('.mdc-radio')
  protected mdcRoot!: HTMLElement;

  @query('input')
  protected formElement!: HTMLInputElement;

  @property({type: Boolean, reflect: true})
  @observer(function(this: ExmgRadioGroupItem, checked: boolean) {
    this.formElement.checked = checked;
  })
  checked = false;

  @property({type: Boolean, reflect: true})
  @observer(function(this: ExmgRadioGroupItem, disabled: boolean) {
    this.mdcFoundation.setDisabled(disabled);
  })
  disabled = false;

  @property({type: String})
  @observer(function(this: ExmgRadioGroupItem, value: string) {
    this.formElement.value = value;
  })
  value = '';

  @property({type: String})
  name = '';

  @property({type: Boolean, attribute: 'enable-radio-button'})
  enableRadioButton = false;

  @property({type: Object})
  rippleHandlers: RippleHandlers | null = null;

  private shouldRenderRipple = false;

  protected mdcFoundationClass: typeof RadioFoundation = (foundation as unknown) as typeof RadioFoundation;

  protected mdcFoundation!: RadioFoundation;

  private readonly selectionController?: SelectionController;

  constructor() {
    super();
    // Selection Controller is only needed for native ShadowDOM
    if (!(window as any)['ShadyDOM'] || !(window as any)['ShadyDOM']['inUse']) {
      this.selectionController = SelectionController.getController(this.parentNode!);
    }
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple ? this.ripple : Promise.resolve(null);
    });
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
      this.dispatchEvent(new CustomEvent('exmg-radio-group-item-changed', {detail: {value: this.value}, composed: false, bubbles: true}));
    }
  }

  setFormData() {
    return;
  }

  renderRipple() {
    return this.shouldRenderRipple ? this.renderRippleTemplate() : '';
  }
  /** @soyTemplate */
  renderRippleTemplate() {
    return html `<mwc-ripple
    .disabled="${this.disabled}"
    unbounded></mwc-ripple>`;
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
            @focus="${this.handleRippleFocusA}"
            @blur="${this.handleRippleBlurA}"
            @mousedown="${this.handleRippleActivateA}"
            @mouseenter="${this.handleRippleMouseEnterA}"
            @mouseleave="${this.handleRippleMouseLeaveA}"
            @touchstart="${this.handleRippleActivateA}"
            @touchend="${this.handleRippleDeactivateA}"
            @touchcancel="${this.handleRippleDeactivateA}"
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
        ${this.renderRipple()}
      </label>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    if (this.selectionController) {
      this.selectionController.update(this);
    }
  }

  @eventOptions({passive: true})
  private handleRippleActivateA(evt?: Event) {
    const onUp = () => {
      window.removeEventListener('mouseup', onUp);

      this.handleRippleDeactivateA();
    };

    window.addEventListener('mouseup', onUp);
    this.rippleHandlers!.startPress(evt);
  }

  private handleRippleDeactivateA() {
    this.rippleHandlers!.endPress();
  }

  private handleRippleMouseEnterA() {
    this.rippleHandlers!.startHover();
  }

  private handleRippleMouseLeaveA() {
    this.rippleHandlers!.endHover();
  }

  private handleRippleFocusA() {
    this.rippleHandlers!.startFocus();
  }

  private handleRippleBlurA() {
    this.rippleHandlers!.endFocus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-radio-group-item': ExmgRadioGroupItem;
  }
}
