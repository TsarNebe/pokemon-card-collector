export async function fetchPokemonCards() {
  const response = await fetch("https://api.pokemontcg.io/v2/cards");
  const data = await response.json();
  return data.data.map((card) => ({
    id: card.id,
    name: card.name,
    imageUrl: card.images?.small,
  }));
}
