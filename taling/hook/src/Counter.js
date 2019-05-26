// import React, { useState } from "react";
// useReducer를 쓰면 useState를 쓸 필요가 없다

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  //   const [value, setValue] = useState(0);
  // 훅은 모두 use 키워드를 붙여준다.
  // 인자가 value로 들어온다.
  // setValue는 value를 컨트롤 할 수 있는 함수
  // setValue(value + 1);

  //   const handleIncrease = () => {
  //       setValue(value + 1);
  //     };
  //     const handleDecrease = () => {
  //         setValue(value - 1);
  //     };
  // 문제는 각각 만들어야 한다는 점...

  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // 두번째 인자는 상태로 들어갈 것
  return (
    // <div>
    //   <p>현재 카운터 값은 {value}입니다.</p>
    //   <button onClick={handleIncrease}>+</button>
    //   <button onClick={handleDecrease}>-</button>
    // </div>
    <div>
      <p>현재 카운터 값은 {state.value}입니다.</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;
