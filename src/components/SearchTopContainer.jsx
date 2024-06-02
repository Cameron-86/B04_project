import { useState } from "react";
import styled from "styled-components";

const SearchTopContainer = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // 검색 입력값 변경 핸들러
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <StSearchContainer>
      <input type="text" placeholder="검색" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>검색</button>
    </StSearchContainer>
  );
};

export default SearchTopContainer;

// 스타일드 컴포넌트 정의
const StSearchContainer = styled.div`
  display: flex;
  gap: 10px;

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #ffbf00;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #e6b800;
    }
  }
`;
