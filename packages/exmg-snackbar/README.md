# `<exmg-snackbar>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-snackbar.svg)](https://www.npmjs.com/package/@exmg/exmg-snackbar)

# @exmg/exmg-snackbar

Snackbar element to show information and feedback based on user interaction.

Based on `mwc-snackbar`

## Installation

```sh
npm install @exmg/exmg-snackbar
```

## Example Usage

```html
  <exmg-button unelevated @click=${() =>
    this.shadowRoot?.querySelector<ExmgSnackbar>('#default-snackbar')?.show()}>
    Open default
  </exmg-button>
  <exmg-snackbar id="default-snackbar" labelText="Default auto close"></exmg-snackbar>
```

## API

### Slots

| Name      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `icon`    | Icon of the snackbar                                          |
| `action`  | Action element of the snackbar                                |
| `dismiss` | Dismiss element of the snackbar, used to dismiss the snackbar |

### Properties/Attributes

| Name            | Type      | Default                                                                                                                                                                                     | Description                                                                  |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `variant`       | `string`  | _null_                                                                                                                                                                                      | Sets the Snackbar variant, options from MWC ('positive', 'negative', 'info') |
| `xOffset`       | `Number`  | _0_                                                                                                                                                                                         | The horizontal offset of the snackbar                                        |
| `yOffset`       | `Number`  | _0_                                                                                                                                                                                         | The vertical offset of the snackbar                                          |
| `open`          | `boolean` | Whether the snackbar is currently open.                                                                                                                                                     |
| `timeoutMs`     | `number`  | Automatic dismiss timeout in milliseconds. Value must be between `4000` and `10000` (or `-1` to disable the timeout completely) or an error will be thrown. Defaults to `5000` (5 seconds). |
| `closeOnEscape` | `boolean` | Whether the snackbar closes when it is focused and the user presses the ESC key. Defaults to `false`.                                                                                       |
| `labelText`     | `string`  | The text content of the label element.                                                                                                                                                      |
| `stacked`       | `boolean` | Enables the _stacked_ layout (see above).                                                                                                                                                   |
| `leading`       | `boolean` | Enables the _leading_ layout (see above).                                                                                                                                                   |

### Methods

| Name                                 | Description                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| `show() => void`                     | Opens the snackbar.                                                                     |
| `close(reason: string = '') => void` | Closes the snackbar, optionally with the specified reason indicating why it was closed. |

### Events

| Name                  | Detail              | Description                                                                                                                                                                              |
| --------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MDCSnackbar:opening` | `{}`                | Indicates when the snackbar begins its opening animation.                                                                                                                                |
| `MDCSnackbar:opened`  | `{}`                | Indicates when the snackbar finishes its opening animation.                                                                                                                              |
| `MDCSnackbar:closing` | `{reason?: string}` | Indicates when the snackbar begins its closing animation. `reason` contains the reason why the snackbar closed (`'dismiss'`, `'action'`, or a custom `string` via the `close` method).   |
| `MDCSnackbar:closed`  | `{reason?: string}` | Indicates when the snackbar finishes its closing animation. `reason` contains the reason why the snackbar closed (`'dismiss'`, `'action'`, or a custom `string` via the `close` method). |

### CSS Custom Properties

| Name                          | Default                                | Description                      |
| ----------------------------- | -------------------------------------- | -------------------------------- |
| `--mdc-snackbar-action-color` | ![](images/color_bb86fc.png) `#bb86fc` | Color of the action button text. |

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgSnackbar.html)
