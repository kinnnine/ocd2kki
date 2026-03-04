#!/bin/bash

case "$1" in
    "run")
        neu run
        ;;
    "build")
        neu build --embed-resources --config-file="neutralino.config.release.json"
        ;;
    *)
        # Default case for invalid or missing arguments
        echo "usage: $0 {run|build}"
        exit 1
        ;;
esac
