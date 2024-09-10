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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
			$table->integer('messageRoomId')->comment('MessageRoomのID');
            $table->string('senderUuid')->comment('発信者のuuid')->index();
            $table->text('message')->comment('メッセージ');
            $table->datetime('read_at')->nullable()->default(null)->comment('開封日時');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
