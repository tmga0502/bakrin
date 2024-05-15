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
            $table->string('status')->comment('ステータス')->index();
            $table->string('myUuid')->comment('自分のuuid')->index();
            $table->string('producerUuid')->comment('相手のuuid')->index();
            $table->date('myShippingDate')->nullable()->default(null)->comment('自分の発送日');
            $table->date('producerShippingDate')->nullable()->default(null)->comment('相手の発送日');
            $table->string('rejectReason')->nullable()->default(null)->comment('取引拒否理由');
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
