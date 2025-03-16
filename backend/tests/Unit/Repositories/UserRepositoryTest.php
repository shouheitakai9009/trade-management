<?php

namespace Tests\Unit\Repositories;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserRepositoryTest extends TestCase
{
  use RefreshDatabase;

  private UserRepository $userRepository;

  protected function setUp(): void
  {
    parent::setUp();
    $this->userRepository = new UserRepository();
  }

  /**
   * ユーザー作成のテスト
   *
   * @return void
   */
  public function test_create_user(): void
  {
    $userData = [
      'username' => 'testuser',
      'email' => 'test@example.com',
      'password' => 'password',
    ];

    $user = $this->userRepository->create($userData);

    $this->assertInstanceOf(User::class, $user);
    $this->assertEquals('testuser', $user->name);
    $this->assertEquals('test@example.com', $user->email);
    $this->assertDatabaseHas('users', [
      'name' => 'testuser',
      'email' => 'test@example.com',
    ]);
  }

  /**
   * メールアドレスでユーザーを検索するテスト
   *
   * @return void
   */
  public function test_find_by_email(): void
  {
    // テストユーザーを作成
    $user = User::factory()->create([
      'email' => 'test@example.com',
    ]);

    $foundUser = $this->userRepository->findByEmail('test@example.com');

    $this->assertInstanceOf(User::class, $foundUser);
    $this->assertEquals($user->id, $foundUser->id);
    $this->assertEquals('test@example.com', $foundUser->email);
  }

  /**
   * 存在しないメールアドレスで検索した場合のテスト
   *
   * @return void
   */
  public function test_find_by_email_returns_null_for_nonexistent_email(): void
  {
    $foundUser = $this->userRepository->findByEmail('nonexistent@example.com');

    $this->assertNull($foundUser);
  }

  /**
   * ログイン試行のテスト（成功）
   *
   * @return void
   */
  public function test_attempt_login_success(): void
  {
    // テストユーザーを作成（パスワードは自動的にハッシュ化される）
    $user = User::factory()->create([
      'email' => 'test@example.com',
      'password' => bcrypt('password123'),
    ]);

    $loggedInUser = $this->userRepository->attemptLogin('test@example.com', 'password123');

    $this->assertInstanceOf(User::class, $loggedInUser);
    $this->assertEquals($user->id, $loggedInUser->id);
  }

  /**
   * ログイン試行のテスト（失敗 - 間違ったパスワード）
   *
   * @return void
   */
  public function test_attempt_login_fails_with_wrong_password(): void
  {
    // テストユーザーを作成
    User::factory()->create([
      'email' => 'test@example.com',
      'password' => bcrypt('password123'),
    ]);

    $loggedInUser = $this->userRepository->attemptLogin('test@example.com', 'wrongpassword');

    $this->assertNull($loggedInUser);
  }

  /**
   * ログイン試行のテスト（失敗 - 存在しないメールアドレス）
   *
   * @return void
   */
  public function test_attempt_login_fails_with_nonexistent_email(): void
  {
    $loggedInUser = $this->userRepository->attemptLogin('nonexistent@example.com', 'password123');

    $this->assertNull($loggedInUser);
  }

  /**
   * トークン作成のテスト
   *
   * @return void
   */
  public function test_create_token(): void
  {
    $user = User::factory()->create();

    $token = $this->userRepository->createToken($user);

    $this->assertIsString($token);
    $this->assertNotEmpty($token);
  }

  /**
   * トークン削除のテスト
   *
   * @return void
   */
  public function test_delete_tokens(): void
  {
    $user = User::factory()->create();
    
    // トークンを作成
    $user->createToken('test-token');
    
    // トークンが作成されたことを確認
    $this->assertCount(1, $user->tokens);
    
    // トークンを削除
    $this->userRepository->deleteTokens($user);
    
    // トークンが削除されたことを確認
    $this->assertCount(0, $user->fresh()->tokens);
  }
}
