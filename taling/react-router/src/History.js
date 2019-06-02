import React from "react";

const History = ({ history }) => {
  // history.goBack
  // 뒤로가기
  // history.push('주소');
  // 리다이랙트

  const goBack = history.goBack;
  const push = history.push("/");

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={push}>홈으로 이동</button>
    </div>
  );
};

export default History;
