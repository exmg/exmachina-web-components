# `<exmg-form>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-form.svg)](https://www.npmjs.com/package/@exmg/exmg-form)

# exmg-form

This component provides basic form functionality. It is made on top of `<iron-form>`.

You can put any children elements inside of it, but only elements implementing IronFormElementBehavior will be serialized.
Also, any element implementing IronFormElementBehavior have to implement validate() method. In other case form will not be working.

Read more: IronFormElementBehavior (https://github.com/PolymerElements/iron-form-element-behavior).

## Installation

```sh
npm install @exmg/exmg-copy-to-clipboard
```

## Example Usage

### Standard

```html
<exmg-form
  @submit="${this.submit}"
  @cancel="${this.cancel}"
  ?hide-cancel-button="${false}"
  submit-button-copy="Submit"
  ?inline="${false}"
>
  <paper-input label="text input" required></paper-input>
  <paper-input label="text input" value="pre-filled"></paper-input>
  <paper-input label="password input" type="password"></paper-input>
  <paper-input label="disabled input" disabled value="batman"></paper-input>
  <paper-input name="name" label="Summary" required always-float-label></paper-input>
  <paper-input
    name="estimate"
    label="Estimates"
    type="number"
    always-float-label
    style="max-width:180px;"
  ></paper-input>

  <paper-textarea label="autoresizing textarea input"></paper-textarea>

  <exmg-paper-combobox label="Project" name="combobox" style="max-width:280px;" always-float-label required>
    <paper-item>PlayToTV</paper-item>
    <paper-item>Website</paper-item>
  </exmg-paper-combobox>
  <p class="help">
    Some issue types are unavailable due to incompatible field configuration and/or workflow associations.
  </p>
  <hr />
  <p class="help">Start typing to get a list of possible matches.</p>
  <exmg-paper-token-input name="tokens" label="Components" always-float-label>
    <paper-item>javascript</paper-item>
    <paper-item>css</paper-item>
  </exmg-paper-token-input>
  <p class="help">Start typing to get a list of possible matches or press down to select.</p>
  <p class="help">Estimated time needed to resolve this issue in hours.</p>
  <label>Message</label>
  <exmg-markdown-editor name="markdown" required>
    <marked-element markdown="# Hello Word!">
      <div slot="markdown-html"></div>
    </marked-element>
  </exmg-markdown-editor>
</exmg-form>
```

## API

### Slots

| Name      | Description         |
| --------- | ------------------- |
| _default_ | Form input elements |

### Properties/Attributes

| Name                                  | Type      | Default    | Description                                                                                 |
| ------------------------------------- | --------- | ---------- | ------------------------------------------------------------------------------------------- |
| `hide-submit-button'`                 | `boolean` | _false_    | Option to hide submit button                                                                |
| `hide-reset-button'`                  | `boolean` | _false_    | Option to hide reset button                                                                 |
| `submit-button-copy'`                 | `string`  | _'Submit'_ | Default submit button copy                                                                  |
| `reset-button-copy'`                  | `string`  | _'Reset'_  | Default reset button copy                                                                   |
| `disable-submit-no-changes'`          | `boolean` | _false_    | With this option the disable button will be disabled while there are no changes in the form |
| `bubbles'`                            | `boolean` | _false_    | Setting this attribute will cause its                                                       |
| events to bubble to the window object |

### Methods

| Name          | Description                             |
| ------------- | --------------------------------------- |
| `submit`      | Submit the form when it's valid         |
| `handleError` | Error handler for form                  |
| `reset`       | Resets the form and throws _form-reset_ |

### Events

| Name     | Description                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `submit` | When submit button pressed. Will contain all form serialized data. Submit event will not fire when any of required fields are not set. |
| `cancel` | When cancel button pressed.                                                                                                            |
| `dirty`  | When the user edit an editable in the form. Is thrown only once.                                                                       |

### CSS Custom Properties

| Name                                 | Description                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| `--exmg-form-internal-height`        | set the height of slot container - handy when wanting to control max-height of form. |
| `--exmg-form-internal-padding-right` | set the padding right for the form internal element.                                 |
| `--exmg-form-actions-padding-right`  | set the padding right for the actions buttons.                                       |
| `--exmg-form-actions-padding-bottom` | set the padding bottom for the actions buttons.                                      |

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgForm.html)
