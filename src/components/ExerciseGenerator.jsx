import React, { useContext, useState, useEffect } from "react";
import "./ExerciseGenerator.css";

function ExerciseGenerator() {
  const [max, setMax] = useState(9);
  const [output, setOutput] = useState([]);
  const [instructions, setInstructions] = useState(
    "How many Animals do you see?"
  );
  const [imojis, setImojis] = useState([
    "🐒",
    "🐈",
    "🦨",
    "🐿",
    "🐇",
    "🦔",
    "🐫",
  ]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (max !== 0) {
      const init = [];
      const randImoji = imojis[Math.floor(Math.random() * imojis.length)];
      for (let i = 0; i < Math.floor(Math.random() * max + 1); i++) {
        init.push(randImoji);
      }
      setOutput(init);
    }
  }, [max]);

  return (
    <div className="generator-wrap">
      <div className="instructions">{instructions}</div>
      <div className="imojis">
        {output.map((item, key) => {
          return (
            <div key={key} className="imoji-wrap">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExerciseGenerator;
