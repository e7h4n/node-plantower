const PARTICLE_CONCENTRATION_PM1_0_NORMAL = {
    key: 'concentration_pm1.0_normal',
    unit: 'µg/m^3',
    len: 2
};

const PARTICLE_CONCENTRATION_PM2_5_NORMAL = {
    key: 'concentration_pm2.5_normal',
    unit: 'µg/m^3',
    len: 2
};

const PARTICLE_CONCENTRATION_PM10_NORMAL = {
    key: 'concentration_pm10_normal',
    unit: 'µg/m^3',
    len: 2
};

const PARTICLE_CONCENTRATION_PM1_0_ATMOS = {
    key: 'concentration_pm1.0_atmos',
    unit: 'µg/m^3',
    len: 2
};

const PARTICLE_CONCENTRATION_PM2_5_ATMOS = {
    key: 'concentration_pm2.5_atmos',
    unit: 'µg/m^3',
    len: 2
};

const PARTICLE_CONCENTRATION_PM10_ATMOS = {
    key: 'concentration_pm10_atmos',
    unit: 'µg/m^3',
    len: 2
};

const PARTICLE_COUNT_PM0_3 = {
    key: 'count_pm_0.3',
    len: 2
};

const PARTICLE_COUNT_PM0_5 = {
    key: 'count_pm_0.5',
    len: 2
};

const PARTICLE_COUNT_PM1_0 = {
    key: 'count_pm_1.0',
    len: 2
};

const PARTICLE_COUNT_PM2_5 = {
    key: 'count_pm_2.5',
    len: 2
};

const PARTICLE_COUNT_PM5 = {
    key: 'count_pm_5',
    len: 2
};

const PARTICLE_COUNT_PM10 = {
    key: 'count_pm_10',
    len: 2
};

const TEMPERATURE = {
    key: 'temperature',
    formatter: v => v / 10,
    unit: '℃',
    len: 2
};

const HUMIDITY = {
    key: 'humidity',
    formatter: v => v / 10,
    unit: '%',
    len: 2
};

const FORMALDEHYDE = {
    key: 'formaldehyde',
    formatter: v => v / 1000,
    unit: 'mg/m^3',
    len: 2
};

const CO2 = {
    key: 'co2',
    unit: 'ppm',
    len: 2
};

const CO2_PARAMETER_1 = {
    key: 'co2_parameter_1',
    len: 2
};

const CO2_PARAMETER_2 = {
    key: 'co2_parameter_2',
    len: 2
};

const VERSION = {
    key: 'version'
};

const ERROR = {
    key: 'error'
};

const RETAINED = {
    key: 'retained',
    len: 2
};

module.exports = {
    PARTICLE_CONCENTRATION_PM1_0_NORMAL: PARTICLE_CONCENTRATION_PM1_0_NORMAL,
    PARTICLE_CONCENTRATION_PM2_5_NORMAL: PARTICLE_CONCENTRATION_PM2_5_NORMAL,
    PARTICLE_CONCENTRATION_PM10_NORMAL: PARTICLE_CONCENTRATION_PM10_NORMAL,

    PARTICLE_CONCENTRATION_PM1_0_ATMOS: PARTICLE_CONCENTRATION_PM1_0_ATMOS,
    PARTICLE_CONCENTRATION_PM2_5_ATMOS: PARTICLE_CONCENTRATION_PM2_5_ATMOS,
    PARTICLE_CONCENTRATION_PM10_ATMOS: PARTICLE_CONCENTRATION_PM10_ATMOS,

    PARTICLE_COUNT_PM0_3: PARTICLE_COUNT_PM0_3,
    PARTICLE_COUNT_PM0_5: PARTICLE_COUNT_PM0_5,
    PARTICLE_COUNT_PM1_0: PARTICLE_COUNT_PM1_0,
    PARTICLE_COUNT_PM2_5: PARTICLE_COUNT_PM2_5,
    PARTICLE_COUNT_PM5: PARTICLE_COUNT_PM5,
    PARTICLE_COUNT_PM10: PARTICLE_COUNT_PM10,

    TEMPERATURE: TEMPERATURE,
    HUMIDITY: HUMIDITY,

    FORMALDEHYDE: FORMALDEHYDE,

    CO2: CO2,
    CO2_PARAMETER_1: CO2_PARAMETER_1,
    CO2_PARAMETER_2: CO2_PARAMETER_2,

    VERSION: VERSION,
    ERROR: ERROR,
    RETAINED: RETAINED
};
