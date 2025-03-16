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
        Schema::create('stock_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stock_id')->constrained()->comment('銘柄ID');
            $table->decimal('price', 15, 2)->comment('株価');
            $table->decimal('price_change', 8, 2)->comment('前日比変動率');
            $table->date('price_date')->comment('価格日付');
            $table->timestamps();
            
            // 複合インデックス
            $table->index(['stock_id', 'price_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_prices');
    }
};
