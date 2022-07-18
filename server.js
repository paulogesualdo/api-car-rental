const Hapi = require('hapi');
const config = require('./config');

module.exports = (async () => {
  const server = new Hapi.server({
        port: 3000,
        host: 'localhost'
    });

  return server;
})();