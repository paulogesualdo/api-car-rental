require('dotenv').config();

const { PORT, HOST, NODE_ENV } = process.env;
module.exports = { PORT, HOST, NODE_ENV };
