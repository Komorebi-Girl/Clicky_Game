import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";


class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score: 0
  };

  resetGame = () => {
    const newCharacters = [...this.state.characters];
    newCharacters.forEach(character => {
      character.clickValue = 0
    })

    this.setState({
      score: 0,
      characters: newCharacters}
    );

  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  scoreUp = (id) => {
    const characters = [...this.state.characters];
    let currentCharacter;

    characters.forEach(item => {
      if(item.id === id){
        currentCharacter = item;
        item.clickValue++;
      }
    });

    if(currentCharacter.clickValue > 1){
      this.resetGame();
    }
    else{
      this.setState({
        characters: characters,
        score: this.state.score + 1}
      );
    }
    
  }

  render() {
    const shuffledImages = this.shuffleArray(this.state.characters);
    return (
        <Wrapper>
            <Header>{this.state.score}</Header>
          {shuffledImages.map(character => (
                <CharacterCard
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  clickValue={character.clickValue}
                  scoreUp={this.scoreUp}
                />
              ))} 
        </Wrapper>
    );
  }
}
export default App;
