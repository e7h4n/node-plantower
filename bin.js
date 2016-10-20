#!/usr/bin/env node

require('yargs').
    usage('%0 [args]').
    alias('m', 'model').
    alias('d', 'dev').
    alias('h', 'help').
    demand(['m', 'd']).
    help();
