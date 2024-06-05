import { useSelector } from "react-redux";

const MyPageContent = ({ setIsEditModalOpen }) => {
  const loginUserInfo = useSelector((state) => state.loginUser.loginUserInfo);
  const loginUserPosts = useSelector((state) => state.loginUser.loginUserPosts);
  return (
    <div>
      <div style={{ border: "1px solid black", width: "250px", padding: "30px" }}>
        <div>
          <h4>닉네임: {loginUserInfo.nickname}</h4>
          <p>자기소개: {loginUserInfo.introduction}</p>
          <button onClick={() => setIsEditModalOpen(true)}>프로필 수정</button>
        </div>
      </div>
      <ul>
        {loginUserPosts.map((post) => {
          return (
            <li key={post.id} style={{ border: "1px solid black", width: "250px", padding: "30px" }}>
              {post.title}
              {post.contents}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyPageContent;
