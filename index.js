// Este é o index, onde tudo começa. O arquivo index
// é o primeiro a ser lido de uma pasta. Então se
// importarmos uma pasta sem mencionar um arquivo
// específico, automaticamente o programa vai ler o
// arquivo index.

// A importação do arquivo 'server' que está nessa
// mesma pastado index (pasta raiz do projeto)
// automaticamente importa o Hapi (framework), as
// configurações como as variáveis de ambiente,
// alguns plugins necessários para a parte de
// documentação e teste e as rotas. Este arquivo
// também executa uma função que cria um servidor
// do Hapi

const server = require('./server');

// Esta pasta 'config' importa as configurações como
// as variáveis de ambiente (porta, host, ambiente,
// url do banco de dados, etc). Apesar de já ter sido
// importada junto com o 'server', é necessário
// importá-la novamente para que seja armazenada na
// variável 'config' que é utilizada para mostrar qual
// é a porta e o ambiente em que o servidor foi aberto

const config = require('./config');

// A função init abaixo é utilizada para iniciar o
// servidor do Hapi.

// O 'async' indica que é uma função assíncrona, ou
// seja, dentro dela existem instruções que demoram
// um pouco a serem executadas (como iniciar um
// servidor), porém o JavaScript deve aguardar que
// estas instruções sejam concluídas para prosseguir
// com as próximas instruções.

const init = async () => {

  // O 'try' vai tentar executar as intruções que estão dentro
  // dele e caso não consiga vai armazenar o erro dentro da
  // variável 'error' que está no 'catch'

  try {

    // O arquivo 'server.js' exporta uma função chamada 'server'
    // que foi importada aqui para o index com o mesmo nome 'server'
    // Esta função cria um novo servidor do Hapi. Apesar de não
    // mostrar aqui os parêntesis que indicam que essa função foi
    // executada (), os parêntesis estão na última linha do arquivo
    // 'server.js', que significa quando chamamos o 'server' a
    // função já é executada. Ou seja, na linha abaixo, o programa
    // espera a criação do servidor do Hapi, e quando essa criação é
    // concluída, armazena dentro da constate serverInstance.

    const serverInstance = await server;

    // Na instrução acima, o servidor foi criado, ou seja, o sistema
    // já sabe em qual porta ele deve ser aberto, em qual ambiente,
    // porém o servidor ainda não foi iniciado. A instrução abaixo
    // inicia o servidor que foi criado na instrução acima.

    await serverInstance.start();

    // Quando o servidor foi iniciado, é importante informar isso
    // no console para que o desenvolvedor saiba que já pode
    // executar instruções, por exemplo requisições no Postman.
    // Utilizamos o princípio DRY para informar qual é a porta
    // e qual é o ambiente (desenvolvimento, homologação, produção)
    // pois essas variáveis podem mudar dependendo do ambiente em
    // que estamos. Estas informações vêm da pasta config, que
    // exporta um objeto chamado environmentVariables, que por sua
    // vez contém um objeto com a porta e o ambiente.

    console.log(
      `message: Server listening on port ${config.environmentVariables.PORT}, environment ${config.environmentVariables.NODE_ENV}`,
    );

    // Caso resulte em algum erro para iniciar o servidor, aparecerá no
    // console uma mensagem informando a inicialização falhou e informando
    // também a mensagem de erro mais específica.

  } catch (error) {
    console.log('message: App failed to start');
    console.log(error.message);
  }
};

// A função init que foi descrita acima é executada, ou seja, o servidor
// do Hapi será iniciado na porta e no ambiente correspondentes.

init();

module.exports = { init };

// Teste 8 Jenkins
// Teste 9 Jenkins
