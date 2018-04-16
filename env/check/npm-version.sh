#!/bin/bash
npmversion=5.8.0; if ! npm -v | grep -q $npmversion ; then echo 'npm version is not '$npmversion; exit 1; fi
