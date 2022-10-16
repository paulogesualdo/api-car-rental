const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../../../index');

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

const init = async () => {
  await index.init();
};

init();

describe('ciclo de registro no banco de dados', () => {

  let category1Id = '';

  const category1Name = 'Grupo C - Econômico Com Ar (EDMR)';
  const category1Description = 'Veículo similar a: VW Gol 1.0, Ford Ka Hatch 1.0, Renault Sandero 1.0, dentre outros.';

  const category1NameV2 = 'Grupo C - Econômico Com Ar (EDMR) v2';
  const category1DescriptionV2 = 'Veículo similar a: VW Gol 1.0, Ford Ka Hatch 1.0, Renault Sandero 1.0, dentre outros (v2).';

  let category2Id = '';

  const category2Name = 'Grupo B - Compacto Com Ar (ECMR)';
  const category2Description = 'Veículo similar a: Renault Kwid 1.0, Fiat Mobi 1.0, Fiat Uno 1.0, dentre outros.';
  
  let carId = '';

  const carName = 'Argo';
  const carBrand = 'Fiat';
  const carDescription = 'Cor: Vermelho, Câmbio: Automático, Ar-Condicionado: Sim';
  const carDailyRate = 150;
  const carAvailable = true;
  const carLicensePlate = 'QNB2203'

  const carNameV2 = 'Argo V2';
  const carBrandV2 = 'Fiat V2';
  const carDescriptionV2 = 'Cor: Vermelho, Câmbio: Automático, Ar-Condicionado: Sim (V2)';
  const carDailyRateV2 = 160;
  const carAvailableV2 = false;
  const carLicensePlateV2 = 'QNB2204'

  it('cadastrar categoria 1 através da rota postCategory', done => {
    
    const category1 = {
      name: category1Name,
      description: category1Description,
    };

    chai.request('http://localhost:3000')
      .post('/v1/categories')
      .send(category1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        category1Id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(category1Name);
        response.should.have.property('description').eql(category1Description);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('consultar categorias através da rota getCategories', done => {
    
    chai.request('http://localhost:3000')
      .get('/v1/categories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.length.should.be.at.least(1);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.categoriesList.results.length}`);
        console.log();
      }
    );

  });

  it('consultar categoria 1 através da rota getCategoryById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${category1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        response.should.have.property('id').eql(category1Id);
        response.should.have.property('name').eql(category1Name);
        response.should.have.property('description').eql(category1Description);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('editar categoria 1 através da rota putCategory', done => {
    
    const category1V2 = {
      name: category1NameV2,
      description: category1DescriptionV2,
    };
    
    chai.request('http://localhost:3000')
      .put(`/v1/categories/${category1Id}`)
      .send(category1V2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        response.should.have.property('id').eql(category1Id);
        response.should.have.property('name').eql(category1NameV2);
        response.should.have.property('description').eql(category1DescriptionV2);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('consultar categoria 1 editada através da rota getCategoryById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${category1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        response.should.have.property('id').eql(category1Id);
        response.should.have.property('name').eql(category1NameV2);
        response.should.have.property('description').eql(category1DescriptionV2);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('cadastrar carro através da rota postCar', done => {
    
    const car = {
      name: carName,
      brand: carBrand,
      description: carDescription,
      dailyRate: carDailyRate,
      categoryId: category1Id,
      available: carAvailable,
      licensePlate: carLicensePlate,
    };
    
    chai.request('http://localhost:3000')
      .post('/v1/cars')
      .send(car)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        carId = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(carName);
        response.should.have.property('brand').eql(carBrand);
        response.should.have.property('description').eql(carDescription);
        response.should.have.property('dailyrate').eql(carDailyRate);
        response.should.have.property('categoryid').eql(category1Id);
        response.should.have.property('available').eql(carAvailable);
        response.should.have.property('licenseplate').eql(carLicensePlate);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('consultar carros através da rota getCars', done => {
    
    chai.request('http://localhost:3000')
      .get('/v1/cars')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.length.should.be.at.least(1);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.carsList.results.length}`);
        console.log();
      }
    );

  });

  it('consultar carro através da rota getCarById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/${carId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        response.should.have.property('id').eql(carId);
        response.should.have.property('name').eql(carName);
        response.should.have.property('brand').eql(carBrand);
        response.should.have.property('description').eql(carDescription);
        response.should.have.property('dailyrate').eql(carDailyRate);
        response.should.have.property('categoryid').eql(category1Id);
        response.should.have.property('available').eql(carAvailable);
        response.should.have.property('licenseplate').eql(carLicensePlate);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('cadastrar categoria 2 através da rota postCategory', done => {
    
    const category2 = {
      name: category2Name,
      description: category2Description,
    };

    chai.request('http://localhost:3000')
      .post('/v1/categories')
      .send(category2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        category2Id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(category2Name);
        response.should.have.property('description').eql(category2Description);
        done();
        console.log(response);
        console.log();
      }
    );

  });


  it('editar carro através da rota putCar', done => {
    
    const carV2 = {
      name: carNameV2,
      brand: carBrandV2,
      description: carDescriptionV2,
      dailyRate: carDailyRateV2,
      categoryId: category2Id,
      available: carAvailableV2,
      licensePlate: carLicensePlateV2,
    };
    
    chai.request('http://localhost:3000')
      .put(`/v1/cars/${carId}`)
      .send(carV2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        response.should.have.property('id').eql(carId);
        response.should.have.property('name').eql(carNameV2);
        response.should.have.property('brand').eql(carBrandV2);
        response.should.have.property('description').eql(carDescriptionV2);
        response.should.have.property('dailyrate').eql(carDailyRateV2);
        response.should.have.property('categoryid').eql(category2Id);
        response.should.have.property('available').eql(carAvailableV2);
        response.should.have.property('licenseplate').eql(carLicensePlateV2);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('excluir carro através da rota deleteCar', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/cars/${carId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.carsList.results.length}`);
        console.log();
      }
    );

  });

  it('consultar carro excluído através da rota getCarById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/${carId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.carsList.results.length}`);
        console.log();
      }
    );

  });

  it('excluir categoria 1 através da rota deleteCategory', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/categories/${category1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.categoriesList.results.length}`);
        console.log();
      }
    );

  });

  it('consultar categoria 1 excluída através da rota getCategoryById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${category1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.categoriesList.results.length}`);
        console.log();
      }
    );

  });

  it('excluir categoria 2 através da rota deleteCategory', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/categories/${category2Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.categoriesList.results.length}`);
        console.log();
      }
    );

  });

});
