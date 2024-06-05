import { useState } from "react";

import GameRankFetchData from "../../api/GameRankFetchData";
import GenreDropdown from "./GenreDropdown";
import SearchTopContainer from "./SearchTopContainer";

import styled from "styled-components";
import FakeArticle from "../../api/FakeArticle";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByViews, setSortByViews] = useState(false);
  const [sortByLatest, setSortByLatest] = useState(false);

  // 검색 처리 함수
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // 장르 선택 함수
  const handleGenreSelect = (genre) => {
    if (genre === "전체") {
      setSearchQuery("");
    } else {
      setSearchQuery(genre);
    }
  };

  // 스크롤을 최상단으로 이동하는 함수
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 인기 글 버튼 클릭 핸들러
  const handleSortByViews = () => {
    setSortByViews(true);
  };

  const handleSortByLatest = () => {
    setSortByLatest(true);
  };

  return (
    <StMain>
      <StHeader>
        <h1 className="title" onClick={handleScrollToTop}>
          Fak<span>er</span>
        </h1>
        <SearchTopContainer onSearch={handleSearch} />
        <div className="login-buttons">
          <button>로그인</button>
          <button>가입</button>
        </div>
      </StHeader>

      <StNews>
        <GenreDropdown onGenreSelect={handleGenreSelect} />

        <GameRankFetchData searchQuery={searchQuery} />
      </StNews>

      <StCommunity>
        <div className="search-MiddleContainer">
          <button onClick={handleSortByLatest}>최신 글</button>
          <button onClick={handleSortByViews}>인기 글</button>
        </div>
        <FakeArticle searchQuery={searchQuery} sortByViews={sortByViews} sortByLatest={sortByLatest} />
      </StCommunity>

      <StMoveTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StMoveTop>
    </StMain>
  );
};

export default HomePage;

const StMain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #121212;
  box-shadow: 0 2px 4px #00000019;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 16px;

  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    flex: 1;

    span {
      font-weight: normal;
    }
    /* text-align: center; 왼쪽으로 붙이기 위해 추가 */
    /* cursor: pointer; 커서를 포인터로 설정하여 클릭 가능하게 보이도록 함 */
  }

  .login-buttons {
    display: flex;
    gap: 10px;

    button {
      padding: 10px 18px;
      border: none;
      border-radius: 25px;
      background-color: #363636;
      color: #ffffff;
      cursor: pointer;
      height: 48px;
      font-size: 15px;
      font-weight: bold;
      transition: 0.4s;

      &:hover {
        background-color: #666666;
      }
    }
  }
`;

const StNews = styled.div`
  padding: 20px 20px 70px;
  background-color: #121212;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StCommunity = styled.div`
  padding-top: 45px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1320px;
  box-sizing: border-box;
  height: 100%; /* 이전값 380px */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .search-MiddleContainer {
    position: relative; /* 나중에 버튼 위치 더 세밀조정 필요 */
    /* bottom: 165px; 글목록 생성 이전 썼던 값:165px */
    left: 0px;
    right: 20px;
    display: flex;
    gap: 0px;
  }

  button {
    height: 48px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
    padding: 5px 25px;
    border: none;
    border-radius: 25px;
    background-color: #ffbf00;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #ffcf3e;
    }
  }
`;

const StMoveTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #f56263;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94a53;
  }

  button {
    border: none;
    background: none;
    color: white;
    font-size: 1.5rem; /* 화살표 크기 확장 */
    font-weight: bold; /* 화살표 두께 증가 */
    cursor: pointer;
    outline: none;
  }
`;
