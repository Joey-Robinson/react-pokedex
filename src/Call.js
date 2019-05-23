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
  const front = { ...pokemon.sprites }
  console.log(front)
  //

  // const m = pokemon.sprites.front_default
  return (
    <Card
      image={front.front_default}
      name={pokemon.name}
      height={height}
      weight={weight}
    />
  )
}

export default Call
