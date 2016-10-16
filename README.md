# Plantower sensor library for node

## Install

```javascript
npm install --save plantower
```

## How to use

```javascript
const PlantowerGx = require('./plantower');

let plantower = new PlantowerGx('PMS5003S', '/dev/ttyS0');

plantower.read().then(console.log.bind(console)).catch(err => {
    console.error('error when read data, err=' + err);
});
```
## Supported Device Models

* PMS5001
* PMS5002
* PMS5003
* PMS5003S

## License

ISC
