// Link 로 잘 안되는 것 -> 즉각적인 이동이 있으면 안되는 것에는 사용 불가능
// 서버와의 데이터 비교하는 것이 필요한 상황에는 Link를 사용하면 안됨
// 이때는 User Navigator를 사용해야함

import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기는 홈 입니다.</h1>
      <p>가장 먼저 보이는 페이지 입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <br />
      <Link to="/profile/frontend">Frontend 프로필</Link>
      <br />
      <Link to="/profile/backend">Backend 프로필</Link>
      <br />
      <Link to="/profile/dba"> DataBase 프로필</Link>
      <br />
      <Link to="/articles">게시판 목록</Link>
    </>
  );
};
export default Home;
