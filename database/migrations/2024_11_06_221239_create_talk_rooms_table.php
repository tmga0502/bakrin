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
        Schema::create('talk_rooms', function (Blueprint $table) {
            $table->id();
			$table->string('uuid')->comment('uuid');
			$table->string('name')->nullable()->default(null)->comment('ルーム名');
			$table->boolean('is_group')->default(false)->comment('true:1on1, false:group');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talk_rooms');
    }
};
