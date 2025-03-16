<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    /**
     * ユーザーを作成する
     *
     * @param array $userData
     * @return User
     */
    public function create(array $userData): User
    {
        return User::create([
            'name' => $userData['username'],
            'email' => $userData['email'],
            'password' => $userData['password'],
        ]);
    }

    /**
     * メールアドレスでユーザーを検索する
     *
     * @param string $email
     * @return User|null
     */
    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }

    /**
     * 認証を試みる
     *
     * @param string $email
     * @param string $password
     * @return User|null
     */
    public function attemptLogin(string $email, string $password): ?User
    {
        $user = $this->findByEmail($email);

        if (!$user || !Hash::check($password, $user->password)) {
            return null;
        }

        return $user;
    }

    /**
     * ユーザーの既存のトークンを削除する
     *
     * @param User $user
     * @return void
     */
    public function deleteTokens(User $user): void
    {
        $user->tokens()->delete();
    }

    /**
     * ユーザーの認証トークンを作成する
     *
     * @param User $user
     * @return string
     */
    public function createToken(User $user): string
    {
        return $user->createToken('auth_token')->plainTextToken;
    }
}
