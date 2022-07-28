const Inert = require('inert');
const Vision = require('vision');
const HapiSwaggered = require('hapi-swaggered');
const HapiSwaggeredUi = require('hapi-swaggered-ui');
const pack = require('./package.json');

module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwaggered,
    options: {
      info: {
        title: pack.name,
        description: pack.description,
        version: pack.version,
      },
      stripPrefix: '/v1',
    },
  },
  {
    plugin: HapiSwaggeredUi,
    options: {
      title: 'Example API',
      path: '/docs',
      swaggerOptions: {
        validatorUrl: null,
      },
    },
  },
]