import {html} from 'lit';
import {ExmgElement} from '@exmg/exmg-base';
import {classMap} from 'lit/directives/class-map.js';
import {property} from 'lit/decorators/property.js';
import {customElement} from 'lit/decorators/custom-element.js';
import {observer} from '@exmg/exmg-base/observer/observer.js';
import {style as exmgRadioGroupStyles} from './styles/exmg-radio-group-styles-css.js';
import {ExmgRadioGroupItem} from './exmg-radio-group-item.js';

const ENTER_KEY_CODE = 13;

@customElement('exmg-radio-group')
export class ExmgRadioGroup extends ExmgElement {
  @property({type: String})
  name?: string;

  @property({type: String, reflect: true})
  @observer(function(this: ExmgRadioGroup) {
    this.setProperSelectedItem();
  })
  selected = '';

  @property({type: Boolean})
  required = false;

  @property({type: Boolean})
  vertical = false;

  @property({type: Boolean})
  wrap = false;

  @property({type: Boolean, reflect: true, attribute: 'invalid'})
  invalid = false;

  private litItemName = '';

  private _onKeyPressed: any;
  private _handleRadioGroupItemChanged: any;

  get value() {
    return this.selected;
  }

  set value(value) {
    this.selected = value;
  }

  constructor() {
    super();
    this._onKeyPressed = this.onKeyPressed.bind(this);
    this._handleRadioGroupItemChanged = this.handleRadioGroupItemChanged.bind(this);
  }

  private onKeyPressed(e: KeyboardEvent) {
    switch (e.code || e.keyCode) {
      case ENTER_KEY_CODE:
      case 'Enter':
      case 'NumpadEnter':
        if (!e.ctrlKey) {
          e.stopPropagation();
        }
        break;
    }
  }

  validate() {
    this.invalid = this.required && !this.selected;

    return !this.invalid;
  }

  static styles = [exmgRadioGroupStyles];

  private handleRadioGroupItemChanged(e: Event) {
    const {detail} = e as CustomEvent;

    this.selected = detail.value;

    this.dispatchEvent(new CustomEvent('exmg-radio-group-changed', {detail: {selected: this.selected}, composed: true, bubbles: true}));
  }

  private setProperSelectedItem() {
    this.querySelectorAll('exmg-radio-group-item').forEach((item: Element) => {
      const litItem = item as ExmgRadioGroupItem;

      litItem.name = this.litItemName;
      litItem.checked = this.selected === litItem.value;
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('keyup', this._onKeyPressed);
    this.addEventListener('exmg-radio-group-item-changed', this._handleRadioGroupItemChanged);

    this.litItemName = `_${this.name}-options`;

    this.setProperSelectedItem();
  }

  disconnectedCallback() {
    this.removeEventListener('keyup', this._onKeyPressed);
    this.removeEventListener('exmg-radio-group-item-changed', this._handleRadioGroupItemChanged);

    super.disconnectedCallback();
  }

  render() {
    const classes = {
      vertical: this.vertical,
      horizontal: !this.vertical,
      wrap: this.wrap,
    };
    return html`
      <div class="radio-group-container ${classMap(classes)}" ?invalid="${this.invalid}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-radio-group': ExmgRadioGroup;
  }
}
