import React from "react";
import axios from "axios";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const Canvas = class extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  render() {
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
        <button
          onClick={() => {
            this.canvas.current
              .exportImage("png")
              .then((data) => {
                const image = {
                  image: data,
                };
                console.log(JSON.stringify(image));
                axios.post(
                  "https://math-herro.herokuapp.com/api",
                  JSON.stringify(image),
                  {
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                    },
                  }
                );
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          Get Image
        </button>
      </div>
    );
  }
};

export default Canvas;
