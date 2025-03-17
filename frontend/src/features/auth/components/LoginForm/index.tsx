import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { loginFormSchema, type LoginFormValues } from "./validation";

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

export function LoginForm() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    console.log("Form submitted:", data);
    // モックアップのため、1秒後にローディングを解除とエラー表示
    setTimeout(() => {
      setIsLoading(false);
      setServerError(
        "認証に失敗しました。メールアドレスまたはパスワードが正しくありません。"
      );
    }, 1000);
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
          <h1 className="text-2xl font-bold text-white">ログイン</h1>
          <p className="text-[#787B86]">
            アカウントにログインしてトレード管理を続けましょう
          </p>
        </div>

        <div className="space-y-4">
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
          />

          {/* ログイン状態を保持 */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rememberMe"
              {...form.register("rememberMe")}
              className="border-[#4A4E59] data-[state=checked]:bg-[#2962FF]"
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium text-white"
            >
              ログイン状態を保持する
            </label>
          </div>
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
          {isLoading ? "ログイン中..." : "ログイン"}
        </Button>

        <div className="space-y-4 text-center">
          <Button
            variant="link"
            className="p-0 text-[#2962FF] text-sm"
            onClick={() => navigate("/auth/reset-password")}
          >
            パスワードをお忘れですか？
          </Button>

          <p className="text-sm text-[#D1D4DC]">
            アカウントをお持ちでない方は{" "}
            <Button
              variant="link"
              className="p-0 text-[#2962FF]"
              onClick={() => navigate("/register")}
            >
              新規登録
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
}
