import React from "react";
import Canvas from "../components/Canvas";
import ExerciseGenerator from "../components/ExerciseGenerator";
import ProcessBar from "../components/ProcessBar.jsx";
import AppContext from "../context/AppContext";

function Game() {
	return (
        <div>
            <h1></h1>
			<ProcessBar />
			<ExerciseGenerator />
			<Canvas />
		</div>
	);
}

export default Game;
