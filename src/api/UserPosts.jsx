import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useFetchAllPosts from "../hooks/db/useFetchAllPosts";
import useInfinityScroll from "../hooks/useInfinityScroll"; // useInfinityScroll 훅 추가
import { filterDataByQuery } from "../utils/filterDataByQuery";

const UserPosts = ({ searchQuery, sortBy }) => {
  const { posts } = useFetchAllPosts();
  const [visiblePosts, setVisiblePosts] = useState([]);

  // 필터링된 데이터를 상태에 저장
  const filteredData = useMemo(() => {
    return filterDataByQuery(posts, searchQuery);
  }, [posts, searchQuery]);

  useEffect(() => {
    let sortedData = filteredData;

    if (sortBy === "likes") {
      sortedData = sortedData.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === "latest") {
      sortedData = sortedData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    setVisiblePosts(sortedData.slice(0, 8)); // 초기에 8개의 포스트만 보이도록 설정
  }, [filteredData, sortBy]);

  // 무한 스크롤 이벤트 핸들러
  useInfinityScroll(() => {
    setVisiblePosts((prevVisiblePosts) => {
      const nextVisiblePosts = posts.slice(0, prevVisiblePosts.length + 8);
      return nextVisiblePosts;
    });
  });

  return (
    <StFetchList>
      {visiblePosts.length > 0 ? (
        visiblePosts.map((item) => (
          <StCard key={item.id}>
            <h2>{item.title}</h2>
            <h4>{item.nickname}</h4>
            {item.img && <img src={item.img} alt={item.title} />}
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
  h4,
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--white);
    padding: 10px;
  }
`;
