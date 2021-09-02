import React from "react";
import Canvas from "../Components/Canvas";
import ExerciseGenerator from "../Components/ExerciseGenerator";
import ProcessBar from "../Components/ProcessBar";
import Lives from "../Components/Lives";
import Headline from "../Components/Headline";

function Game() {
  return (
    <div className="game">
      <Headline />
      <Lives />
      <ProcessBar />
      <ExerciseGenerator />
      <Canvas />
    </div>
  );
}

export default Game;
