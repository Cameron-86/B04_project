import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";

const MyPageModal = ({ loginUserId, loginUserInfo, setOpenProfileEditor }) => {
  const nav = useNavigate();
  const handleEditUserProfile = (event) => {
    // 이걸 새로고침으로 할까 아님 다른 방식으로 할까?
    // event.preventDefault();
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
    console.log(loginUserInfo);
  };

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
      nav("/");
    }
  };
  return (
    <div>
      <button onClick={() => setOpenProfileEditor(false)}>X</button>
      <form onSubmit={handleEditUserProfile}>
        <p>닉네임:</p>
        <input type="text" defaultValue={loginUserInfo.nickname} name="nickname" />
        <p>비밀번호:</p>
        <input type="text" defaultValue={loginUserInfo.password} name="password" />
        <p>자기소개:</p>
        <input type="text" defaultValue={loginUserInfo.introduction} name="introduction" />
        <button type="submit">수정</button>
        <button onClick={handleDeletUser}>회원탈퇴</button>
      </form>
    </div>
  );
};

export default MyPageModal;
