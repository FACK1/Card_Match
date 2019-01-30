import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./gameScreen.css";

import Score from "../Score";

class GameScreen extends Component {
  enterKey = event => {
    let answer = this.props.numberProps.answer;
    if (event.which == 13) {
      answer(event.currentTarget.value, this.props.numberProps.currentNumber);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.numberProps.currentNumber !=
      nextProps.numberProps.currentNumber
    ) {
      ReactDOM.findDOMNode(this.refs.input).value = "";
    }
  }

  render() {
    const { currentNumber, answer } = this.props.numberProps;
    const { score, remainingTime } = this.props.scoreProps;

    return (
      <div className="gameContainer">
        <div>
          <Score score={score} timer={remainingTime} />
          <div className="numberContainer">
            <p className="showNum">{this.props.numberProps.currentNumber}</p>
          </div>
        </div>

        <input
          ref="input"
          type="text"
          onKeyUp={this.enterKey}
          placeholder="Translate the number above in Arabic"
        />
      </div>
    );
  }
}
export default GameScreen;
