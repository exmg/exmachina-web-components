# `<exmg-search>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-search.svg)](https://www.npmjs.com/package/@exmg/exmg-search)

# exmg-search

Exmg search provides an search input in material 3 style

## Installation

```sh
npm install @exmg/exmg-search
```

## Example Usage

```html
<exmg-search placeHolder="Filter table.." @search-value-change="${() => console.log('update')}"></exmg-search>
```

## API

### Properties/Attributes

| Name          | Type      | Default  | Description                                     |
| ------------- | --------- | -------- | ----------------------------------------------- |
| `bubbles`     | `boolean` | _false_  | Whether or not the change events need to bubble |
| `placeHolder` | `string`  | `Search` | Default value for placeholder                   |

## Styles

| Custom property                        | Description            | Default                                      |
| -------------------------------------- | ---------------------- | -------------------------------------------- |
| `--exmg-search-outline-color`          | outline color          | `--md-outlined-field-hover-outline-width`;   |
| `--exmg-search-outline-width`          | outline width          | `1px`;                                       |
| `--exmg-search-container-shape`        | container shape        | `4px`;                                       |
| `--exmg-search-focus-input-text-color` | focus input text color | `--md-sys-color-on-surface`;                 |
| `--exmg-search-focus-label-text-color` | focus label text color | `--md-sys-color-primary`;                    |
| `--exmg-search-focus-icon-color`       | focus icon color       | `--md-sys-color-on-surface-variant`;         |
| `--exmg-search-focus-outline-color`    | focus outline color    | `--md-sys-color-primary`;                    |
| `--exmg-search-focus-outline-width`    | focus outline width    | `1px`;                                       |
| `--exmg-search-hover-input-text-color` | hover input text color | `--md-sys-color-on-surface`;                 |
| `--exmg-search-hover-label-text-color` | hover label text color | `--md-sys-color-on-surface`;                 |
| `--exmg-search-hover-outline-color`    | hover outline color    | `--md-sys-color-on-surface`                  |
| `--exmg-search-input-text-color`       | input text color       | `--md-sys-color-on-surface`;                 |
| `--exmg-search-input-text-font`        | input text font        | `--md-sys-typescale-body-large-font`;        |
| `--exmg-search-input-text-line-height` | input text line height | `--md-sys-typescale-body-large-line-height`; |
| `--exmg-search-input-text-size`        | input text size        | `--md-sys-typescale-body-large-size`;        |
| `--exmg-search-input-text-weight`      | input text weight      | `--md-sys-typescale-body-large-weight`;      |
| `--exmg-search-label-text-color`       | label text color       | `md-sys-color-on-surface-variant`;           |
| `--exmg-search-label-text-font`        | label text font        | `--md-sys-typescale-body-large-font`;        |
| `--exmg-search-label-text-line-height` | label line height      | `--md-sys-typescale-body-large-line-height`; |
| `--exmg-search-label-text-size`        | label text size        | `--md-sys-typescale-body-large-size`;        |
| `--exmg-search-label-text-weight`      | label weight           | `--md-sys-typescale-body-large-weight`;      |
| `--exmg-search-icon-color`             | icon color             | `--md-sys-color-on-surface-variant`;         |
| `--exmg-search-icon-size`              | icon size              | `24px`;                                      |
| `--exmg-search-outline-color`          | outline color          | `--md-sys-color-outline`;                    |
| `--exmg-search-outline-width`          | outline color width    | `1px`;                                       |

## Additional references

- [Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-search)
