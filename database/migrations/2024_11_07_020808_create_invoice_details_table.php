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
			$table->bigInteger('trade_member_id')->comment('交換メンバーID');
			$table->integer('amount')->default(0)->comment('請求額');
			$table->integer('discount')->default(0)->comment('割引額');
			$table->integer('referral_fee')->default(0)->comment('紹介者振り分け額');
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
