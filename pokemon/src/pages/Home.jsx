import React from "react";
import { NavLink } from "react-router-dom";

// Home page

function Home() {

  return (
    <div className="home-container">
      <button className="btn"><NavLink to="/pokemon" className="title">Click here to see my collection</NavLink></button>
    </div>
  )
}

export default Home;