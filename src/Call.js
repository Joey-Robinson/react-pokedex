import React, { Component } from "react"

export default class Call extends Component {
  state = {
    pokemon: []
  }
  pokeCall = async pok => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`)
    const data = await result.json()
    this.setState({ pokemon: data })
    const ab = this.state.pokemon.stats
    console.log(
      ab.map(n => {
        return console.log(n.stat.name, n.stat.url)
      })
    )
  }
  componentDidMount() {
    this.pokeCall("pikachu")
  }
  render() {
    const { pokemon } = this.state
    return <ul>{pokemon.name} |</ul>
  }
}
