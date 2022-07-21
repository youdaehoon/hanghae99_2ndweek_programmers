import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "./shared/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logoutId } from "./redux/modules/post";

const Header = (props) => {
  const dispatch=useDispatch();
  const data = useSelector((state) => {
    return state.post;
  });

  const history = useHistory();
  const logoutFB = () => {
    signOut(auth);
    dispatch(logoutId(null))
  };

  return (
    <HeaderWrap>
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        <AiFillHome color="#1b9cfc8c" size={25} />{" "}
      </div>
      <BtnWrap is_login={props.is_login}>
        {props.is_login == true ? (
          <>
            <Mybtn onClick={logoutFB}>로그아웃</Mybtn>{" "}
            <Text>
              <span style={{ fontWeight: "bold", fontSize: "10px" }}>
                {data.user.nick}
              </span>{" "}
              님 환영합니다!
            </Text>
          </>
        ) : (
          <>
            <Mybtn
              onClick={() => {
                history.push("/Login");
              }}
            >
              로그인
            </Mybtn>
            <Mybtn
              onClick={() => {
                history.push("/Signup");
              }}
            >
              회원가입
            </Mybtn>
          </>
        )}
      </BtnWrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between; // div 양 끝으로 띄우기
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const BtnWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: ${(props) =>
    props.is_login == true ? "right" : "space-between"}; ;
`;
const Mybtn = styled.button`
  height: 40px;
  width: 48%;
  border: none;
  background-color: #1b9cfc8c;
  border-radius: 3px;
  color: white;
`;
const Text = styled.div`
  font-size: 8px;
  height: 8px;
  /* background-color: green; */
  margin: auto 10px;
`;
