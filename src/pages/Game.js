import React from "react";
import Canvas from "../Components/Canvas";
import ExerciseGenerator from "../Components/ExerciseGenerator";
import ProcessBar from "../Components/ProcessBar.jsx";
import Lives from "../Components/Lives";

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
