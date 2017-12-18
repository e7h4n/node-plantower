const field = require('./field');

const NORMAL_PMSXXXX = [
    field.PARTICLE_CONCENTRATION_PM1_0_NORMAL,
    field.PARTICLE_CONCENTRATION_PM2_5_NORMAL,
    field.PARTICLE_CONCENTRATION_PM10_NORMAL,
    field.PARTICLE_CONCENTRATION_PM1_0_ATMOS,
    field.PARTICLE_CONCENTRATION_PM2_5_ATMOS,
    field.PARTICLE_CONCENTRATION_PM10_ATMOS,
    field.PARTICLE_COUNT_PM0_3,
    field.PARTICLE_COUNT_PM0_5,
    field.PARTICLE_COUNT_PM1_0,
    field.PARTICLE_COUNT_PM2_5,
    field.PARTICLE_COUNT_PM5,
    field.PARTICLE_COUNT_PM10,
    field.VERSION,
    field.ERROR
];

module.exports = {
    PMS1003: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMSA003: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS6003: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS5003: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS5003I: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS5003P: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS3003: {
        defaultMode: 'positive',
        responseMap: [
            field.PARTICLE_CONCENTRATION_PM1_0_NORMAL,
            field.PARTICLE_CONCENTRATION_PM2_5_NORMAL,
            field.PARTICLE_CONCENTRATION_PM10_NORMAL,
            field.PARTICLE_CONCENTRATION_PM1_0_ATMOS,
            field.PARTICLE_CONCENTRATION_PM2_5_ATMOS,
            field.PARTICLE_CONCENTRATION_PM10_ATMOS,
            field.RETAINED,
            field.RETAINED,
            field.RETAINED
        ]
    },
    PMS5003T: {
        defaultMode: 'positive',
        responseMap: [
            field.PARTICLE_CONCENTRATION_PM1_0_NORMAL,
            field.PARTICLE_CONCENTRATION_PM2_5_NORMAL,
            field.PARTICLE_CONCENTRATION_PM10_NORMAL,
            field.PARTICLE_CONCENTRATION_PM1_0_ATMOS,
            field.PARTICLE_CONCENTRATION_PM2_5_ATMOS,
            field.PARTICLE_CONCENTRATION_PM10_ATMOS,
            field.PARTICLE_COUNT_PM0_3,
            field.PARTICLE_COUNT_PM0_5,
            field.PARTICLE_COUNT_PM1_0,
            field.PARTICLE_COUNT_PM2_5,
            field.TEMPERATURE,
            field.HUMIDITY,
            field.VERSION,
            field.ERROR
        ]
    },
    PMS5003ST: {
        defaultMode: 'positive',
        responseMap: [
            field.PARTICLE_CONCENTRATION_PM1_0_NORMAL,
            field.PARTICLE_CONCENTRATION_PM2_5_NORMAL,
            field.PARTICLE_CONCENTRATION_PM10_NORMAL,
            field.PARTICLE_CONCENTRATION_PM1_0_ATMOS,
            field.PARTICLE_CONCENTRATION_PM2_5_ATMOS,
            field.PARTICLE_CONCENTRATION_PM10_ATMOS,
            field.PARTICLE_COUNT_PM0_3,
            field.PARTICLE_COUNT_PM0_5,
            field.PARTICLE_COUNT_PM1_0,
            field.PARTICLE_COUNT_PM2_5,
            field.PARTICLE_COUNT_PM5,
            field.PARTICLE_COUNT_PM10,
            field.FORMALDEHYDE,
            field.TEMPERATURE,
            field.HUMIDITY,
            field.RETAINED,
            field.VERSION,
            field.ERROR
        ]
    },
    PMS5003S: {
        defaultMode: 'positive',
        responseMap: [
            field.PARTICLE_CONCENTRATION_PM1_0_NORMAL,
            field.PARTICLE_CONCENTRATION_PM2_5_NORMAL,
            field.PARTICLE_CONCENTRATION_PM10_NORMAL,
            field.PARTICLE_CONCENTRATION_PM1_0_ATMOS,
            field.PARTICLE_CONCENTRATION_PM2_5_ATMOS,
            field.PARTICLE_CONCENTRATION_PM10_ATMOS,
            field.PARTICLE_COUNT_PM0_3,
            field.PARTICLE_COUNT_PM0_5,
            field.PARTICLE_COUNT_PM1_0,
            field.PARTICLE_COUNT_PM2_5,
            field.PARTICLE_COUNT_PM5,
            field.PARTICLE_COUNT_PM10,
            field.FORMALDEHYDE
        ]
    },
    PMS7003: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS7003M: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    PMS7003P: {
        defaultMode: 'positive',
        responseMap: NORMAL_PMSXXXX
    },
    DS_CO2_20: {
        defaultMode: 'passive',
        requestData: new Buffer([
            0xE3,
            0x00,
            0x00
        ]),
        responseMap: [
            field.CO2,
            field.CO2_PARAMETER_1,
            field.CO2_PARAMETER_2
        ]
    },
    PTQS1005: {
        defaultMode: 'passive',
        requestData: new Buffer([
            0xAB,
            0x00,
            0x00
        ]),
        responseMap: [
            field.PARTICLE_CONCENTRATION_PM2_5_NORMAL,
            field.TVOC,
            field.TVOC_EQ,
            field.FORMALDEHYDE,
            field.FORMALDEHYDE_EQ,
            field.CO2,
            field.TEMPERATURE,
            field.HUMIDITY,
            field.RETAINED,
            field.RETAINED
        ]
    }
};
