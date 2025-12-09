import React from 'react'

function PokemonSprites({ sprites }) {
    const imageElement = (key, src, alt) => {
        return (
        <div key={key}>
            <img src={src} alt={alt} width={100} />
        </div>
        )
    }
    const renderSprites = (sprites) => {
        return Object.keys(sprites).map(key => {
            if (typeof sprites[key] === 'string') {
              return imageElement(key, sprites[key], key);
            } else if (key === 'other') {
              return Object.keys(sprites[key]).map((i) => {
                const source = i;
                return Object.keys(sprites[key][i]).map((k) => {
                  if (typeof sprites[key][i][k] === 'string') {
                    return imageElement(`${source}-${k}`, sprites[key][i][k], `${source}-${k}`);
                  }
                });
              });
            } else if (key === 'versions') {
              return Object.keys(sprites[key]).map((i) => {
                const gen = i;
                return Object.keys(sprites[key][i]).map((k) => {
                  const version = k;
                  return Object.keys(sprites[key][i][k]).map(j => {
                    if (typeof sprites[key][i][k][j] === 'string') {
                      return imageElement(`${gen}-${version}-${j}`, sprites[key][i][k][j], `${gen}-${version}-${j}`);
                    }
                  })
                });
              });
            } else {
                return null;
            }
        })
    }
  return ( 
  <div>
    <h2>Sprites</h2>
    {renderSprites(sprites)}
  </div>
  )
}

export default PokemonSprites