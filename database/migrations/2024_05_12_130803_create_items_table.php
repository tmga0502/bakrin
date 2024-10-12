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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->comment('uuid')->index();
            $table->string('producerUuid')->comment('producerUuid');
            $table->string('varietyId')->comment('varietyId');
            $table->string('name')->comment('アイテム名');
            $table->integer('categoryId')->comment('categoryId');
            $table->integer('count')->comment('数量');
            $table->integer('unitId')->comment('unitId');
            $table->integer('guideCount')->comment('目安数量');
            $table->integer('guideUnitId')->comment('unitId');
            $table->integer('planId')->comment('planId');
            $table->text('description')->nullable()->default(null)->comment('アイテム説明');
            $table->integer('shippingStart')->comment('発送時期(いつから)【ex:8月】');
            $table->string('shippingStartPart')->comment('発送時期【ex:上旬】');
            $table->integer('shippingEnd')->comment('発送時期(いつまで)【ex:8月】');
            $table->string('shippingEndPart')->comment('発送時期【ex:上旬】');
            $table->integer('status')->default(1)->comment('公開状態【0:公開, 1:非公開】');
            $table->string('thumbnail')->nullable()->default(null)->comment('サムネイル画像パス');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
