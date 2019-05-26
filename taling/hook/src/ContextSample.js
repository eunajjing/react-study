import React, { useContext, createContext } from "react";
// 컨테스트는 리덕스의 스토어 같은 역할
// createContext는 컨테스트를 만들어주는 애

const ContextSample = () => {
  const ThemeContext = createContext("red");
  const theme = useContext(ThemeContext);
  // 해당 컨테스트를 사용하겠다

  const style = {
    width: "64px",
    hight: "64px",
    background: theme
  };
  return <div style={style} />;
};

export default ContextSample;
