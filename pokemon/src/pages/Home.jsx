import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavLink className="link" to="/pokemons">
        See some POKEMON
      </NavLink>
    </div>
  )
}

export default Home;