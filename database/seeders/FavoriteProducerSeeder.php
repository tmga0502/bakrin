<?php

namespace Database\Seeders;

use App\Models\FavoriteProducer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FavoriteProducerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('favorite_producers')->truncate();

        FavoriteProducer::factory()->count(300)->create();
    }
}
