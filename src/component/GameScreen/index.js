import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./gameScreen.css";

import Score from "../Score";

class GameScreen extends Component {
  enterKey = event => {
    let answer = this.props.numberProps.answer;
    if (event.which == 13) {
      console.log(event.currentTarget.value);
      console.log(this.props.numberProps.currentNumber);
      //what we need to compare
    }
  };

  render() {
    const { currentNumber, answer } = this.props.numberProps;
    const { score, remainingTime } = this.props.scoreProps;

    return (
      <div className="gameContainer">
        <div>
          <Score score={score} timer={remainingTime} />
          <h2>{this.props.numberProps.currentNumber}</h2>
        </div>

        <input
          ref="input"
          type="text"
          onKeyUp={this.enterKey}
          placeholder="Translate the number above in Arabic"
          autofocus
        />
      </div>
    );
  }
}
export default GameScreen;
