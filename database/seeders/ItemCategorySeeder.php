<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ItemCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('item_categories')->truncate();

        $now = Carbon::now();
        DB::table('item_categories')->insert([
            [
                'name' => '野菜',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '果物',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '肉',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '魚介類',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '米・穀類',
                'created_at' => $now,
                'updated_at' => $now
            ],
        ]);
    }
}
