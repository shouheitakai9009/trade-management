import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthIndicator } from "../PasswordStrengthIndicator";
import { RegisterFormValues, registerSchema } from "./validation";
import { isApiError, setFormErrors } from "@/utils/api-error";

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
        className="bg-[#363A45] border-[#4A4E59] text-white h-12 px-4 py-3 text-base"
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
    },
  });

  // フォーム送信処理
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsLoading(true);
      setServerError(null);

      // API通信
      const { register } = await import("@/apis/auth");
      await register({
        username: data.username,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      // 成功時の処理
      setIsLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);

      if (isApiError(error)) {
        // バリデーションエラーの処理
        setFormErrors(error, form.setError, {
          username: "username",
          email: "email",
          password: "password",
          password_confirmation: "confirmPassword",
        });
      } else {
        // その他のエラー
        setServerError(
          "アカウント作成に失敗しました。もう一度お試しください。"
        );
      }
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
        </div>

        <Button
          type="submit"
          className="w-full bg-[#2962FF] hover:bg-[#0039CB] text-white h-12 text-base font-medium"
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
