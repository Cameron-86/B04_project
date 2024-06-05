import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useDataFilterByQuery from "../hooks/useDataFilterByQuery";
import GameInfoModal from "../pages/HomePage/GameInfoModal";
import Pagination from "../pages/HomePage/Pagination";
import { setCurrentPage, setGames, setLoading, setSelectedGame } from "../store/slices/gameRankSlice";
import supabase from "../supabase/supabaseClient";

const GameRankFetchData = ({ searchQuery }) => {
  console.log("🚀 ~ GameRankFetchData ~  searchQuery :", searchQuery);
  const dispatch = useDispatch();
  const { games, loading, currentPage, selectedGame } = useSelector((state) => state.gameRank);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("GreatestGamesTop50")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        console.error("Error fetching data: ", error);
      } else {
        dispatch(setGames(data));
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const filteredGames = useDataFilterByQuery(games, searchQuery);
  const totalPages = filteredGames.length / itemsPerPage;

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem);

  const openGameInfoModal = (game) => {
    dispatch(setSelectedGame(game));
  };

  const closeGameInfoModal = () => {
    dispatch(setSelectedGame(null));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const showRank = searchQuery === "";

  return (
    <StContainer>
      <StFetchGameList>
        {currentItems.length > 0 ? (
          currentItems.map((game, index) => (
            <StGameCard key={game.id} onClick={() => openGameInfoModal(game)}>
              {showRank && <Rank>{indexOfFirstItem + index + 1}</Rank>}
              {game.image_url && <img src={game.image_url} alt={game.title} />}
              <h2>{game.title}</h2>
            </StGameCard>
          ))
        ) : (
          <div>no data</div>
        )}
      </StFetchGameList>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      {selectedGame && <GameInfoModal onClose={closeGameInfoModal} data={selectedGame} />}
    </StContainer>
  );
};

export default GameRankFetchData;

const StContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StFetchGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const StGameCard = styled.div`
  background-color: var(--color-black-50);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--color-black-70);
  width: calc(25% - 20px);
  box-sizing: border-box;
  text-align: left;
  position: relative; /* 랭킹 번호 위치를 위한 상대적 위치 설정 */
  text-overflow: ellipsis;
  white-space: nowrap;

  img {
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 2 / 1.5;
    object-fit: cover;
  }

  h2,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--white);
    font-size: 2rem;
    margin-top: 12px;
    font-weight: bold;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    white-space: normal;
    color: var(--white);
  }
`;

const Rank = styled.div`
  position: absolute;
  top: 5px;
  left: 3px;
  font-size: 3rem;
  color: var(--white);
  text-shadow: 0px 0px 20px var(--color-black-60);
  font-weight: bold;
  letter-spacing: -1.2px;
`;
