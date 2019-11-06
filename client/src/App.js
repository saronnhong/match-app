import React, { Component } from "react";
import "./App.css";
import characters from "./mahmud.json";
import Card from "./components/Card";


class App extends Component {
  state = {
    open: false,
    id1: "",
    id2: "",
    cardCount: 0,
    score: 0
  }
  shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  cardFlip = (charId) => {
    if(this.state.cardCount === 0){
      this.setState(({ open: true, id1: charId, cardCount: 1 }));
    }else if (this.state.cardCount === 1){
      this.setState(({ open: true, id2: charId, cardCount: 2 }));
      
    }else{
      if(this.state.id1 === this.state.id2){
        alert("we have a match");
      }else{
        alert("no match for you!");
      }
      this.setState({open: false, id1: "", id2: "", cardCount: 0})
    }
  }
  



  render() {
    return (
      <div className="container deck">
        <div className="row">
          {characters.map(character => (
            <div id={character.id} onClick={() => { this.cardFlip(character.id) }}>
              <Card id={character.id} data-imageUrl={character.imageFile} url={(this.state.open && (this.state.id1 === character.id || this.state.id2 === character.id)) ? process.env.PUBLIC_URL + '/img/' + character.imageFile  : process.env.PUBLIC_URL + '/img/wolverine.jpg'} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
