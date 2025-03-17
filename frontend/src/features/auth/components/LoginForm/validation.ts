import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z
    .string()
    .min(8, "パスワードは8文字以上で入力してください")
    .regex(/[A-Z]/, "大文字を含める必要があります")
    .regex(/[a-z]/, "小文字を含める必要があります")
    .regex(/[0-9]/, "数字を含める必要があります")
    .regex(/[^A-Za-z0-9]/, "特殊文字を含める必要があります"),
  rememberMe: z.boolean().default(false),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
