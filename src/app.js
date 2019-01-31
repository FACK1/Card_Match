import React, { Component } from "react";
import { render } from "react-dom";
import FirstScreen from "./component/FirstScreen";
import GameScreen from "./component/GameScreen";
import { numbers } from "./numbers.json";

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
    let number = this.getRandomNumber();
    let newState = {
      score: 0,
      currentNumber: number,
      gameStarted: true,
      remainingTime: oneMinute
    };

    this.setState(newState, () => {
      this.startTimer();
    });
  };

  handleSuccess = () => {
    let number = this.getRandomNumber();
    let score = this.state.score + 10;
    let remainingTime = this.state.remainingTime;

    let newState = {
      currentNumber: number,
      score,
      remainingTime
    };

    this.setState(newState);
  };

  isCorrect = (response, answer) => {
    return response === numbers[answer] ? true : false;
  };

  handleAnswer = (response, answer) => {
    if (this.isCorrect(response, answer)) {
      this.handleSuccess(answer);
    }
  };

  getRandomNumber = () => {
    return Math.floor(Math.random() * Math.floor(31));
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
