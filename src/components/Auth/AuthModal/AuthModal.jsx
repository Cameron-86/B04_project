import { useState } from "react";
import EmailAuth from "../EmailAuth/EmailAuth";
import SignInWithOAuth from "../SignInWithOAuth/SignInWithOAuth";
import { Backdrop, Container, StDialog } from "./AuthModal.styled";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/authSlice";

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
          <EmailAuth isLoginPage={isLoginPage} togglePage={toggleModalPage} />
          {isLoginPage && <SignInWithOAuth />}
          <span onClick={toggleModalPage}>{isLoginPage ? "회원가입 하러가기" : "로그인 하러가기"}</span>
        </Container>
      </StDialog>
    </Backdrop>
  );
};

export default AuthModal;
