import React, { Component } from "react"
import PokemonDetails from "../pages/PokemonDetails"
import { Link } from "react-router-dom";
import axios from "axios";

class Pokemon extends Component {

  state = {
    pokemonIndex: "",
    imageUrl: ""
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    this.setState({ name, pokemonIndex });
  }

  render() {
    return (
      <div className="pokemon-item" >
        <h1>{this.props.name.toUpperCase()}</h1>
        <Link to={`pokemon/${this.state.pokemonIndex}`}>Details</Link>
      </div>
    )
  }
}


export default Pokemon;