import React, { Component } from "react";
import { ColorConsumer } from "../context/color";

class ColorBox extends Component {
  render() {
    return (
      <ColorConsumer>
        {value => (
          <div
            style={{ width: "64px", height: "64px", background: value.color }}
          />
        )}
      </ColorConsumer>
    );
  }
}

export default ColorBox;
