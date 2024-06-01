import { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../supabaseClient";

const GameRankFetchData = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Test_best100game").select("*");
      if (error) {
        console.error("Error fetching data: ", error);
      } else {
        console.log("Data fetched: ", data);
        setGames(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(games.length / itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StFetchGameList>
        {currentItems.length > 0 ? (
          currentItems.map((game) => (
            <StGameCard key={game.id}>
              <h2>{game.title}</h2>
              <h3>{game.description}</h3>
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background-color: #bfb9bb;
  padding: 20px;
  max-height: 650px;
  overflow-y: auto;
`;

const StGameCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(20% - 20px);
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 400px;

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
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

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
