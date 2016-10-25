const Protocol = require('./protocol');
const debug = require('debug')('PT');
const device = require('./device');

var Plantower = function (model, dev) {
    this.model = model;

    if (Object.keys(device).indexOf(model) === -1) {
        throw new Error('unsupport device model ' + model);
    }
    this.protocol = new Protocol(dev);
};

Plantower.prototype.read = function () {
    let model = device[this.model];

    let promise = null;
    if (model.defaultMode === 'passive') {
        promise = this.protocol.write(model.requestData);
    } else {
        promise = Promise.resolve();
    }

    return promise.
        then(() => this.protocol.read()).
        then(data => {
            let responseMap = model.responseMap;
            let ret = {};

            let index = 0;
            responseMap.forEach((field) => {
                let val = 0;
                for (let j = 0; j < field.len; j++) {
                    val = val * 256 + data[index];
                    index++;
                }
                ret[field.key] = {
                    value: field.formatter ? field.formatter(val) : val,
                    unit: field.unit || null
                };
            });

            if (ret.error) {
                return Promise.reject(ret.error);
            }

            ret.model = this.model;
            ret.timestamp = Date.now();

            return ret;
        });
};

module.exports = Plantower;
