import { useState } from "react";

import GameRankFetchData from "../../api/GameRankFetchData";
import GenreDropdown from "../../components/GenreDropdown";
import SearchTopContainer from "../../components/SearchTopContainer";

import FakeArticle from "../../api/FakeArticle";
import { StCommunity, StHeader, StMain, StMoveTop, StNews } from "./HomePageStyle";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <StMain>
      <StHeader>
        <div className="title" onClick={handleScrollToTop}>
          Gaming Nerd
        </div>
        <SearchTopContainer onSearch={handleSearch} />
        <div className="login-buttons">
          <button>Log in</button>
          <button>Sign in</button>
        </div>
      </StHeader>

      <StNews>
        <GenreDropdown onGenreSelect={handleGenreSelect} />

        <GameRankFetchData searchQuery={searchQuery} />
      </StNews>

      <StCommunity>
        <div className="search-MiddleContainer">
          <button>최신 글</button>
          <button>인기 글</button>
        </div>
        <FakeArticle />
      </StCommunity>

      <StMoveTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StMoveTop>
    </StMain>
  );
};

export default HomePage;
