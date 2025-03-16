import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "ユーザー名は3文字以上で入力してください")
      .max(20, "ユーザー名は20文字以下で入力してください")
      .regex(
        /^[a-zA-Z0-9_-]+$/,
        "ユーザー名は英数字、アンダースコア、ハイフンのみ使用できます"
      ),
    email: z.string().email("有効なメールアドレスを入力してください"),
    password: z
      .string()
      .min(8, "パスワードは8文字以上で入力してください")
      .regex(/[A-Z]/, "大文字を含める必要があります")
      .regex(/[a-z]/, "小文字を含める必要があります")
      .regex(/[0-9]/, "数字を含める必要があります")
      .regex(/[^A-Za-z0-9]/, "特殊文字を含める必要があります"),
    confirmPassword: z.string(),
    acceptTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "利用規約とプライバシーポリシーに同意する必要があります"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "パスワードが一致しません",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
