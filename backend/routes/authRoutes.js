const express = require('express');
const bcrypt = require('bcrypt'); // Библиотека для шифрования паролей
const jwt = require('jsonwebtoken'); // Для создания токена авторизации
const User = require('../models/User');

const router = express.Router();

// Регистрация
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'Пользователь создан' });
    } catch (err) {
        res.status(400).json({ error: 'Ошибка регистрации' });
    }
});

// Вход
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Неверные данные' });
        }

        const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '24h' });
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: 'Ошибка входа' });
    }
});

module.exports = router;
