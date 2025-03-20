const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pokemon_db', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;
