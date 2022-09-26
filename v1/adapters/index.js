// Este código é o index dos adapters

// É importado o adapter da entidade cars e armazenado
// na constante carsWrapper. Ou seja, foi importada uma
// função que recebe três parâmetros (config, commons e
// aplication) e retorna os resultados das rotas

const carsWrapper = require('./cars');

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
// Esta função anônima retorna como 

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

});
