# ExMachina WebComponents

## Content

- [Links](#links)
- [Features](#features)
- [Setup](#setup)
- [Development](#development)
- [Configuration Files](#configuration)
- [Commands](#commands)

## Links {#links}

[Repository](https://github.com/exmg/exmachina-web-components/)

[Documentation](https://exmg.github.io/exmachina-web-components)

[Demos](https://exmg.github.io/exmachina-web-components/demo/index.html)

## Features {#features}

ExMachina WebComponents packages features and documentations can be found in [Exmg Notion page](https://www.notion.so/exmachina/1396d2022f444059903bd1863e78c23d?v=5350291887d24646b67ac6b4b7c9202d)

## Setup {#setup}

`git clone` the project, then simply run `npm i`

<aside>
💡 Your NPM CLI must be connected to an authorized NPM account on both `@exmg` namespaces in NPM.
To do so, please follow the [instructions](https://docs.npmjs.com/cli/v6/commands/npm-adduser).

</aside>

## Development {#development}

The development process takes place on dedicated feature or fix branches.
Each branch is then merged into `master` branch.

Please refer to the naming conventions for branches in the [good practices section](https://www.notion.so/Branching-26261b1bd7f24a29ada41e59414159ac?pvs=21).

### Using Lerna, NPX and NPM Workspace

NPM Workspace works well to link packages all together.
Using `npm i` will install all packages in `packages/*` and specified in root `package.json`

To ensure the usage of the correct lerna version in a package, it is preffered to use `npx lerna`.

To add a dependency in a specific package

```bash
npm i sass -w exmg-button -w exmg-breadcrumbs
```

## Configuration Files {#configuration}

### `web-dev-server.config.js`

Allows local development. Defines the root directory of the project and redirects `/demo/index.html` into `/` for simplicity

### `tsconfig.json`

Based on Typescript configuration in `@exmg/ts-config-lit`

Includes paths of all packages and demo in order for Typscript to build each one individually

### `prettier.config.cjs`

Based on Prettier configuration in `@exmg/prettier-config-lit`

### `.eslintrc.js`

Based on Eslint configuration in `@exmg/eslint-config-lit`

## Commands {#commands}

```bash
    npm run clean : "del-cli packages/*/node_modules packages/*/package-lock.json && npm run clean:styles & npm run clean :typescript" # Cleans files
    npm run clean:styles : "del-cli packages/**/*-css.*" # Cleans *css.ts and *css.js files
    npm run clean:typescript : "tsc --build --clean" # Cleans built files from TS
    npm run lint: "npm run build:typescript && npm run lint:eslint && npm run lint:prettier" # Lint
    npm run format: "npm run lint:eslint -- --fix && prettier \"**/*.js\" \"**/*.ts\" --write --ignore-path .gitignore" # Fornat
    npm run lint:eslint : "eslint \"packages/**/*.ts\" \"demo/**/*.ts\"" # Eslint
    npm run lint:prettier : "prettier \"**/*.js\" \"**/*.ts\" --check --ignore-path .gitignore" # Prettier
    npm run start : "node ./scripts/parseElements.js && npm run build && concurrently --names watch # serve \"npm run watch\" \"web-dev-server --config ./web-dev-server.config.js\"" # Starts demos and watchers for components development
    npm run watch :  "node scripts/watcher.js" # Runs the watcher script
    npm run watch:styles : "exmg-lit-cli sass" # Runs the styles watcher
    npm run build:  "npm run build:styles && npm run build:typescript" # Builds the components and demos
    npm run build:typescript : "tsc --build --verbose" # Build all typescript in components and demos
    npm run build:demo-styles : "exmg-lit-cli sass -f \"demo/**/*.scss\"" # Builds the styles in the demos
    npm run build:styles : "npx lerna run --stream build:styles && npm run build:demo-styles" # Builds styles in components and demos
    npm run version : "npx lerna version" # Runs lerna version through NPX
    npm run build:demo : "node ./scripts/parseElements.js && npm run build && rollup --config ./rollup.config.js" # Builds demos entirely
    npm run run:demo : "web-dev-server ./docs/demo/index.html" # Runs demos
    npm run build:docs : "npm run build && rm -rf ./docs && npm run build:demo && ./node_modules/.bin/jsdoc -c ./jsdoc.conf.json -R README.md && node ./scripts/processDemoInDocumentation.js" # Builds docs
    npm run run:docs : "web-dev-server /docs/index.html" # Runs docs
```
