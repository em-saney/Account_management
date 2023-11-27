// models/index.js
const Sequelize = require('sequelize');
const { DATABASE, USER, PASSWORD, HOST, DIALECT } = require('../config/database');

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Income = require('./Income')(sequelize, Sequelize);
db.Expense = require('./Expense')(sequelize, Sequelize);

module.exports = db;
