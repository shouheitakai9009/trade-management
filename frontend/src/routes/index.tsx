import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LandingPage } from "../features/landing/pages";
import { authRoutes } from "./authRoutes";

// ルーティング設定
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  // 認証関連のルート
  ...authRoutes,
]);
