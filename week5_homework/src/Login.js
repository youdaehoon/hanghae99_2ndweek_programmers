import React from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./shared/firebase";
import { emailCheck } from "./shared/check";
import { useHistory } from "react-router-dom";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "./shared/firebase";
import { useDispatch } from "react-redux";
import { createPost, loadNic } from "./redux/modules/post";

const Login = () => {
  const refId = React.useRef(null);
  const refPw = React.useRef(null);
  const refBtn = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const loginFB = async () => {
    if (refId.current.value == "" || refPw.current.value == "") {
      alert("모두 입력하여 주세요!");
    } else {
      if (emailCheck(refId.current.value)) {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            refId.current.value,
            refPw.current.value
          );
          alert("로그인에 성공하였습니다.!");
          const user_docs = await getDocs(
            query(
              collection(db, "users"),
              where("id", "==", refId.current.value)
            )
          );
          dispatch(loadNic(user_docs));

          console.log("로그인 성공 후 담기는것:", user.user.email);

          //    history.push("/")
        } catch (error) {
          console.log(error.code);

          alert("아이디 비밀번호가 일치하지 않습니다.");
        }
      } else {
        alert("email 형식이 맞지 않습니다!");
      }
    }
  };

  return (
    <Wrap>
      <Title>로그인</Title>
      <Text>아이디</Text>
      <Input ref={refId}></Input>
      <Text>비밀번호</Text>
      <Input ref={refPw}></Input>
      <Btn onClick={loginFB} ref={refBtn}>
        로그인하기
      </Btn>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: 8px;
  margin: 5px 0px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid rgb(37, 204, 247);
  border-radius: 3px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
const Btn = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  background-color: #1b9cfc8c;
  border-radius: 3px;
  color: white;
`;
