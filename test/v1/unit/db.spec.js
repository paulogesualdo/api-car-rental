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
  
  let car1Id = '';

  const car1Name = 'Argo';
  const car1Brand = 'Fiat';
  const car1Description = 'Cor: Vermelho, Câmbio: Automático, Ar-Condicionado: Sim';
  const car1DailyRate = 150;
  const car1Available = true;
  const car1LicensePlate = 'QNB2203'

  const car1NameV2 = 'Argo V2';
  const car1BrandV2 = 'Fiat V2';
  const car1DescriptionV2 = 'Cor: Vermelho, Câmbio: Automático, Ar-Condicionado: Sim (V2)';
  const car1DailyRateV2 = 160;
  const car1AvailableV2 = false;
  const car1LicensePlateV2 = 'QNB2204'

  let car2Id = '';

  const car2Name = 'Onix';
  const car2Brand = 'Chevrolet';
  const car2Description = 'Cor: Prata, Câmbio: Automático, Ar-Condicionado: Sim';
  const car2DailyRate = 150;
  const car2Available = true;
  const car2LicensePlate = 'NYS0A35'

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

  it('consultar categorias através da rota getCategories', done => {
    
    chai.request('http://localhost:3000')
      .get('/v1/categories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.length.should.be.at.least(2);
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

  it('cadastrar carro 1 através da rota postCar', done => {
    
    const car1 = {
      name: car1Name,
      brand: car1Brand,
      description: car1Description,
      dailyRate: car1DailyRate,
      categoryId: category1Id,
      available: car1Available,
      licensePlate: car1LicensePlate,
    };
    
    chai.request('http://localhost:3000')
      .post('/v1/cars')
      .send(car1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        car1Id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(car1Name);
        response.should.have.property('brand').eql(car1Brand);
        response.should.have.property('description').eql(car1Description);
        response.should.have.property('dailyrate').eql(car1DailyRate);
        response.should.have.property('categoryid').eql(category1Id);
        response.should.have.property('available').eql(car1Available);
        response.should.have.property('licenseplate').eql(car1LicensePlate);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('cadastrar carro 2 através da rota postCar', done => {
    
    const car2 = {
      name: car2Name,
      brand: car2Brand,
      description: car2Description,
      dailyRate: car2DailyRate,
      categoryId: category2Id,
      available: car2Available,
      licensePlate: car2LicensePlate,
    };
    
    chai.request('http://localhost:3000')
      .post('/v1/cars')
      .send(car2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        car2Id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(car2Name);
        response.should.have.property('brand').eql(car2Brand);
        response.should.have.property('description').eql(car2Description);
        response.should.have.property('dailyrate').eql(car2DailyRate);
        response.should.have.property('categoryid').eql(category2Id);
        response.should.have.property('available').eql(car2Available);
        response.should.have.property('licenseplate').eql(car2LicensePlate);
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
        res.body.response.carsList.results.length.should.be.at.least(2);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.carsList.results.length}`);
        console.log();
      }
    );

  });

  it('consultar carro 1 através da rota getCarById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/${car1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        response.should.have.property('id').eql(car1Id);
        response.should.have.property('name').eql(car1Name);
        response.should.have.property('brand').eql(car1Brand);
        response.should.have.property('description').eql(car1Description);
        response.should.have.property('dailyrate').eql(car1DailyRate);
        response.should.have.property('categoryid').eql(category1Id);
        response.should.have.property('available').eql(car1Available);
        response.should.have.property('licenseplate').eql(car1LicensePlate);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('editar carro 1 através da rota putCar', done => {
    
    const car1V2 = {
      name: car1NameV2,
      brand: car1BrandV2,
      description: car1DescriptionV2,
      dailyRate: car1DailyRateV2,
      categoryId: category2Id,
      available: car1AvailableV2,
      licensePlate: car1LicensePlateV2,
    };
    
    chai.request('http://localhost:3000')
      .put(`/v1/cars/${car1Id}`)
      .send(car1V2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        response.should.have.property('id').eql(car1Id);
        response.should.have.property('name').eql(car1NameV2);
        response.should.have.property('brand').eql(car1BrandV2);
        response.should.have.property('description').eql(car1DescriptionV2);
        response.should.have.property('dailyrate').eql(car1DailyRateV2);
        response.should.have.property('categoryid').eql(category2Id);
        response.should.have.property('available').eql(car1AvailableV2);
        response.should.have.property('licenseplate').eql(car1LicensePlateV2);
        done();
        console.log(response);
        console.log();
      }
    );

  });

  it('consultar carros da categoria 2 através da rota getCarsByCategoryId', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/categories/${category2Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.length.should.be.eql(2);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.carsList.results.length}`);
        console.log(res.body.response.carsList.results)
        console.log();
      }
    );

  });

  it('consultar carros da categoria 1 através da rota getCarsByCategoryId', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/categories/${category1Id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
        console.log(`Número de registros encontrados: ${res.body.response.carsList.results.length}`);
        console.log();
      }
    );

  });

  it('excluir carro 1 através da rota deleteCar', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/cars/${car1Id}`)
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

  it('excluir carro 2 através da rota deleteCar', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/cars/${car2Id}`)
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

  it('consultar carro 1 excluído através da rota getCarById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/${car1Id}`)
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
