// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '../');

const config = `
title: Exmachina Web Components
description: >- # this means to ignore newlines until "baseurl:"
  Exmachina Web Components Documentation and Demo
domain: exmg.github.io # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
url: https://exmg.github.io # the base hostname and protocol for your site, e.g. http://example.com
baseurl: /exmachina-web-components/ # place folder name if the site is served in a subfolder

# Build settings
theme: minima
plugins:
  - jekyll-feed

include:
  - node_modules/
`;

const main = () => {
  try {
    fs.writeFileSync(path.join(rootPath, '_config.yml'), config);
    console.log('Config for Jekyll successfully created.');
  } catch (error) {
    console.log('An error occured: ', error);
  }
};

main();
