#!/bin/bash

# Note: This script has to be written from hand since there are MongoDB schema dependencies to think of: i.e.  population schema references must be loaded first.

# all content items
# execute from ~cms root: ./upsert/upsert-all.sh

ls content/authors | while read fname 
do
      npm run upsert -- authors ${fname%%.*}
done

ls content/publishers | while read fname 
do
      npm run upsert -- publishers ${fname%%.*}
done

ls content/articles | while read fname 
do
      npm run upsert -- articles ${fname%%.*}
done

ls content/articles/steps | while read fname 
do
      npm run upsert -- articles steps/${fname%%.*}
done

ls content/books | while read fname 
do
      npm run upsert -- books ${fname%%.*}
done

ls content/case-studies | while read fname 
do
      npm run upsert -- case-studies ${fname%%.*}
done

