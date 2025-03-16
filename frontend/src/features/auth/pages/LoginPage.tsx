import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-white">ログイン</h1>
        <p className="text-[#787B86]">
          アカウントにログインしてトレード管理を続けましょう
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-center text-[#D1D4DC]">
          このページは現在開発中です。
        </p>
        <Button
          className="w-full bg-[#2962FF] hover:bg-[#0039CB] text-white"
          onClick={() => navigate("/register")}
        >
          新規登録ページへ
        </Button>
      </div>
    </div>
  );
}
