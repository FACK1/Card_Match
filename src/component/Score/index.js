import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./score.css";

class Score extends Component {
  render() {
    const { score, timer } = this.props;

    return (
      <div className="labelsContainer">
        <div className="score">
          <p className="scoreNum">Score: </p>
          {score}
        </div>

        <div ref="timer" className="timer">
          <p>Timer:</p>
          <span>{timer / 1000}s</span>
        </div>
      </div>
    );
  }
}

export default Score;
