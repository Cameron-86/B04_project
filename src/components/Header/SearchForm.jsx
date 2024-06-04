import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchForm = () => {
  return (
    <StForm>
      <input type="text" />
      <button>
        <FaSearch />
      </button>
    </StForm>
  );
};

export default SearchForm;

const StForm = styled.form`
  display: flex;
  align-items: center;

  input {
    border: none;
    width: 450px;
    height: 30px;
  }
  button {
    width: 50px;
    height: 30px;
    border: none;
    background-color: transparent;
  }
`;
