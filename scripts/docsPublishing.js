// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '../');

const config = `
  include: '/node_modules/'
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
