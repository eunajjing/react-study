// import { createContext } from "react";
// // 컨텍스트를 만드는 메서드

// const ColorContext = createContext({ color: "black" });
// // 기본 값을 지정해두더라도 프로바이더의 값이 우선 시 되어 적용된다
// // 프로바이더 지정이 없었을 때 사용한다

// export default ColorContext;

import React, { Component, createContext } from "react";

const ColorContext = createContext({ color: "black" });

class ColorProvider extends Component {
  state = {
    color: "black",
    subcolor: "red"
  };

  actions = {
    setColor: color => {
      this.setState({
        color
      });
    },
    setSubcolor: subcolor => {
      this.setSubcolor({
        subcolor
      });
    }
  };

  render() {
    const value = {
      state: this.state,
      //   setColor: this.setColor
      actions: this.actions
    };

    return (
      <ColorContext.Provider value={value}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorConsumer, ColorProvider };
