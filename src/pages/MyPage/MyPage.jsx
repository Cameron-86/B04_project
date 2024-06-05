import supabase from "../../supabase/supabaseClient";
import MyPageModal from "./MyPageEditModal";
import MyPageContent from "./MyPageContent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/authSlice";
import { setLoginUserInfo, setLoginUserPosts } from "../../store/slices/loginUserSlice";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = localStorage.getItem("isLoggedin");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const loginUserId = useSelector((state) => state.loginUser.loginUserId); // selector, dispatch 구분

  const goBackLogin = () => {
    alert("로그인이 필요한 기능입니다.");
    navigate("/");
    dispatch(openModal());
  };

  useEffect(() => {
    if (!isLoggedin) {
      goBackLogin();
    } else {
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
  }, []);

  return (
    <>
      {isLoggedin && <MyPageContent setIsEditModalOpen={setIsEditModalOpen} />}
      {isEditModalOpen && <MyPageModal setIsEditModalOpen={setIsEditModalOpen} />}
    </>
  );
};

export default MyPage;

// onclick 은 함수를 받고 싶은건데
// 1. (() => {})()
// 2. (() => {return () => {}})() O
