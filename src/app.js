import React, { Component } from "react";
import { render } from "react-dom";
import FirstScreen from "./component/FirstScreen";
import GameScreen from "./component/GameScreen";

const oneMinute = 60000;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      currentNumber: "",
      remainingTime: oneMinute,
      gameStarted: false
    };
  }

  endGame = () => {
    let resetState = {
      gameStarted: false,
      currentNumber: "",
      remainingTime: oneMinute
    };

    clearInterval(this.remainingTimer);
    this.setState(resetState);
  };

  startTimer = () => {
    this.remainingTimer = setInterval(() => {
      let remainingTime = this.state.remainingTime - 1000;

      if (remainingTime < 0) {
        this.endGame();
      } else {
        this.setState({
          remainingTime
        });
      }
    }, 1000);
  };

  startGame = () => {
    let number = 1; // must be random later
    console.log("hiiiiiiii");
    let newState = {
      score: 0,
      currentNumber: number,
      gameStarted: true
    };

    this.setState(newState, () => {
      this.startTimer();
    });
  };

  handleSuccess = answer => {
    let number = 2; // for test
    let score = this.state.score + 10;

    let newState = {
      currentNumber: number,
      score,
      remainingTime
    };

    this.setState(newState);
  };

  isCorrect = (response, answer) => {
    return response === answer ? true : false;
  };

  handleAnswer = (response, answer) => {
    if (this.isCorrect(response, answer)) {
      this.handleSuccess(answer);
    }
  };

  render() {
    let numberProps = {
      currentNumber: this.state.currentNumber,
      answer: this.handleAnswer
    };

    let scoreProps = {
      score: this.state.score,
      remainingTime: this.state.remainingTime
    };

    return (
      <div>
        {!this.state.gameStarted && <FirstScreen startGame={this.startGame} />}
        {this.state.gameStarted && (
          <GameScreen numberProps={numberProps} scoreProps={scoreProps} />
        )}
      </div>
    );
  }
}

export default App;
