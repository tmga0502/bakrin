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
        Schema::create('trades', function (Blueprint $table) {
            $table->id();
			$table->string('uuid')->comment('UUID');
            $table->integer('status')->default(0)->comment('0:申請中, 1:トレード中, 2:トレード完了, 3;拒否')->index();
            $table->string('reject_reason')->nullable()->default(null)->comment('取引拒否理由');
			$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
