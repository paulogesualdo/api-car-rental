const server = require('../../../../server');

let app;

module.exports = {
  startServer: async () => {
    app = await server;
  },
  stopServer: async () => {
    await app.stop();
  },
  request: {
    get: ({ url, headers, params = '' }) => app.inject({ method: 'GET', url: `${url}${params}`, headers }),
    post: params => app.inject({ method: 'POST', ...params }),
  },
};
