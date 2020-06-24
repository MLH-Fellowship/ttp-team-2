import React, { Component } from "react";
//import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import Header from "../components/views/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <RoutesContainer />
      </div>
    );
  }
}

export default App;
