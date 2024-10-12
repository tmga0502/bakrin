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
        Schema::create('favorite_producers', function (Blueprint $table) {
            $table->id();
            $table->string('myUuid')->comment('自分のuuid')->index();
            $table->string('producerUuid')->comment('相手のuuid')->index();
			$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_producers');
    }
};
