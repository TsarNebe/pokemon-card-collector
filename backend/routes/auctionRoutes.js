const express = require('express');
const { createAuction, placeBid } = require('../controllers/auctionController');

const router = express.Router();

router.post('/auction', createAuction);
router.post('/auction/bid', placeBid);

module.exports = router;
