# Exmg form drawer

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

Events:

1. **exmg-drawer-opened-changed** - when drawer shown/hidden 

Attributes:

1. **opened** - whether or not drawer is visible
2. **no-cancel-on-outside-click** - whether or not clicking outside drawer should close drawer


### \<exmg-form-drawer>

Wraps around **exmg-drawer**.

Provides form functionality to drawer:
* submit and cancel buttons
* title
* material styling
 
Events:

1. **exmg-drawer-opened-changed** - when drawer shown/hidden 

Attributes:

1. **opened** - whether or not drawer is visible
2. **no-cancel-on-outside-click** - whether or not clicking outside drawer should close drawer
3. **submit-btn-title** - title of submit button. Default "Submit"
4. **cancel-btn-title** - title of cancel button. Default "Cancel"
5. **keep-opened-on-submit-success** - whether or not drawer should be hidden after successful form submission
6. **reset-form-on-submit-success** - whether or not drawer form should be reset after successful form submission

#### Notes about drawer form

All dom markup passed as children into **exmg-form-drawer** will be wrapped into **exmg-form** underhood.

To properly handle form submission, you should call done() or error() on form instance after receiving **submit**
event from **exmg-form-drawer**. Please read https://github.com/ExmgElements/exmg-form docs for more info.

## Styling

You can define:

* color palette
* drawer max width

To define color palette you can define following variables:

* --exmg-drawer-color
* --exmg-drawer-bg-color
* --mdc-theme-primary
* --mdc-theme-on-surface
* --mdc-theme-surface
* --exmg-form-drawer-header-separator-color

See .scss/.ts files for more info.

Example:
```
exmg-form-drawer {
  --mdc-theme-primary: #0071dc;
}
```

To define drawer max width, you can:

* Define variable **--exmg-drawer-max-width**
* Pass max width directly into drawer component style attribute: ```style="max-width: 500px"``` 

## Usage

### Form drawer

```
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
    <br>
    <exmg-button
      unelevated
    >
      + Add answer
    </exmg-button>
  </exmg-form-drawer>
```
