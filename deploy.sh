#!/bin/bash

set -x
set -e

npm run build
rm -rf /tmp/build
mv build /tmp
git checkout gh-pages
git rm -r *.js static
cp -r /tmp/build/* .
git add .
git ci -m "Update gh-pages"
git push
git checkout master
