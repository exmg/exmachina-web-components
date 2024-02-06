import { html, LitElement, isServer } from 'lit';
import { SingleSelectionController } from './single-selection-controller.js';
import { property, query } from 'lit/decorators.js';
import {
  mixinConstraintValidation,
  createValidator,
  getValidityAnchor,
} from '@material/web/labs/behaviors/constraint-validation.js';
import { mixinFormAssociated, getFormState, getFormValue } from '@material/web/labs/behaviors/form-associated.js';
import { mixinElementInternals, internals } from '@material/web/labs/behaviors/element-internals.js';
import { mixinFocusable } from '@material/web/labs/behaviors/focusable.js';
import { classMap } from 'lit/directives/class-map.js';
import { isActivationClick } from '@material/web/internal/events/form-label-activation.js';
import { RadioValidator } from '@material/web/labs/behaviors/validators/radio-validator.js';

import '@material/web/focus/md-focus-ring.js';
import '@material/web/ripple/ripple.js';

const CHECKED = Symbol('checked');
let maskId = 0;

const radioBaseClass = mixinConstraintValidation(
  // @ts-ignore
  mixinFormAssociated(mixinElementInternals(mixinFocusable(LitElement))),
);

export class ExmgRadioItemBase extends radioBaseClass {
  // Unique maskId is required because of a Safari bug that fail to persist
  // reference to the mask. This should be removed once the bug is fixed.
  private readonly maskId = `cutout${++maskId}`;

  /**
   * Whether or not the radio is selected.
   */
  @property({ type: Boolean })
  get checked() {
    return this[CHECKED];
  }
  set checked(checked: boolean) {
    const wasChecked = this.checked;
    if (wasChecked === checked) {
      return;
    }

    this[CHECKED] = checked;
    this.requestUpdate('checked', wasChecked);
    this.selectionController.handleCheckedChange();
  }

  [CHECKED] = false;

  @property({ type: Boolean }) radio = false;

  /**
   * Whether or not the radio is required. If any radio is required in a group,
   * all radios are implicitly required.
   */
  @property({ type: Boolean }) required = false;

  /**
   * The element value to use in form submission when checked.
   */
  @property() value = 'on';

  // @ts-ignore
  @query('.container')
  private readonly container!: HTMLElement;

  private readonly selectionController = new SingleSelectionController(this);

  constructor() {
    super();
    this.addController(this.selectionController);
    if (!isServer) {
      this[internals].role = 'radio';
      this.addEventListener('click', this.handleClick.bind(this));
      this.addEventListener('keydown', this.handleKeydown.bind(this));
    }
  }

  protected override render() {
    const classes = { checked: this.checked };
    const showRadioMap = classMap({ 'show-radio': this.radio, icon: true });
    return html`
      <div class="container ${classMap(classes)}" aria-hidden="true">
        <md-ripple part="ripple" .control=${this} ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <div class="radio-container">
          <svg class=${showRadioMap} viewBox="0 0 20 20">
            <mask id="${this.maskId}">
              <rect width="100%" height="100%" fill="white" />
              <circle cx="10" cy="10" r="8" fill="black" />
            </mask>
            <circle class="outer circle" cx="10" cy="10" r="10" mask="url(#${this.maskId})" />
            <circle class="inner circle" cx="10" cy="10" r="5" />
          </svg>
        </div>
        <div class="content-container">
          <div class="image-container">
            <slot name="image"></slot>
          </div>
          <div class="content">
            <slot name="title"></slot>
            <slot name="content"></slot>
          </div>
        </div>
        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
        />
      </div>
    `;
  }

  protected override updated() {
    this[internals].ariaChecked = String(this.checked);
  }

  private async handleClick(event: Event) {
    if (this.disabled) {
      return;
    }

    // allow event to propagate to user code after a microtask.
    await 0;
    if (event.defaultPrevented) {
      return;
    }

    if (isActivationClick(event)) {
      this.focus();
    }

    // Per spec, clicking on a radio input always selects it.
    this.checked = true;
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: this.value }));
    this.dispatchEvent(new CustomEvent('input', { bubbles: true, composed: true, detail: this.value }));
  }

  private async handleKeydown(event: KeyboardEvent) {
    // allow event to propagate to user code after a microtask.
    await 0;
    if (event.key !== ' ' || event.defaultPrevented) {
      return;
    }

    this.click();
  }

  // Writable mixin properties for lit-html binding, needed for lit-analyzer
  declare disabled: boolean;
  declare name: string;

  override [getFormValue]() {
    return this.checked ? this.value : null;
  }

  override [getFormState]() {
    return String(this.checked);
  }

  override formResetCallback() {
    // The checked property does not reflect, so the original attribute set by
    // the user is used to determine the default value.
    this.checked = this.hasAttribute('checked');
  }

  override formStateRestoreCallback(state: string) {
    this.checked = state === 'true';
  }

  [createValidator]() {
    return new RadioValidator(() => {
      if (!this.selectionController) {
        // Validation runs on superclass construction, so selection controller
        // might not actually be ready until this class constructs.
        return [this];
      }

      return this.selectionController.controls as [ExmgRadioItemBase, ...ExmgRadioItemBase[]];
    });
  }

  [getValidityAnchor]() {
    return this.container;
  }
}
