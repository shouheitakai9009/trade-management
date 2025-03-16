import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/LandingPage";

// プレースホルダーコンポーネント
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#1E222D] flex items-center justify-center">
    <div className="bg-[#2A2E39] p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-[#D1D4DC] mb-4">{title}</h1>
      <p className="text-[#787B86]">このページは現在開発中です。</p>
    </div>
  </div>
);

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
  // 将来的に追加するルート
  {
    path: "/login",
    element: <PlaceholderPage title="ログインページ" />,
  },
  {
    path: "/register",
    element: <PlaceholderPage title="新規登録ページ" />,
  },
]);
