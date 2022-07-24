const Hapi = require('@hapi/hapi');
const config = require("./config")

module.exports = (async () => {
  const server = new Hapi.server({
        port: config.environmentVariables.PORT,
        host: config.environmentVariables.HOST
    });

  return server;
})();