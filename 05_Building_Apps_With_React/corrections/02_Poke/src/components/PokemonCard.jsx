import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
    const id = pokemon.url.split("/")[6]
  return (
    <div className='card bg-neutral shadow-xl'>
      <figure>
        <img
          src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemon.name}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {pokemon.name}
          <Link to={`/pokemon/${pokemon.name}`}>Learn more</Link>
        </h2>
      </div>
    </div>
  );
}

export default PokemonCard;
