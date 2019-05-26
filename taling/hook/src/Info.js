// import React, { useState, useEffect } from "react";
// useEffect 라이프사이클 관리

import React, { useReducer } from "react";

const reducer = (state, action) => {
  // useReducer로 만든 것은 굳이 스위치로 구현하지 않아도 된다.
  return { ...state, [action.name]: [action.value] };
  // setState의 경우 건들지 않은 값은 그대로 남는 반면, (내부적으로)
  // 리듀서 함수를 작성할 때는 자동으로 되지 않기 때문에 직접 기입하는 것
};

const Info = () => {
  //   const [name, setName] = useState("");
  //   const [username, setUsername] = useState("");

  //   useEffect(() => {
  //     // 첫 인자는 함수, 두 번째 인자는
  //     // 컴포넌트 디드 마운트와 컨포넌트 디드 업데이트 합친 것
  //     console.log("username, name");
  //     console.log(username, name);
  //     return () => {
  //       console.log("unmount");
  //       // 컴포넌트가 사라지기 직전에 호출
  //       // 근데 사실은
  //       // 업데이트 호출 직전에도 해당 함수가 실행됨
  //       // 컨포넌트 디드 업데이트
  //       // 그 다음에 console.log(username, name); 실행되는 것
  //     };
  //   }, []);
  //   // 두번째 인자를 주면 마운트 때에만 호출됨
  //   // [name]을 주면 마운트 때와 name이란 상태를 변경할 때만 호출됨(업데이트 할 때)

  //   const handleName = e => {
  //     setName(e.target.value);
  //   };

  //   const handleuUsername = e => {
  //     setUsername(e.target.value);
  //   };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });

  const handleChange = e => {
    dispatch(e.target);
  };

  const { name, username } = state;

  return (
    <div>
      <input name="name" value={name} onChange={handleChange} />
      <input name="nickname" value={username} onChange={handleChange} />
      <p>
        {name} - {username}
      </p>
    </div>
  );
};

export default Info;
