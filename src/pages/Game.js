import React from "react";
import Canvas from "../components/Canvas";
import ExerciseGenerator from "../components/ExerciseGenerator";
import Lives from "../components/Lives";

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
