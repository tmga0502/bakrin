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
        Schema::create('favorite_users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('favorite_by_user_id')->comment('お気に入りしたユーザーID')->index();
            $table->bigInteger('favorite_user_id')->comment('お気に入りされたユーザーID')->index();
			$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_users');
    }
};
