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
    return this.protocol.read().then(data => {
        let dataMap = device[this.model];
        let ret = {};

        data.forEach((val, idx) => {
            let key = dataMap[idx];
            ret[key] = (ret[key] || 0) * 256 + val;
        });

        if (ret.error) {
            return Promise.reject(ret.error);
        }

        return ret;
    });
};

module.exports = Plantower;
