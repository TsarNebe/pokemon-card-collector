const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Trade extends Model {}

Trade.init({
    offer: DataTypes.STRING,
    request: DataTypes.STRING,
    userId: DataTypes.INTEGER,
}, { sequelize, modelName: 'trade' });

module.exports = Trade;
