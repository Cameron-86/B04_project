import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import supabase from "../../../supabase/supabaseClient";
import { setLoginUserInfo } from "../../../store/slices/loginUserSlice";
import { BtnWrapper, CloseBtn, Modal, StForm } from "./MyPageModalStyle";

const MyPageModal = ({ setIsEditModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserId = useSelector((state) => state.loginUser.loginUserId);
  const loginUserInfo = useSelector((state) => state.loginUser.loginUserInfo);

  const handleEditUserProfile = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nickname = formData.get("nickname");
    const password = formData.get("password");
    const introduction =
      formData.get("introduction").length > 60
        ? alert("자기소개는 60자를 넘을 수 없습니다.")
        : formData.get("introduction");

    // api만 모아서 리펙토링 해보기
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
    dispatch(setLoginUserInfo({ nickname, password, introduction }));
    event.target.reset();
    setIsEditModalOpen(false);
  };

  return (
    <Modal>
      <CloseBtn onClick={() => setIsEditModalOpen(false)}>X</CloseBtn>
      <StForm onSubmit={handleEditUserProfile}>
        <div>
          <p>닉네임:</p>
          <input type="text" defaultValue={loginUserInfo.nickname} name="nickname" />
        </div>
        <div>
          <p>비밀번호:</p>
          <input type="text" defaultValue={loginUserInfo.password} name="password" />
        </div>
        <div>
          <p>자기소개:</p>
          <input type="text" defaultValue={loginUserInfo.introduction} name="introduction" />
        </div>
        <BtnWrapper>
          <button type="submit">수정</button>
        </BtnWrapper>
      </StForm>
    </Modal>
  );
};

export default MyPageModal;
