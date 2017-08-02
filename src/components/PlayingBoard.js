import React, { Component } from 'react';
import '../styles/App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {playerPick} from '../actions/index'


class PlayingBoard extends Component {
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

function mapStateToProps(state) {
  console.log("mapstate", state.playerPick);
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return {
    playerChoice: state.playerChoice
  };
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
  return bindActionCreators({ playerPick: playerPick }, dispatch);
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(PlayingBoard);