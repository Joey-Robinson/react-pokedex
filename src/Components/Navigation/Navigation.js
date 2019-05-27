import React, { useState, useEffect } from "react"
import { List } from "../List/List"

export const Navigation = () => {
  const [pokemonAll, setPokemonAll] = useState({})

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=802")
      .then(x => x.json())
      .then(response => setPokemonAll(response))
  }, [])

  const pokeResults = { ...pokemonAll.results }
  const pokeNames = { ...pokeResults }
  const names = []
  for (let [key, value] of Object.entries(pokeNames)) {
    names.push(
      <List key={key} onClick={() => console.log("hi")} name={value.name} />
    )
  }

  return (
    <div className="navigation">
      <ul>{names}</ul>
    </div>
  )
}
