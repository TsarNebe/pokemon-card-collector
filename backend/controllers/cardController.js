const { Card } = require('../models');

const getCards = async (req, res) => {
    const cards = await Card.findAll();
    res.json(cards);
};

module.exports = { getCards };
