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
        Schema::create('trade_messages', function (Blueprint $table) {
            $table->id();
			$table->bigInteger('trade_id')->comment('交換ID')->index();
			$table->bigInteger('user_id')->comment('ユーザーID')->index();
			$table->text('message')->comment('メッセージ');
			$table->datetime('read_at')->nullable()->default(null)->comment('開封日時');
			$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trade_messages');
    }
};
