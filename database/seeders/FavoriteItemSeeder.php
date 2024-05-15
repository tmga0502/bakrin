<?php

namespace Database\Seeders;

use App\Models\FavoriteItem;
use Illuminate\Database\Seeder;

class FavoriteItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('favorite_items')->truncate();

        FavoriteItem::factory()->count(300)->create();
    }
}
