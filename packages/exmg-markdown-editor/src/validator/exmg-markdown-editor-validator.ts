/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Validator } from '@material/web/labs/behaviors/validators/validator.js';

export interface MarkdownEditorState {
  /**
   * Whether the checkbox is required.
   */
  readonly required: boolean;

  /* Value of the element */
  readonly value: string;

  readonly internalElement?: HTMLInputElement;
}

export class MardownEditorValidator extends Validator<MarkdownEditorState> {
  private inputElement?: HTMLInputElement;
  protected override computeValidity(state: MarkdownEditorState) {
    if (!this.inputElement) {
      this.inputElement = state.internalElement;
    }
    if (!this.inputElement) {
      // Lazily create the input element if not existing
      this.inputElement = document.createElement('input');
      this.inputElement.type = 'text';
    }
    // Set values to the input element
    this.inputElement.value = state.value ?? '';
    this.inputElement.required = state.required;
    return {
      validity: this.inputElement.validity,
      validationMessage: this.inputElement.validationMessage,
    };
  }

  protected override equals(prevState: MarkdownEditorState, state: MarkdownEditorState) {
    return prevState.value === state.value && prevState.required === state.required;
  }

  protected override copy(state: MarkdownEditorState): MarkdownEditorState {
    return {
      ...state,
    };
  }
}
