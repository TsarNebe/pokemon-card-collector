const { Trade } = require('../models');

const createTrade = async (req, res) => {
    const { offer, request, userId } = req.body;
    const trade = await Trade.create({ offer, request, userId });
    res.status(201).json(trade);
};

module.exports = { createTrade };
