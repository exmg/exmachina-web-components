# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

<!--
   PRs should document their user-visible changes (if any) in the
   Unreleased section, uncommenting the header as necessary.
-->
<!-- ### Added -->
<!-- ### Changed -->
<!-- ### Removed -->
<!-- ### Fixed -->

## [6.0.0] - 2021-02-16 [Breaking]

- Code cleanup
- Removed external output for rendering markdown
- HTML output direct in slot of component

```html
<exmg-markdown-editor markdown="# Test">
  <div class="preview-html">
    <h1>Test</h1>
  </div>
</exmg-markdown-editor>
```

## [4.0.0] - 2019-01-29 [Breaking]

### Added

- Typescript definitions located in \*.d.ts files
- Rewrite component to LitElement
- Package `@polymer/marked-element` has been added to dependencies

### Changed

- `[Breaking]` Two way data binding has been removed. To obtain `fullscreen` value handler should be added:
  - event `exmg-markdown-editor-fullscreen` where event.detail is boolean with current fullscreen state
  - example for lit-element
  ```html
  <exmg-markdown-editor @exmg-markdown-editor-fullscreen="${handler}"> </exmg-markdown-editor>
  ```
  - example for polymer
  ```html
  <exmg-markdown-editor on-exmg-markdown-editor-fullscreen="_handler"> </exmg-markdown-editor>
  ```
- `[Breaking]` Two way data binding has been removed. To obtain `markdown` value handler should be added:
  - event `value-change` where event.detail is string with current markdown state
  - example for lit-element
  ```html
  <exmg-markdown-editor @value-change="${handler}"> </exmg-markdown-editor>
  ```
  - example for polymer
  ```html
  <exmg-markdown-editor on-value-change="_handler"> </exmg-markdown-editor>
  ```
