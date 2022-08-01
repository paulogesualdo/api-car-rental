// eslint-disable-next-line no-unused-vars
const getCars = {
  path: '/v1/cars',
  method: 'GET',
  config: {
    tags: ['api'],
    // eslint-disable-next-line no-unused-vars
    handler: (_request, _h) => ({ car: 'Argo' }),
  },
};

module.exports = { getCars };
