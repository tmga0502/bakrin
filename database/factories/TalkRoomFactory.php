<?php

namespace Database\Factories;

use App\Models\TalkRoom;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<TalkRoom>
 */
class TalkRoomFactory extends Factory
{
	protected $model = TalkRoom::class;
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		$now = Carbon::now();

		return [
			'name' => '',
			'is_group' => false,
			'created_at' => $now,
			'updated_at' => $now,
		];
	}
}
