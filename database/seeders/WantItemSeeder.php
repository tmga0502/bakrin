<?php

namespace Database\Seeders;

use App\Models\WantItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WantItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('want_items')->truncate();

        WantItem::factory()->count(500)->create();
    }
}
