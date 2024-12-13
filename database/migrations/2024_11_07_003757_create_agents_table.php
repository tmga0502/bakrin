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
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
					  $table->string('uuid')->comment('UUID');
					  $table->string('referral_code')->comment('紹介コード');
					  $table->string('name')->comment('名前');
				  	$table->string('login_id')->comment('ログインID');
					  $table->string('password')->comment('パスワード');
					  $table->string('phone_number')->nullable()->default(null)->comment('電話番号');
					  $table->string('email')->comment('メールアドレス');
					  $table->string('postal_code')->nullable()->default(null)->comment('郵便番号');
					  $table->string('address1')->nullable()->default(null)->comment('都道府県');
					  $table->string('address2')->nullable()->default(null)->comment('市区町村');
					  $table->string('address3')->nullable()->default(null)->comment('番地以下');
					  $table->string('address4')->nullable()->default(null)->comment('建物名等');
					  $table->string('bank_name')->nullable()->default(null)->comment('銀行名');
					  $table->string('bank_name_type')->nullable()->default(null)->comment('銀行タイプ');
					  $table->string('bank_code')->nullable()->default(null)->comment('銀行コード');
					  $table->string('branch_name')->nullable()->default(null)->comment('支店名');
					  $table->string('branch_name_type')->nullable()->default(null)->comment('支店タイプ');
					  $table->string('branch_code')->nullable()->default(null)->comment('支店コード');
					  $table->string('bank_type')->default('普通')->comment('銀行種別');
					  $table->string('bank_number')->nullable()->default(null)->comment('口座番号');
					  $table->string('bank_account')->nullable()->default(null)->comment('口座名義');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agents');
    }
};
