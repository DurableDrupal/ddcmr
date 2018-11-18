#!/bin/bash

# optionally delete all poems from db first
# curl -X DELETE http://example.com:5000/api/steps

# execute from ~cms root: ./upsert/upsert-all-steps.sh
ls content/articles/steps | while read fname 
do
      ## strip off md extension which is added by upsert.js
      npm run upsert -- articles steps/${fname%%.*}
done
