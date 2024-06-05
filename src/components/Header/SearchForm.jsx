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
  display: flex;
  align-items: center;

  input {
    border: none;
    width: 450px;
    height: 30px;
    border-radius: 6px;
    background-color: var(--color-black-10);
  }
`;
const StIcon = styled(FaSearch)`
  margin-left: 5px;
  font-size: 2rem;
`;
