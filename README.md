# Sobre

## Objetivo do Projeto
Construção de uma API REST para locadora de carros

## Tecnologias Utilizadas
> Enumerações das tecnologias utilizadas
1. [Node.js](https://nodejs.org/)
2. [Hapi.js](https://hapijs.com/)

## Big Picture
![Big Picture](./.github/assets/big-picture.png)

## Serviços internos
> Descrição dos serviços internos
1. None

## Serviços externos
> Descrição dos serviços externos
1. None

## Inicialização do projeto

> Variáveis locais usadas para execução do projeto
>> OBS: Criar arquivo dentro do projeto com o nome `.env` e colar texto a baixo
````
NODE_ENV=dev
PORT=3000
SERVICE_NAME=car-rental
HOST=localhost
TIMEZONE=America/Sao_Paulo
````

> Comandos de inicialização:
````bash
> npm install # Instala dependências
> npm run start:dev # Inicia o servidor em ambiente de desenvolvimento
````

> link das rotas existentes
````
http://localhost:3000/api/docs
````

## Como executar testes
> Comandos de inicialização:
````bash
> npm test:unit # Executa testes unitários
# ou para executar todos os testes
> npm run test:all
````


