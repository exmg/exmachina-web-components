# `<exmg-button>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-button.svg)](https://www.npmjs.com/package/@exmg/exmg-button)

# exmg-form

The Exmg Form enhances form design by offering a more intuitive layout visualization, streamlining the user experience with several key features. These include:

- Automated form validity checks, ensuring data integrity.
- Dynamic submit button control, which enables or disables the button based on form completeness.
- JSON output capability, allowing for easy data serialization and integration.
- A loading spinner, providing a visual indicator for asynchronous form submissions.

## Installation

```sh
npm install @exmg/exmg-form
```

## Example Usage

### Text

```html
<exmg-form class="has-aside" @dialog-submit="${doFormAction}">
  <div slot="toolbar" class="toolbar"><div class="title">Create contact</div></div>
  <form>
    <div class="row">
      <md-filled-text-field name="firstname" dialogFocus label="First Name" required></md-filled-text-field>
      <md-filled-text-field name="lastname" label="Last Name" required></md-filled-text-field>
    </div>
    <div class="row">
      <md-filled-text-field name="company" label="Company"></md-filled-text-field>
      <md-filled-text-field name="amount" label="Amount" type="number" min="0" max="10"></md-filled-text-field>
    </div>
    <md-filled-text-field
      name="email"
      label="Email"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
      required
    ></md-filled-text-field>
    <md-filled-text-field name="phone" label="Phone" required></md-filled-text-field>
  </form>
  <div slot="aside">
    Ex Machina will send notices about the Data <a href="#">Processing Terms</a> and EU General Data Protection
    Regulation to your primary contact. If your organization has a data protection officer or an EU representative, add
    their contact information.
  </div>
</exmg-form>
```

```js
   async function doFormAction(e: CustomEvent<unknown>) {
    const formDialog = e.target as ExmgForm;
    try {
      formDialog.submitting = true;
      // Do server call
      // Show success message
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      formDialog.submitting = false;
    }
  }
```

## API

### Properties/Attributes

| Name              | Type      | Default  | Description                                               |
| ----------------- | --------- | -------- | --------------------------------------------------------- |
| `submitBtn`       | `string`  | `Save`   | Submit button copy                                        |
| `cancelBtn`       | `string`  | `Cancel` | Cancel button copy                                        |
| `submitting`      | `boolean` | false    | Indicated form submit in progress and disables the button |
| `hasAsideContent` | `boolean` | false    | Indicated if form has a side help section                 |

For other options see the m3 docs:

- [Material 3 Button Docs](https://github.com/material-components/material-web/blob/main/docs/components/button.md)

## Additional references

- [Demo / Docs](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-button)
