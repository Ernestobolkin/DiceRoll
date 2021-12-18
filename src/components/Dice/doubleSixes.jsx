import React from "react";
import "./peter.style.css";
export class Peter extends React.Component {
  state = {
    left: "-100vh",
  };
  componentDidUpdate() {
    if (this.props.peterTime) {
      this.setState({
        left: "0",
      });
    } else {
      this.setState({
        left: "-100vh",
      });
    }
  }
  render() {
    return (
      <div>
        <div style={{ left: this.state.left }} className="peterGriffin"></div>
      </div>
    );
  }
}
