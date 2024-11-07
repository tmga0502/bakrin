<?php

namespace Database\Seeders;

use App\Models\TalkRoom;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TalkRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		DB::table('talk_rooms')->truncate();

		TalkRoom::factory()->count(50)->create();
    }
}
