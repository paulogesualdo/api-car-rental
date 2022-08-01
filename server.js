const Hapi = require('@hapi/hapi');
const config = require('./config');
const registers = require('./register');
const v1 = require('./v1/routes');

module.exports = (async () => {
  const server = new Hapi.Server({
    port: config.environmentVariables.PORT,
    host: config.environmentVariables.HOST,
  });

  await server.register(registers);

  server.route(v1);

  return server;
})();
