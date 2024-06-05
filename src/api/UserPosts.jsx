import styled from "styled-components";

import useFetchAllPosts from "../hooks/db/useFetchAllPostsTest";
import useDataFilterByQuery from "../hooks/useDataFilterByQuery";

const UserPosts = ({ searchQuery, sortBy }) => {
  const { posts } = useFetchAllPosts();

  const filteredData = useDataFilterByQuery(posts, searchQuery);
  let sortedData = filteredData;

  if (sortBy === "views") {
    sortedData = sortedData.sort((a, b) => b.views - a.views); // view 조회순 //
  } else if (sortBy === "latest") {
    sortedData = sortedData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // 날짜 순 //
  }

  return (
    <StFetchList>
      {sortedData.length > 0 ? (
        sortedData.map((item) => (
          <StCard key={item.id}>
            <h2>{item.title}</h2>
            {item.image_url && <img src={item.image_url} alt={item.title} />}
            <h3>{item.description}</h3>
          </StCard>
        ))
      ) : (
        <p>글이 없습니다</p>
      )}
    </StFetchList>
  );
};

export default UserPosts;

const StFetchList = styled.div`
  margin-top: -10px;
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const StCard = styled.div`
  background-color: var(--color-black-50);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--color-black-70);
  width: 300px;
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 500px;
  position: relative;
  font-size: 2rem;

  &:nth-child(odd) {
    margin-top: 50px;
  }

  img {
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 2 / 1.5;
    object-fit: cover;
  }

  h2,
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--white);
  }
`;
