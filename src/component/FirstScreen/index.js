import React, { Component } from "react";
import "./firstScreen.css";

class FirstScreen extends Component {
  render() {
    const { startGame } = this.props;

    return (
      <div className="startContainer">
        <h1>Learn Arabic Numbers</h1>
        <h3>Translate numbers into Arabic</h3>
        <button className="startBtn" onClick={startGame}>
          Start
        </button>
      </div>
    );
  }
}
export default FirstScreen;
