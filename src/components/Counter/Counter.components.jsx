import React from "react";
import "./scores.style.css";

class Counter extends React.Component {
  render() {
    const { playerNumber, isTemp } = this.props;
    const counterClass = isTemp ? `temp-counter-${playerNumber}` : `counter-${playerNumber}`;
    const counterText = isTemp ? `Temp Score:` : `Total Score:`;
    return (
      <div id="testing" className={counterClass}>
        <p>
          {counterText} {this.props.score}
        </p>
      </div>
    );
  }
}
export default Counter;
