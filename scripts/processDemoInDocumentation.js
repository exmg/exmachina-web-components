// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const documentationPath = path.join(__dirname, '../docs/index.html');

const search = `<h1><a href="index.html" class="link">Home</a></h1>`;

const processed = `
  <h1><a href="index.html" class="link">Documentation</a></h1>
  <h1><a href="./demo/index.html" target="_blank" class="link">Demos</a></h1>
`;

const main = () => {
  try {
    const docIndex = fs.readFileSync(documentationPath);
    const contentIndexFile = docIndex.toString();
    const processedIndexFile = contentIndexFile.replace(search, processed);
    fs.writeFileSync(documentationPath, processedIndexFile);
    console.log('Documentation successfully processed.');
  } catch (error) {
    console.log('An error occured: ', error);
  }
};

main();
