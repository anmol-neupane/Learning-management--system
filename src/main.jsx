import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // this imports Tailwind
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter></BrowserRouter>

    <App />
  </StrictMode>
);
