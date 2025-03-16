<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegisterTest extends TestCase
{
  use RefreshDatabase;

  /**
   * ユーザー登録が成功するテスト
   *
   * @return void
   */
  public function test_user_can_register(): void
  {
    $response = $this->postJson('/api/register', [
      'username' => 'testuser',
      'email' => 'test@example.com',
      'password' => 'Password123!',
      'password_confirmation' => 'Password123!',
    ]);

    $response->assertStatus(201)
      ->assertJsonStructure([
        'message',
        'user' => [
          'id',
          'name',
          'email',
          'created_at',
          'updated_at',
        ],
        'token',
      ]);

    $this->assertDatabaseHas('users', [
      'name' => 'testuser',
      'email' => 'test@example.com',
    ]);
  }

  /**
   * バリデーションエラーのテスト
   *
   * @return void
   */
  public function test_validation_fails_with_invalid_data(): void
  {
    $response = $this->postJson('/api/register', [
      'username' => 'a', // 3文字未満
      'email' => 'invalid-email',
      'password' => '123', // 8文字未満
      'password_confirmation' => '1234', // パスワードと一致しない
    ]);

    $response->assertStatus(422)
      ->assertJsonValidationErrors(['username', 'email', 'password']);
  }

  /**
   * 既存のメールアドレスでの登録が失敗するテスト
   *
   * @return void
   */
  public function test_registration_fails_with_existing_email(): void
  {
    // 既存のユーザーを作成
    User::factory()->create([
      'email' => 'existing@example.com',
    ]);

    $response = $this->postJson('/api/register', [
      'username' => 'newuser',
      'email' => 'existing@example.com', // 既存のメールアドレス
      'password' => 'Password123!',
      'password_confirmation' => 'Password123!',
    ]);

    $response->assertStatus(422)
      ->assertJsonValidationErrors(['email']);
  }
}
