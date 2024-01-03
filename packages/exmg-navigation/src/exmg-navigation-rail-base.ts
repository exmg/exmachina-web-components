import { html } from 'lit';
import { ExmgElement } from '@exmg/lit-base/index.js';

export class ExmgNavigationRailBase extends ExmgElement {
  render() {
    return html`<div class="top"><slot name="top"></slot></div>
      <div class="nav"><slot></slot></div>
      <div class="bottom"><slot name="bottom"></slot></div>`;
  }
}
