// Lê o arquivo .env e exporta um objeto com
// as variáveis de ambiente

require('dotenv').config();

const {
  PORT,
  HOST,
  NODE_ENV,
  DATABASE_URL,
} = process.env;

module.exports = {
  PORT,
  HOST,
  NODE_ENV,
  DATABASE_URL,
};
