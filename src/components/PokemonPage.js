import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  // console.log(pokemons)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data))
  }, [])

  function handleAddPokemon (newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  
  const displayedPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search 
        search={search}
        onSetSearch={setSearch}
      />
      <br />
      <PokemonCollection pokemons={displayedPokemons}/>
    </Container>
  );
}

export default PokemonPage;
