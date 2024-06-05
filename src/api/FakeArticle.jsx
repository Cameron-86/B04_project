import { useEffect, useState } from "react";
import styled from "styled-components";

import useDataFilterByQuery from "../hooks/useDataFilterByQuery";
import supabase from "./../supabase/supabaseClient";

const FakeArticle = ({ searchQuery, sortByViews, sortByLatest }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("FakeData").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Data fetched successfully:", data);
        setData(data);
      }
    };

    fetchData();
  }, []);

  const filteredData = useDataFilterByQuery(data, searchQuery);
  let sortedData = filteredData;

  if (sortByViews) {
    sortedData = sortedData.sort((a, b) => b.views - a.views); // view 조회순 //
  } else if (sortByLatest) {
    sortedData = sortedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // 날짜 순 //
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

export default FakeArticle;

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
  background-color: #2a2829;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 500px;
  position: relative;

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
    color: #ffffff;
  }
`;
