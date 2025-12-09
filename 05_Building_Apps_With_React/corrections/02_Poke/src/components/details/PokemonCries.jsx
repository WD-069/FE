
function PokemonCries({cries}) {
    const renderCries = cries => {
        return Object.keys(cries).map(key => {
            if(cries[key]) return (
              <div key={key}>
                <audio controls>
                  <source src={cries[key]} type='audio/mpeg' />
                </audio>
              </div>
            );
            return null;
        })
    }

  return (
    <div className="flex flex-wrap items-center justify-around gap-3">
       {renderCries(cries)}
    </div>
  )
}

export default PokemonCries;