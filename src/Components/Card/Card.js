import React from "react"

export const Card = ({
  height,
  weight,
  name,
  image,
  health,
  speed,
  attack,
  defense,
  specialDefense
}) => (
  <div className="list">
    <div className="list--image">
      <img src={image} alt={`Pokemon ${name}`} />
    </div>
    <p className="list--name">{name}</p>
    <p className="list--weight">
      {`${weight / 10}kg`}
      <br /> <span>Weight</span>
    </p>
    <p className="list--height">
      {`${height / 10}m`}
      <br /> <span>Height</span>
    </p>
    <p className="list--health">
      {`${health}`}
      <br /> <span>Health</span>
    </p>
    <p className="list--speed">
      {`${speed}`}
      <br /> <span>Speed</span>
    </p>
    <p className="list--attack">
      {`${attack}`}
      <br /> <span>Attack</span>
    </p>
    <p className="list--defense">
      {`${defense}`}
      <br /> <span>Defense</span>
    </p>
    <p className="list--sdefense">
      {`${specialDefense}`}
      <br /> <span>SP-Def</span>
    </p>
  </div>
)
