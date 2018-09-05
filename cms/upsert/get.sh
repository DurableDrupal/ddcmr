#!/bin/bash
PORT=$1
ENDPOINT=$2
curl -X GET -H "Content-Type: application/json" http://0.0.0.0:${PORT}/${ENDPOINT}
echo ""
