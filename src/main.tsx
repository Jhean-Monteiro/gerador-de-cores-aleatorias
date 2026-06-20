import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import {App} from "./App";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);