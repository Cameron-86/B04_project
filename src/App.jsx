import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./routes/router";
import store from "./store/slices/Store";
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
