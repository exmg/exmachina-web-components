import { customElement, property, query } from 'lit/decorators.js';

import { styles as elevatedStyles } from '@material/web/chips/internal/elevated-styles.css.js';
import { FilterChip } from '@material/web/chips/internal/filter-chip.js';
import { styles } from '@material/web/chips/internal/filter-styles.css.js';
import { styles as selectableStyles } from '@material/web/chips/internal/selectable-styles.css.js';
import { styles as sharedStyles } from '@material/web/chips/internal/shared-styles.css.js';
import { styles as trailingIconStyles } from '@material/web/chips/internal/trailing-icon-styles.css.js';
import { ARIAMixinStrict } from '@material/web/internal/aria/aria.js';
import { redispatchEvent } from '@material/web/internal/events/redispatch-event.js';

import {
  createValidator,
  getValidityAnchor,
  mixinConstraintValidation,
} from '@material/web/labs/behaviors/constraint-validation.js';
import { getFormState, getFormValue, mixinFormAssociated } from '@material/web/labs/behaviors/form-associated.js';
import { internals, mixinElementInternals } from '@material/web/labs/behaviors/element-internals.js';
import { mixinFocusable } from '@material/web/labs/behaviors/focusable.js';
import { ChipValidator } from './validator/chip-validator.js';
import { observer } from '@exmg/lit-base';
import { SelectionController } from './selection-controller.js';
import { html, nothing } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'exmg-chip': ExmgChip;
  }
}

const CHECKED = Symbol('checked');

// Separate variable needed for closure.
const FilterChipBaseClass = mixinConstraintValidation(
  mixinFormAssociated(mixinElementInternals(mixinFocusable(FilterChip))),
);

/**
 *
 * @final
 * @suppress {visibility}
 */
@customElement('exmg-chip')
export class ExmgChip extends FilterChipBaseClass {
  static override styles = [sharedStyles, elevatedStyles, trailingIconStyles, selectableStyles, styles];

  @property({ type: Boolean }) removable = false;

  @property({ type: Boolean, reflect: true })
  @observer(function (this: ExmgChip, selected: boolean) {
    this.checked = selected;
  })
  selected = false;

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
  }

  [CHECKED] = false;

  private selectionController = new SelectionController(this);

  /**
   * Whether or not the radio is required. If any radio is required in a group,
   * all radios are implicitly required.
   */
  @property({ type: Boolean }) required = false;

  /**
   * The element value to use in form submission when checked.
   */
  @property() value = 'on';

  @query('.container') private readonly container!: HTMLElement;

  // Writable mixin properties for lit-html binding, needed for lit-analyzer
  declare disabled: boolean;
  declare name: string;

  override [getFormValue]() {
    return this.checked ? this.value : null;
  }

  override [getFormState]() {
    return String(this.checked);
  }

  constructor() {
    super();
    this.addController(this.selectionController);

    this[internals].role = 'radio';
  }

  override formResetCallback() {
    // The checked property does not reflect, so the original attribute set by
    // the user is used to determine the default value.
    this.checked = this.hasAttribute('checked');
  }

  override formStateRestoreCallback(state: string) {
    this.checked = state === 'true';
  }

  protected override updated() {
    this[internals].ariaChecked = String(this.checked);
  }

  protected override renderPrimaryAction(content: unknown) {
    const { ariaLabel } = this as ARIAMixinStrict;
    return html`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || nothing}
        aria-pressed=${this.selected}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        @click=${this._handleClick}
      >
        ${content}
      </button>
    `;
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      return;
    }

    // Store prevValue to revert in case `chip.selected` is changed during an
    // event listener.
    const prevValue = this.selected;
    this.selected = !this.selected;

    const preventDefault = !redispatchEvent(this, event);
    if (preventDefault) {
      // We should not do `this.selected = !this.selected`, since a client
      // click listener could change its value. Instead, always revert to the
      // original value.
      this.selected = prevValue;
      return;
    }
  }

  [createValidator]() {
    return new ChipValidator(() => {
      if (!this.selectionController) {
        // Validation runs on superclass construction, so selection controller
        // might not actually be ready until this class constructs.
        return [this];
      }

      return this.selectionController.controls as [ExmgChip, ...ExmgChip[]];
    });
  }

  [getValidityAnchor]() {
    return this.container;
  }
}
