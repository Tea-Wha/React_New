import {Link} from "react-router-dom";

// 경로 설정 시 슬래시 마지막에는 안붙이는 것이 원칙

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글3</Link>
      </li>
    </ul>
  );
};
export default Articles;
