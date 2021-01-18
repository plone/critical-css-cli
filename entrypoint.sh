#!/bin/bash

set -e

if [ "$1" = 'run' ]; then
    exec node index.js -o ${LOCATION} -d ${DIMENSION} ${URL}
else
    exec "$@"
fi
