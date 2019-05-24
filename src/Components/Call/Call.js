import React, { useState, useEffect } from "react"
import { Card } from "../Card/Card"

export const Call = () => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then(x => x.json())
      .then(response => setPokemon(response))
  }, [])

  const height = pokemon.height
  const weight = pokemon.weight
  const front = { ...pokemon.sprites }
  const stats = { ...pokemon.stats }
  const speed = { ...stats[0] }
  const specialDefense = { ...stats[1] }
  const defense = { ...stats[3] }
  const attack = { ...stats[4] }
  const healthBase = { ...stats[5] }

  // if (pokemon) {
  //   return (
  //     <Card
  //       specialDefense={specialDefense.base_stat}
  //       defense={defense.base_stat}
  //       attack={attack.base_stat}
  //       speed={speed.base_stat}
  //       health={healthBase.base_stat}
  //       image={front.front_default}
  //       name={pokemon.name}
  //       height={height}
  //       weight={weight}
  //     />
  //   )
  // }
  console.log(stats)
  return (
    <div>
      {pokemon && (
        <Card
          specialDefense={specialDefense.base_stat}
          defense={defense.base_stat}
          attack={attack.base_stat}
          speed={speed.base_stat}
          health={healthBase.base_stat}
          image={front.front_default}
          name={pokemon.name}
          height={height}
          weight={weight}
        />
      )}
    </div>
  )
}

export default Call
