import { useEffect, useState } from "react";
import styled from "styled-components";

import supabase from "../supabaseClient";

const FakeArticle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("FakeData").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Data fetched successfully:", data); // 데이터 로깅
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <StFetchList>
      {data.length > 0 ? (
        data.map((item) => (
          <StCard key={item.id}>
            <h2>{item.title}</h2>
            {item.img_url && <img src={item.img_url} alt={item.title} />}
            <h3>{item.description}</h3>
          </StCard>
        ))
      ) : (
        <p>No data available</p>
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
  width: 100%; /* 부모 stcommunity와 넓이 맞추기 위해 */
`;

const StCard = styled.div`
  background-color: #2a2829;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 500px; /* 카드 너비를 고정 */
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 500px;
  position: relative;

  &:nth-child(odd) {
    margin-top: 50px; /* 홀수번째 카드는 50px 아래로 */
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
