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
//            AdminUserSeeder::class,
//            UserSeeder::class,
//            PlanSeeder::class,
//            UnitSeeder::class,
//            ItemCategorySeeder::class,
//            ItemVarietySeeder::class,
//            ItemSeeder::class,
//            ItemImageSeeder::class,
////            TradeSeeder::class,
////			TradeProducerSeeder::class,
//            TalkRoomSeeder::class,
//            TalkRoomMemberSeeder::class,
//            TalkRoomMessageSeeder::class,
//            FavoriteItemSeeder::class,
            FavoriteUserSeeder::class,
//            WantItemSeeder::class,
        ]);
    }
}
