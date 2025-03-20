import React, { useEffect, useState } from "react";
import { fetchPokemonCards } from "../api/pokemonApi";

function CollectionPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchPokemonCards().then(setCards);
  }, []);

  return (
    <div>
      <h1>Моя коллекция</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
