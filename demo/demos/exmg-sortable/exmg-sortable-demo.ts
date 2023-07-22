import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@exmg/exmg-sortable/exmg-sortable.js';
import { USERS } from './data/users.js';

@customElement('exmg-sortable-demo')
export class SortableDemo extends LitElement {
  @property({ type: Array })
  users: any[] = USERS;

  @property({ type: Object })
  externalSortableHost?: HTMLElement;

  static styles = [
    css`
      :host {
        color: var(--md-sys-color-on-surface);
      }
      ul,
      li {
        margin-left: 0;
        padding-left: 0;
      }
      h2 {
        margin-top: 2.5rem;
      }
      li {
        display: flex;
        padding: 10px 15px;
        border-bottom: 1px solid var(--md-sys-color-outline);
      }

      li.cloned {
        background: var(--md-sys-color-surface);
        width: 100%;
        box-sizing: border-box;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        opacity: 0.9;
        border-bottom: 1px solid var(--md-sys-color-surface);
      }

      li.dragged {
        background: var(--md-sys-color-surface);
        opacity: 0.25;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) inset;
      }

      li > strong {
        flex-grow: 1;
      }

      li > span {
        width: 30%;
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        padding: 10px 15px;
        border-bottom: 1px solid var(--md-sys-color-outline);
      }

      tr.dragged {
        background: var(--md-sys-color-surface);
        opacity: 0.25;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) inset;
      }

      tr.cloned {
        background: var(--md-sys-color-surface);
        width: 100%;
        box-sizing: border-box;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        opacity: 0.9;
      }

      td.handle {
        padding: 0;
        vertical-align: middle;
        cursor: move;
      }
      td.handle span {
        display: block;
        background: gray;
        width: 20px;
        height: 20px;
        margin: 10px;
      }

      .boxes {
        margin-top: 2em;
        overflow: hidden;
      }

      .box {
        float: left;
        width: 150px;
        height: 150px;
        padding: 10px;
        margin: 20px;
        box-sizing: border-box;
        cursor: move;
        background-color: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface);
        border: 1px solid var(--md-sys-color-outline);
        border-radius: 10px;
      }

      .box.dragged {
        opacity: 0;
      }
    `,
  ];

  protected async firstUpdated(): Promise<void> {
    await this.updateComplete;

    this.externalSortableHost = this.shadowRoot!.querySelector<HTMLElement>('#externalSortableHost')!;
  }

  constructor() {
    super();

    this.orderChange = this.orderChange.bind(this);
  }

  /**
   * Simple order update: splices the data array to change physical rendering order.
   */
  private orderChange(e: CustomEvent) {
    setTimeout(() => {
      const { sourceIndex, targetIndex } = e.detail;
      const items = [...this.users];
      const movedElement = items[sourceIndex];

      movedElement.amountOfMoves = (movedElement.amountOfMoves || 0) + 1;

      items.splice(sourceIndex, 1);
      items.splice(targetIndex, 0, movedElement);

      this.users = items;
    }, 0);
  }

  render() {
    return html`
      <h2>List (Animated)</h2>
      <exmg-sortable animation-enabled orientation="vertical" @dom-order-change="${this.orderChange}">
        <ul>
          ${this.users.map((user) => {
            return html`
              <li>
                <strong>${user.firstName}</strong>
                <span>${user.lastName}</span>
                <span>${user.email}</span>
              </li>
            `;
          })}
        </ul>
      </exmg-sortable>
      <h2>Cards (Animated))</h2>
      <exmg-sortable item-selector="div.box" animation-enabled @dom-order-change="${this.orderChange}">
        <div class="boxes">
          ${this.users.map((user) => {
            return html` <div class="box">${user.firstName}</div> `;
          })}
        </div>
      </exmg-sortable>

      <h2>Table with custom handle</h2>
      <exmg-sortable
        item-selector="tr"
        handle-selector=".handle"
        orientation="vertical"
        @dom-order-change="${this.orderChange}"
      >
        <table>
          ${this.users.map((user) => {
            return html`
              <tr>
                <td class="handle">
                  <md-icon style="pointer-events: none; margin: 6px;">drag_handle</md-icon>
                </td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
              </tr>
            `;
          })}
        </table>
      </exmg-sortable>

      <h2>Table with custom handle and external sortable node host</h2>
      <table id="externalSortableHost">
        ${this.users.map((user) => {
          return html`
            <tr>
              <td class="handle"><span></span></td>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.email}</td>
            </tr>
          `;
        })}
      </table>
      <exmg-sortable
        item-selector="tr"
        handle-selector=".handle span"
        orientation="vertical"
        @dom-order-change="${this.orderChange}"
        .sortableHostNode="${this.externalSortableHost}"
      ></exmg-sortable>

      <h2>Manipulate sorted data</h2>
      <exmg-sortable item-selector="div.box" @dom-order-change="${this.orderChange}">
        <div class="boxes">
          ${this.users.map((user) => {
            return html`
              <div class="box">
                ${user.firstName}<br />
                Moves: ${user.amountOfMoves || 0}
              </div>
            `;
          })}
        </div>
      </exmg-sortable>
    `;
  }
}
