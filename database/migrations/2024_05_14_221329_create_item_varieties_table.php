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
        Schema::create('item_varieties', function (Blueprint $table) {
            $table->id();
            $table->string('categoryId')->comment('カテゴリーID');
            $table->string('name')->comment('種目名【表示名】');
            $table->string('hiragana')->comment('ひらがな');
            $table->string('katakana')->comment('カタカナ');
            $table->string('kanzi')->nullable()->default(null)->comment('漢字');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_varieties');
    }
};
