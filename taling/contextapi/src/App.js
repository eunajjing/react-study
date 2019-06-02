import React, { Component } from "react";
import { ColorProvider } from "./context/color";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./context/color";

class App extends Component {
  render() {
    return (
      <ColorProvider>
        <ColorBox />
      </ColorProvider>
    );
  }
}

export default App;
