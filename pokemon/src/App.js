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
  return (
    <div>
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={PokemonList} />
        <Route path="/details" component={PokemonDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
