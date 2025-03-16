import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSSのクラスをマージするユーティリティ関数
 * - clsxで条件付きクラスを処理
 * - tailwind-mergeで重複するTailwindクラスを解決
 *
 * @example
 * ```tsx
 * cn('px-2 py-1', 'bg-blue-500', condition && 'text-white')
 * ```
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
