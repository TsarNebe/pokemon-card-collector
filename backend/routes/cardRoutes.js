const express = require('express');
const { getCards } = require('../controllers/cardController');
const Card = require('../models/Card');
const router = express.Router();

router.get('/cards', getCards);
// Получить все карточки
router.get('/', async (req, res) => {
    const cards = await Card.findAll();
    res.json(cards);
});

// Добавить карточку
router.post('/', async (req, res) => {
    try {
        const card = await Card.create(req.body);
        res.status(201).json(card);
    } catch (err) {
        res.status(400).json({ error: 'Ошибка добавления карточки' });
    }
});
module.exports = router;
