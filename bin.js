#!/usr/bin/env node

const argv = require('yargs').
    usage('%0 [args]').
    example('$0 -d /dev/ttyUSB0 -m PMS1003', 'count the lines in the given file').
    alias('m', 'model').
    describe('m', 'device model').
    alias('d', 'dev').
    describe('d', 'uart device').
    help('h').
    alias('h', 'help').
    demand(['m', 'd']).argv;

const Plantower = require('./plantower');

const dev = argv.dev;
const model = argv.model;

const plantower = new Plantower(model, dev);
plantower.read().then(data => {
    console.log(data.model);
    console.log(new Date(data.timestamp));
    Object.keys(data).forEach(d => {
        if (d !== 'model' && d !== 'timestamp') {
            console.log(`${d}:\t${data[d].value} ${data[d].unit || ''}`);
        }
    });
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
