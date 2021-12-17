import React from "react";
import "./Dice.styles.css";
class Dice extends React.Component {
	state = { dice1: 0, dice2: 0, diceSum: 0 };
	RollDice = () => {
		const randomDice1 = Math.floor(Math.random() * 6) + 1;
		const randomDice2 = Math.floor(Math.random() * 6) + 1;
		if (randomDice1 === 6 && randomDice2 === 6) {
			this.setState({ dice1: randomDice1, dice2: randomDice2, diceSum: 0 }, this.AssignDice);
		} else {
			this.setState({ dice1: randomDice1, dice2: randomDice2, diceSum: randomDice1 + randomDice2 }, this.AssignDice);
		}
	};
	AssignDice = () => {
		document.querySelector("#dice1").className = `number${this.state.dice1}`;
		document.querySelector("#dice2").className = `number${this.state.dice2}`;
		this.props.onChange(this.state.diceSum);
	};
	render() {
		return (
			<div>
				<div id="dice1"></div>
				<div id="dice2"></div>
				<button type="button" onClick={this.RollDice}>
					Throw
				</button>
			</div>
		);
	}
}
export default Dice;
