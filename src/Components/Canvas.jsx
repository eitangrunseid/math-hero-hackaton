import React from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "./Canvas.css";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const Canvas = class extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  render() {
    const context = this.context;
    return (
      <div className="painter-wrapper">
        <ReactSketchCanvas
          style={styles}
          ref={this.canvas}
          strokeWidth={20}
          strokeColor="white"
          canvasColor="black"
          width="100%"
          height="100%"
        />
        <div className="buttons-container">
          <button
            onClick={() => {
              this.canvas.current
                .exportImage("png")
                .then(async (data) => {
                  const image = {
                    image: data,
                  };

                  axios({
                    method: "post",
                    url: "https://math-herro.herokuapp.com/api",
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                    },
                    data: JSON.stringify(image),
                  }).then((response) => {
                    if (!context.lives) {
                      Alert("game over");
                      <Link to="/" />;
                      return;
                    }
                    if (context.progress === 100) {
                      Alert("next level");
                      return;
                    }
                    if (response.data[1].Num0 == context.answer) {
                      context.setProgress((prev) => prev + 20);
                      Alert("correct");
                      context.setQuestion(!context.question);
                      this.canvas.current.clearCanvas();
                    } else {
                      Alert("incorrect");
                      context.setLives((prev) => prev - 1);
                      context.setQuestion(!context.question);
                      this.canvas.current.clearCanvas();
                    }
                  });
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            Get Image
          </button>
          <button
            onClick={() => {
              this.canvas.current.clearCanvas();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
};

export default Canvas;
