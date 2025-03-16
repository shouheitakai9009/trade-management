import React, { useMemo } from "react";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  const strength = useMemo(() => {
    if (!password) return 0;

    let score = 0;

    // 長さチェック
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // 文字種チェック
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // 最大スコアは5
    return Math.min(5, score);
  }, [password]);

  const getStrengthText = () => {
    if (strength === 0) return "パスワードを入力してください";
    if (strength === 1) return "非常に弱い";
    if (strength === 2) return "弱い";
    if (strength === 3) return "普通";
    if (strength === 4) return "強い";
    return "非常に強い";
  };

  const getStrengthColor = () => {
    if (strength === 0) return "bg-gray-300";
    if (strength === 1) return "bg-red-500";
    if (strength === 2) return "bg-orange-500";
    if (strength === 3) return "bg-yellow-500";
    if (strength === 4) return "bg-green-500";
    return "bg-emerald-500";
  };

  const getStrengthWidth = () => {
    return `${(strength / 5) * 100}%`;
  };

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor()} transition-all duration-300 ease-in-out`}
          style={{ width: getStrengthWidth() }}
        />
      </div>
      <p className="text-xs mt-1 text-muted-foreground">
        パスワード強度: {getStrengthText()}
      </p>
    </div>
  );
}
