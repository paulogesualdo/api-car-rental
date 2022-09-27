const { Pool } = require('pg');

const categoriesWrapper = ({ config, commons, application }) => {

  const pool = new Pool({
    connectionString: config.environmentVariables.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const getCategories = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM categories');
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ categoriesList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const getCategoryById = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      const result = await client.query(`SELECT * FROM categories WHERE id = '${event.params.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ categoriesList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const postCategory = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      await client.query(`INSERT INTO categories VALUES(
        ${event.payload.id}, 
        '${event.payload.name}', 
        '${event.payload.description}')`);
      const result = await client.query(`SELECT * FROM categories WHERE id = '${event.payload.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ categoriesList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const putCategory = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      await client.query(`UPDATE categories SET
        id = ${event.payload.id}, 
        name = '${event.payload.name}', 
        description = '${event.payload.description}'
        WHERE id = '${event.params.id}'`);
      const result = await client.query(`SELECT * FROM categories WHERE id = '${event.payload.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ categoriesList: results, version: application.version });
    } catch (err) {
      console.error(err);
      event.send(`Error: ${err}`);
      return `Error: ${err}`;
    }
  };

  const deleteCategory = async ({ event, onSucess, onError }) => {
    try {
      const client = await pool.connect();
      await client.query(`DELETE FROM categories WHERE id = '${event.params.id}'`);
      const result = await client.query(`SELECT * FROM categories WHERE id = '${event.params.id}'`);
      const results = { results: (result) ? result.rows : null };
      client.release();
      return onSucess({ categoriesList: results, version: application.version });
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
