<?php

namespace Database\Seeders;

use App\Models\FavoriteUser;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FavoriteUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('favorite_users')->truncate();

        FavoriteUser::factory()->count(10)->create();
    }
}
