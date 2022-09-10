import React from "react";
import ReactDom from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
