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
        Schema::create('monthly_summaries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->comment('ユーザーID');
            $table->smallInteger('year')->comment('年');
            $table->tinyInteger('month')->comment('月');
            $table->integer('total_trades')->comment('総トレード数');
            $table->decimal('total_profit', 15, 2)->comment('総利益');
            $table->decimal('avg_profit', 15, 2)->comment('平均利益');
            $table->decimal('avg_profit_rate', 8, 2)->comment('平均利益率');
            $table->decimal('avg_loss_rate', 8, 2)->comment('平均損失率');
            $table->decimal('max_profit_rate', 8, 2)->comment('最大利益率');
            $table->decimal('max_loss_rate', 8, 2)->comment('最大損失率');
            $table->decimal('prev_month_change', 8, 2)->nullable()->comment('先月比変化率');
            $table->timestamps();
            
            // 複合インデックス
            $table->index(['user_id', 'year', 'month']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monthly_summaries');
    }
};
