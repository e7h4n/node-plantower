# Plantower sensor library for node

## Install

```javascript
npm install --save plantower
```

### Commandline usage

```bash
plantower -d /dev/ttyS0 -m PMS5003S
```

Example output:
```
PMS5003S
2016-10-20T23:58:05.140Z
concentration_pm1.0_normal:    6 µg/m^3
concentration_pm2.5_normal:    8 µg/m^3
concentration_pm10_normal:     8 µg/m^3
concentration_pm1.0_atmos:     6 µg/m^3
concentration_pm2.5_atmos:     8 µg/m^3
concentration_pm10_atmos:      8 µg/m^3
count_pm_0.3:    1158
count_pm_0.5:    319
count_pm_1.0:    36
count_pm_2.5:    1
count_pm_5:      0
count_pm_10:     0
formaldehyde:    0.006 mg/m^3
```

## Programming usage

```javascript
const Plantower = require('./plantower');

let plantower = new Plantower('PMS5003S', '/dev/ttyS0');

plantower.read().then(console.log.bind(console)).catch(err => {
    console.error('error when read data, err=' + err);
});
```

Result example:

```json
{
    "concentration_pm1.0_normal": {
        "value": 6,
        "unit": "µg/m^3"
    },
    "concentration_pm2.5_normal": {
        "value": 8,
        "unit": "µg/m^3"
    },
    "concentration_pm10_normal": {
        "value": 10,
        "unit": "µg/m^3"
    },
    "concentration_pm1.0_atmos": {
        "value": 6,
        "unit": "µg/m^3"
    },
    "concentration_pm2.5_atmos": {
        "value": 8,
        "unit": "µg/m^3"
    },
    "concentration_pm10_atmos": {
        "value": 10,
        "unit": "µg/m^3"
    },
    "count_pm_0.3": {
        "value": 1131,
        "unit": null
    },
    "count_pm_0.5": {
        "value": 317,
        "unit": null
    },
    "count_pm_1.0": {
        "value": 42,
        "unit": null
    },
    "count_pm_2.5": {
        "value": 4,
        "unit": null
    },
    "count_pm_5": {
        "value": 3,
        "unit": null
    },
    "count_pm_10": {
        "value": 2,
        "unit": null
    },
    "formaldehyde": {
        "value": 0.01,
        "unit": "mg/m^3"
    },
    "model": "PMS5003S",
    "timestamp": 1477008101510
}
```

## Supported Device Models

* PMS1003
* PMSA003
* PMS6003
* PMS5003
* PMS5003I
* PMS5003P
* PMS3003
* PMS5003T
* PMS5003ST
* PMS5003S
* PMS7003
* PMS7003M
* PMS7003P

## License

ISC
