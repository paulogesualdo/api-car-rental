const chai = require('chai');
const server = require('../../../server');
const routes = require('../../../v1/routes/routes');

process.env.NODE_ENV = 'test';

describe('server', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof server).to.equal('object');
  });
  it('deve existir uma função start', async () =>  {
    const serverInstance = await server;
    chai.expect(typeof serverInstance.start).to.equal('function');
  });
});

describe('existência de rotas', () => {
  it('deve existir um objeto com as rotas', async () => {
    chai.expect(typeof routes).to.equal('object');
  });
  it('a rota getCategories deve ser um objeto', async () => {
    chai.expect(typeof routes.getCategories).to.equal('object');
  });
  it('a rota getCategoryById deve ser um objeto', async () => {
    chai.expect(typeof routes.getCategoryById).to.equal('object');
  });
  it('a rota postCategory deve ser um objeto', async () => {
    chai.expect(typeof routes.postCategory).to.equal('object');
  });
  it('a rota putCategory deve ser um objeto', async () => {
    chai.expect(typeof routes.putCategory).to.equal('object');
  });
  it('a rota deleteCategory deve ser um objeto', async () => {
    chai.expect(typeof routes.deleteCategory).to.equal('object');
  });
});
