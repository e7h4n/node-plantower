const SerialPort = require('serialport');

const bluebird = require('bluebird');
const HEAD1  = 0x42
const HEAD2 = 0x4d
const debugTrans = require('debug')('PT_PROTO.TRANS');
const debug = require('debug')('PT_PROTO');

var Protocol = function (dev) {
    this.defer = null;
    this.busy = true;

    this.port = new SerialPort(dev, {
        baudRate: 9600,
        parser: (() => {
            let data = new Buffer(0);
            return (emitter, buffer) => {
                debugTrans('RX', buffer);
                data = Buffer.concat([data, buffer]);

                let index = -1;
                for (let i = 0; i < data.length - 3; i++) { // HEAD2 + LEN * 2 = 3
                    if (data[i] === HEAD1 && data[i + 1] == HEAD2) {
                        index = i;
                        break;
                    }
                }

                if (index === -1) {
                    return;
                }

                let length = (data[index + 2] * 256 + data[index + 3]);
                debugTrans('length: ' + length);
                let end = index + 4 + length;
                if (data.length < end) {
                    return;
                }

                if (this.checkData(data.slice(index, end))) {
                    // remove header + size, and checksum
                    let ret = data.slice(index + 4, end - 2);
                    emitter.emit('data', ret);
                } else {
                    console.warn('check data failed');
                }

                data = data.slice(end);
            }
        })()
    });

    this.queue = [];

    let openDefer = bluebird.defer();
    this.port.on('open', (err) => {
        if (err) {
            openDefer.reject(err);
        } else {
            openDefer.resolve();
        }
    });
    this.openPromise = openDefer.promise;

    this.port.on('data', (data) => {
        debug('Get data', data);
        this.queue.forEach((defer) => {
            defer.resolve(data);
        });
        this.queue = [];
    });
};

Protocol.prototype.read = function () {
    var defer = bluebird.defer();

    this.queue.push(defer);

    return defer.promise;
};

Protocol.prototype.write = function (data) {
    let checksum = HEAD1 + HEAD2;
    for (let i = 0; i < data.length; i++) {
        checksum += data[i];
    }

    data = Buffer.concat([new Buffer([
        HEAD1,
        HEAD2,
    ]), data, new Buffer([
        Math.floor(checksum / 256),
        checksum % 256
    ])]);

    var defer = bluebird.defer();

    this.openPromise.then(() => {
        debugTrans('TX', data);

        this.port.write(data, (err) => {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve();
            }
        });
    });

    return defer.promise;
};

Protocol.prototype.checkData = function (data) {
    let sum = 0;
    for (let i = 0; i < data.length - 2; i++) {
        sum += data[i];
    }

    return sum === data[data.length - 1] + 256 * data[data.length - 2];
};

module.exports = Protocol;
