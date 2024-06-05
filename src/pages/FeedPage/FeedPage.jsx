import { Link } from "react-router-dom";

import { StContainer, StFeedHeader, StFeedList, StFeedContent, StFeedTop } from "./FeedPageStyle";

const FeedPage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StContainer>
      <StFeedHeader>
        <div className="left-spacer" />
        <Link to="/" className="title">
          Gaming<span>Nerd</span>
        </Link>
        <div className="login-buttons">
          <button>글 쓰기</button>
          <button>로그아웃</button>
        </div>
      </StFeedHeader>

      <StFeedList>
        <div>최신글</div>
        <div>찜한글</div>
      </StFeedList>
      <StFeedContent>{/* 내용 */}</StFeedContent>
      <StFeedTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StFeedTop>
    </StContainer>
  );
};

export default FeedPage;
