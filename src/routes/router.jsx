import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import MyPage from "../pages/MyPage/MyPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      /*
      {
        path: "",
        element: <DetailPage />,
      },
      */
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
