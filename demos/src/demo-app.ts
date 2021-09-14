import { customElement, html, LitElement } from "lit-element";
import demoAppStyles from "./styles/demo-app-css.js";

@customElement("demo-app")
export class DemoApp extends LitElement {
  static styles = [demoAppStyles];

  protected render() {
    return html`RODRIGUEZ`;
  }
}
