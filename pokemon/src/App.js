import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={Pokemons} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
