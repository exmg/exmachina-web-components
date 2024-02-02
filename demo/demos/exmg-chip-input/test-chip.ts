import { mixinElementInternals } from '@material/web/labs/behaviors/element-internals.js';
import { property } from 'lit/decorators.js';
import { getFormState, getFormValue, mixinFormAssociated } from '@material/web/labs/behaviors/form-associated.js';

import { FilterChip } from '@material/web/chips/internal/filter-chip.js';

const base = mixinFormAssociated(mixinElementInternals(FilterChip));

class TestChip extends base {
  @property({ type: Boolean })
  checked = false;

  @property()
  value = 'on';

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
}

customElements.define('test-chip', TestChip);
