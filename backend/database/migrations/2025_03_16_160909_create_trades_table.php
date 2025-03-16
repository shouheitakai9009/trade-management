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
        Schema::create('trades', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->comment('ユーザーID');
            $table->foreignId('stock_id')->constrained()->comment('銘柄ID');
            $table->foreignId('position_id')->nullable()->constrained()->comment('ポジションID');
            $table->enum('trade_type', ['buy', 'sell'])->comment('売買種別（買い/売り）');
            $table->decimal('amount', 15, 2)->comment('金額（手数料込み）');
            $table->date('trade_date')->comment('トレード日');
            $table->enum('transaction_type', ['spot', 'margin'])->default('spot')->comment('取引種別（現物/信用）');
            $table->text('notes')->nullable()->comment('備考');
            $table->timestamps();
            
            // インデックス
            $table->index(['user_id', 'trade_date']);
            $table->index('stock_id');
            $table->index('position_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
