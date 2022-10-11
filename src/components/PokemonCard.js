import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  // console.log('pokemon card: ', pokemon)
  const {name, hp, sprites} = pokemon
  const [backImage, setBackImage] = useState(false)

  function clickImage() {
    setBackImage((backImage) => !backImage)
  }

  return (
    <Card>
      <div onClick={clickImage}>
        <div className="image">
          <img src={backImage ? sprites.back : sprites.front}alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
