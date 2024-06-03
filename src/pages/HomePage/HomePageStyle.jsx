// HomePageStyle.jsx
import styled from "styled-components";

export const StMain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #f56263;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: grid;
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
    text-align: center; /* 왼쪽으로 붙이기 위해 추가 */
    cursor: pointer; /* 커서를 포인터로 설정하여 클릭 가능하게 보이도록 함 */
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

export const StNews = styled.div`
  margin: 70px 0 30px;
  padding: 20px;
  background-color: #121212;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const StCommunity = styled.div`
  background-color: gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: -30px;
  width: 100%;
  max-width: 1320px;
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
    margin-bottom: 200px; /* 이전 값 margin-top: 150px; */
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

export const StMoveTop = styled.div`
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
