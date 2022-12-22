const chai = require('chai');
const server = require('../../../server');
const routes = require('../../../v1/routes/routes');

const pathCategories = '/v1/categories';
const pathCategoryById = '/v1/categories/{id}';

const pathCars = '/v1/cars';
const pathCarById = '/v1/cars/{id}';
const pathCarsByCategoryId = '/v1/cars/categories/{id}';
const pathCarsByAvailability = '/v1/cars/available/{available}';
const pathCarsByDescription = '/v1/cars/description/{description}';

describe('Server', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof server).to.equal('object');
  });
  it('Deve existir uma função start', async () =>  {
    const serverInstance = await server;
    chai.expect(typeof serverInstance.start).to.equal('function');
  });
});

describe('Rotas', () => {
  it('Deve existir um objeto com as rotas', async () => {
    chai.expect(typeof routes).to.equal('object');
  });
});

describe('Rota getCategories', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCategories).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCategories}`, async () => {
    chai.expect(routes.getCategories).to.have.property('path').eql(pathCategories);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCategories).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCategories.config).to.have.property('handler');
  });
});

describe('Rota getCategoryById', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCategoryById).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCategoryById}`, async () => {
    chai.expect(routes.getCategoryById).to.have.property('path').eql(pathCategoryById);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCategoryById).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCategoryById.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.getCategoryById.config.validate).to.have.property('params');
  });
});

describe('Rota postCategory', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.postCategory).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCategories}`, async () => {
    chai.expect(routes.postCategory).to.have.property('path').eql(pathCategories);
  });
  it('Deve ter uma propriedade method igual a POST', async () => {
    chai.expect(routes.postCategory).to.have.property('method').eql('POST');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.postCategory.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.payload', async () => {
    chai.expect(routes.postCategory.config.validate).to.have.property('payload');
  });
});

describe('Rota putCategory', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.putCategory).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCategoryById}`, async () => {
    chai.expect(routes.putCategory).to.have.property('path').eql(pathCategoryById);
  });
  it('Deve ter uma propriedade method igual a PUT', async () => {
    chai.expect(routes.putCategory).to.have.property('method').eql('PUT');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.putCategory.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.putCategory.config.validate).to.have.property('params');
  });
  it('Deve ter uma propriedade config.validate.payload', async () => {
    chai.expect(routes.putCategory.config.validate).to.have.property('payload');
  });
});

describe('Rota deleteCategory', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.deleteCategory).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCategoryById}`, async () => {
    chai.expect(routes.deleteCategory).to.have.property('path').eql(pathCategoryById);
  });
  it('Deve ter uma propriedade method igual a DELETE', async () => {
    chai.expect(routes.deleteCategory).to.have.property('method').eql('DELETE');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.deleteCategory.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.deleteCategory.config.validate).to.have.property('params');
  });
});

describe('Rota getCars', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCars).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCars}`, async () => {
    chai.expect(routes.getCars).to.have.property('path').eql(pathCars);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCars).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCars.config).to.have.property('handler');
  });
});

describe('Rota getCarById', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCarById).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCarById}`, async () => {
    chai.expect(routes.getCarById).to.have.property('path').eql(pathCarById);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCarById).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCarById.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.getCarById.config.validate).to.have.property('params');
  });
});

describe('Rota getCarsByCategoryId', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCarsByCategoryId).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCarsByCategoryId}`, async () => {
    chai.expect(routes.getCarsByCategoryId).to.have.property('path').eql(pathCarsByCategoryId);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCarsByCategoryId).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCarsByCategoryId.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.getCarsByCategoryId.config.validate).to.have.property('params');
  });
});

describe('Rota getCarsByAvailability', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCarsByAvailability).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCarsByAvailability}`, async () => {
    chai.expect(routes.getCarsByAvailability).to.have.property('path').eql(pathCarsByAvailability);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCarsByAvailability).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCarsByAvailability.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.getCarsByAvailability.config.validate).to.have.property('params');
  });
});

describe('Rota getCarsByDescription', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.getCarsByDescription).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCarsByDescription}`, async () => {
    chai.expect(routes.getCarsByDescription).to.have.property('path').eql(pathCarsByDescription);
  });
  it('Deve ter uma propriedade method igual a GET', async () => {
    chai.expect(routes.getCarsByDescription).to.have.property('method').eql('GET');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.getCarsByDescription.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.getCarsByDescription.config.validate).to.have.property('params');
  });
});

describe('Rota postCar', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.postCar).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCars}`, async () => {
    chai.expect(routes.postCar).to.have.property('path').eql(pathCars);
  });
  it('Deve ter uma propriedade method igual a POST', async () => {
    chai.expect(routes.postCar).to.have.property('method').eql('POST');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.postCar.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.payload', async () => {
    chai.expect(routes.postCar.config.validate).to.have.property('payload');
  });
});

describe('Rota putCar', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.putCar).to.equal('object');
  });
  it(`Deve ter uma propriedade path igual a ${pathCarById}`, async () => {
    chai.expect(routes.putCar).to.have.property('path').eql(pathCarById);
  });
  it('Deve ter uma propriedade method igual a PUT', async () => {
    chai.expect(routes.putCar).to.have.property('method').eql('PUT');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.putCar.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.putCar.config.validate).to.have.property('params');
  });
  it('Deve ter uma propriedade config.validate.payload', async () => {
    chai.expect(routes.putCar.config.validate).to.have.property('payload');
  });
});

describe('Rota deleteCar', () => {
  it('Deve ser um objeto', async () => {
    chai.expect(typeof routes.deleteCar).to.equal('string');
  });
  it(`Deve ter uma propriedade path igual a ${pathCarById}`, async () => {
    chai.expect(routes.deleteCar).to.have.property('path').eql(pathCarById);
  });
  it('Deve ter uma propriedade method igual a DELETE', async () => {
    chai.expect(routes.deleteCar).to.have.property('method').eql('DELETE');
  });
  it('Deve ter uma propriedade config.handler', async () => {
    chai.expect(routes.deleteCar.config).to.have.property('handler');
  });
  it('Deve ter uma propriedade config.validate.params', async () => {
    chai.expect(routes.deleteCar.config.validate).to.have.property('params');
  });
});
