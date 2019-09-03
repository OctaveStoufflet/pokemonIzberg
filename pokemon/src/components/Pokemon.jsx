import React, { Component } from "react"
import PokemonDetails from "../pages/PokemonDetails"
import { Link } from "react-router-dom"
import axios from "axios";

class Pokemon extends Component {
  state = {
    pokemon: []
  };
  componentDidMount = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
      .then(onePokemon => {
        this.setState({ pokemon: onePokemon.data })
        console.log(onePokemon.data)
      })
      .catch(err => { console.log(err) })
  }



  render() {
    return (
      <div className="pokemon-item" >
        <h1>{this.props.name.toUpperCase()}</h1>
        <Link to="/details" className="details-link">Details</Link>


      </div>
    )
  }

}


export default Pokemon;