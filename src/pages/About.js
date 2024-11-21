// 새로운 페이지 이동과 Sub Component로 이동해야 할지 잘 고민해야 할 것
// 새로운 페이지 이동/열리는 것은 -> 라우터

import {Link} from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>여기는 About 페이지 입니다.</h1>
      <p>소개 페이지 입니다.</p>
      <Link to="/">홈으로 이동</Link>
    </>
  );
};
export default About;
