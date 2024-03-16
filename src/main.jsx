import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./app/store.js";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorPrimary: "#28a5ff",
          colorText: "#1e1e1e",
        },
        components: {},
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
