const fs = require('fs');

const filePath = './docs/index.html';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(/(\.\.\/){3}/g, './');

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('File updated successfully!');
  });
});
