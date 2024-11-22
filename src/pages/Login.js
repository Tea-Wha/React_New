import {useState, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Container, StyledInput, StyledButton} from "../styles/CommonStyle";

const Login = () => {
  // 키보드 입력에 대한 상태 관리
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

  // 간단한 유효성 검사
  const [isID, setIsID] = useState(false);
  const [isPW, setIsPW] = useState(false);

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성

  const onChangeID = (e) => {
    setInputID(e.target.value); // InputID 는 마지막 렌더링 되기 직전의 값이 들어감
    e.target.value.length >= 5 ? setIsID(true) : setIsID(false);
  };

  const onChangePW = (e) => {
    setInputPW(e.target.value);
    e.target.value.length >= 5 ? setIsPW(true) : setIsPW(false);
  };

  const onClickLogin = () => {
    // () -> event의 값이 들어오는지 안들어오는지 잘 생각해보고 구현
    // axios 비동기 통신 호출
    // 그리고 결과 수신
    // 결과값 확인
    if (inputID === "htw7880" && inputPW === "^ghdxoghk18") {
      navigate("/home");
    } else {
      alert("아이디 또는 패스워드가 틀립니다.");
    }
  };

  return (
    <Container>
      <StyledInput
        value={inputID}
        placeholder="ID 입력"
        onChange={onChangeID}
      />
      <br />
      <StyledInput
        value={inputPW}
        placeholder="PW 입력"
        onChange={onChangePW}
      />
      <br />
      {isID && isPW ? (
        <StyledButton onClick={onClickLogin}>로그인</StyledButton>
      ) : (
        <StyledButton disabled onClick={onClickLogin}>
          로그인
        </StyledButton>
      )}
    </Container>
  );
};

export default Login;
