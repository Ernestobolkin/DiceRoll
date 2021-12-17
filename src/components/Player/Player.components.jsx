import React from "react";
import Counter from "../Counter/Counter.components";

const Player = (props) => {
	const { wins,playerScore, playerTemporaryScore, playerNumber } = props;
	return (
		<div className={`player-${playerNumber}`}>
			<h2>Player-{playerNumber}</h2>
			<p>wins-{wins}</p>
			<Counter playerNumber={playerNumber} isTemp={false} score={playerScore} />
			<Counter playerNumber={playerNumber} isTemp={true} score={playerTemporaryScore} />
		</div>
	);
};
export default Player;
