import { useState } from "react";
import EmailAuth from "../EmailAuth/EmailAuth";
import SignInWithOAuth from "../SignInWithOAuth/SignInWithOAuth";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/authSlice";
import styled from "styled-components";

const AuthModal = ({ open }) => {
  const dispatch = useDispatch();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const toggleModalPage = () => setIsLoginPage((prev) => !prev);
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <Backdrop onClick={handleClose}>
      <StDialog open={open}>
        <Container>
          <Title>{isLoginPage ? "로그인" : "회원가입"}</Title>
          <EmailAuth isLoginPage={isLoginPage} togglePage={toggleModalPage} />
          {isLoginPage && <SignInWithOAuth />}
          <StBtn onClick={toggleModalPage}>{isLoginPage ? "회원가입 하러가기" : "로그인 하러가기"}</StBtn>
        </Container>
      </StDialog>
    </Backdrop>
  );
};

export default AuthModal;

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StDialog = styled.dialog`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 30rem;
  background-color: white;
  padding: 4rem;
  border-radius: 1.6rem;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Container = styled.div`
  width: 90%;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StBtn = styled.button`
  bottom: 1rem;
  right: 1rem;
  font-weight: 500;
  position: absolute;
  background-color: transparent;
  border: none;
`;
