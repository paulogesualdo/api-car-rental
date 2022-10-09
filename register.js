// São importados diversos módulos externos, cada um para uma tarefa
// específica

// Os seguintes módulos são utilizados para
// documentar a API utilizando Swagger: Inert,
// Vision, HapiSwaggered e HapiSwaggeredUi

const Inert = require('inert');
const Vision = require('vision');
const HapiAlive = require('hapi-alive');
const HapiResponsetime = require('hapi-response-time');
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
      title: pack.name,
      path: '/docs',
      swaggerOptions: {
        validatorUrl: null,
      },
    },
  },
  {
    plugin: HapiAlive,
    options: {
      path: '/healthcheck',
      tags: ['health', 'monitor'],
      responses: {
        healthy: {
          message: `Version: ${pack.version}`,
        },
        unhealthy: {
          statusCode: 400,
        },
      },
      healthCheck: async () => {
        await true;
      },
    },
  },
  {
    plugin: HapiResponsetime,
    options: {
      path: '/timeout',
      async handler(_request, h) {
        await (() => new Promise(resolve => setTimeout(resolve, 10000)))();
        return h.response('Response after 10 seconds');
      },
    },
  },
];
