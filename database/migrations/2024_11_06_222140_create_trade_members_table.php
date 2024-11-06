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
        Schema::create('trade_members', function (Blueprint $table) {
            $table->id();
			$table->bigInteger('trade_id')->comment('交換ID');
			$table->boolean('applicant_flag')->default(true)->comment('申請者フラグ');
			$table->bigInteger('user_id')->comment('ユーザーID');
			$table->bigInteger('item_id')->comment('アイテムID');
			$table->bigInteger('shipping_info_id')->nullable()->default(null)->comment('送付先情報ID');
			$table->date('shipping_date')->nullable()->default(null)->comment('発送日');
			$table->string('shipping_slip_path')->nullable()->default(null)->comment('発送伝票画像のパス');
			$table->boolean('receipt_check')->default(false)->comment('受取チェック true:受取済, false:未受取');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trade_members');
    }
};
