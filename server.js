const Hapi = require('@hapi/hapi');

module.exports = (async () => {
  const server = new Hapi.server({
        port: 3000,
        host: 'localhost'
    });

  return server;
})();