// 하위의 기본 페이지는 하나로 통일하고 그 안에 있는 정보만 DB에서 선별해서
// 가져오는 작업 -> 효율적

import {useParams} from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌이 사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛 사냥꾼",
    description: "스프링부트를 좋아하는 개발자",
  },
  dba: {
    name: "천재 개발자",
    description: "DBA를 꿈 꾸는 개발자",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </>
  );
};
export default Profile;
