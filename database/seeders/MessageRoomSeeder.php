<?php

namespace Database\Seeders;

use App\Models\MessageRoom;
use App\Models\Producer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		DB::table('message_rooms')->truncate();

		MessageRoom::factory()->count(50)->create();
    }
}
