#!/bin/bash
nodeversion=8.11.1; if ! node -v | grep -q $nodeversion ; then echo 'node version is not '$nodeversion; exit 1; fi
