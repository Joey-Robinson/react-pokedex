import React from "react"

export const Card = ({ height, weight, name, image }) => (
  <div className="list">
    <div className="list--image">
      <img src={image} alt="" />
    </div>
    <div className="list--name">
      <h1>{name}</h1>
    </div>
  </div>
)
