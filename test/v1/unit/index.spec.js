const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../../../index');
const server = require('../../../server');
const routes = require('../../../v1/routes/routes');

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);
index.init();

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

describe('ciclo de registro de categorias', () => {

  let id = '';

  const name = 'Grupo C - Econômico Com Ar (EDMR)';
  const description = 'Veículo similar a: VW Gol 1.0, Ford Ka Hatch 1.0, Renault Sandero 1.0, dentre outros.';

  const categoriaGrupoC = {
    name,
    description,
  };

  const nameV2 = 'Grupo C - Econômico Com Ar (EDMR) v2';
  const descriptionV2 = 'Veículo similar a: VW Gol 1.0, Ford Ka Hatch 1.0, Renault Sandero 1.0, dentre outros (v2).';

  const categoriaGrupoCV2 = {
    name: nameV2,
    description: descriptionV2,
  };

  it('cadastrar categoria através da rota postCategory', done => {

    chai.request('http://localhost:3000')
      .post('/v1/categories')
      .send(categoriaGrupoC)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [categoriaCadastrada] = res.body.response.categoriesList.results;
        id = categoriaCadastrada.id;
        categoriaCadastrada.should.have.property('id');
        categoriaCadastrada.should.have.property('name').eql(name);
        categoriaCadastrada.should.have.property('description').eql(description);
        done();
      });

  });

  it('consultar categorias através da rota getCategories', done => {
    chai.request('http://localhost:3000')
      .get('/v1/categories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.length.should.be.at.least(1);
        done();
      });
  });

  it('consultar categoria através da rota getCategoryById', done => {
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [categoriaCadastrada] = res.body.response.categoriesList.results;
        categoriaCadastrada.should.have.property('id');
        categoriaCadastrada.should.have.property('name').eql(name);
        categoriaCadastrada.should.have.property('description').eql(description);
        done();
      });
  });

  it('editar categoria através da rota putCategory', done => {
    chai.request('http://localhost:3000')
      .put(`/v1/categories/${id}`)
      .send(categoriaGrupoCV2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [categoriaCadastrada] = res.body.response.categoriesList.results;
        categoriaCadastrada.should.have.property('id').eql(id);
        categoriaCadastrada.should.have.property('name').eql(nameV2);
        categoriaCadastrada.should.have.property('description').eql(descriptionV2);
        done();
      });
  });

  it('consultar categoria editada através da rota getCategoryById', done => {
    chai.request('http://localhost:3000')
      .get(`/v1/categories/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        const [categoriaCadastrada] = res.body.response.categoriesList.results;
        categoriaCadastrada.should.have.property('id').eql(id);
        categoriaCadastrada.should.have.property('name').eql(nameV2);
        categoriaCadastrada.should.have.property('description').eql(descriptionV2);
        done();
      });
  });

  it('excluir categoria através da rota deleteCategory', done => {
    chai.request('http://localhost:3000')
      .delete(`/v1/categories/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.response.categoriesList.results.should.be.a('array');
        res.body.response.categoriesList.results.length.should.be.eql(0);
        done();
      });
  });

});
