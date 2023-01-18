import {html} from 'lit';
import {property, query, state} from 'lit/decorators.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';
import {classMap} from 'lit/directives/class-map.js';
import {observer} from '@exmg/exmg-base/observer/observer.js';
import {Debouncer} from '@exmg/exmg-base/utils/debounce/debounce.js';
import {timeOut} from '@exmg/exmg-base/utils/debounce/async.js';
import '@polymer/iron-form/iron-form.js';
import '@exmg/exmg-button/exmg-button.js';
import {IronFormElement} from '@polymer/iron-form/iron-form.js';

const ENTER_KEY_CODE = 13;

interface InputDefault {
  value?: string | string[];
  checked?: boolean;
}

const warningIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
  </svg>
`;

export class ExmgFormBase extends ExmgElement {
  /**
   * Option to hide submit button
   * @type {Boolean}
   */
  @property({type: Boolean, attribute: 'hide-submit-button'})
  hideSubmitButton = false;

  /**
   * Option to hide reset button
   * @type {Boolean}
   */
  @property({type: Boolean, attribute: 'hide-reset-button'})
  hideResetButton = false;

  /**
   * default submit button copy
   * @type {String}
   */
  @property({type: String, attribute: 'submit-button-copy'})
  submitButtonCopy = 'Submit';

  /**
   * default reset button copy
   * @type {String}
   */
  @property({type: String, attribute: 'reset-button-copy'})
  resetButtonCopy = 'Reset';

  /**
   * with this option the disable button will be disabled while there are no changes in the form
   * @type {Boolean}
   */
  @property({type: Boolean, reflect: true, attribute: 'disable-submit-no-changes'})
  disableSubmitNoChanges = false;

  /**
   * Indicator of the form has pending changes
   */
  @state()
  @observer(function (this: ExmgFormBase, dirty: boolean) {
    this.dispatchEvent(
      new CustomEvent('dirty-change', {
        bubbles: this.bubbles,
        composed: true,
        detail: {
          dirty,
        },
      }),
    );
  })
  private dirty = false;

  get isDirty() {
    return this.dirty;
  }

  /**
   * By default, exmg-form events do not bubble. Setting this attribute will cause its
   * events to bubble to the window object.
   */
  @property({type: Boolean})
  bubbles = false;

  @state()
  private errorMessage = '';

  @state()
  private submitting = false;

  @query('#ironForm')
  private ironFormElem?: IronFormElement;

  private _debouncer: any;
  private observer?: MutationObserver;

  private _defaults = new WeakMap();

  /**
   * Marks form as done
   * @public
   */
  done() {
    this.submitting = false;
  }

  addInput(node: any, overwriteValues = false) {
    if (!this._defaults.has(node) || overwriteValues) {
      const defaults: InputDefault = {
        value: node.value === undefined || node.value === null ? '' : node.value,
      };
      if ('_hasIronCheckedElementBehavior' in node || (node.type && node.type === 'checkbox')) {
        defaults.checked = node.checked;
      }
      this._defaults.set(node, defaults);
    }
  }

  saveDefaults(overwriteValues = false) {
    // After first render save original form data for later dirdty checks
    const nodes = Array.from(this.querySelectorAll<any>('*') || []).filter((n) => !!n.name);
    for (let i = 0; i < nodes.length; i++) {
      const node: any = nodes[i];
      this.addInput(node, overwriteValues);
    }
  }

  firstUpdated() {
    this.saveDefaults();
  }

  /**
   * @deprecated handleError method should be used
   */
  error(errorMessage: string) {
    this.submitting = false;
    this.errorMessage = errorMessage;
  }

  /**
   * Error handler for form
   * @public
   * @param errorMessage
   */
  handleError(errorMessage: string) {
    this.submitting = false;
    this.errorMessage = errorMessage;
  }

  /**
   * Submit the form when it's valid
   * @public
   * @fires submit
   */
  submit() {
    if (this.ironFormElem && this.ironFormElem.validate()) {
      this.submitting = true;
      this.errorMessage = '';
      this.dispatchEvent(
        new CustomEvent('submit', {
          bubbles: this.bubbles,
          composed: true,
          detail: this.ironFormElem.serializeForm(),
        }),
      );
    }
  }

  /**
   * Form validation method
   * @public
   * @returns {Boolean}
   */
  validate() {
    return this.ironFormElem && this.ironFormElem.validate();
  }

  private resetRegisteredCustomElements() {
    const nodes = this.getResetRegisteredElements(this);
    nodes.forEach((n) => n.reset());
  }

  _isRegisteredForSubmitElement(node: any) {
    return !node.disabled && node.hasAttribute('register-for-reset');
  }

  _searchSubmittable(nodes: any[], node: any) {
    if (this._isRegisteredForSubmitElement(node)) {
      nodes.push(node);
    } else if (node.root) {
      this.getResetRegisteredElements(node.root, nodes);
    }
  }

  _searchSubmittableInSlot(submittable: any[], e: any) {
    const assignedNodes = e.assignedNodes();

    for (let i = 0; i < assignedNodes.length; i++) {
      if (assignedNodes[i].nodeType === Node.TEXT_NODE) {
        continue;
      }

      // Note: assignedNodes does not contain <slot> or <content> because
      // getDistributedNodes flattens the tree.
      this._searchSubmittable(submittable, assignedNodes[i]);
      const nestedAssignedNodes = assignedNodes[i].querySelectorAll('*');
      for (let j = 0; j < nestedAssignedNodes.length; j++) {
        this._searchSubmittable(submittable, nestedAssignedNodes[j]);
      }
    }
  }

  private getResetRegisteredElements(n: any, nodes: any[] = []) {
    const elements = n.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
      const e = elements[i];
      if (e.localName === 'slot' || e.localName === 'content') {
        this._searchSubmittableInSlot(nodes, e);
      } else {
        this._searchSubmittable(nodes, e);
      }
    }

    return nodes;
  }

  /**
   * Resets form to initial state, fires form-reset
   * @public
   */
  reset() {
    this.ironFormElem && this.ironFormElem.reset();
    this.resetRegisteredCustomElements();
    this.submitting = false;
    this.errorMessage = '';
    this.dispatchEvent(
      new CustomEvent('form-reset', {
        bubbles: this.bubbles,
        composed: true,
      }),
    );
    this.checkDirty();
  }

  /**
   * Helper method to call serializeForm on iron form
   */
  serializeForm(): {[key: string]: any} | undefined {
    return this.ironFormElem && this.ironFormElem.serializeForm();
  }

  private _onSubmitBtnClick() {
    this.submit();
  }

  private onResetBtnClick() {
    this.reset();
  }

  private checkDirty() {
    this._debouncer = Debouncer.debounce(this._debouncer, timeOut.after(200), () => {
      let dirty = false;
      // Select all slot nodes and filter out the input based on a existing name property on the node
      const nodes = Array.from(this.querySelectorAll<any>('*') || []).filter((n) => !!n.name && !n.disabled);
      try {
        for (const node of nodes) {
          const def: InputDefault = this._defaults.get(node);
          if (!def) {
            throw Error('Unable to check dirty due to missing default');
          }
          // Special case for token input which has a array value
          if (node.tagName === 'EXMG-PAPER-TOKEN-INPUT') {
            if (!Array.isArray(node.value) || !Array.isArray(def.value)) {
              throw Error('Expected value of token input not an array');
            }
            if (def.value.sort().join(',') !== [...node.value].sort().join(',')) {
              dirty = true;
            }
          } else {
            if (
              ('checked' in def && def.checked !== node.checked) ||
              def.value !== (node.value === undefined || node.value === null ? '' : node.value)
            ) {
              dirty = true;
            }
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err);
      } finally {
        this.dirty = dirty;
      }
    });
  }

  private _onKeyUp(e: KeyboardEvent) {
    switch (e.code || e.keyCode) {
      case ENTER_KEY_CODE:
      case 'Enter':
      case 'NumpadEnter':
        e.stopPropagation();
        this.submit();
        break;
      default:
        this.checkDirty();
        break;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // Options for the observer (which mutations to observe)
    const config = {attributes: false, childList: true, subtree: false};

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver((list: MutationRecord[]) => {
      for (const mutation of list) {
        if (mutation.type === 'childList') {
          // Monitor slot for nodes created later
          mutation.addedNodes.forEach((node: any) => {
            if (node.name) {
              this.addInput(node);
            }
          });
        }
      }
    });

    // Start observing the target node for configured mutations
    this.observer!.observe(this, config);
    this.addEventListener('keyup', this._onKeyUp);
    this.addEventListener('change', this._handleOnChange);
  }

  disconnectedCallback(): void {
    this.removeEventListener('keyup', this._onKeyUp);
    this.removeEventListener('change', this._handleOnChange);

    // Clean observer if needed
    if (this.observer) {
      this.observer.disconnect();
    }

    super.disconnectedCallback();
  }

  /**
   * @private
   */
  private _handleOnChange() {
    this.checkDirty();
  }

  /**
   * @private
   */
  private _renderResetButton() {
    return !this.hideResetButton
      ? html` <exmg-button class="reset" @click="${this.onResetBtnClick}">${this.resetButtonCopy}</exmg-button> `
      : '';
  }

  /**
   * @private
   */
  private renderSubmitButton() {
    return !this.hideSubmitButton
      ? html`
          <exmg-button
            unelevated
            @click="${this._onSubmitBtnClick}"
            ?disabled="${this.submitting || (this.disableSubmitNoChanges && !this.dirty)}"
            ?loading=${this.submitting}
            >${this.submitButtonCopy}</exmg-button
          >
        `
      : '';
  }

  /**
   * @protected
   */
  protected renderActions() {
    if (this.hideSubmitButton && this.hideResetButton) {
      return '';
    }

    return html` <div class="actions">${this._renderResetButton()} ${this.renderSubmitButton()}</div> `;
  }

  /**
   * @protected
   */
  protected render() {
    const classes = {
      showError: !!this.errorMessage,
    };
    return html`
      <div class="error ${classMap(classes)}">
        <span class="body">
          <span class="body-content">
            ${warningIcon}
            <span class="msg">${this.errorMessage}</span>
          </span>
        </span>
      </div>
      <iron-form id="ironForm">
        <form id="form">
          <slot></slot>
        </form>
      </iron-form>
      ${this.renderActions()}
    `;
  }
}
