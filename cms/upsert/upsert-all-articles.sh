#!/bin/bash

# optionally delete all poems from db first
# curl -X DELETE http://awebfactory.org:5000/api/articles

# list all articles
# for filename in content/articles/*; do echo "${filename}"; done

# alternatives
# ls content/articles | xargs -n 1 basename
# ls content/articles | xargs echo
# ls content/articles | sed -e 's/\..*$//' | xargs node upsert/upsert.js articles

# execute from ~cms root
ls content/articles | while read fname 
do
      ## strip off md extension which is added by upsert.js
      npm run upsert -- articles ${fname%%.*}
done
