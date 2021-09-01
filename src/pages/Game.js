import React from "react";
import Canvas from "../components/Canvas";
import ExerciseGenerator from "../components/ExerciseGenerator";

function Game() {
  return (
    <div>
      <ExerciseGenerator />
      <Canvas />
    </div>
  );
}

export default Game;
