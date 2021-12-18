import React from "react";
import "./Dice.styles.css";
import "./peter.style.css";

class Dice extends React.Component {
  state = { dice1: 0, dice2: 0, diceSum: 0, left: "-100vh", disabled: false };
  RollDice = () => {
    this.setState({ disabled: true });
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 1000);
    const randomDice1 = Math.floor(Math.random() * 6) + 1;
    const randomDice2 = Math.floor(Math.random() * 6) + 1;

    if (randomDice1 === randomDice2) {
      this.setState(
        { dice1: randomDice1, dice2: randomDice2, diceSum: 0, left: "150vw" },
        this.AssignDice
      );
    } else {
      this.setState(
        {
          dice1: randomDice1,
          dice2: randomDice2,
          diceSum: randomDice1 + randomDice2,
          peterTime: false,
          left: "-100vh",
        },
        this.AssignDice
      );
    }
  };

  AssignDice = () => {
    document.querySelector("#dice1").className = `number${this.state.dice1}`;
    document.querySelector("#dice2").className = `number${this.state.dice2}`;
    this.props.onChange(this.state.diceSum);
  };
  render() {
    return (
      <div className="diceLogicContainer">
        <div style={{ left: this.state.left }} className="peterGriffin"></div>
        <div id="diceContainer">
          <div id="dice1"></div>
          <div id="dice2"></div>
        </div>
        <button
          className="btn throwBtn"
          type="button"
          disabled={this.state.disabled}
          onClick={this.RollDice}
        >
          Throw
        </button>
      </div>
    );
  }
}
export default Dice;
