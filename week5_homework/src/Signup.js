import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { auth, db } from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { emailCheck } from "./shared/check";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const refId = React.useRef(null);
  const refNic = React.useRef(null);
  const refPw = React.useRef(null);
  const refPwc = React.useRef(null);
  const history=useHistory();

  const signupFB = async () => {
    console.log(refId.current.value == "");
    if (
      refId.current.value == "" ||
      refNic.current.value == "" ||
      refPw.current.value == "" ||
      refPwc.current.value == ""
    ) {
      alert("모두 입력해주세요!");
    } else {
      if (emailCheck(refId.current.value)) {
        if (refPw.current.value.length >= 6) {
          if (refPw.current.value == refPwc.current.value) {
            const user = await createUserWithEmailAndPassword(
              auth,
              refId.current.value,
              refPw.current.value
            );
            const user_data = await addDoc(collection(db, "users"), {
              id: refId.current.value,
              nick: refNic.current.value,
            });
            history.push("/")
          } else {
            alert("비밀번호가 일치하지 않습니다.");
          }
        } else {
          alert("비밀번호는 6자리 이상 설정하셔야합니다!");
        }

        // console.log(user);

        // console.log(user_data.id);
        // console.log(refPwc.current.value);
      } else alert("email 형식이 맞지 않습니다.");
    }
  };

  return (
    <Wrap>
      <Title>회원가입</Title>
      <Text>아이디</Text>
      <Input ref={refId} />
      <Text>닉네임</Text>
      <Input ref={refNic} />
      <Text>비밀번호</Text>
      <Input ref={refPw} />
      <Text>비밀번호 확인</Text>
      <Input ref={refPwc} />
      <p></p>
      <Btn onClick={signupFB}>회원가입하기</Btn>
    </Wrap>
  );
};

export default Signup;

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
