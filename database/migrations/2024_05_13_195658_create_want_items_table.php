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
            $table->string('myUuid')->comment('自分のuuid')->index();
            $table->string('itemVarietyId')->comment('種目のID')->index();
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
