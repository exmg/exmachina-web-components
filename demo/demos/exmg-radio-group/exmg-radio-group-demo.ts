import {LitElement, html, property, customElement} from 'lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import './exmg-icons.js';
import '@exmg/exmg-radio-group/exmg-radio-group.js';
import '@exmg/exmg-radio-group/exmg-radio-group-item.js';

@customElement('exmg-radio-group-demo')
export class ExmgRadioGroupDemo extends LitElement {
  @property({type: String})
  private selected = 'option2';

  constructor() {
    super();
    this.selected = 'option2';
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keyup', this.handleKeyUp);
  }
  disconnectedCallback() {
    this.removeEventListener('keyup', this.handleKeyUp);
    super.disconnectedCallback();
  }

  handleKeyUp() {
    // console.log('KEYUP');
  }

  onPaperRadioGroupChanged(e: CustomEvent) {
    this.selected = e.detail.selected;
  }

  render() {
    return html`
    <style>
      :host {
        font-family: var(
          --mdc-typography-headline3-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-size: 15px;
      }
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .main > div {
        width: 100%;
        border-bottom: 1px solid #666;
      }
      div > * {
        padding: 8px;
      }
    </style>

    <div class="main">
      <div>
        <h4>Horizontal radio group with blocks</h4>
        <exmg-radio-group name="license" selected="${this.selected}" @exmg-radio-group-changed="${this.onPaperRadioGroupChanged}">
          <exmg-radio-group-item value="option1">
            <div slot="title">Option 1</div>
            <div slot="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </exmg-radio-group-item>
          <exmg-radio-group-item value="option2">
            <div slot="title">Option 2</div>
            <div slot="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </exmg-radio-group-item>
          <exmg-radio-group-item value="option3" disabled>
            <div slot="title">Option 3</div>
            <div slot="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </exmg-radio-group-item>
        </exmg-radio-group>
      </div>

      <div>
        <h4>Vertical radio group with blocks and hidden radio buttons and custom style</h4>
        <exmg-radio-group
          class="custom-style"
          name="license"
          selected="${this.selected}"
          @exmg-radio-group-changed="${this.onPaperRadioGroupChanged}"
          vertical
        >
          <exmg-radio-group-item value="option1" hide-radio-button>
            <div slot="title">Option 1</div>
            <div slot="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </exmg-radio-group-item>
          <exmg-radio-group-item value="option2" hide-radio-button>
            <div slot="title">Option 2</div>
            <div slot="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </exmg-radio-group-item>
        </exmg-radio-group>
      </div>

      <div>
        <h4>Horizontal radio group with simple buttons</h4>
        <exmg-radio-group name="license" selected="${this.selected}" @exmg-radio-group-changed="${this.onPaperRadioGroupChanged}">
          <exmg-radio-group-item value="option1">
            Option 1
          </exmg-radio-group-item>
          <exmg-radio-group-item value="option2">
            Option 2
          </exmg-radio-group-item>
        </exmg-radio-group>
      </div>
    </div>
  `;
  }
}
