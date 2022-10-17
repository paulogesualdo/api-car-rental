// Este código é o index dos adapters

// São importados os adapters das entidades cars e
// categories e armazenados nas respectivas constantes.
// Ou seja, são importadas funções que recebem três
// parâmetros (config, commons e aplication) e retornam
// os resultados das rotas

const carsWrapper = require('./cars');
const categoriesWrapper = require('./categories');

// É exportada uma função anônima que recebe como
// parâmetro o objeto 'dependencies', que contém os
// seguintes pares chave:valor:
// - config: Algumas configurações como variáveis de
//   ambiente que vieram da pasta config que está na raiz
//   do sistema
// - commons: Funções comuns que podem ser reutilizadas
//   ao longo do sistema, que vieram da pasta commons
//   que está na raiz do sistema
// - application: Algumas informações sobre a aplicação
//   como nome, versão, descrição, que vieram do arquivo
//   package.json que está na raiz do sistema

module.exports = dependencies => ({

  // A primeira chave é getCars que possui como valor
  // a função getCars, que veio do carsWrapper do
  // adapter. Para que o adapter gerasse essa função
  // getCars foi passado como parâmetro um objeto com
  // três pares de chave-valor, que são detalhadas
  // abaixo.

  getCars: carsWrapper({

    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,

  }).getCars,

  getCarById: carsWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).getCarById,

  getCarsByCategoryId: carsWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).getCarsByCategoryId,

  postCar: carsWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).postCar,

  putCar: carsWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).putCar,

  deleteCar: carsWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).deleteCar,

  getCategories: categoriesWrapper({

    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,

  }).getCategories,

  getCategoryById: categoriesWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).getCategoryById,

  postCategory: categoriesWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).postCategory,

  putCategory: categoriesWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).putCategory,

  deleteCategory: categoriesWrapper({
    config: dependencies.config,
    commons: dependencies.commons,
    application: dependencies.application,
  }).deleteCategory,

});
