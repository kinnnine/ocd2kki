#!/bin/bash

update() {
    [ ! -d ./bin ] && neu update
}

case "$1" in
    "run")
        update
        neu run
        ;;
    "build")
        update
        neu build --embed-resources --config-file="neutralino.config.release.json"
        ;;
    *)
        # Default case for invalid or missing arguments
        echo "usage: $0 {run|build}"
        exit 1
        ;;
esac
