import React from "react"

export const List = ({ name, onClick }) => (
  <li>
    <button onClick={onClick}>{name}</button>
  </li>
)
