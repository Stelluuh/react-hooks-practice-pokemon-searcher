import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [pokeForm, setPokeForm] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });

  function handlePokeInput(event) {
    setPokeForm({
      ...pokeForm,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    const newPokemon = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.frontUrl,
        back: pokeForm.backUrl,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then(onAddPokemon);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={pokeForm.name}
            onChange={handlePokeInput}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={pokeForm.hp}
            onChange={handlePokeInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeForm.frontUrl}
            onChange={handlePokeInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeForm.backUrl}
            onChange={handlePokeInput}
          />
        </Form.Group>
        <Form.Button onClick={useState("")}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;