const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwaggered = require('hapi-swaggered');
const HapiSwaggeredUi = require('hapi-swaggered-ui');
const config = require('./config');
const pack = require('./package.json');

module.exports = (async () => {
  const server = new Hapi.Server({
    port: config.environmentVariables.PORT,
    host: config.environmentVariables.HOST,
  });

  await server.register([
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
  ]);

  return server;
})();
