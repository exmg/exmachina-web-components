import { html } from "lit-html";

import '@exmg/exmg-button/exmg-button';

export default {
  title: 'Exmg Button',
};

const Template = ({ content, raised, unelevated, outlined, dense, disabled, loading }) =>
  html`<exmg-button ?loading=${loading} ?raised=${raised} ?unelevated=${unelevated} ?outlined=${outlined} ?dense=${dense} ?disabled=${disabled}>${content}</exmg-button>`;

export const Simple = Template.bind({});

Simple.args = {
  content: 'BUTTON',
  raised: false,
  unelevated: false,
  outlined: false,
  dense: false,
  disabled: false,
  loading: false,
};
