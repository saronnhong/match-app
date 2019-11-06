import React, { Component } from "react";
import "./App.css";
import characters from "./mahmud.json";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {characters.map(character => (
            <Card id={character.id} url={process.env.PUBLIC_URL + '/img/' + character.imageFile} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
