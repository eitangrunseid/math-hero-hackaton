import React from "react";
import Canvas from "../Components/Canvas";
import ExerciseGenerator from "../Components/ExerciseGenerator";

function Game() {
  return (
    <div>
      <ExerciseGenerator />
      <Canvas />
    </div>
  );
}

export default Game;
