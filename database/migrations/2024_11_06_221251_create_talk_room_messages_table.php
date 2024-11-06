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
        Schema::create('talk_room_messages', function (Blueprint $table) {
            $table->id();
			$table->bigInteger('talk_room_id')->comment('トークルームID');
			$table->bigInteger('user_id')->comment('ユーザーID');
			$table->text('message')->comment('メッセージ');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talk_room_messages');
    }
};
