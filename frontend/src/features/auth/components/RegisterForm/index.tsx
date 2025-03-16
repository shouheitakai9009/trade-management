import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthIndicator } from "../PasswordStrengthIndicator";
import { RegisterFormValues, registerSchema } from "./validation";

type FormErrorProps = {
  message?: string;
};

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  register: Record<string, unknown>;
  error?: FormErrorProps;
  children?: React.ReactNode;
};

// 再利用可能なフォームフィールドコンポーネント
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
  children,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className="bg-[#363A45] border-[#4A4E59] text-white"
      />
      {children}
      {error?.message && (
        <p className="text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export function RegisterForm() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // フォームの初期化
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange", // リアルタイムバリデーション
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  // デバッグ用：フォームの状態をコンソールに出力
  console.log("Form state:", {
    isDirty: form.formState.isDirty,
    isValid: form.formState.isValid,
    errors: form.formState.errors,
  });

  // フォーム送信処理（モック）
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsLoading(true);
      setServerError(null);

      // API通信のモック
      console.log("登録データ:", data);

      // 成功時の処理
      setTimeout(() => {
        setIsLoading(false);
        navigate("/dashboard");
      }, 1000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setIsLoading(false);
      setServerError("アカウント作成に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {serverError && (
          <Alert variant="destructive">
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-white">新規アカウント登録</h1>
          <p className="text-[#787B86]">
            簡単な登録で株式トレード管理を始めましょう
          </p>
        </div>

        <div className="space-y-4">
          {/* ユーザー名 */}
          <FormField
            id="username"
            label="ユーザー名"
            placeholder="username"
            register={form.register("username")}
            error={form.formState.errors.username}
          />

          {/* メールアドレス */}
          <FormField
            id="email"
            label="メールアドレス"
            type="email"
            placeholder="email@example.com"
            register={form.register("email")}
            error={form.formState.errors.email}
          />

          {/* パスワード */}
          <FormField
            id="password"
            label="パスワード"
            type="password"
            register={form.register("password")}
            error={form.formState.errors.password}
          >
            <PasswordStrengthIndicator password={form.watch("password")} />
          </FormField>

          {/* パスワード確認 */}
          <FormField
            id="confirmPassword"
            label="パスワード確認"
            type="password"
            register={form.register("confirmPassword")}
            error={form.formState.errors.confirmPassword}
          />

          {/* 利用規約同意 */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="acceptTerms"
              {...form.register("acceptTerms")}
              className="mt-1 bg-[#363A45] border-[#4A4E59]"
            />
            <div>
              <label
                htmlFor="acceptTerms"
                className="text-sm text-[#D1D4DC] cursor-pointer"
              >
                利用規約とプライバシーポリシーに同意します
              </label>
              {form.formState.errors.acceptTerms && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.acceptTerms.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#2962FF] hover:bg-[#0039CB] text-white"
          disabled={
            isLoading ||
            (form.formState.isDirty &&
              Object.keys(form.formState.errors).length > 0)
          }
        >
          {isLoading ? "アカウント作成中..." : "アカウント作成"}
        </Button>

        <div className="text-center">
          <p className="text-sm text-[#787B86]">登録は30秒で完了します</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#D1D4DC]">
            すでにアカウントをお持ちですか？{" "}
            <Button
              variant="link"
              className="p-0 text-[#2962FF]"
              onClick={() => navigate("/login")}
            >
              ログイン
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
}
