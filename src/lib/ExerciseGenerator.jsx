import React, { useContext, useState, useEffect } from "react";

function ExerciseGenerator(props) {
  const { level } = props;
  const [max, setMax] = useState(5);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput(() => {
      const init = [];
      for (let i = 0; i < Math.floor(Math.random() * max + 1); i) {
        init.push(1);
      }
      return init;
    });
    console.log(output);
  }, []);

  return (
    <>
      {output.map((pic) => {
        return <>{pic}</>;
      })}
    </>
  );
}

export default ExerciseGenerator;
