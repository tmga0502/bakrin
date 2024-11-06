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
        Schema::create('want_items', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->comment('ユーザーID')->index();
            $table->bigInteger('item_variety_id')->comment('アイテム種目のID')->index();
			$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('want_items');
    }
};
