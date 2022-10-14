const chai = require('chai');
const server = require('../../../server');
const routes = require('../../../v1/routes/routes');

process.env.NODE_ENV = 'test';

const pathCategories = '/v1/categories';
const pathCategoryById = '/v1/categories/{id}';

describe('server', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof server).to.equal('object');
  });
  it('deve existir uma função start', async () =>  {
    const serverInstance = await server;
    chai.expect(typeof serverInstance.start).to.equal('function');
  });
});

describe('rotas', () => {
  it('deve existir um objeto com as rotas', async () => {
    chai.expect(typeof routes).to.equal('object');
  });
});

describe('rota getCategories', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof routes.getCategories).to.equal('object');
  });
  it(`deve ter uma propriedade path igual a ${pathCategories}`, async () => {
    chai.expect(routes.getCategories).to.have.property('path').eql(pathCategories);
  });
  it('deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCategories).to.have.property('method').eql('GET');
  });
  it('deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCategories.config).to.have.property('handler');
  });
});

describe('rota getCategoryById', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof routes.getCategoryById).to.equal('object');
  });
  it(`deve ter uma propriedade path igual a ${pathCategoryById}`, async () => {
    chai.expect(routes.getCategoryById).to.have.property('path').eql(pathCategoryById);
  });
  it('deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCategoryById).to.have.property('method').eql('GET');
  });
  it('deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCategoryById.config).to.have.property('handler');
  });
  it('deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.getCategoryById.config.validate).to.have.property('params');
  });
});

describe('rota postCategory', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof routes.postCategory).to.equal('object');
  });
  it(`deve ter uma propriedade path igual a ${pathCategories}`, async () => {
    chai.expect(routes.postCategory).to.have.property('path').eql(pathCategories);
  });
  it('deve ter uma propriedade method igual a POST', async () => {
    chai.expect(routes.postCategory).to.have.property('method').eql('POST');
  });
  it('deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.postCategory.config).to.have.property('handler');
  });
  it('deve ter uma propriedade config.validate.payload', async () => {
    chai.expect(routes.postCategory.config.validate).to.have.property('payload');
  });
});

describe('rota putCategory', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof routes.putCategory).to.equal('object');
  });
  it(`deve ter uma propriedade path igual a ${pathCategoryById}`, async () => {
    chai.expect(routes.putCategory).to.have.property('path').eql(pathCategoryById);
  });
  it('deve ter uma propriedade method igual a PUT', async () => {
    chai.expect(routes.putCategory).to.have.property('method').eql('PUT');
  });
  it('deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.putCategory.config).to.have.property('handler');
  });
  it('deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.putCategory.config.validate).to.have.property('params');
  });
  it('deve ter uma propriedade config.validate.payload', async () => {
    chai.expect(routes.putCategory.config.validate).to.have.property('payload');
  });
});

describe('rota deleteCategory', () => {
  it('deve ser um objeto', async () => {
    chai.expect(typeof routes.deleteCategory).to.equal('object');
  });
  it(`deve ter uma propriedade path igual a ${pathCategoryById}`, async () => {
    chai.expect(routes.deleteCategory).to.have.property('path').eql(pathCategoryById);
  });
  it('deve ter uma propriedade method igual a DELETE', async () => {
    chai.expect(routes.deleteCategory).to.have.property('method').eql('DELETE');
  });
  it('deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.deleteCategory.config).to.have.property('handler');
  });
  it('deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.deleteCategory.config.validate).to.have.property('params');
  });
});
