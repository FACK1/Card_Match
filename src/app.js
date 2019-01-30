import React, { Component } from "react";
import { render } from "react-dom";
import FirstScreen from "./component/FirstScreen";

const oneMinute = 60000;

class App extends Component {
  constructor(props) {
    super(props);

    const DEFAULT_STATE = {
      score: 0,
      currentNumber: "",
      remainingTime: oneMinute,
      gameStarted: false
    };
  }

  componentDidMount() {
    this.endGame();
  }

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

  endGame = () => {
    let newState = {
      gameStarted: false,
      currentNumber: "",
      remainingTime: oneMinute
    };

    clearInterval(this.remainingTimer);
    this.setState(newState);
  };

  render() {
    return <FirstScreen startGame={this.startGame} />;
  }
}

export default App;
