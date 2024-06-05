import { useSelector } from "react-redux";
import { Container, Line, PostsSection, StDiv, StLi, UserInfoSection } from "./MyPageContentStyle";

const MyPageContent = ({ setIsEditModalOpen }) => {
  const loginUserInfo = useSelector((state) => state.loginUser.loginUserInfo);
  const loginUserPosts = useSelector((state) => state.loginUser.loginUserPosts);
  return (
    <Container>
      <UserInfoSection>
        <StDiv>
          <h3>{loginUserInfo.nickname}</h3>
          <p>{loginUserInfo.introduction}</p>
        </StDiv>
        <button onClick={() => setIsEditModalOpen(true)}>프로필 수정</button>
      </UserInfoSection>
      <Line></Line>
      <PostsSection>
        {loginUserPosts.map((post) => {
          return (
            <StLi key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.contents}</p>
            </StLi>
          );
        })}
      </PostsSection>
    </Container>
  );
};

export default MyPageContent;
