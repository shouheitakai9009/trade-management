import apiClient from "../client";

export type RegisterParams = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type AuthResponse = {
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
};

/**
 * ユーザー登録API
 * @param params 登録情報
 * @returns APIレスポンス
 */
export const register = async (
  params: RegisterParams
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>("/register", params);
  return response.data;
};

/**
 * ログインAPI
 * @param params ログイン情報
 * @returns APIレスポンス
 */
export const login = async (params: LoginParams): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>("/login", params);
  return response.data;
};

/**
 * ログアウトAPI
 * @returns APIレスポンス
 */
export const logout = async (): Promise<{ message: string }> => {
  const response = await apiClient.post<{ message: string }>("/logout");
  return response.data;
};

/**
 * 認証済みユーザー情報取得API
 * @returns APIレスポンス
 */
export const getMe = async (): Promise<AuthResponse["user"]> => {
  const response = await apiClient.get<AuthResponse["user"]>("/me");
  return response.data;
};
