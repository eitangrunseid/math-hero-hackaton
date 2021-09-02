import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <h1 className="title">Math Hero</h1>

      <h2 className="your-name">Enter your Nickname</h2>
      <div className="container">
        <input type="text" name="name" id="name-input" required />
      </div>
      <button className="btn">Start</button>
    </div>
  );
}
