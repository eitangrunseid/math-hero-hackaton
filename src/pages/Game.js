import React from "react";
import Canvas from "../components/Canvas";
import ExerciseGenerator from "../components/ExerciseGenerator";
import Lives from "../components/Lives";
import ProcessBar from "../components/ProcessBar";

function Game() {
	return (
		<div>
			<ProcessBar />
			<Lives />
			<ExerciseGenerator />
			<Canvas />
		</div>
	);
}

export default Game;
