#!/bin/bash

# single item content type
# execute from ~cms root: ./upsert/upsert-single-items.sh <content type> <item name>
# for example:            ./upsert/upsert-all-items.sh articles item.md

# single item content type and subtype
# execute from ~cms root: ./upsert/upsert-single-items.sh <content type> <item name> <content subtype>
# for example:            ./upsert/upsert-all-items.sh articles item.md steps

CONTENTTYPE=$1
CONTENTITEMPATH=$2
CONTENTSUBTYPE=$3

echo ${CONTENTTYPE}
echo ${CONTENTITEMPATH}
echo ${CONTENTSUBTYPE}

if [ -n "$CONTENTSUBTYPE" ]; then
  npm run upsert -- ${CONTENTTYPE} ${CONTENTSUBTYPE}/${CONTENTITEMPATH%%.*}
else
  npm run upsert -- ${CONTENTTYPE} ${CONTENTITEMPATH%%.*}
fi
