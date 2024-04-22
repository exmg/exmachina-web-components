# `<exmg-upload>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-upload.svg)](https://www.npmjs.com/package/@exmg/exmg-upload)

## Installation

```sh
npm install @exmg/exmg-upload
```

## Example Usage

### Standard Input

```html
<exmg-upload-input>
  <md-filled-text-field slot="input" label="imageUrl" name="imageUrl"
    ><md-icon-button slot="trailing-icon"><md-icon>upload</md-icon></md-icon-button></md-filled-text-field
  >
  <exmg-upload slot="upload" for="imageUrl" maxSize="10mb" serverType="local"> </exmg-upload>
</exmg-upload-input>
```
