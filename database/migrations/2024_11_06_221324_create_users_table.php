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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
			$table->string('uuid')->comment('UUID');
			$table->string('referral_code')->comment('紹介コード');
			$table->string('password')->comment('パスワード');
			$table->string('organization_name')->comment('法人名等');
			$table->string('president_name')->comment('代表者名');
			$table->string('postal_code')->nullable()->default(null)->comment('郵便番号');
			$table->string('address1')->nullable()->default(null)->comment('都道府県');
			$table->string('address2')->nullable()->default(null)->comment('市区町村');
			$table->string('address3')->nullable()->default(null)->comment('番地以下');
			$table->string('address4')->nullable()->default(null)->comment('建物名等');
			$table->string('phone_number')->nullable()->default(null)->comment('電話番号');
			$table->string('email')->comment('メールアドレス');
			$table->text('pr')->nullable()->default(null)->comment('自己PR');
			$table->integer('payment_method')->default(0)->comment('銀行振込');
			$table->string('thumbnail_path')->nullable()->default(null)->comment('サムネイル画像パス');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
