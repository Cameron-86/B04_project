import { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";

const useFetchAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("post").select("*");
      console.log(data);
      if (error) {
        console.error("Fetching posts error:", error);
      } else {
        setPosts(data);
      }
    } catch (error) {
      console.error("Network or other error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    fetchPosts,
  };
};

export default useFetchAllPosts;
