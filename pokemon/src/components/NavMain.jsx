import React from "react";
import { NavLink, Link } from "react-router-dom"


function NavMain() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav-side nav-logo">
          <NavLink to="/" className="link"> <h1>IZBERG'S POKEDEX</h1></NavLink>

        </div>
        <div className="nav-side navMain-choices">

          <NavLink to="/pokemon" className="nav-item">
            See my Pokemon
            </NavLink>


          <a href="https://github.com/OctaveStoufflet" className="nav-item">Github</a>


          <a href="https://www.linkedin.com/in/octavestoufflet/" className="nav-item">Linkedin</a>

        </div>
      </nav>
    </div>
  )
}

export default NavMain;