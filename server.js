// É importado o framework Hapi que é um módulo externo, ou seja,
// fica dentro da pasta node_modules

const Hapi = require('@hapi/hapi');

// É importada a pasta config que fica na raiz do sistema que
// possui um objeto chamado environmentVariables que contém pares
// chave:valor com o nome da porta, host, ambiente, etc. Estas
// informações vieram do arquivo .env que está na raiz do projeto

const config = require('./config');

// São importados diversos módulos externos como o Inert, Vision,
// HapiAlive, entre outros, cada um para uma tarefa específica

const registers = require('./register');

// São importadas as rotas dessa versão do aplicativo

const v1 = require('./v1/routes');

// É exportada uma função anônima, que antes de ser exportada
// é executada. Essa função anônima recebe como parâmetro uma
// outra função anônima que é assíncrona, ou seja, ela possui
// alguma instrução que demora um pouco para ser executada,
// porém o sistema deve aguardar que ela seja executada antes
// de prosseguir com as próximas instruções.

module.exports = (async () => {

  // Uma constante chamada server recebe uma nova instância da
  // constante Hapi (que foi importada acima). Dentro dessa
  // constente é executada uma função chamada Server que recebe
  // como parâmetro um objeto com dois pares chave:valor que são
  // port e host.

  const server = new Hapi.Server({

    // Esses pares chave:valor são necessários para que o servidor
    // do Hapi seja iniciado corretamente, sendo um a porta e o
    // outro o host. Essas informações vieram da constante config
    // que foi importada acima, que por sua vez possui o objeto
    // environmentVariables que contém os valores da porta e do host,
    // que por sua vez vieram do arquivo .env que fica na raiz do
    // sistema

    port: config.environmentVariables.PORT,
    host: config.environmentVariables.HOST,

  });

  // A função abaixo é assíncrona, ou seja, ela demora um pouco a ser
  // executada, porém o sistema precisa aguardar que ela seja
  // executada antes de executar outras instruções. Dentro da
  // constante server (que contém o servidor do Hapi), será executada
  // a função register, passando como parâmetro a constante registers
  // que foi importada acima, que contém diversos módulos externos
  // externos como o Inert, Vision, HapiAlive, entre outros, cada
  // um com uma função específica.

  await server.register(registers);

  // Dentro da constante server (que contém o servidor do Hapi) é
  // executada a função route e é passado como parâmetro a constante
  // v1, que foi importada acima e contém as rotas dessa versão do
  // aplicativo

  server.route(v1);

  // Esta função irá retornar a constante server, que nesse momento
  // em que é retornada é um servidor do Hapi com diversas
  // propriedades que foram personalizadas por esta função em que
  // estamos como a porta, host, registros e rotas.

  return server;

})();
