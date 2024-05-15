<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(class: [
            AdminUserSeeder::class,
            ProducerSeeder::class,
            PlanSeeder::class,
            UnitSeeder::class,
            ItemCategorySeeder::class,
            ItemVarietySeeder::class,
            ItemSeeder::class,
            ItemImageSeeder::class,
            TradeSeeder::class,
            MessageSeeder::class,
            FavoriteItemSeeder::class,
            FavoriteProducerSeeder::class,
            WantItemSeeder::class,
        ]);
    }
}
