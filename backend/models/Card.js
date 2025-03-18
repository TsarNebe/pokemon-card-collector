const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Card extends Model {}

Card.init({
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
}, { sequelize, modelName: 'card' });

module.exports = Card;
