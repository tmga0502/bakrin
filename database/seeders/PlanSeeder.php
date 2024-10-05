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
				'displayName' => 'お手頃',
				'color' => '#dc2626',
				'textColor' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'おすすめプラン',
				'displayName' => 'おすすめ',
				'color' => '#38bdf8',
				'textColor' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '満足プラン',
				'displayName' => '満足',
				'color' => '#22c55e',
				'textColor' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '無制限プラン',
				'displayName' => '無制限',
				'color' => '#1E1E1EFF',
				'textColor' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
        ]);
    }
}
