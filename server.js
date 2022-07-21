const Hapi = require('@hapi/hapi');
const environmentVariables = require('dotenv').config()

module.exports = (async () => {
  const server = new Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

  return server;
})();