import { useState, useEffect } from "react";
import supabase from "../supabase/supabaseClient";

const useAuthState = () => {
  const [isLoggedin, setIsLoggedin] = useState(() => localStorage.getItem("isLoggedin") === "true");

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setIsLoggedin(localStorage.getItem("isLoggedin") === "true");
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  useEffect(() => {
    const getSessionAndInsert = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("session 조회실패", error.message);
      } else if (data?.session) {
        const user = data.session.user;

        const { data: existingUser, error: selectError } = await supabase
          .from("User")
          .select("id")
          .eq("id", user.id)
          .single();

        if (!existingUser) {
          const { error: insertError } = await supabase.from("User").insert({
            id: user.id,
            email: user.email,
            nickname: user.email.split("@")[0],
            user_name: user.email.split("@")[0],
          });

          if (insertError) {
            console.error("insert 에러", insertError.message);
          }
        }
      }
    };
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        setIsLoggedin(true);
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user", JSON.stringify(session.user));
        await getSessionAndInsert();
      } else {
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("user");
        setIsLoggedin(false);
      }
    });
    if (isLoggedin) {
      getSessionAndInsert();
    }
    return () => authListener.subscription.unsubscribe();
  }, [isLoggedin]);

  return { isLoggedin, setIsLoggedin };
};

export default useAuthState;
