import {LitElement, html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../exmg-sortable.js';

@customElement('exmg-sortable-demo')
export class SortableDemo extends LitElement {
  @property({type: String})
  public dataUrl = '';

  @property({type: Array})
  public users: any[] = [];

  @property({type: Object})
  private externalSortableHost?: HTMLElement;

  protected async firstUpdated(): Promise<void> {
    await this.updateComplete;
    setTimeout(() => {
      this.externalSortableHost = this.shadowRoot!.querySelector<HTMLElement>('#externalSortableHost')!;
    });
  }

  public constructor() {
    super();

    this.orderChange = this.orderChange.bind(this);
  }

  /**
   * Simple order update: splices the data array to change physical rendering order.
   */
  private orderChange(e: CustomEvent): void {
    setTimeout(() => {
      const {sourceIndex, targetIndex} = e.detail;
      const items = [...this.users];
      const movedElement = items[sourceIndex];

      movedElement.amountOfMoves = (movedElement.amountOfMoves || 0) + 1;

      items.splice(sourceIndex, 1);
      items.splice(targetIndex, 0, movedElement);

      this.users = items;
    }, 0);
  }

  private handleIronAjaxResponse(response: CustomEvent): void {
    this.users = response.detail.xhr.response;
  }

  public render(): TemplateResult {
    return html`
      <style>
        ul,
        li {
          margin-left: 0;
          padding-left: 0;
        }

        li {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid silver;
        }

        li.cloned {
          background: white;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          opacity: 0.9;
        }

        li.dragged {
          background: #c0c0c0;
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
          border-bottom: 1px solid silver;
        }

        tr.dragged {
          background: #c0c0c0;
          opacity: 0.25;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) inset;
        }

        tr.cloned {
          background: white;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          opacity: 0.9;
        }

        td.handle {
          padding: 0;
          vertical-align: middle;
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
          background: #f0f0f0;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }

        .box.dragged {
          opacity: 0;
        }
      </style>

      <iron-ajax auto="" url="data/users.json" handle-as="json" @response="${this.handleIronAjaxResponse}"></iron-ajax>

      <h2>List</h2>
      <exmg-sortable orientation="vertical" @dom-order-change="${this.orderChange}">
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
      <h2>Cards with animation</h2>
      <exmg-sortable
        item-selector="div.box"
        animation-enabled
        animation-timing="{ 'duration': 500 }"
        @dom-order-change="${this.orderChange}"
      ></exmg-sortable>
        <div class="boxes">
          ${this.users.map((user) => {
            return html` <div class="box">${user.firstName}</div> `;
          })}
        </div>
      </exmg-sortable>

      <h2>Table with custom handle</h2>
      <exmg-sortable
        item-selector="tr"
        handle-selector=".handle span"
        orientation="vertical"
        @dom-order-change="${this.orderChange}"
      >
        <table>
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
