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

describe('ciclo de registro de categorias no banco de dados', () => {

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
