const chai = require('chai');
const helpers = require('./helpers');

const headers = ({ authorization = 'token', showAuth = true }) => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  ...(showAuth ? { authorization } : {}),
});

describe('Server', () => {
  before(async () => {
    await helpers.startServer();
  });
  after(async () => {
    await helpers.stopServer();
  });
  it('Deve retornar statusCode 200', async () => {
    const response = await helpers.request.get({ url: '/healthcheck', headers: headers({ showAuth: false }) });
    chai.expect(response.statusCode).to.equal(200);
  });
});
