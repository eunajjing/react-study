import React from "react";
import qs from "qs";
// 쿼리스트링 사용을 위해 패키지 설치
// 쿼리는 location을 사용

const About = ({ location: { search } }) => {
  const query = qs.parse(search.substr(1));
  // 객체형태로 쿼리를 파싱

  // 쿼리의 값이 원하는 값인지 확인하는 작업 필요
  const boo = query === "true";

  return <div>About</div>;
};

export default About;
