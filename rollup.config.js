import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';

/**
 * Elements with a viable demo
 */
const elements = [
  'exmg-button',
  'exmg-grid',
  'exmg-dialogs',
  'exmg-tooltip',
  'exmg-radio-group',
  'exmg-sortable',
  'exmg-sidemenu',
  'exmg-copy-to-clipboard',
  'exmg-form',
  'exmg-form-drawer',
  'exmg-collapsed',
  'exmg-snackbar',
  'exmg-breadcrumbs',
];

const elementsConfigs = elements.map((element) => {
  return {
    input: `./demo/demos/${element}/${element}-demo.js`,
    output: {
      file: `./docs/demo/demos/${element}/${element}-demo.js`,
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve({
        moduleDirectories: ['./node_modules', './packages'],
      }),
      strip({
        functions: ['console.log'],
      }),
      terser(),
      copy({
        targets: [
          {
            src: [`./demo/demos/${element}/*.js`, `./demo/demos/${element}/*.html`, `./demo/demos/${element}/*.png`],
            dest: `./docs/demo/demos/${element}/`,
          },
        ],
      }),
    ],
  };
});

export default [
  {
    input: './demo/src/demo-app.js',
    output: {
      file: './docs/demo/src/demo-app.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      strip({
        functions: ['console.log'],
      }),
      terser(),
      copy({
        targets: [
          {
            src: 'demo/src/styles/main.css',
            dest: 'docs/demo/src/styles',
          },
          {
            src: 'demo/index.html',
            dest: 'docs/demo',
          },
          {
            src: 'node_modules/@webcomponents/shadycss/apply-shim.min.js',
            dest: 'docs/demo/node_modules/@webcomponents/shadycss/apply-shim.min.js',
          },
          {
            src: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
            dest: 'docs/demo/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
          },
          {
            src: 'node_modules/web-animations-js/web-animations-next-lite.min.js',
            dest: 'docs/demo/node_modules/web-animations-js/web-animations-next-lite.min.js',
          },
          {
            src: 'node_modules/codemirror/lib/codemirror.js',
            dest: 'docs/demo/node_modules/codemirror/lib/codemirror.js',
          },
          {
            src: 'node_modules/codemirror/mode/markdown/markdown.js',
            dest: 'docs/demo/node_modules/codemirror/mode/markdown/markdown.js',
          },
          {
            src: 'node_modules/codemirror/addon/edit/continuelist.js',
            dest: 'docs/demo/node_modules/codemirror/addon/edit/continuelist.js',
          },
          {
            src: 'node_modules/codemirror/addon/mode/overlay.js',
            dest: 'docs/demo/node_modules/codemirror/addon/mode/overlay.js',
          },
          {
            src: 'node_modules/codemirror/addon/display/fullscreen.js',
            dest: 'docs/demo/node_modules/codemirror/addon/display/fullscreen.js',
          },
          {
            src: 'node_modules/codemirror/addon/display/placeholder.js',
            dest: 'docs/demo/node_modules/codemirror/addon/display/placeholder.js',
          },
          {
            src: 'node_modules/codemirror/mode/gfm/gfm.js',
            dest: 'docs/demo/node_modules/codemirror/mode/gfm/gfm.js',
          },
          {
            src: 'node_modules/codemirror/mode/xml/xml.js',
            dest: 'docs/demo/node_modules/codemirror/mode/xml/xml.js',
          },
        ],
      }),
    ],
  },
  ...elementsConfigs,
];
