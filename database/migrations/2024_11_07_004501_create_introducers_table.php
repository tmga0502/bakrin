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
        Schema::create('introducers', function (Blueprint $table) {
            $table->id();
			$table->bigInteger('user_id')->comment('ユーザーID');
			$table->integer('introducer_type')->comment('紹介者属性');
			$table->bigInteger('introducer_id')->comment('紹介者ID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('introducers');
    }
};
