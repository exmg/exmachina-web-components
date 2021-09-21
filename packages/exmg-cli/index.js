#!/usr/bin/env node

const path = require('path');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const glob = require('glob');
const { sassRender } = require('./sass-renderer.js');
const { watcher } = require('./watcher.js');

const options = [
  {
    name: 'source',
    alias: 's',
    type: String,
    description: 'Template file to render sass into.',
    defaultOption: true
  },
  {
    name: 'watch',
    alias: 'w',
    type: Boolean,
    description: 'Wether or not running theLCI in watch mode.',
    defaultOption: false
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Print this message.'
  }
];

const { source, watch, help } = commandLineArgs(options);

function printUsage() {
  const sections = [
    {
      header: 'sass-render',
      content: 'Render sass into css tagged template literal'
    },
    {
      header: 'Options',
      optionList: options
    }
  ];
  console.log(commandLineUsage(sections));
}

if (help) {
  printUsage();
  process.exit(0);
}

if (!source && !watch) {
  console.error('Must provide a source if not in watch mode!');
  printUsage();
  process.exit(-1);
}

if (source && watch) {
  console.error('In watch mode no source should be specified.');
  printUsage();
  process.exit(-1);
}

if (watch) {
  console.log('Running in watch mode ! ');
  watcher();
} else {
  glob(source, (err, files) => {
    files
      .filter(file => !path.basename(file).startsWith('_'))
      .forEach(file => {
        sassRender(file).catch(error => {
          console.error(error);
          process.exit(-1);
        });
      });
  });
}

