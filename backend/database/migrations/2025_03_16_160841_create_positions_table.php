<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('positions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->comment('ユーザーID');
            $table->foreignId('stock_id')->constrained()->comment('銘柄ID');
            $table->enum('status', ['active', 'closed'])->comment('ポジションの状態');
            $table->date('open_date')->comment('ポジションオープン日');
            $table->date('close_date')->nullable()->comment('ポジションクローズ日');
            $table->decimal('total_buy_amount', 15, 2)->comment('総購入金額');
            $table->decimal('total_sell_amount', 15, 2)->default(0)->comment('総売却金額');
            $table->decimal('remaining_quantity', 15, 5)->comment('残数量');
            $table->decimal('profit', 15, 2)->nullable()->comment('確定損益');
            $table->decimal('profit_rate', 8, 2)->nullable()->comment('確定損益率');
            $table->timestamps();
            
            // 複合インデックス
            $table->index(['user_id', 'stock_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('positions');
    }
};
