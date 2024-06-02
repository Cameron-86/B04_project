import styled from "styled-components";
import GameRankFetchData from "../../api/GameRankFetchData";

const HomePage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StMain>
      <StHeader>
        <div className="title">Gaming Nerd</div>
        <div className="login-buttons">
          <button>Log in</button>
          <button>Sign in</button>
        </div>
      </StHeader>
      <StHeaderTools>
        <div className="news-toggle">
          <button>최신 뉴스</button>
          <button>인기 뉴스</button>
        </div>
        <div className="search-TopContainer">
          <input type="text" placeholder="검색" />
          <button>검색</button>
        </div>
      </StHeaderTools>
      <StNews>
        <GameRankFetchData />
      </StNews>

      <StCommunity>
        <div className="search-MiddleContainer">
          <button>최신 글</button>
          <button>인기 글</button>
        </div>
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;

  background-color: #f56263;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;

  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .title {
    color: #ffffff;
    flex: 1;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .login-buttons {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 100px;
    margin-bottom: 50px;
    padding-right: 20px;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #ffbf00;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #e6b800;
      }
    }
  }
`;

const StNews = styled.div`
  margin: 180px 0 30px;
  padding: 20px;
  background-color: #bfb9bb;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StHeaderTools = styled.div`
  position: relative;
  top: 190px; /* StHeader의 높이만큼 아래로 이동 */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;

  .news-toggle {
    display: flex;
    gap: 15px; /* 버튼 사이 간격 설정 */
  }

  .search-TopContainer {
    display: flex;
    gap: 10px;
  }

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

const StCommunity = styled.div`
  background-color: #bfb9bb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  width: 100%;
  box-sizing: border-box;
  height: 600px; /* 이전값 380px */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .search-MiddleContainer {
    position: relative; /* 나중에 버튼 위치 더 세밀조정 필요 */
    bottom: 165px;
    left: 0px;
    right: 20px;
    display: flex;
    gap: 0px;
  }

  button {
    margin-bottom: 200px; /* 이전 값margin-top: 150px; */
    margin-left: 20px;
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

// 스크롤 to top 버튼

const StMoveTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
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
