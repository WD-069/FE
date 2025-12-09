import { useState, useEffect } from "react";
import { PokemonCard, Loading, ErrorMessage } from "../components";

function Home() {
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const getPokemon = async() => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
                if(!response.ok) throw new Error("Failed to load");
                const data = await response.json();
                console.log(data)
                setPokemon(data.results)
                setLoading(false)
            } catch(err){
                setError(err.message)
                setLoading(false)
            }
        }
        getPokemon()
    }, [])
    if(loading) return <Loading message="Loading Pokedex" />
    if(error) return <ErrorMessage message={error} />

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pokemon.map((p) => <PokemonCard key={p.name} pokemon={p} />)}
    </div>
  )
}

export default Home