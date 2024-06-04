import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store.js/index.js";
import GlobalStyle from "./styles/GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
