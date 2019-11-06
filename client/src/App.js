import React, { Component } from "react";
import "./App.css";
import characters from "./mahmud.json";
import Card from "./components/Card";

class App extends Component {
  state = {
    open: false,
    id: ""
  }

  cardFlip = (charId) => {
    this.setState(state => ({ open: !state.open, id: charId }))
  }
  
  
  render() {
    return (
      <div className="container deck">
        <div className="row">
          {characters.map(character => (
            <div id={character.id} onClick={() => { this.cardFlip(character.id) }}>
              <Card id={character.id} data-imageUrl={character.imageFile} url={(this.state.open && this.state.id === character.id) ? process.env.PUBLIC_URL + '/img/' + character.imageFile  : process.env.PUBLIC_URL + '/img/wolverine.jpg'} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
