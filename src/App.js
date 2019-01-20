import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import BoardContainer from "./Components/BoardContainer"

const AppWrapper = styled.div`
  width: 410px;
  margin: auto;
`




const tiles = [
  {Tile1: ["I", "T", "S" , "T", "D", "Y"]},
  {Tile2: ["L", "R", "H" , "Z", "N", "N"]},
  {Tile3: ["H", "E", "E" , "N", "G", "W"]},
  {Tile4: ["I", "E", "R" , "L", "D", "X"]},
  {Tile5: ["U", "N", "H" , "I", "Qu", "M"]},
  {Tile6: ["T", "W", "A" , "O", "O", "T"]},
  {Tile7: ["I", "U", "T" , "C", "O", "M"]},
  {Tile8: ["O", "B", "B" , "A", "J", "O"]},
  {Tile9: ["A", "F", "P" , "K", "S", "F"]},
  {Tile10: ["A", "G", "A" , "E", "N", "E"]},
  {Tile11: ["V", "Y", "R" , "D", "L", "E"]},
  {Tile12: ["T", "T", "R" , "E", "L", "Y"]},
  {Tile13: ["H", "S", "P" , "A", "C", "O"]},
  {Tile14: ["R", "E", "T" , "W", "V", "H"]},
  {Tile15: ["U", "E", "E" , "S", "I", "N"]},
  {Tile16: ["T", "O", "E" , "S", "S", "I"]},
]

class App extends Component {
  constructor() {
    super() 
    this.state = {
      tiles,
    }
  }

  render() {
    console.log(this.state.tiles)
    console.log(this.state.tiles.map(tile => {return "hello"}))
    return (
      <AppWrapper className="App">
        <BoardContainer tiles={this.state.tiles} />
      </AppWrapper>
    );
  }
}

export default App;
