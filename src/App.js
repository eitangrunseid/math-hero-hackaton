import React, { useState } from "react";
import Main from "./pages/Main";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext.js";

function App() {
  const [userName, setUserName] = useState();
  const [level, setLevel] = useState();
  return (
    <Router>
      <AppContext.Provider
        value={{
          userName: userName,
          setUserName: setUserName,
          level: level,
          setLevel: setLevel,
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
