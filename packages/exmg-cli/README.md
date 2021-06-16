# exmg-cli

- [sass-render](#sass-render)

  - [command options](#command-options-sass-render)

  - [examples](#examples-sass-render)

##

## sass-render

Main aim is to process and generate files `*.css and *.scss` into \*.ts

### Command options sass-render

| alias | option   | type    | description                                                                  |
| ----- | -------- | ------- | ---------------------------------------------------------------------------- |
| -s    | --source | string  | Template file to render sass into.                                           |
| -w    | --watch  | boolean | Starts the renderer in watch mode, looks at the from the root of the project |
| -h    | --help   | boolean | Print this message.                                                          |

### Examples sass-render

Process single file

`exmg-cli -s ./test.scss`

on the output file `test-css.ts` looks:

```text
import {css} from 'lit-element';

export const style = css`a{color:red}`;
export default style;
```

Finally we can import to LitElement

```typescript
import {LitElement} from 'lit-element';
import style from './test-css.js';

class MyElement extends LitElement {
  static styles = [style];
}
```

Process folder

`exmg-cli -s ./styles/*.scss`

Run in watch mode

`exmg-cli -w`
