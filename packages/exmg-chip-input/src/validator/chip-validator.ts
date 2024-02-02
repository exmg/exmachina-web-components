/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Validator } from '@material/web/labs/behaviors/validators/validator.js';

/**
 * Constraint validation properties for a checkbox.
 */
export interface ChipState {
  /**
   * Whether the checkbox is checked.
   */
  readonly checked: boolean;

  /**
   * Whether the checkbox is required.
   */
  readonly required: boolean;
}

/**
 * Radio constraint validation properties for a single radio and its siblings.
 */
export type ChipGroupState = readonly [ChipState, ...ChipState[]];

/**
 * A validator that provides constraint validation that emulates
 * `<input type="checkbox">` validation.
 */
export class ChipValidator extends Validator<ChipGroupState> {
  private radioElement?: HTMLInputElement;

  protected override computeValidity(states: ChipGroupState) {
    if (!this.radioElement) {
      // Lazily create the radio element
      this.radioElement = document.createElement('input');
      this.radioElement.type = 'radio';
      // A name is required for validation to run
      this.radioElement.name = 'group';
    }

    let isRequired = false;
    let isChecked = false;
    for (const { checked, required } of states) {
      if (required) {
        isRequired = true;
      }

      if (checked) {
        isChecked = true;
      }
    }

    // Firefox v119 doesn't compute grouped radio validation correctly while
    // they are detached from the DOM, which is why we don't render multiple
    // virtual <input>s. Instead, we can check the required/checked states and
    // grab the i18n'd validation message if the value is missing.
    this.radioElement.checked = isChecked;
    this.radioElement.required = isRequired;
    return {
      validity: {
        valueMissing: isRequired && !isChecked,
      },
      validationMessage: this.radioElement.validationMessage,
    };
  }

  protected override equals(prevGroup: ChipGroupState, nextGroup: ChipGroupState) {
    if (prevGroup.length !== nextGroup.length) {
      return false;
    }

    for (let i = 0; i < prevGroup.length; i++) {
      const prev = prevGroup[i];
      const next = nextGroup[i];
      if (prev.checked !== next.checked || prev.required !== next.required) {
        return false;
      }
    }

    return true;
  }

  protected override copy(states: ChipGroupState): ChipGroupState {
    // Cast as unknown since typescript does not have enough information to
    // infer that the array always has at least one element.
    return states.map(({ checked, required }) => ({
      checked,
      required,
    })) as unknown as ChipGroupState;
  }
}
