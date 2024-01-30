/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Adapted for ExMachina Web Components from https://github.com/material-components/material-web/blob/master/scripts/bump-all-mdc-web-deps.ts
 *
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const packagesDir = path.resolve(__dirname, '..', 'packages');

function isMdcWebPackage(mdcwPkg) {
  return mdcwPkg.startsWith('@material/mwc');
}

function main() {
  const newVersion =
    '=' +
    execFileSync('npm', ['info', '@material/mwc-base', 'version'], {
      encoding: 'utf8',
    }).trim();
  console.log(`Found latest Material Web Component stable version: ${newVersion}\n`);
  const packageJsonPaths = glob.sync(path.join('*', 'package.json'), { cwd: packagesDir });
  let anyChanged = false;
  for (const relPath of packageJsonPaths) {
    const absPath = path.join(packagesDir, relPath);
    const pj = JSON.parse(fs.readFileSync(absPath, 'utf8'));
    if (!pj.dependencies && !pj.devDependencies) {
      continue;
    }
    console.log(`Checking ${pj.name}`);
    let changed = false;

    const updateDependencies = (dependencies) => {
      for (const [pkg, oldVersion] of Object.entries(dependencies)) {
        if (isMdcWebPackage(pkg)) {
          if (oldVersion !== newVersion) {
            dependencies[pkg] = newVersion;
            console.log(`\tUpdating ${pkg} from ${oldVersion} to ${newVersion}`);
            changed = true;
            anyChanged = true;
          }
        }
      }
    };

    if (pj.dependencies) {
      updateDependencies(pj.dependencies);
    }
    if (pj.devDependencies) {
      updateDependencies(pj.devDependencies);
    }
    if (changed) {
      console.log(`\tWriting new package.json`);
      fs.writeFileSync(absPath, JSON.stringify(pj, null, 2) + '\n', 'utf8');
    }
  }
  if (anyChanged) {
    // Set an output value for consumption by a GitHub Action.
    // https://help.github.com/en/articles/development-tools-for-github-actions#set-an-output-parameter-set-output
    console.log(`::set-output name=new-mwc-version::${newVersion.substring(1)}`);
    console.log(`\nRemember to run npm install!`);
  }
}

main();
