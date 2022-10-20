import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { If } from "../components/shared/If";
import { Auth } from "../pages/Auth";
import { Login } from "../pages/Login";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

const isAuthenticated = false;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <If
        condition={isAuthenticated}
        then={
          // <Provider store={{}}>
          <App />
          // </Provider>
        }
        else={<Auth />}
      />
    </BrowserRouter>
  </React.StrictMode>
);
