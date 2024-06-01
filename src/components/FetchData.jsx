import { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../supabaseClient";

const FetchData = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Test_best100game").select("*");
      if (error) {
        console.error("Error fetching data: ", error); // console.error로 변경하여 오류 로그 강조
      } else {
        console.log("Data fetched: ", data);
        setGames(data);
      }
      setLoading(false); // 로딩 상태 업데이트
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  return (
    <StFetchGameList>
      {games.length > 0 ? (
        games.map((game) => (
          <StGameCard key={game.id}>
            <h2>{game.title}</h2>
            <h3>{game.description}</h3>
          </StGameCard>
        ))
      ) : (
        <div>No games found</div> // 데이터가 없을 경우 표시
      )}
    </StFetchGameList>
  );
};

export default FetchData;

const StFetchGameList = styled.div`
  margin-top: -10px; /* 부모 div를 50px 위로 올림 */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background-color: #bfb9bb;
  padding: 20px;
  max-height: 650px; /* 높이 제한 설정 */
  overflow-y: auto; /* 높이 제한을 넘어가는 내용이 있을 때 스크롤 */
`;

const StGameCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(20% - 20px); /* 5개씩 정렬되도록 설정, 각 카드 사이 간격 20px 고려 */
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 400px; /* 이전값300px */

  h2,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* 최대 3줄까지 표시 */
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;
