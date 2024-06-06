import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "./Navbar";
import AuthModal from "../Auth/AuthModal";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import SearchForm from "../SearchForm";

const Header = () => {
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);

  return (
    <StHeader>
      <Container>
        <Title>LOGO</Title>
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
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  height: 68px;
  padding: 0 1rem;
  /* background-color: beige; */
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;
