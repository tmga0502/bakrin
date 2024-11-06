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
            $table->bigInteger('user_id')->comment('ユーザーのID');
            $table->bigInteger('item_category_id')->comment('アイテムカテゴリーID');
            $table->bigInteger('item_variety_id')->comment('アイテム種目ID');
            $table->string('name')->comment('アイテム名');
            $table->integer('count')->comment('数量');
            $table->bigInteger('unit_id')->comment('単位ID');
            $table->integer('guide_count')->comment('目安数量');
            $table->bigInteger('guide_unit_id')->comment('単位ID');
            $table->bigInteger('plan_id')->comment('プランID');
            $table->text('description')->nullable()->default(null)->comment('アイテム説明');
            $table->integer('shipping_start')->comment('発送時期(いつから)【ex:8月】');
            $table->string('shipping_start_part')->comment('発送時期【ex:上旬】');
            $table->integer('shipping_end')->comment('発送時期(いつまで)【ex:8月】');
            $table->string('shipping_end_part')->comment('発送時期【ex:上旬】');
            $table->boolean('status')->default(false)->comment('公開状態【true:公開, false:非公開】');
            $table->string('thumbnail_path')->nullable()->default(null)->comment('サムネイル画像パス');
			$table->softDeletes();
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
