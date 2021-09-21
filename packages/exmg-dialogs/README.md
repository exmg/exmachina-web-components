# \<exmg-dialogs\>

## Exmg Dialogs

### Form Dialog

Form dialogs will handle styling, validation and make form submit easier. Also a loading indicator will be shown during the submit handling.

Example of implementation in html

```html
<exmg-dialog-form title="Create account" button-copy="Save" @submit="${this.createAccount}">
  <paper-input name="name" label="Name" required></paper-input>
  <paper-input name="password" label="Password" required></paper-input>
</exmg-dialog-form>
```

Example of how submit could be handled

```js
createAccount(e) {
  const {detail, target} = e;
  const {name, password} = detail;

  try {
    // Throw error to simulate error
    if(password.length < 6) {
      throw Error('User password to simple')
    }

    // Do server call

    // notify dialog successfull
    target.done();
  } catch (error) {
    target.error(error);
  }
}
```

### Info Dialog

Info dialogs will handle styling, and content. Will throw a `done` event once the user clicked the button.

Example of implementation in html

```html
<exmg-dialog-info button-copy="Continue" @done="${this.done}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet pharetra turpis. Nullam tincidunt aliquet
    condimentum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet pharetra turpis. Nullam tincidunt aliquet
    condimentum.
  </p>
</exmg-dialog-info>
```

Example of implementation in html without close button option

```html
<exmg-dialog-info button-copy="Continue" hide-close-button @done="${this.done}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet pharetra turpis. Nullam tincidunt aliquet
    condimentum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet pharetra turpis. Nullam tincidunt aliquet
    condimentum.
  </p>
</exmg-dialog-info>
```

Example of how done could be handled

```js
done(e) {
  const {target} = e;
  // Closes the dialog ...
  target.close();
}
```

### Confirmation Dialogs

Easy way to display a pre styled confirmation dialog.

Example

```html
<exmg-dialog-confirm
  title="Confirmation"
  message="Are you sure you want to delete this item?"
  button-copy="Delete account"
  @submit="${this.deleteItem}"
>
</exmg-dialog-confirm>
```

```js
deleteItem(e) {
  const {target} = e;
  try {
    // Do server call

    // notify dialog successfull
    target.done();
  } catch (error) {
    target.error(error);
  }
}
```

## API

### `<exmg-dialog-form />`

| Property                     | Usage                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| title: _string_              | Displayed title of the Dialog                                                                                 |
| button-copy: _string_        | Displayed text of the submit button                                                                           |
| hide-close-button: _boolean_ | If set to `true` the dialog will not show a close icon                                                        |
| error-message: _string_      | Error text to display when the form is in error state                                                         |
| @submit                      | Event thrown when hitting the submit button, will serialize the form and return values in detail of the event |
| @cancel                      | Event thrown when hitting the cancel button                                                                   |

### `<exmg-dialog-confirm />`

| Property                     | Usage                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| title: _string_              | Displayed title of the Dialog                                                                                 |
| message: _string_            | Displayed message of the Dialog                                                                               |
| button-copy: _string_        | Displayed text of the submit button                                                                           |
| hide-close-button: _boolean_ | If set to `true` the dialog will not show a close icon                                                        |
| error-message: _string_      | Error text to display when the form is in error state                                                         |
| @submit                      | Event thrown when hitting the submit button, will serialize the form and return values in detail of the event |
| @cancel                      | Event thrown when hitting the cancel button                                                                   |

### `<exmg-dialog-confirm />`

> This element exposes a slot to wrap up any content you put in.

| Property                     | Usage                                                    |
| ---------------------------- | -------------------------------------------------------- |
| button-copy: _string_        | Displayed text of the submit button                      |
| hide-close-button: _boolean_ | If set to `true` the dialog will not show a close icon   |
| button-secondary: _boolean_  | If set to `true` the button will be with secondary theme |
| @done                        | Event thrown when hitting the main button                |

## Viewing Your Element

```
$ npm run start
```

## Running Tests

```
$ npm run test
```
