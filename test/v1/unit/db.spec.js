const chai = require('chai');
const chaiHttp = require('chai-http');
const commons = require('../../../commons')
const index = require('../../../index');

chai.should();
chai.use(chaiHttp);

const init = async () => {
  await index.init();
};

init();

describe('Ciclos CRUD no Banco de Dados', () => {

  it('Deve cadastrar categoria 1 através da rota postCategory', done => {
    
    chai.request('http://localhost:3000')
      .post('/v1/categories')
      .send(commons.category1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        commons.category1.id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(commons.category1.name);
        response.should.have.property('description').eql(commons.category1.description);
        done();
      }
    );

  });

  it('Deve cadastrar categoria 2 através da rota postCategory', done => {

    chai.request('http://localhost:3000')
      .post('/v1/categories')
      .send(commons.category2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        commons.category2.id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(commons.category2.name);
        response.should.have.property('description').eql(commons.category2.description);
        done();
      }
    );

  });

  it('Deve consultar categorias através da rota getCategories', done => {
    
    chai.request('http://localhost:3000')
      .get('/v1/categories')
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const response = res.body.response.categoriesList.results;

        let cont = 0;
        response.forEach(x => {
          if ( x.id === commons.category1.id || x.id === commons.category2.id) cont ++; 
        })
        cont.should.be.eql(2);
        
        done();

      }
    );

  });

  it('Deve consultar categoria 1 através da rota getCategoryById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${commons.category1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        response.should.have.property('id').eql(commons.category1.id);
        response.should.have.property('name').eql(commons.category1.name);
        response.should.have.property('description').eql(commons.category1.description);
        done();
      }
    );

  });

  it('Deve editar categoria 1 através da rota putCategory', done => {
    
    chai.request('http://localhost:3000')
      .put(`/v1/categories/${commons.category1.id}`)
      .send(commons.editedCategory1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        response.should.have.property('id').eql(commons.category1.id);
        response.should.have.property('name').eql(commons.editedCategory1.name);
        response.should.have.property('description').eql(commons.editedCategory1.description);
        done();
      }
    );

  });

  it('Deve consultar categoria 1 editada através da rota getCategoryById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${commons.category1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [response] = res.body.response.categoriesList.results;
        response.should.have.property('id').eql(commons.category1.id);
        response.should.have.property('name').eql(commons.editedCategory1.name);
        response.should.have.property('description').eql(commons.editedCategory1.description);
        done();
      }
    );

  });

  it('Deve cadastrar carro 1 através da rota postCar', done => {
    
    commons.car1.categoryId = commons.category1.id;

    chai.request('http://localhost:3000')
      .post('/v1/cars')
      .send(commons.car1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        commons.car1.id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(commons.car1.name);
        response.should.have.property('brand').eql(commons.car1.brand);
        response.should.have.property('description').eql(commons.car1.description);
        response.should.have.property('dailyrate').eql(commons.car1.dailyRate);
        response.should.have.property('categoryid').eql(commons.car1.categoryId);
        response.should.have.property('available').eql(commons.car1.available);
        response.should.have.property('licenseplate').eql(commons.car1.licensePlate);
        done();
      }
    );

  });

  it('Deve cadastrar carro 2 através da rota postCar', done => {
    
    commons.car2.categoryId = commons.category2.id;

    chai.request('http://localhost:3000')
      .post('/v1/cars')
      .send(commons.car2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        commons.car2.id = response.id;
        response.should.have.property('id');
        response.should.have.property('name').eql(commons.car2.name);
        response.should.have.property('brand').eql(commons.car2.brand);
        response.should.have.property('description').eql(commons.car2.description);
        response.should.have.property('dailyrate').eql(commons.car2.dailyRate);
        response.should.have.property('categoryid').eql(commons.car2.categoryId);
        response.should.have.property('available').eql(commons.car2.available);
        response.should.have.property('licenseplate').eql(commons.car2.licensePlate);
        done();
      }
    );

  });

  it('Deve consultar carros através da rota getCars', done => {
    
    chai.request('http://localhost:3000')
      .get('/v1/cars')
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const response = res.body.response.carsList.results;

        let cont = 0;
        response.forEach(x => {
          if ( x.id === commons.car1.id || x.id === commons.car2.id) cont ++; 
        })
        cont.should.be.eql(2);
        
        done();

      }
    );

  });

  it('Deve consultar carro 1 através da rota getCarById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/${commons.car1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        response.should.have.property('id').eql(commons.car1.id);
        response.should.have.property('name').eql(commons.car1.name);
        response.should.have.property('brand').eql(commons.car1.brand);
        response.should.have.property('description').eql(commons.car1.description);
        response.should.have.property('dailyrate').eql(commons.car1.dailyRate);
        response.should.have.property('categoryid').eql(commons.car1.categoryId);
        response.should.have.property('available').eql(commons.car1.available);
        response.should.have.property('licenseplate').eql(commons.car1.licensePlate);
        done();
      }
    );

  });

  it('Deve editar carro 1 através da rota putCar', done => {
    
    commons.editedCar1.categoryId = commons.category2.id;
    
    chai.request('http://localhost:3000')
      .put(`/v1/cars/${commons.car1.id}`)
      .send(commons.editedCar1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const [response] = res.body.response.carsList.results;
        response.should.have.property('id').eql(commons.car1.id);
        response.should.have.property('name').eql(commons.editedCar1.name);
        response.should.have.property('brand').eql(commons.editedCar1.brand);
        response.should.have.property('description').eql(commons.editedCar1.description);
        response.should.have.property('dailyrate').eql(commons.editedCar1.dailyRate);
        response.should.have.property('categoryid').eql(commons.editedCar1.categoryId);
        response.should.have.property('available').eql(commons.editedCar1.available);
        response.should.have.property('licenseplate').eql(commons.editedCar1.licensePlate);
        done();
      }
    );

  });

  it('Deve consultar carros da categoria 2 através da rota getCarsByCategoryId', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/categories/${commons.category2.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.length.should.be.eql(2);
        done();
      }
    );

  });

  it('Deve consultar carros da categoria 1 através da rota getCarsByCategoryId', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/categories/${commons.category1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
      }
    );

  });

  it('Deve consultar carros disponíveis através da rota getCarsByAvailability', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/available/true`)
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const response = res.body.response.carsList.results;

        let cont = 0;
        response.forEach(x => {
          if ( x.id === commons.car1.id || x.id === commons.car2.id) cont ++; 
        })
        cont.should.be.eql(2);
        
        done();

      }
    );

  });

  it('Deve consultar carros por uma palavra na descrição através da rota getCarsByDescription', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/description/pRaTa`)
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const response = res.body.response.carsList.results;

        let cont = 0;
        response.forEach(x => {
          if ( x.id === commons.car1.id || x.id === commons.car2.id ) cont ++; 
        })
        cont.should.be.eql(2);
        
        done();

      }
    );

  });

  it('Deve consultar carros por mais de uma palavra na descrição através da rota getCarsByDescription', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/description/pRaTa&aUtOmÁtIcO`)
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const response = res.body.response.carsList.results;

        let cont = 0;
        response.forEach(x => {
          if ( x.id === commons.car1.id || x.id === commons.car2.id ) cont ++; 
        })
        cont.should.be.eql(1);
        
        done();

      }
    );

  });

  it('Deve consultar carros indisponíveis através da rota getCarsByAvailability', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/available/false`)
      .end((err, res) => {
        
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        const response = res.body.response.carsList.results;

        let cont = 0;
        response.forEach(x => {
          if ( x.id === commons.car1.id || x.id === commons.car2.id) cont ++; 
        })
        cont.should.be.eql(0);
        
        done();

      }
    );

  });

  it('Deve excluir carro 1 através da rota deleteCar', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/cars/${commons.car1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
      }
    );

  });

  it('Deve excluir carro 2 através da rota deleteCar', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/cars/${commons.car2.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
      }
    );

  });

  it('Deve consultar carro 1 excluído através da rota getCarById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/cars/${commons.car1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.carsList.results.should.be.a('array');
        res.body.response.carsList.results.length.should.be.eql(0);
        done();
      }
    );

  });

  it('Deve excluir categoria 1 através da rota deleteCategory', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/categories/${commons.category1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
      }
    );

  });

  it('Deve consultar categoria 1 excluída através da rota getCategoryById', done => {
    
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${commons.category1.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
      }
    );

  });

  it('Deve excluir categoria 2 através da rota deleteCategory', done => {
    
    chai.request('http://localhost:3000')
      .delete(`/v1/categories/${commons.category2.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
      }
    );

  });

});
