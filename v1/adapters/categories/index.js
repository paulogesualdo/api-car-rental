const { Pool } = require('pg');
const { v4: uuid } = require('uuid');

const categoriesWrapper = ({ config, commons, application }) => {

  const pool = new Pool({
    connectionString: config.environmentVariables.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  async function dbGetCategories(event, onSucess, query) {
    try {
      const client = await pool.connect();
      const result = await client.query(query);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ categoriesList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  }

  const getCategories = async ({ event, onSucess }) => dbGetCategories(
    event,
    onSucess,
    commons.selectCategories(),
  );

  const getCategoryById = async ({ event, onSucess }) => dbGetCategories(
    event,
    onSucess,
    commons.selectCategories(`id = '${event.params.id}'`),
  );

  const postCategory = async ({ event, onSucess, onError }) => {
    try {

      const client = await pool.connect();
      const categoriesWithSameName = await client.query(commons.selectCategories(`name = '${event.payload.name}'`));
      const categoriesWithSameDescription = await client.query(commons.selectCategories(`description = '${event.payload.description}'`));

      if (categoriesWithSameName.rowCount === 0 && categoriesWithSameDescription.rowCount === 0) {
        const id = uuid();
        await client.query(`INSERT INTO categories VALUES(
          '${id}', 
          '${event.payload.name}', 
          '${event.payload.description}')`);
        const result = await client.query(commons.selectCategories(`id = '${id}'`));
        const results = { results: (result) ? result.rows : null };
        client.release();
        return onSucess({ categoriesList: results, version: application.version });
      }

      client.release();

      if (categoriesWithSameName.rowCount !== 0) {
        return onError({ message: 'Não é possível cadastrar categoria com nome que já existe no sistema.' });
      }

      return onError({ message: 'Não é possível cadastrar categoria com descrição que já existe no sistema.' });

    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const putCategory = async ({ event, onSucess, onError }) => {
    try {

      const client = await pool.connect();
      const categoriesWithSameName = await client.query(commons.selectCategories(`name = '${event.payload.name}'`));
      const categoriesWithSameDescription = await client.query(commons.selectCategories(`description = '${event.payload.description}'`));

      if (categoriesWithSameName.rowCount === 0 && categoriesWithSameDescription.rowCount === 0) {
        await client.query(`UPDATE categories SET
          name = '${event.payload.name}', 
          description = '${event.payload.description}'
          WHERE id = '${event.params.id}'`);
        const result = await client.query(commons.selectCategories(`id = '${event.params.id}'`));
        const results = { results: (result) ? result.rows : null };
        client.release();
        return onSucess({ categoriesList: results, version: application.version });
      }

      client.release();

      if (categoriesWithSameName.rowCount !== 0) {
        return onError({ message: 'Não é possível editar categoria com nome que já existe no sistema.' });
      }

      return onError({ message: 'Não é possível editar categoria com descrição que já existe no sistema.' });

    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const deleteCategory = async ({ event, onSucess, onError }) => {
    try {

      const client = await pool.connect();
      const carsOfThisCategory = await client.query(commons.selectCars(`AND cat.id = '${event.params.id}'`));

      if (carsOfThisCategory.rowCount === 0) {
        await client.query(`DELETE FROM categories WHERE id = '${event.params.id}'`);
        const result = await client.query(commons.selectCategories(`id = '${event.params.id}'`));
        const results = { results: (result) ? result.rows : null };
        client.release();
        return onSucess({ categoriesList: results, version: application.version });
      }

      client.release();
      return onError({ message: 'Não é possível excluir uma categoria que tenha carros cadastrados nela.' });

    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  return {
    getCategories,
    getCategoryById,
    postCategory,
    putCategory,
    deleteCategory,
  };

};

module.exports = categoriesWrapper;
