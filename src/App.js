import React, { useState } from "react";
import Main from "./pages/Main";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext.js";

function App() {
	const [userName, setUserName] = useState("Eitan");
	const [level, setLevel] = useState(4);
	const [answer, setAnswer] = useState();
	const [lives, setLives] = useState(3);
	const [progress, setProgress] = useState(0);
	return (
		<Router>
			<AppContext.Provider
				value={{
					userName: userName,
					setUserName: setUserName,
					level: level,
					setLevel: setLevel,
					answer: answer,
					setAnswer: setAnswer,
					lives: lives,
					setLives: setLives,
					progress: progress,
					setProgress: setProgress
				}}
			>
				<div className="App">
					<div className="App-header">
						<Switch>
							<Route path="/game">
								<Game />
							</Route>
							<Route path="/">
								<Main />
							</Route>
						</Switch>
					</div>
				</div>
			</AppContext.Provider>
		</Router>
	);
}

export default App;
