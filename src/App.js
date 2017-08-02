import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="board"> 
          <div className="playingSquare" id="1"></div>
          <div className="playingSquare" id="2"></div>
          <div className="playingSquare" id="3"></div>
          <div className="playingSquare" id="4"></div>
          <div className="playingSquare" id="5"></div>
          <div className="playingSquare" id="6"></div>
          <div className="playingSquare" id="7"></div>
          <div className="playingSquare" id="8"></div>
          <div className="playingSquare" id="9"></div>
        </div>
      </div>
    );
  }
}

export default App;
