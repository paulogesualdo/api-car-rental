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

  async function dbGetCars(event, onSucess, query) {
    try {
      const client = await pool.connect();
      const result = await client.query(query);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ carsList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  }

  const getCars = async ({ event, onSucess }) => dbGetCars(
    event,
    onSucess,
    commons.selectCars(),
  );

  const getCarById = async ({ event, onSucess }) => dbGetCars(
    event,
    onSucess,
    commons.selectCars(`AND car.id = '${event.params.id}'`),
  );

  const getCarsByCategoryId = async ({ event, onSucess }) => dbGetCars(
    event,
    onSucess,
    commons.selectCars(`AND cat.id = '${event.params.id}'`),
  );

  const getCarsByAvailability = async ({ event, onSucess }) => dbGetCars(
    event,
    onSucess,
    commons.selectCars(`AND car.available = '${event.params.available}'`),
  );

  const getCarsByDescription = async ({ event, onSucess }) => dbGetCars(
    event,
    onSucess,
    commons.selectCars(`AND to_tsvector(car.description) @@ to_tsquery('${event.params.description}')`),
  );

  const postCar = async ({ event, onSucess, onError }) => {
    try {

      const client = await pool.connect();
      const carsWithSameLicensePlate = await client.query(commons.selectCars(`AND car.licensePlate = '${event.payload.licensePlate}'`));

      if (carsWithSameLicensePlate.rowCount === 0) {
        const id = uuid();
        await client.query(`
          INSERT INTO cars VALUES(
          '${id}',
          '${event.payload.name}', 
          '${event.payload.brand}', 
          '${event.payload.description}',
          ${event.payload.dailyRate}, 
          '${event.payload.categoryId}', 
          ${event.payload.available}, 
          '${event.payload.licensePlate}')
        `);
        const result = await client.query(commons.selectCars(`AND car.id = '${id}'`));
        const results = { results: (result) ? result.rows : null };
        client.release();
        return onSucess({ carsList: results, version: application.version });
      }

      client.release();
      return onError({ message: 'Não é possível cadastrar carro com placa que já existe no sistema.' });

    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const putCar = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      const carsWithSameLicensePlate = await client.query(
        commons.selectCars(`AND car.licensePlate = '${event.payload.licensePlate}' AND car.id <> '${event.params.id}'`),
      );

      if (carsWithSameLicensePlate.rowCount === 0) {
        await client.query(`
          UPDATE cars
          SET
            name = '${event.payload.name}', 
            brand = '${event.payload.brand}', 
            description = '${event.payload.description}',
            dailyRate = ${event.payload.dailyRate}, 
            categoryId = '${event.payload.categoryId}', 
            available = ${event.payload.available}, 
            licensePlate = '${event.payload.licensePlate}'
          WHERE id = '${event.params.id}'
        `);
        const result = await client.query(commons.selectCars(`AND car.id = '${event.params.id}'`));
        const results = { results: (result) ? result.rows : null };
        client.release();
        return onSucess({ carsList: results, version: application.version });

      }

      client.release();
      return onError({ message: 'Não é possível editar carro com placa que já existe no sistema.' });

    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const deleteCar = async ({ event, onSucess }) => {
    try {
      const client = await pool.connect();
      await client.query(`DELETE FROM cars WHERE id = '${event.params.id}'`);
      const result = await client.query(commons.selectCars(`AND car.id = '${event.params.id}'`));
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
    getCarsByCategoryId,
    getCarsByAvailability,
    getCarsByDescription,
    postCar,
    putCar,
    deleteCar,
  };

};

module.exports = carsWrapper;
