import React from "react";
import Player from "./Player/Player.components";
import Dice from "./Dice/Dice.components";
import "./Board.styles.css";

class Board extends React.Component {
  state = {
    playerScore1: 0,
    playerScore2: 0,
    playerTemporaryScore1: 0,
    playerTemporaryScore2: 0,
    playerTurn: 1,
    playerWinner: 0,
    display: "none",
    test: 1,
    inputValue: 0,
    chickenChickenWinnerDinner: 100,
  };

  ScoreChange = (sum) => {
    if (this.state.playerTurn === 1) {
      if (sum === 0) {
        this.setState({ playerTemporaryScore1: 0 }, this.HoldScore);
      } else {
        this.setState({
          playerTemporaryScore1: this.state.playerTemporaryScore1 + sum,
        });
      }
    }
    if (this.state.playerTurn === 2) {
      if (sum === 0) {
        this.setState({ playerTemporaryScore2: 0 }, this.HoldScore);
      } else {
        this.setState({
          playerTemporaryScore2: this.state.playerTemporaryScore2 + sum,
        });
      }
    }
  };
  HoldScore = () => {
    if (this.state.playerTurn === 1) {
      this.setState(
        {
          playerScore1:
            this.state.playerScore1 + this.state.playerTemporaryScore1,
          playerTurn: 2,
          playerTemporaryScore1: 0,
        },
        this.Winner
      );
    }
    if (this.state.playerTurn === 2) {
      this.setState(
        {
          playerScore2:
            this.state.playerScore2 + this.state.playerTemporaryScore2,
          playerTurn: 1,
          playerTemporaryScore2: 0,
        },
        this.Winner
      );
    }
  };

  onChaneValue = (event) => {
    this.setState({ chickenChickenWinnerDinner: event.target.value });
  };
  Winner = () => {
    if (this.state.playerScore1 >= this.state.chickenChickenWinnerDinner) {
      this.setState((prevState) => {
        return {
          display: "flex",
          playerWinner: prevState.playerWinner + 1,
        };
      });
    }
    if (this.state.playerScore2 >= this.state.chickenChickenWinnerDinner) {
      this.setState((prevState) => {
        return {
          display: "flex",
          playerWinner: prevState.playerWinner + 2,
        };
      });
    }
  };

  Clear = () => {
    this.setState({
      playerScore1: 0,
      playerScore2: 0,
      playerTemporaryScore1: 0,
      playerTemporaryScore2: 0,
      playerTurn: 1,
      display: "none",
      playerWinner: 0,
    });
  };

  render() {
    const {
      playerScore1,
      playerScore2,
      playerTemporaryScore1,
      playerTemporaryScore2,
    } = this.state;
    return (
      <div>
        <div className="playerContainer">
          <div className="player1">
            <Player
              playerNumber={1}
              playerTemporaryScore={playerTemporaryScore1}
              playerScore={playerScore1}
            />
          </div>
          <div className="player2">
            <Player
              playerNumber={2}
              playerTemporaryScore={playerTemporaryScore2}
              playerScore={playerScore2}
            />
          </div>
        </div>
        <Dice onChange={this.ScoreChange} />
        <input
          type="text"
          vlaue={this.state.inputValue}
          onChange={(event) => this.onChaneValue(event)}
        />{" "}
        <br />
        <button type="button" onClick={this.HoldScore}>
          Hold
        </button>
        <div className="winner" style={{ display: this.state.display }}>
          <p>Player {this.state.playerWinner} wins!!!!!</p>
          <button onClick={() => this.Clear()}>Want To Play Again?</button>
        </div>
      </div>
    );
  }
}
export default Board;
