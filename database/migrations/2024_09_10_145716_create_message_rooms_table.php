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
        Schema::create('message_rooms', function (Blueprint $table) {
            $table->id();
			$table->string('producerUuid1')->comment('producerのUUID1');
			$table->string('producerUuid2')->comment('producerのUUID2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('message_rooms');
    }
};
