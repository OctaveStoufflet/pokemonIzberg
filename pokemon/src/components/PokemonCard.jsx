import React, { Component } from "react"
import { Link } from "react-router-dom";

//Pokemon display

class PokemonCard extends Component {

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
        <Link to={`pokemon/${this.state.pokemonIndex}`} className="details-link">Details</Link>
      </div>
    )
  }
}


export default PokemonCard;