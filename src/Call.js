import React, { useState, useEffect } from "react"
import { Card } from "./Card"

export const Call = () => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then(x => x.json())
      .then(response => setPokemon(response))
  }, [])
  const height = pokemon.height
  const weight = pokemon.weight
  return (
    <div>
      <Card height={height} weight={weight} />
      {/* {Object.keys(pokemon).map(({ abilities }) => (
        <li style={{ fontSize: "40px" }}>
          {abilities.map(a => a.ability.name)}
        </li>
      ))} */}
    </div>
  )
}

export default Call
