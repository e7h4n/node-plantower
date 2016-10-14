const Protocol = require('./protocol');
const debug = require('debug')('PT');

const DEVICE_DATA_MAP_PMSXXX = [
    'concentration_pm1.0_normal',
    'concentration_pm1.0_normal',
    'concentration_pm2.5_normal',
    'concentration_pm2.5_normal',
    'concentration_pm10_normal',
    'concentration_pm10_normal',
    'concentration_pm1.0_atmos',
    'concentration_pm1.0_atmos',
    'concentration_pm2.5_atmos',
    'concentration_pm2.5_atmos',
    'concentration_pm10_atmos',
    'concentration_pm10_atmos',
    'count_pm_0.3',
    'count_pm_0.3',
    'count_pm_0.5',
    'count_pm_0.5',
    'count_pm_1.0',
    'count_pm_1.0',
    'count_pm_2.5',
    'count_pm_2.5',
    'count_pm_5',
    'count_pm_5',
    'count_pm_10',
    'count_pm_10',
    'version',
    'error'
];

const DEVICE_DATA_MAP = {
    PMS5001: DEVICE_DATA_MAP_PMSXXX,
    PMS5002: DEVICE_DATA_MAP_PMSXXX,
    PMS5003: DEVICE_DATA_MAP_PMSXXX,
    PMS5003S: DEVICE_DATA_MAP_PMSXXX.map(val => ['version', 'error'].indexOf(val) === -1 ? val : 'formaldehyde')
};

var Plantower = function (model, dev) {
    this.model = model;
    if (Object.keys(DEVICE_DATA_MAP).indexOf(model) === -1) {
        throw new Error('unsupport device model ' + model);
    }
    this.protocol = new Protocol(dev);
};

Plantower.prototype.read = function () {
    return this.protocol.read().then(data => {
        let dataMap = DEVICE_DATA_MAP[this.model];
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
