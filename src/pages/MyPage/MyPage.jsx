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

/*
1. 로그 아웃 기능 이쪽에서도 사용할 수 있게 전역 설정 필요
2. 로그인 시 바로 localstorage에 user: id 들어가게 해주길 (한박자 늦음)
3. 회원탈퇴할 때 게시글까지 지우는지 여부
4. 모달이 자동으로 닫히고 수정한 값이 보이게 되어서
  수정하고 새로고침 되려는 form default 안막았는데 역시 새로고침은 피하는게 맞을지
5.header.jsx에 안쓰는 import 여러개 보여서 다음 pr하는 사람이 없애고 pr 올려도 무방한지
*/
