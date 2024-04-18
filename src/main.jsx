import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
