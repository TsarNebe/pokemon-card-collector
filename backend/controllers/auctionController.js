const { Auction } = require('../models');

const createAuction = async (req, res) => {
    const { cardId, startPrice } = req.body;
    const auction = await Auction.create({ cardId, startPrice, status: 'active' });
    res.status(201).json(auction);
};

const placeBid = async (req, res) => {
    const { auctionId, userId, bidAmount } = req.body;
    const auction = await Auction.findByPk(auctionId);

    if (auction.status !== 'active') return res.status(400).send('Auction not active');

    auction.highestBid = bidAmount;
    auction.highestBidderId = userId;
    await auction.save();

    res.json(auction);
};

module.exports = { createAuction, placeBid };
