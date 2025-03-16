import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export function PasswordResetConfirmPage() {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-white">
          新しいパスワードの設定
        </h1>
        <p className="text-[#787B86]">
          安全な新しいパスワードを設定してください
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-center text-[#D1D4DC]">
          このページは現在開発中です。
          {token && <span className="block mt-2">トークン: {token}</span>}
        </p>
        <Button
          className="w-full bg-[#2962FF] hover:bg-[#0039CB] text-white"
          onClick={() => navigate("/login")}
        >
          ログインページへ
        </Button>
      </div>
    </div>
  );
}
