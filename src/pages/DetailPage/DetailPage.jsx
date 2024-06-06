import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetchPosts from "../../hooks/db/useFetchPosts";
import Comments from "./Comments/Comments";

const DetailPage = () => {
  const { id: POST_ID } = useParams();
  const { posts, loading } = useFetchPosts(POST_ID);
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    if (posts?.contents) {
      setSanitizedHTML(DOMPurify.sanitize(posts?.contents, { ALLOWED_ATTR: ["style", "class"] }));
    }
  }, [posts]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Article>
        <Title>{posts.title}</Title>
        <Subtitle>
          <div>
            <span>{posts.nickname} </span>· 약 14시간 전
          </div>
          <FollowButton>팔로우</FollowButton>
        </Subtitle>

        {typeof window !== "undefined" && <Content dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />}

        <UserInfoContainer>
          <div>{posts.nickname}</div>
          <FollowButton>팔로우</FollowButton>
        </UserInfoContainer>
        <Comments postId={POST_ID} />
      </Article>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: var(--color-black-10);
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 768px;
  background-color: var(--white);
  margin-top: 48px;
  padding: 48px 40px;
  row-gap: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  color: #777;
  margin: 10px 0px 20px 0;
  text-align: start;

  span {
    color: var(--black);
    font-weight: 600;
  }
`;

const FollowButton = styled.button`
  width: 96px;
  height: 32px;
  padding: 1px 6px;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-red-30);
  border: 1px solid var(--color-red-20);
  border-radius: 1.6rem;
  background-color: var(--white);
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: left;

  strong {
    font-weight: bold;
  }

  .ql-size-small {
    font-size: 0.75rem;
  }

  .ql-size-large {
    font-size: 1.5rem;
  }

  .ql-size-huge {
    font-size: 2.5rem;
  }

  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-align-justify {
    text-align: justify;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  margin: 40px 0;
  border-bottom: 1px solid var(--color-black-20);

  div {
    font-size: 2rem;
    font-weight: 600;
  }
`;
