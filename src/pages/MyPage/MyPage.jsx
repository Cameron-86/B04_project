import { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";
import MyPageModal from "./MyPageModal";

const MyPage = () => {
  const loginUserId = JSON.parse(localStorage.getItem("user")).id;
  const [openProfileEditor, setOpenProfileEditor] = useState(false);
  const [loginUserInfo, setLoginUserInfo] = useState([]);
  const [loginUserPosts, setLoginUserPosts] = useState([]);

  useEffect(() => {
    const fetchLoginUserData = async () => {
      const { data, error } = await supabase.from("User").select("*").eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        setLoginUserInfo(data[0]);
        console.log(data[0]);
      }
    };
    fetchLoginUserData();
  }, []);

  useEffect(() => {
    const fetchLoginUserPostData = async () => {
      const { data, error } = await supabase.from("post").select("*").eq("user_id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        setLoginUserPosts(data);
        console.log(data);
      }
    };
    fetchLoginUserPostData();
  }, []);

  return (
    <>
      {/* 로그인 된 상태라면 ? 아래꺼 컴포넌트화 : alert로그인해주세요 후 홈으로 이동 > 로그인 모달 오픈 */}
      <div style={{ border: "1px solid black", width: "250px", padding: "30px" }}>
        <div>
          <h4>닉네임: {loginUserInfo.nickname}</h4>
          <p>자기소개: {loginUserInfo.introduction}</p>
          <button onClick={() => setOpenProfileEditor(true)}>프로필 수정</button>
        </div>
      </div>
      <div>팔로잉 명 수 </div>
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
      {openProfileEditor && (
        <MyPageModal
          loginUserId={loginUserId}
          loginUserInfo={loginUserInfo}
          setOpenProfileEditor={setOpenProfileEditor}
        />
      )}
    </>
  );
};

export default MyPage;
