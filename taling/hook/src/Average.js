import React, { useState, useMemo, useRef } from "react";
// useMemo 호출 시점 제어

const Average = () => {
  const getAverage = numbers => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const handleInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");

    inputEL.current.focus();
  };

  const handleChange = e => {
    setNumber(e.target.value);
  };

  const avg = useMemo(() => {
    getAverage(list);
  }, list);
  // 마찬가지로 호출 제어

  const inputEL = useRef(null);

  return (
    <div>
      <input value={number} onChange={handleChange} ref={inputEL} />
      <button onClick={handleInsert}>추가</button>
      {list.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
      <p>평균 값 : {getAverage(list)}</p>
    </div>
  );
};

export default Average;
