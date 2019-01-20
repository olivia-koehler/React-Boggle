import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import BoardContainer from "./Components/BoardContainer"
import ScrambleButton from "./Components/ScrambleButton"

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom 100%;
    background: #E9F2E9;
`
const Title = styled.h1`
  font-size: 3rem
`

const tilesData = [
  {tileValueArray: ["I", "T", "S" , "T", "D", "Y"]},
  {tileValueArray: ["L", "R", "H" , "Z", "N", "N"]},
  {tileValueArray: ["H", "E", "E" , "N", "G", "W"]},
  {tileValueArray: ["I", "E", "R" , "L", "D", "X"]},
  {tileValueArray: ["U", "N", "H" , "I", "Qu", "M"]},
  {tileValueArray: ["T", "W", "A" , "O", "O", "T"]},
  {tileValueArray: ["I", "U", "T" , "C", "O", "M"]},
  {tileValueArray: ["O", "B", "B" , "A", "J", "O"]},
  {tileValueArray: ["A", "F", "P" , "K", "S", "F"]},
  {tileValueArray: ["A", "G", "A" , "E", "N", "E"]},
  {tileValueArray: ["V", "Y", "R" , "D", "L", "E"]},
  {tileValueArray: ["T", "T", "R" , "E", "L", "Y"]},
  {tileValueArray: ["H", "S", "P" , "A", "C", "O"]},
  {tileValueArray: ["R", "E", "T" , "W", "V", "H"]},
  {tileValueArray: ["U", "E", "E" , "S", "I", "N"]},
  {tileValueArray: ["T", "O", "E" , "S", "S", "I"]},
]

class App extends Component {
  constructor() {
    super() 
    this.state = {
      tiles: tilesData,
      randomizedTiles: []
    }
  }

  randomizeArray = e => {
    let randomizedData = this.state.tiles;
    for (let i=randomizedData.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = randomizedData[i];
      randomizedData[i] = randomizedData[j];
      randomizedData[j] = temp;
    }
    this.setState({randomizedTiles: randomizedData})
  }

  randomizeTile = arr => {
    let randomNumber = Math.floor(Math.random() * 6)
    return arr[randomNumber]
  }

  render() {
    return (
      <AppWrapper className="App">
        <Title>Welcome to Boggle!</Title>
        <BoardContainer tiles={this.state.tiles} randomizeTile={this.randomizeTile} />
        <ScrambleButton randomizeArray={this.randomizeArray} tiles={this.state.tiles}/>
      </AppWrapper>
    );
  }
}

export default App;
