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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
			$table->string('uuid')->comment('UUID');
			$table->bigInteger('user_id')->comment('ユーザーID');
			$table->date('month')->nullable()->default(null)->comment('請求書発行日');
			$table->boolean('payment_check')->default(false)->comment('支払いチェック true:支払済, false:未払');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
