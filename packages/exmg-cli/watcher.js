const watch = require('node-watch');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const watchOptions = {
  recursive: true,
  filter: path => {
    if (path.indexOf('node_modules') > -1) {
      return false;
    }
    if (path.indexOf('scss') === -1) {
      return false;
    }
    return /.(?:scss)$/.test(path);
  }
};

let updating = false;

async function addToQueue(fileName) {
  if (updating) {
    return;
  }
  console.log(`Detected changes in ${fileName}`);
  updating = true;
  const execPromise = exec(`exmg-cli -s "${fileName}"`);
  try {
    await execPromise;
  } catch ({ stdout, stderr }) {
    console.log(stdout);
    console.log('ERROR:', stderr);
  }
  console.log('');
  updating = false;
}

async function watcher() {
  console.log('Exmg-CLI SASS watcher has started.');
  watch("./", watchOptions, (_event, fileName) => {
    addToQueue(fileName);
  });
}

exports.watcher = watcher;
