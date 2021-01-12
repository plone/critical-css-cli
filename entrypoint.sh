#!/bin/bash

set -e

if [ "$1" = 'run' ]; then
    exec node index.js
else
    exec "$@"
fi