<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Validation\ValidationException;

class AuthService
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * AuthService constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * ユーザー登録処理
     *
     * @param array $userData
     * @return array
     */
    public function register(array $userData): array
    {
        $user = $this->userRepository->create($userData);
        $token = $this->userRepository->createToken($user);

        return [
            'user' => $user,
            'token' => $token
        ];
    }

    /**
     * ログイン処理
     *
     * @param string $email
     * @param string $password
     * @return array
     * @throws ValidationException
     */
    public function login(string $email, string $password): array
    {
        $user = $this->userRepository->attemptLogin($email, $password);

        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['メールアドレスまたはパスワードが正しくありません'],
            ]);
        }

        // 既存のトークンを削除
        $this->userRepository->deleteTokens($user);

        // 新しいトークンを作成
        $token = $this->userRepository->createToken($user);

        return [
            'user' => $user,
            'token' => $token
        ];
    }

    /**
     * ログアウト処理
     *
     * @param User $user
     * @return void
     */
    public function logout(User $user): void
    {
        // 現在のアクセストークンが存在する場合のみ削除
        if ($user->currentAccessToken()) {
            $user->currentAccessToken()->delete();
        }
    }
}
