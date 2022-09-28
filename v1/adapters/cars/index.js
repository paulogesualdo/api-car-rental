// A constante Pool é necessária para o banco de dados
// Postgres

const { Pool } = require('pg');

const { v4: uuid } = require('uuid');

// Dentro da constante 'carsWrapper' será armazenada uma
// função que recebe um objeto como parâmetro e retorna
// também um objeto.
// O objeto recebido como parâmetro possui os seguintes
// pares de chave-valor:
// - config: algumas configurações como variáveis de
//   ambiente que vieram da pasta config na raiz do
//   sistema
// - commons: algumas funções comuns que podem ser
//   reutilizadas ao longo do programa como uma
//   calculadora por exemplo, que vieram da pasta commons
//   que fica na raiz do sistema
// - application: algumas informações sobre o sistema
//   como o nome e versão, que vieram do arquivo
//   package.json que fica na raiz do sistema

const carsWrapper = ({ config, commons, application }) => {

  // A constante getCars recebe uma função que recebe
  // um objeto como parâmetro e retorna uma função.
  // O objeto recebido como parâmetro possui os
  // seguintes pares de chave-valor:
  // - event: contém diversos parâmetros que vieram da
  //   requisição (Postman), cujos mais importantes
  //   são: payload (o que foi passado no corpo da
  //   requisição), params (o que foi passado na URL)
  // - onSucess:
  // - onError:

  const pool = new Pool({
    connectionString: config.environmentVariables.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const getCars = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM cars');
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ carsList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const getCarById = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      const result = await client.query(`SELECT * FROM cars WHERE id = '${event.params.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ carsList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const postCar = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      const id = uuid();
      await client.query(`INSERT INTO cars VALUES(
        '${id}',
        '${event.payload.name}', 
        '${event.payload.brand}', 
        '${event.payload.description}',
        ${event.payload.dailyRate}, 
        '${event.payload.categoryId}', 
        ${event.payload.available}, 
        '${event.payload.licensePlate}')`);
      const result = await client.query(`SELECT * FROM cars WHERE id = '${id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ carsList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const putCar = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      await client.query(`UPDATE cars SET
        name = '${event.payload.name}', 
        brand = '${event.payload.brand}', 
        description = '${event.payload.description}',
        dailyRate = ${event.payload.dailyRate}, 
        categoryId = '${event.payload.categoryId}', 
        available = ${event.payload.available}, 
        licensePlate = '${event.payload.licensePlate}'
        WHERE id = '${event.params.id}'`);
      const result = await client.query(`SELECT * FROM cars WHERE id = '${event.params.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ carsList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const deleteCar = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      await client.query(`DELETE FROM cars WHERE id = '${event.params.id}'`);
      const result = await client.query(`SELECT * FROM cars WHERE id = '${event.params.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ carsList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  return {
    getCars,
    getCarById,
    postCar,
    putCar,
    deleteCar,
  };

};

module.exports = carsWrapper;
