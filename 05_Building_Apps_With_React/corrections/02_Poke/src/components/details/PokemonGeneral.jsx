import React from 'react';

function PokemonGeneral({id, name}) {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <figure>
          <img src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`} />
        </figure>
      </div>
    </div>
  );
}

export default PokemonGeneral;
