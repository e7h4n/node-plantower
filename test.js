const PlantowerGx = require('./plantower');

let plantower = new PlantowerGx('PMS5003S', '/dev/ttyS0');

plantower.read().then(console.log.bind(console)).catch(err => {
    console.error('error when read data, err=' + err);
});
