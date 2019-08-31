import React, { Component } from "react";
import Pokemon from "../components/Pokemon"

import axios from "axios";

class Pokemons extends Component {
  state = {
    pokemon: []
  };
  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(pokemons => {
        this.setState({
          pokemon: pokemons.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.pokemon)
    return (
      <div>
        {this.state.pokemon.map((poke, i) => {
          return (
            <Pokemon name={poke.name} key={i} />
          )
        })}
      </div>
    )
  }
}

export default Pokemons;