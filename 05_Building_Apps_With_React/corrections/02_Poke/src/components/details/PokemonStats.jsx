
function PokemonStats({stats}) {
    console.log(stats)
  return (
    <ul>
        {stats.map(({stat, base_stat}) => <li key={stat.name}>{stat.name}: {base_stat}</li>)}
    </ul>
  )
}

export default PokemonStats