const express = require('express'); // Подключаем Express (это основной инструмент сервера)
const cors = require('cors'); // Разрешает запросы с других доменов (чтобы фронтенд мог общаться с бэком)
const bodyParser = require('body-parser'); // Позволяет обрабатывать JSON-данные в запросах
const sequelize = require('./config/database'); // Подключение базы данных
const authRoutes = require('./routes/authRoutes'); // Подключаем маршруты авторизации
const cardRoutes = require('./routes/cardRoutes'); // Подключаем маршруты для карточек
const tradeRoutes = require('./routes/tradeRoutes'); // Подключаем маршруты для трейдов

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Подключение маршрутов
app.use('/api/auth', authRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/trades', tradeRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`✅ Сервер запущен на порту ${PORT}`));
}).catch(err => console.log('❌ Ошибка подключения к базе данных:', err));
