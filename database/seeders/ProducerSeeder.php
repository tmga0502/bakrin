<?php

namespace Database\Seeders;

use App\Models\Producer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProducerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('producers')->truncate();

        Producer::factory()->count(100)->create();
    }
}
