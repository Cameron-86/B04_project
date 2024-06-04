import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/authSlice";
import AuthModal from "../Auth/AuthModal/AuthModal";
import useAuth from "../../hooks/useAuth";
import { SIGN_OUT } from "../../constants/constants";
import useAuthState from "../../hooks/useAuthState";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";

const Header = () => {
  const { handleAuth } = useAuth(SIGN_OUT);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const { isLoggedin, setIsLoggedin } = useAuthState();

  const handleSignOut = async () => {
    await handleAuth();
    setIsLoggedin(false);
  };

  return (
    <Header>
      <Container>
        <h1>LOGO</h1>
        <SearchForm />
        <Navbar />
        {/* {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />} */}
      </Container>
    </Header>
  );
};

export default Header;

export const StHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  height: 68px;
  background-color: beige;
`;
