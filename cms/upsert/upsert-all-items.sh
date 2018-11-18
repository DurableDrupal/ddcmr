#!/bin/bash

# all items from content type
# execute from ~cms root: ./upsert/upsert-all-items.sh <content type>
# for example:            ./upsert/upsert-all-items.sh articles

# all items from content type with subtype
# execute from ~cms root: ./upsert/upsert-all-items.sh <content type> <subtype>
# for example:            ./upsert/upsert-all-items.sh articles steps

CONTENTTYPE=$1
CONTENTSUBTYPE=$2

if [ -n "$CONTENTSUBTYPE" ]; then
  ls -p content/${CONTENTTYPE}/${CONTENTSUBTYPE} | grep -v / | while read fname 
  do
      ## strip off md extension which is added by upsert.js
      ## echo ${CONTENTTYPE} ${CONTENTSUBTYPE}/${fname%%.*}
      npm run upsert -- ${CONTENTTYPE} ${CONTENTSUBTYPE}/${fname%%.*}
  done
else
  ls -p content/${CONTENTTYPE} | grep -v / | while read fname 
  do
      ## strip off md extension which is added by upsert.js
      ## echo ${CONTENTTYPE} ${fname%%.*}
      npm run upsert -- ${CONTENTTYPE} ${fname%%.*}
  done
fi

