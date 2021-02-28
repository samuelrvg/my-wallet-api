const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const conection = Sequelize(dbConfig);

module.exports = conection;