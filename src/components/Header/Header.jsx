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
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);

  return (
    <StHeader>
      <Container>
        <h1>LOGO</h1>
        <SearchForm />
        <Navbar />

        {isModalOpen && <AuthModal open={isModalOpen} />}
      </Container>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  height: 68px;
  padding: 0 1rem;
  background-color: beige;
`;
