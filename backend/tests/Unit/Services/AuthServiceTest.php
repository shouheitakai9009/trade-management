<?php

namespace Tests\Unit\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use App\Services\AuthService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Validation\ValidationException;
use Tests\TestCase;

class AuthServiceTest extends TestCase
{
  use RefreshDatabase;

  private UserRepository $userRepository;
  private AuthService $authService;

  protected function setUp(): void
  {
    parent::setUp();
    $this->userRepository = new UserRepository();
    $this->authService = new AuthService($this->userRepository);
  }

  /**
   * ユーザー登録のテスト
   *
   * @return void
   */
  public function test_register(): void
  {
    $userData = [
      'username' => 'testuser',
      'email' => 'test@example.com',
      'password' => 'Password123!',
    ];

    $result = $this->authService->register($userData);

    $this->assertInstanceOf(User::class, $result['user']);
    $this->assertEquals('testuser', $result['user']->name);
    $this->assertEquals('test@example.com', $result['user']->email);
    $this->assertIsString($result['token']);
    $this->assertNotEmpty($result['token']);

    $this->assertDatabaseHas('users', [
      'name' => 'testuser',
      'email' => 'test@example.com',
    ]);
  }

  /**
   * ログイン成功のテスト
   *
   * @return void
   */
  public function test_login_success(): void
  {
    // テストユーザーを作成
    $user = User::factory()->create([
      'email' => 'test@example.com',
      'password' => bcrypt('password123'),
    ]);

    $result = $this->authService->login('test@example.com', 'password123');

    $this->assertInstanceOf(User::class, $result['user']);
    $this->assertEquals($user->id, $result['user']->id);
    $this->assertIsString($result['token']);
    $this->assertNotEmpty($result['token']);
  }

  /**
   * ログイン失敗のテスト
   *
   * @return void
   */
  public function test_login_failure(): void
  {
    // テストユーザーを作成
    User::factory()->create([
      'email' => 'test@example.com',
      'password' => bcrypt('password123'),
    ]);

    $this->expectException(ValidationException::class);

    $this->authService->login('test@example.com', 'wrongpassword');
  }

  /**
   * ログアウトのテスト
   *
   * @return void
   */
  public function test_logout(): void
  {
    // このテストは実際のトークンを使用するため、Sanctumの設定が必要
    // 簡易的なテストとして、例外が発生しないことを確認
    $user = User::factory()->create();
    
    // トークンを作成
    $token = $user->createToken('test-token');
    
    // リフレッシュしてトークンを取得
    $user = $user->fresh();
    
    // ログアウト処理（例外が発生しなければ成功）
    $this->authService->logout($user);
    
    $this->assertTrue(true);
  }
}
