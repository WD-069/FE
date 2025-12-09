
function PokemonAbilities({abilities}) {
  return (
    <ul>
      {abilities.map(({ ability }) => (
        <li key={ability.name}>{ability.name}</li>
      ))}
    </ul>
  );
}

export default PokemonAbilities;