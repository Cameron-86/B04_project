import styled from "styled-components";

const HomePage = () => {
  return (
    <StMain>
      <StHeader>
        <div className="title">HomePage</div>
        <div className="login-buttons">
          <button>Log in</button>
          <button>Sign in</button>
        </div>
      </StHeader>

      <StNews>
        <div className="news-toggle">
          <button>최신 뉴스</button>
          <button>인기 뉴스</button>
        </div>
        <div className="search-TopContainer">
          <input type="text" placeholder="검색" />
          <button>검색</button>
        </div>
      </StNews>

      <StCommunity>
        <div className="serach-MiddleContainer">
          <button>최신 글</button>
          <button>인기 글</button>
        </div>
      </StCommunity>
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
  height: 150px;
  background-color: #f8f9fa;
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
    margin-bottom: 100px;
    padding-right: 20px;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const StNews = styled.div`
  margin: 170px 0 20px;
  padding: 20px;
  background-color: #e9ecef;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  .news-toggle {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    gap: 15px; /* 버튼 사이 간격 설정 */
  }

  .search-TopContainer {
    position: absolute;
    top: 20px;
    right: 20px;
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
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StCommunity = styled.div`
  background-color: #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  width: 100%;
  box-sizing: border-box;
  height: 380px;
  position: relative;
  display: flex;
  /* align-items: center; 이거 먹이면 위에 stnews랑 다르게 버튼들이 중앙고정되서 뺌 */
  justify-content: space-between;
  flex-wrap: wrap;

  .search-MiddleContainer {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
  }

  button {
    margin-top: 15px;
    margin-left: 20px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
