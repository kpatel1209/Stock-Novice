"use strict";
const log = global.console.log;
/*eslint-env node*/

// require dotenv
const dotenv = require("dotenv").config({
  path: ".env"
});
if (dotenv.error) throw dotenv.error;

// assign environemnt
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

// Sequelize (capital) will require sequelize standard library
const Sequelize = require("sequelize");

// sequelize (lower case) will reference connection to mysql database
// Sequelize("database_name_db", "username", "password", {obj});
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, config);
} else {
  sequelize = new Sequelize("stock_novice_db", process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idel: 10000
    }
  });
}

log(`sequelize connection to ${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}`);

// export sequelize connection
module.exports = sequelize;
