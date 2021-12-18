import React from "react";
import Counter from "../Counter/Counter.components";
import "./player.style.css";

const Player = (props) => {
  const { wins, playerScore, playerTemporaryScore, playerNumber } = props;
  return (
    <div id="playerInnerCard" className={`player-${playerNumber}`}>
      <p className="wins">wins: <span>{wins}</span></p>
      <h2>Player {playerNumber}</h2>
      <Counter
        className="test"
        playerNumber={playerNumber}
        isTemp={false}
        score={playerScore}
      />
      <Counter
        className="test"
        playerNumber={playerNumber}
        isTemp={true}
        score={playerTemporaryScore}
      />
    </div>
  );
};
export default Player;
