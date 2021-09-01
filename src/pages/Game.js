import React from "react";
import Canvas from "../Components/Canvas";
import ExerciseGenerator from "../Components/ExerciseGenerator";
import Lives from "../Components/Lives";

function Game() {
  return (
    <div>
      <Lives />
      <ExerciseGenerator />
      <Canvas />
    </div>
  );
}

export default Game;
