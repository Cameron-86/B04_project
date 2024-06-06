import { useState, useEffect } from "react";
// import Follow from "../../components/Follow/Follow";
import { StContainer, StFeedList, StFeedContent, StFeedTop, StImageWrapper } from "./FeedPageStyle";

const FeedPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 URL 배열
  const imageUrls = ["https://ifh.cc/g/xFm0Hy.png", "https://ifh.cc/g/bRD8Hs.png", "https://ifh.cc/g/H3fGyl.jpg"];

  // 이미지 변경 효과 설정
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000); // 5초마다 이미지 전환

    // 언마운트 시 인터벌 클리어
    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const userId = "b09457db-b561-4064-95ff-0bdc0f0f1681";
  // const targetUserId = "8cd6570c-63b1-412f-9cbb-2cc9db832dc8";

  return (
    <StContainer>
      <StImageWrapper>
        <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </StImageWrapper>
      <StFeedList>
        <div>최신글</div>
        <div>찜한글</div>
      </StFeedList>

      {/* <Follow userId={userId} targetUserId={targetUserId} /> */}
      <StFeedContent>{/* 내용 */}</StFeedContent>

      <StFeedTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StFeedTop>
    </StContainer>
  );
};

export default FeedPage;
