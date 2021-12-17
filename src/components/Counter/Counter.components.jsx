import React from "react";

class Counter extends React.Component {
	render() {
		const { playerNumber, isTemp } = this.props;
		const counterClass = isTemp ? `temp-counter-${playerNumber}` : `counter-${playerNumber}`;
		const counterText = isTemp ? `Temp Score:` : `Total Score:`;
		return (
			<div className={counterClass}>
				<p>
					{counterText} {this.props.score} from counter
				</p>
			</div>
		);
	}
}
export default Counter;
