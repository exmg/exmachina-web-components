//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const packagesPath = path.join(__dirname, '../packages');
const outPutPath = path.join(__dirname, '../demo/src/elements.ts')

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

let template = `
  export type Element = {
    name: string;
    version: string;
    url: string;
  };
  export const elements: Element[] = [
    $ELEMENTS
  ];
`;

const constructDemoableElements = async (packageFile) => {
  const fileContent = fs.readFileSync(packageFile);
  const parsedPackage = JSON.parse(fileContent);
  template = template.replace('$ELEMENTS', `
    {
      name: "${parsedPackage.name}",
      version: "${parsedPackage.version}",
      url: "https://www.npmjs.com/package/${parsedPackage.name}",
    },$ELEMENTS`);
}

const main = () => {
  try {
    const files = fs.readdirSync(packagesPath);
    files.forEach((file) => {
      if (file.startsWith('.')) {
        // Case of .DS_Store in MacOS
        return;
      }
      constructDemoableElements(path.join(packagesPath, '/', file, '/package.json'));
    });
    template = template.replace('$ELEMENTS', '');
    fs.writeFileSync(outPutPath, template);
    console.log('Elements successfuly parsed.');
  }
  catch (error) {
    console.log('An error occured: ', error);
  }
}

main();
