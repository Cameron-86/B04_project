import { useSelector } from "react-redux";
import { BtnWrapper, Container, Line, PostsSection, StDiv, StLi, UserInfoSection } from "./MyPageContentStyle";

const MyPageContent = ({ setIsEditModalOpen }) => {
  const loginUserInfo = useSelector((state) => state.loginUser.loginUserInfo);
  const loginUserPosts = useSelector((state) => state.loginUser.loginUserPosts);

  const handleDeletUser = () => {
    const deletUser = async () => {
      const { data, error } = await supabase.from("User").delete().eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    };
    if (confirm("정말 탈퇴하시겠습니까?")) {
      deletUser();
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <Container>
      <UserInfoSection>
        <StDiv>
          <h3>{loginUserInfo.nickname}</h3>
          <p>{loginUserInfo.introduction}</p>
        </StDiv>
        <BtnWrapper>
          <button onClick={handleDeletUser}>회원탈퇴</button>
          <button onClick={() => setIsEditModalOpen(true)}>프로필 수정</button>
        </BtnWrapper>
      </UserInfoSection>
      <Line></Line>
      <PostsSection>
        {loginUserPosts.map((post) => {
          return (
            <StLi key={post.id}>
              <div>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </StLi>
          );
        })}
      </PostsSection>
    </Container>
  );
};

export default MyPageContent;
