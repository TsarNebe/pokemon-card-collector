import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@material-ui/core';

const CardSearch = () => {
    const [query, setQuery] = useState('');
    const [cards, setCards] = useState([]);

    const searchCards = async () => {
        const response = await axios.get(`/api/cards?query=${query}`);
        setCards(response.data);
    };

    return (
        <div>
            <TextField
                label="Search Cards"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={searchCards}>Search</Button>

            <Grid container spacing={2}>
                {cards.map((card) => (
                    <Grid item key={card.id}>
                        <div>{card.name}</div>
                        <img src={card.imageUrl} alt={card.name} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CardSearch;
