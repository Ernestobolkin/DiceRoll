import React from "react";
import Counter from "../Counter/Counter.components";

const Player = (props) => {
	const { playerScore, playerTemporaryScore, playerNumber } = props;
	return (
		<div className={`player-${playerNumber}`}>
			<h2>Player-{playerNumber} from player</h2>
			<Counter playerNumber={playerNumber} isTemp={false} score={playerScore} />
			<Counter playerNumber={playerNumber} isTemp={true} score={playerTemporaryScore} />
		</div>
	);
};
export default Player;
