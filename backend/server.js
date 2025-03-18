const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const cardRoutes = require('./routes/cardRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const sequelize = require('./database');  // Sequelize для подключения к базе данных

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', cardRoutes);
app.use('/api', tradeRoutes);
app.use('/api', auctionRoutes);

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server is running');
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
