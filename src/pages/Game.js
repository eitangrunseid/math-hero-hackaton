import React from "react";
import Canvas from "../Components/Canvas";
import ExerciseGenerator from "../Components/ExerciseGenerator";
import ProcessBar from "../Components/ProcessBar";
import Lives from "../Components/Lives";
import Headline from "../Components/Headline";
import "./Game.css";
function Game() {
  return (
    <div>
      <Headline />
      <Lives />
      <div>
        <ProcessBar />
      </div>
      <ExerciseGenerator />
      <div>
        <Canvas />
      </div>
    </div>
  );
}

export default Game;
