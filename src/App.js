import React from "react";
import Board from "./components/Board.components";
import "./components/boarAssets/Board.styles.css";

const App = () => {
  return (
    <div className="blurContainer">
      <div className="background"></div>
      <Board />
    </div>
  );
};

export default App;
