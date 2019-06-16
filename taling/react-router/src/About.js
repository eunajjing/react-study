import React from "react";
import qs from "qs";
// 쿼리스트링 사용을 위해 패키지 설치
// 쿼리는 location을 사용

const About = ({ location: { search } }) => {
  const query = qs.parse(search.substr(1));

  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>About 컴포넌트입니다</p>
      {detail && <p>추가적인 정보</p>}
    </div>
  );
};

export default About;
