import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import ContextSample from "./ContextSample";
import Average from "./Average";

function App() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {/* <button onClick={handleVisible}>{visible ? "숨기기" : "보이기"}</button>
      {visible && <Info />}
      <Counter /> */}
      <Average />
    </div>
  );
}

export default App;
