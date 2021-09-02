import React, { useContext, useState } from "react";
import "./HomePage.css";
import AppContext from "../../context/AppContext";
import Alert from "../Alert";
export default function HomePage() {
  const { setUserName } = useContext(AppContext);
  const [name, setName] = useState("");

  return (
    <div>
      <h1 className="title">Math Hero</h1>
      <h2 className="your-name">Your Name</h2>
      <div className="container">
        <input
          type="text"
          onKeyUp={(e) => {
            setName(e.target.value);
          }}
          id="name-input"
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          setUserName();
        }}
      >
        Start
      </button>
    </div>
  );
}
