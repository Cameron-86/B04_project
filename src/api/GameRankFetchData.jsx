import { useEffect, useState } from "react";
import styled from "styled-components";

import supabase from "../supabaseClient";
import useSearch from "./../hooks/useSearch";

const GameRankFetchData = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Test_best100game")
        .select("*")
        .order("created_at", { ascending: true }); // 업로드된 순서대로 정렬
      if (error) {
        console.error("Error fetching data: ", error);
      } else {
        setGames(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredGames = useSearch(games, searchQuery);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  const showRank = searchQuery === "";

  return (
    <div>
      <StFetchGameList>
        {currentItems.length > 0 ? (
          currentItems.map((game, index) => (
            <StGameCard key={game.id}>
              {showRank && <Rank>{indexOfFirstItem + index + 1}</Rank>}
              {game.image_url && <img src={game.image_url} alt={game.title} />}
              <h2>{game.title}</h2>

              {/* game.genre는 검색에만 사용되고 화면에는 보이지 않음 */}
            </StGameCard>
          ))
        ) : (
          <div>No games found</div>
        )}
      </StFetchGameList>
      <Pagination>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </Pagination>
    </div>
  );
};

export default GameRankFetchData;

const StFetchGameList = styled.div`
  margin-top: -10px;
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  padding: 20px;
  max-height: 650px;
  overflow-y: auto;
`;

const StGameCard = styled.div`
  background-color: #2a2829;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(20% - 20px);
  box-sizing: border-box;
  text-align: left;
  position: relative; /* 랭킹 번호 위치를 위한 상대적 위치 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 300px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #ffffff;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    white-space: normal;
    color: #ffffff;
  }
`;

const Rank = styled.div`
  position: absolute;
  top: -5px; /* 카드 바깥으로 약간 벗어남 */
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px #000000; /* 검은색 외곽선 효과 */
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #ffbf00;
    color: white;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    &.active {
      background-color: #e6b800;
    }

    &:hover:not(:disabled):not(.active) {
      background-color: #e6b800;
    }
  }
`;
