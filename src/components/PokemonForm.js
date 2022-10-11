import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddpokemon }) {
  const [pokeForm, setPokeForm] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function handlePokeInputs(event){
    // console.log(event.target.value)
    setPokeForm({ 
      ...pokeForm,
      [event.target.name] : event.target.value,
    })
  }

  function submitNewPokemon() {
    const newPokemon = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.frontUrl,
        back: pokeForm.backUrl,
      },
    }

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(response => response.json())
      .then(onAddpokemon)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitNewPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={pokeForm.name}
            onChange={handlePokeInputs}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={pokeForm.hp}
            onChange={handlePokeInputs}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeForm.frontUrl}
            onChange={handlePokeInputs}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeForm.backUrl}
            onChange={handlePokeInputs}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
