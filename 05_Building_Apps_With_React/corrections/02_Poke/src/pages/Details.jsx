import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, ErrorMessage } from '../components';
import { PokemonAbilities, PokemonGeneral, PokemonCries, PokemonSprites, PokemonStats, Accordion } from '../components';

function Details() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setPokemon(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getPokemon();
  }, [name]);
  // console.log(pokemon)
  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    pokemon && (
      <div>
        <PokemonGeneral name={pokemon.name} id={pokemon.id} />
        <Accordion title='Stats' defaultChecked={true}>
          <PokemonStats stats={pokemon.stats} />
        </Accordion>
        <Accordion title="Abilities">
          <PokemonAbilities abilities={pokemon.abilities} />
        </Accordion>
        <Accordion title="Cries">
          <PokemonCries cries={pokemon.cries} />
        </Accordion>
        <Accordion title="Sprites">
          <PokemonSprites sprites={pokemon.sprites} />
        </Accordion>
      </div>
    )
  );
}

export default Details;
