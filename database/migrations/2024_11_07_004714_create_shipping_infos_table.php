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
        Schema::create('shipping_infos', function (Blueprint $table) {
            $table->id();
			$table->bigInteger('user_id')->comment('ユーザーID');
			$table->string('postal_code')->comment('郵便番号');
			$table->string('address1')->comment('都道府県');
			$table->string('address2')->comment('市区町村');
			$table->string('address3')->comment('番地以下');
			$table->string('address4')->nullable()->default(null)->comment('建物名等');
			$table->string('name')->comment('宛名');
			$table->string('phone_number')->comment('電話番号');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_infos');
    }
};
