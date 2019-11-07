import React, { Component } from "react";
import "./App.css";
import characters from "./mahmud.json";
import Card from "./components/Card";




class App extends Component {
  state = {
    open: false,
    id1: "",
    id2: "",
    name1: "",
    name2: "",
    cardCount: 0,
    correctId: {},
    trys: 0,
    score: 1
  }
  
  componentWillMount() {
    this.shuffleCards(characters);
  }

  correctTracker = (tracker, id1, id2) => {
    tracker[id1] = true;
    tracker[id2] = true;
    this.setState({ correctId: tracker});
  }

  shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  cardFlip = (charId, name) => {
    this.nullChecker(charId);
    
    if (this.state.cardCount === 0) {
      this.setState(({ open: true, id1: charId, name1: name,  cardCount: 1 }));
    } else if (this.state.cardCount === 1) {
      this.setState({ open: true, id2: charId, name2: name, cardCount: 2 });
      
    } else {
      this.checkAnswer();
      
      this.setState({ open: false, id1: "", id2: "", name1: "", name2: "", cardCount: 0 })
      // this.shuffleCards(characters);
    }
  }
  checkAnswer = () => {
    if (this.state.name1 === this.state.name2) {
      // alert("we have a match");
      this.setState({ score: this.state.score + 1 }, this.correctTracker(this.state.correctId, this.state.id1, this.state.id2));
      
      this.winChecker();
    } else {
      // alert("no match for you!");
      this.setState({ trys: this.state.trys + 1 });
      if(this.state.trys > 12){
        alert("You Lose!");
      }
    }
  }
    nullChecker = (charId) => {
      if(this.state.correctId[charId]){
        alert("you can't select this one again");
        this.setState({ id1: "", id2: "", name1: "", name2: "", cardCount: 0 })
      }
    }
    winChecker = () => {
      if(this.state.score === 6){
        alert("You Won!!");
      }
    }



  render() {
    return (
      <div className="container deck">
        <h4>Score: {this.state.score}</h4>
        <h10>Trys: {this.state.trys}</h10>
        <div className="row">
          {characters.map(character => (
            <div onClick={() => { this.cardFlip(character.id, character.imageFile) }}>
              <Card id={character.id} data-imageUrl={character.imageFile} url={(this.state.open && (this.state.id1 === character.id || this.state.id2 === character.id)) || this.state.correctId[character.id] ? process.env.PUBLIC_URL + '/img/' + character.imageFile : process.env.PUBLIC_URL + '/img/wolverine.jpg'} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
