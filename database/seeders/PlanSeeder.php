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
				'display_name' => 'お手頃',
				'badge_color' => '#dc2626',
				'badge_text_color' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'おすすめプラン',
				'display_name' => 'おすすめ',
				'badge_color' => '#38bdf8',
				'badge_text_color' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '満足プラン',
				'display_name' => '満足',
				'badge_color' => '#22c55e',
				'badge_text_color' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '無制限プラン',
				'display_name' => '無制限',
				'badge_color' => '#1E1E1EFF',
				'badge_text_color' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
        ]);
    }
}
