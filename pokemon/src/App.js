import React from "react";
import { Switch, Route } from "react-router-dom";
import "../src/styles/css/main.css";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  console.log(this);

  return (
    <div>
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon" component={PokemonList} />
        <Route exact path="/pokemon/:pokemonIndex" component={PokemonDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
