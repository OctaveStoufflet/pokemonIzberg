import React, { Component } from "react";
import PokemonCard from "../components/PokemonCard"

import axios from "axios";

class PokemonList extends Component {
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
      <div className="pokemon-container">
        {this.state.pokemon.map((poke, i) => {
          return (
            <PokemonCard name={poke.name} url={poke.url} key={i} />
          )
        })}
      </div>
    )
  }
}

export default PokemonList;