import React, { Component } from "react";
//import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavbarContainer } from "../components/containers";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavbarContainer />
        <RoutesContainer />
      </div>
    );
  }
}

export default App;
