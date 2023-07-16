import React from "react";
import { LineProps } from "./types";

const Line = ({
  direction = "horizontal",
  width,
  height,
  color,
}: LineProps) => {
  if (direction === "horizontal") {
    return (
      <hr
        style={{ width, height, backgroundColor: color, border: "none" }}
      ></hr>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <hr
          style={{
            width: height,
            height: width,
            backgroundColor: color,
            border: "none",
          }}
        ></hr>
      </div>
    );
  }
};

export default Line;
