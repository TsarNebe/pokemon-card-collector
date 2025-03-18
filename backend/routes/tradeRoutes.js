const express = require('express');
const { createTrade } = require('../controllers/tradeController');

const router = express.Router();

router.post('/trade', createTrade);

module.exports = router;
