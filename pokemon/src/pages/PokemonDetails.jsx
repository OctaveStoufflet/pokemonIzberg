import React, { Component } from "react";
import axios from "axios";

class PokemonDetails extends Component {

  state = {
    img: "",
    name: "",
    abilities: [],


  };

  componentDidMount = () => {
    axios.get(`https://pokeapi.co/api/v2${this.props.match.url}`)
      .then(onePoke => {
        console.log(onePoke)
        this.setState({ img: onePoke.data.sprites.front_default, name: onePoke.data.name, abilities: onePoke.data.abilities })
      })
      .catch(err => {
        console.log(err);
      })
  }




  render() {
    console.log(this.state)
    return (

      <div className="details-container">
        <img src={this.state.img} alt="nein" />
        <div>
          <p>Name: {this.state.name}</p>
          <p>Abilities: {this.state.abilities.map((abilityObject) => abilityObject.ability.name).join(', ')}</p>
        </div>

      </div>
    )
  }
}



export default PokemonDetails;