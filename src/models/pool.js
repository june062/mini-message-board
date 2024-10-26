const { Pool } = require("pg");
const { argv } = require("node:process");
const { Sequelize } = require("sequelize");

module.exports = new Pool({
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PW}`,
  port: `${process.env.DB_PORT}`,
});
