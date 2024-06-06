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
        Schema::create('producers', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->comment('uuid')->index();
            $table->string('organizationName')->comment('法人名・組織名・屋号等');
            $table->string('presidentName')->comment('代表者名');
            $table->string('postalCode')->comment('郵便番号');
            $table->string('address1')->comment('都道府県');
            $table->string('address2')->comment('市区町村');
            $table->string('address3')->comment('番地以下');
            $table->string('address4')->nullable()->default('')->comment('建物名等');
            $table->string('tel')->comment('電話番号');
            $table->string('imgPath')->nullable()->default(null)->comment('電話番号');
            $table->string('email')->comment('メールアドレス');
            $table->string('password')->comment('パスワード');
            $table->integer('paymentMethod')->default(0)->comment('取引手数料の支払い方法');
            $table->text('pr')->nullable()->default(null)->comment('自己PR');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('producers');
    }
};
