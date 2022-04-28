#!/usr/bin/env bash

##
# Copyright 2018 Google Inc. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
#  Adapted for ExMachina Web Components from https://github.com/material-components/material-web/blob/master/scripts/publish-demos.sh
#

set -e

# Stash eventual package-lock changes
git stash
# Clone gh-pages branch
git checkout docs
# Merges master
git merge --no-ff --no-edit master
# Remove previous build
rm -rf docs
# Build
npm run build
# Build docs
npm run build:docs
# Commit and push
git add -f ./docs && git commit -am 'Update docs' && git push origin HEAD:docs
