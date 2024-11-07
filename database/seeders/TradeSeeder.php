<?php

namespace Database\Seeders;

use App\Models\Trade;
use App\Models\User;
use Carbon\Carbon;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('trades')->truncate();

		$faker = Faker::create();

		for($i = 0; $i < 1000; $i++) {
			$status = Arr::random([0, 1, 2, 3]);
			$rejectReason = $status === 3 ? $faker->realText(100,5) : null;
			$date = $faker->dateTimeBetween('-3 month', '-1 day');
			$trade = new Trade( [
				'uuid' => (string) Str::uuid(),
				'status' => $status,
				'reject_reason' => $rejectReason,
				'created_at'=> $date,
				'updated_at'=> $date,
			]);
			$trade->save();
		}
    }
}
