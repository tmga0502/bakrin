<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('plans')->truncate();

        $now = Carbon::now();
        DB::table('plans')->insert([
            [
                'name' => 'お手頃プラン',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'おすすめプラン',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '満足プラン',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '無制限プラン',
                'created_at' => $now,
                'updated_at' => $now
            ],
        ]);
    }
}
