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
        Schema::create('invoice_details', function (Blueprint $table) {
            $table->id();
			$table->bigInteger('invoice_id')->comment('請求ID');
			$table->bigInteger('trade_id')->comment('交換ID');
			$table->integer('amount')->default(0)->comment('請求額');
			$table->integer('discount')->default(0)->comment('割引額');
			$table->string('introducer_code')->default('')->comment('紹介者コード');
			$table->integer('discount_reason')->default(0)->comment('0:なし, 1:生産者による割引チケット使用, 99:β版時の無料期間');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoice_details');
    }
};
