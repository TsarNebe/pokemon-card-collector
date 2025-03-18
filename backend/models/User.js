const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');  // Инициализация соединения с базой данных

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

module.exports = User;
