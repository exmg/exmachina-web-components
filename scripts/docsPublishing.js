// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '../');

const main = () => {
  try {
    fs.writeFileSync(path.join(rootPath, '.nojekyll'), '');
    console.log('Added .nojekyll file');
  } catch (error) {
    console.log('An error occured: ', error);
  }
};

main();
