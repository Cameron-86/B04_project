import supabase from "../../supabase/supabaseClient";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../store/slices/authSlice";
import { setLoginUserInfo, setLoginUserPosts } from "../../store/slices/loginUserSlice";
import MyPageContent from "./components/MyPageContent";
import MyPageModal from "./components/MyPageEditModal";
import useAuthState from "../../hooks/useAuthState";
import useFetchAllPosts from "../../hooks/db/useFetchAllPosts";

const MyPage = () => {
  const dispatch = useDispatch(); // selector, dispatch 구분
  const navigate = useNavigate();
  const { isLoggedin, user } = useAuthState();
  const [loginUserId, setLoginUserId] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  /// Home에서 & 주소창으로 2가지 버전 둘 다 체크해야하는데///
  // userId 가져오는 방식에 업뎃이 있을 예정이라 후에 체크
  const goBackLogin = () => {
    alert("로그인이 필요한 기능입니다.");
    navigate("/");
    dispatch(openModal());
  };

  useEffect(() => {
    if (user) {
      setLoginUserId(user.id);
      const fetchLoginUserData = async () => {
        const { data, error } = await supabase.from("User").select("*").eq("id", loginUserId);
        // 실제 완성본에서는 필요 없어짐
        if (error) {
          console.log(error);
        } else {
          dispatch(setLoginUserInfo(data[0]));
        }
      };
      fetchLoginUserData();

      const fetchLoginUserPostData = async () => {
        const { data, error } = await supabase.from("post").select("*").eq("user_id", loginUserId);
        if (error) {
          console.log(error);
        } else {
          dispatch(setLoginUserPosts(data));
        }
      };
      fetchLoginUserPostData();
    }
  }, [user]);

  return (
    <>
      {isLoggedin ? <MyPageContent setIsEditModalOpen={setIsEditModalOpen} /> : goBackLogin()}
      {isEditModalOpen && <MyPageModal setIsEditModalOpen={setIsEditModalOpen} />}
    </>
  );
};

export default MyPage;

// onclick 은 함수를 받고 싶은건데
// 1. (() => {})()
// 2. (() => {return () => {}})() O
