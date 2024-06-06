import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchForm = () => {
  return (
    <StForm>
      <input type="text" />
      <StIcon />
    </StForm>
  );
};

export default SearchForm;

const StForm = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  left: 50%;
  width: 35%;

  transform: translateX(-50%);

  input {
    border: none;
    width: 100%;
    height: 30px;
    border-radius: 6px;
    background-color: var(--color-black-10);
  }

  @media (max-width: 600px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;
const StIcon = styled(FaSearch)`
  margin-left: 5px;
  font-size: 2rem;
`;
