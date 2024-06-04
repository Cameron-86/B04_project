import { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";

const MyPage = () => {
  // 윗쪽에 홈 로고있는 헤더 있다는 가정 하에 아랫 부분만 작성
  // 로그인 시 현재 로그인한 유저의 id가 전역 상태로 저장 되어 있어야 편할듯 일단 임시방편으로 하드코딩 사용
  const loginUserId = "테스트 1";
  // if (loginUserId) {아래} else { 로그인 해주세요 }
  const [loginUserInfo, setLoginUserInfo] = useState([]);
  useEffect(() => {
    const fetchLoginUserData = async () => {
      const { data, error } = await supabase.from("User").select("*").eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        setLoginUserInfo(data[0]);
        console.log(loginUserInfo);
      }
    };
    fetchLoginUserData();
  }, []);

  const [loginUserPosts, setLoginUserPosts] = useState([]);
  useEffect(() => {
    const fetchLoginUserPostData = async () => {
      const { data, error } = await supabase.from("post").select("*").eq("user_id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setLoginUserPosts(data);
      }
    };
    fetchLoginUserPostData();
  }, []);

  const handleEditUserProfile = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nickname = formData.get("nickname");
    const password = formData.get("password");
    const introduction = formData.get("introduction");
    const updateUserProfile = async () => {
      const { data, error } = await supabase
        .from("User")
        .update({
          nickname,
          password,
          introduction,
        })
        .eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    };
    updateUserProfile();
    event.target.reset();
  };

  const handleDeletUser = () => {
    if (confirm("정말 탈퇴하시겠습니까?")) {
      deletUser();
    }
    const deletUser = async () => {
      const { data, error } = await supabase.from("User").delete().eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    };
  };

  return (
    <>
      <h3>마이페이지입니다.</h3>
      <div style={{ border: "1px solid black", width: "250px", padding: "30px" }}>
        <div>
          <h4>닉네임: {loginUserInfo.nickname}</h4>
          <p>자기소개: {loginUserInfo.introduction}</p>
          <button>프로필 수정</button>
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
      {/* modal */}
      <div>
        <button>X</button>
        <form onSubmit={handleEditUserProfile}>
          <p>닉네임:</p>
          <input type="text" defaultValue={loginUserInfo.nickname} name="nickname" />
          <p>비밀번호:</p>
          <input type="text" defaultValue={loginUserInfo.password} name="password" />
          <p>자기소개:</p>
          <input type="text" defaultValue={loginUserInfo.introduction} name="introduction" />
        </form>
        <button onClick={handleDeletUser}>회원탈퇴</button>
        <button type="submit">수정</button>
      </div>
    </>
  );
};

export default MyPage;
//style={{ display: "none" }}
