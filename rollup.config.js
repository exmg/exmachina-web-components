import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';

/**
 * Elements with a viable demo
 */
const elements = ['exmg-button', 'exmg-dialogs'];

const elementsConfigs = elements.map((element) => {
  return {
    input: `./demo/demos/${element}/${element}-demo.js`,
    output: {
      file: `./docs/demo/demos/${element}/${element}-demo.js`,
      format: 'es',
      sourcemap: false
    },
    plugins: [
      resolve({
        moduleDirectories: ['node_modules', './packages'],
      }),
      strip({
        functions: ['console.log'],
      }),
      terser(),
      copy({
        targets: [
          {
            src: `./demo/demos/${element}/index.html`,
            dest: `./docs/demo/demos/${element}`,
          }
        ]
      })
    ],
  }
})

export default [
  {
    input: './demo/src/demo-app.js',
    output: {
      file: './docs/demo/src/demo-app.js',
      format: 'es',
      sourcemap: false
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
        ],
      }),
    ],
  },
  ...elementsConfigs,
];