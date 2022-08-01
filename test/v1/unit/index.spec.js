const chai = require('chai');
const server = require('../../../server');

describe('server', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof server).to.equal('object');
  });
  it('deve existir uma função start', async () =>  {
    const serverInstance = await server;
    chai.expect(typeof serverInstance.start).to.equal('function');
  });
});
