import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import AddPreview from "../pages/NewPost/AddPreview";
import NewPost from "../pages/NewPost/NewPost";
import MyPage from "../pages/MyPage/MyPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        // path는 /닉네임/id로 구성될 예정
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/write",
    element: <NewPost />,
  },
  {
    path: "/write/preview",
    element: <AddPreview />,
  },
]);

export default router;
