import React, { Component } from "react";
import "../styles/App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { playerPick } from "../actions/index";

class PlayingBoard extends Component {
  render() {
    return (
      <div className="App">
        <div className="board">
            
          <div
            onClick={() => this.props.playerPick(1)}
            className="playingSquare"
            id="1"
          >
          </div>
          <div
            onClick={() => this.props.playerPick(2)}
            className="playingSquare"
            id="2"
          />
          <div
            onClick={() => this.props.playerPick(3)}
            className="playingSquare"
            id="3"
          />
          <div
            onClick={() => this.props.playerPick(4)}
            className="playingSquare"
            id="4"
          />
          <div
            onClick={() => this.props.playerPick(5)}
            className="playingSquare"
            id="5"
          />
          <div
            onClick={() => this.props.playerPick(6)}
            className="playingSquare"
            id="6"
          />
          <div
            onClick={() => this.props.playerPick(7)}
            className="playingSquare"
            id="7"
          />
          <div
            onClick={() => this.props.playerPick(8)}
            className="playingSquare"
            id="8"
          />
          <div
            onClick={() => this.props.playerPick(9)}
            className="playingSquare"
            id="9"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.Choice.square);
  return {
    playerChoice: state.GamePlay
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playerPick: playerPick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayingBoard);
