const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Auction extends Model {}

Auction.init({
    cardId: DataTypes.INTEGER,
    startPrice: DataTypes.FLOAT,
    highestBid: DataTypes.FLOAT,
    status: DataTypes.STRING,
    highestBidderId: DataTypes.INTEGER,
}, { sequelize, modelName: 'auction' });

module.exports = Auction;
