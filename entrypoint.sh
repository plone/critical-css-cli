#!/bin/bash

set -e

if [ "$1" = 'run' ]; then
    exec node index.js ${URL} -o ${LOCATION}
else
    exec "$@"
fi
