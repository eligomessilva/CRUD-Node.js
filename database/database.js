const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'fa2544', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;