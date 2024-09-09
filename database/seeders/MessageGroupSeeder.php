<?php

namespace Database\Seeders;

use App\Models\MessageGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
	public function run(): void
	{
		\DB::table('message_groups')->truncate();

		MessageGroup::factory()->count(200)->create();
	}
}
