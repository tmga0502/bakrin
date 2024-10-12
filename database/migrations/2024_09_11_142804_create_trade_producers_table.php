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
        Schema::create('trade_producers', function (Blueprint $table) {
            $table->id();
			$table->string('tradeUuid')->comment('TradeテーブルのUUID');
			$table->string('type')->comment('"sender" | "recipient"  【発送者/申請者】or【被発送者/非申請者】');
			$table->string('producerUuid')->comment('生産者のuuid')->index();
			$table->string('itemUuid')->comment('アイテムのuuid')->index();
			$table->date('shippingDate')->nullable()->default(null)->comment('商品の発送日');
			$table->string('shippingSlipPath')->nullable()->default(null)->comment('発送伝票パス');
			$table->string('tel')->nullable()->default(null)->comment('電話番号');
			$table->string('postalCode')->nullable()->default(null)->comment('送り先の郵便番号');
			$table->string('address1')->nullable()->default(null)->comment('送り先の都道府県');
			$table->string('address2')->nullable()->default(null)->comment('送り先の市区町村');
			$table->string('address3')->nullable()->default(null)->comment('送り先のその他');
			$table->string('address4')->nullable()->default(null)->comment('送り先の建物名等');
			$table->boolean('receiptCheck')->default(false)->comment('受取チェック');
			$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trade_producers');
    }
};
