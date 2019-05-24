import React from "react"

export const Card = ({ height, weight, name, image }) => (
  <div className="list">
    <div className="list--image">
      <img src={image} alt={`Pokemon ${name}`} />
    </div>
    <p className="list--name">{name}</p>
  </div>
)
