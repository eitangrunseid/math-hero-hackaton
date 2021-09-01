import React from "react";
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
          strokeWidth={10}
          strokeColor="black"
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
