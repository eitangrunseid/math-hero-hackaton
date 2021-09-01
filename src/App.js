import React from "react";
import Main from "./pages/Main";
import Game from "./pages/Game"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";


function App() {
	return (
      <Router>
		<div className="App">
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </div>
    </Router>
	);
}

export default App;
