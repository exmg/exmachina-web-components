# `<exmg-form-drawer>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-form-drawer.svg)](https://www.npmjs.com/package/@exmg/exmg-form-drawer)

This package provides dialog drawer functionality.

Components included:

1. **exmg-drawer** - basic component
2. **exmg-form-drawer** - form drawer

## Install

```bash
npm install @exmg/exmg-form-drawer
```

Before start ensure that you have installed `web-animation-js`. It is required by `@polymer/paper-dialog`.

```bash
npm install web-animation-js
```

Load this script in index.html

```html
<!-- Ensure Web Animations polyfill is loaded -->
<script src="../node_modules/web-animations-js/web-animations-next-lite.min.js"></script>
```

Some dependencies `@exmg/exmg-paper-combobox` use `@apply` to apply css mixins.
This require to load script in index.html

```html
<script src="../node_modules/@webcomponents/shadycss/apply-shim.min.js"></script>
```

## Components

### \<exmg-drawer>

It is basic component that probably should not be used directly.
It serves only as drawer without form functionality, so it is content agnostic.
You can pass any dom markup as children of this component.

### \<exmg-form-drawer>

Wraps around **exmg-drawer**.

Provides form functionality to drawer:

- submit and cancel buttons
- title
- material styling

## API

### Slots

| Name      | Description                 |
| --------- | --------------------------- |
| _default_ | Form elements within drawer |

### Properties/Attributes

| Name                            | Type      | Default | Description                                                                 |
| ------------------------------- | --------- | ------- | --------------------------------------------------------------------------- |
| `opened`                        | `boolean` | _None_  | whether or not drawer is visible                                            |
| `no-cancel-on-outside-click`    | `boolean` | _None_  | whether or not clicking outside drawer should close drawer                  |
| `submit-btn-title`              | `string`  | _None_  | title of submit button. Default "Submit"                                    |
| `cancel-btn-title`              | `string`  | _None_  | title of cancel button. Default "Cancel"                                    |
| `keep-opened-on-submit-success` | `boolean` | _None_  | whether or not drawer should be hidden after successful form submission     |
| `reset-form-on-submit-success`  | `boolean` | _None_  | whether or not drawer form should be reset after successful form submission |

### Events

| Name                         | Description              |
| ---------------------------- | ------------------------ |
| `exmg-drawer-opened-changed` | when drawer shown/hidden |

### CSS Custom Properties

| Name                                        | Description                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------ |
| `--exmg-drawer-color`                       | set the height of slot container - handy when wanting to control max-height of form. |
| `--exmg-drawer-bg-color`                    | set the padding right for the form internal element.                                 |
| `--mdc-theme-primary`                       | _None_                                                                               |
| `--mdc-theme-on-surface`                    | _None_                                                                               |
| `--mdc-theme-surface`                       | _None_                                                                               |
| `--exmg-form-drawer-header-separator-color` | Color of header seperator of form                                                    |
| `--exmg-drawer-max-width`                   | Max width of drawer                                                                  |

#### Notes about drawer form

All dom markup passed as children into **exmg-form-drawer** will be wrapped into **exmg-form** underhood.

To properly handle form submission, you should call done() or error() on form instance after receiving **submit**
event from **exmg-form-drawer**. Please read https://github.com/ExmgElements/exmg-form docs for more info.

## Usage

### Form drawer

```html
<exmg-form-drawer
  ?opened="${this.opened}"
  ?keep-opened-on-submit-success="${this.keepOpenedOnSubmitSuccess}"
  ?reset-form-on-submit-success="${this.resetFormOnSubmitSuccess}"
  ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
  @exmg-drawer-opened-changed="${this.handleOpenedChanged}"
  submit-btn-title="Create"
  @submit="${this.onSubmit}"
  @cancel="${this.onCancel}"
>
  <span slot="title">New event</span>
  <exmg-paper-combobox label="Type" name="type" selected="0" always-float-label>
    <paper-item>Trivia</paper-item>
    <paper-item>Other</paper-item>
  </exmg-paper-combobox>
  <paper-input name="question" label="Question" value="Who's Dylan Hartigan's favorite artist?" required></paper-input>
  <paper-input name="answer_a" label="Answer A" value="Beyoncé"></paper-input>
  <paper-input name="answer_b" label="Answer B" value="Eminem"></paper-input>
  <paper-input name="answer_c" label="Answer C" value="Ariana Grande"></paper-input>
  <br />
  <exmg-button unelevated> + Add answer </exmg-button>
</exmg-form-drawer>
```

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgFormDrawer.html)

- [Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-form-drawer)
