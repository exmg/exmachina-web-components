import { html, LitElement, customElement, property } from "lit-element";

@customElement("test-form")
export class TestForm extends LitElement {
  @property({ type: String })
  public test?: string;

  protected render() {
    return html`RIRE ? -> <b>${this.test ? this.test : "No message"}</b>`;
  }
}
