import { AxiosError } from "axios";
import { FieldValues, Path, UseFormSetError } from "react-hook-form";

export type ApiValidationErrors = {
  [key: string]: string[];
};

export type ApiErrorResponse = {
  message: string;
  errors?: ApiValidationErrors;
};

/**
 * APIエラーかどうかを判定する
 * @param error エラーオブジェクト
 * @returns APIエラーかどうか
 */
export function isApiError(
  error: unknown
): error is AxiosError<ApiErrorResponse> {
  if (error === null || typeof error !== "object") {
    return false;
  }

  return (
    "isAxiosError" in error &&
    error.isAxiosError === true &&
    "response" in error &&
    error.response !== undefined &&
    error.response !== null &&
    typeof error.response === "object" &&
    "data" in error.response &&
    error.response.data !== undefined
  );
}

/**
 * バリデーションエラーをフォームに設定する
 * @param error APIエラー
 * @param setError フォームのsetError関数
 * @param fieldMap フィールド名のマッピング
 */
export function setFormErrors<T extends FieldValues>(
  error: AxiosError<ApiErrorResponse>,
  setError: UseFormSetError<T>,
  fieldMap: Record<string, Path<T>> = {}
): void {
  const serverErrors = error.response?.data?.errors;

  if (!serverErrors) return;

  Object.entries(serverErrors).forEach(([key, messages]) => {
    // フィールド名のマッピングを適用（マッピングがない場合は元のキーを使用）
    const fieldName = fieldMap[key] || (key as Path<T>);

    setError(fieldName, {
      type: "server",
      message: messages[0],
    });
  });
}
