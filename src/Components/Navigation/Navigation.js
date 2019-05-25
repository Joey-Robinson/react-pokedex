import React, { useState, useEffect } from "react"
import { List } from "../List/List"

export const Navigation = () => {
  const [pokemonAll, setPokemonAll] = useState({})

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then(x => x.json())
      .then(response => setPokemonAll(response))
  }, [])
  const shit = { ...pokemonAll.results }
  // (shit[2].name) - No

  // (...name.name) - No
  // (...name) - Only renders numbers
  // (name) - Only renders numbers
  // (name.name) - No
  // (name[1]) - No
  // ({...name}) - No
  // ([...name]) - No
  // ([...name.name]) - No
  // ([...name.name[1]]) - No
  // ({...name.name[1]}) - No
  // (pokemonAll.name) - No
  // (shit.name) - No
  return (
    <ul className="magic">
      {" "}
      {Object.keys(shit).map(name => {
        return name
      })}
    </ul>
  )
}
