import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  // console.log({pokemons})
  const pokeCard = pokemons.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  ));

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCard} 
    </Card.Group>
  );
}

export default PokemonCollection;
