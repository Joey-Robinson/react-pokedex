import React from "react"

export const Card = ({ height, weight, name }) => (
  <div>
    <h1>Name: {name}</h1>
    <p>Height: {height}</p>
    <p>Weight: {weight}</p>
  </div>
)
