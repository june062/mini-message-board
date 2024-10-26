const { Pool } = require("pg");
const { argv } = require("node:process");
const { Sequelize } = require("sequelize");

console.log(process.env.DB_PRODUCTION_URI);
module.exports = new Pool({
  connectionString: `${process.env.DB_PRODUCTION_URI}`,
});
