const express = require('express');
const Trade = require('../models/Trade');

const router = express.Router();

// Создать трейд
router.post('/', async (req, res) => {
    try {
        const trade = await Trade.create(req.body);
        res.status(201).json(trade);
    } catch (err) {
        res.status(400).json({ error: 'Ошибка создания трейда' });
    }
});

// Получить все трейды
router.get('/', async (req, res) => {
    const trades = await Trade.findAll();
    res.json(trades);
});

module.exports = router;
