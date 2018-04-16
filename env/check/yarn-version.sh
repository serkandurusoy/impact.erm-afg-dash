#!/bin/bash
yarnversion=1.6.0; if ! yarn --version | grep -q $yarnversion ; then echo 'yarn version is not '$yarnversion; exit 1; fi
