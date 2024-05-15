<?php

namespace Database\Seeders;

use App\Models\Trade;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('trades')->truncate();

        Trade::factory()->count(1000)->create();
    }
}
